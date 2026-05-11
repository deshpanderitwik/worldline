import "katex/dist/katex.min.css";
import katex from "katex";
import renderMathInElement from "katex/contrib/auto-render";
import "./style.css";
import { homeHTML } from "./home.ts";
import { equations, type Equation } from "./equations.ts";

const app = document.getElementById("app")!;

// Track scroll position on the map so we can restore it when the reader
// returns from a detail page.
let homeScrollY = 0;
let lastRouteWasHome = false;

const renderTex = (el: HTMLElement, tex: string, displayMode: boolean) => {
  katex.render(tex, el, { displayMode, throwOnError: false });
};

const renderProse = (container: HTMLElement) => {
  renderMathInElement(container, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
  });
};

// ── Hover tooltip for equations ──────────────────────────────────────
let tooltipEl: HTMLDivElement | null = null;

const ensureTooltip = (): HTMLDivElement => {
  if (tooltipEl) return tooltipEl;
  tooltipEl = document.createElement("div");
  tooltipEl.className = "math-tooltip";
  tooltipEl.setAttribute("role", "tooltip");
  document.body.appendChild(tooltipEl);
  return tooltipEl;
};

const positionTooltip = (e: MouseEvent) => {
  if (!tooltipEl) return;
  const margin = 14;
  const rect = tooltipEl.getBoundingClientRect();
  let left = e.clientX + margin;
  let top = e.clientY + margin;
  if (left + rect.width > window.innerWidth - 8) {
    left = e.clientX - rect.width - margin;
  }
  if (top + rect.height > window.innerHeight - 8) {
    top = e.clientY - rect.height - margin;
  }
  tooltipEl.style.left = `${Math.max(8, left)}px`;
  tooltipEl.style.top = `${Math.max(8, top)}px`;
};

const showTooltip = (eq: Equation, e: MouseEvent) => {
  if (!eq.tooltip) return;
  const tt = ensureTooltip();
  tt.innerHTML = `
    <div class="math-tooltip__section">
      <div class="math-tooltip__label">Read aloud</div>
      <div class="math-tooltip__pronunciation">&ldquo;${eq.tooltip.pronunciation}&rdquo;</div>
    </div>
    <div class="math-tooltip__section">
      <div class="math-tooltip__label">Symbols</div>
      <div>${eq.tooltip.symbols}</div>
    </div>
    <div class="math-tooltip__section">
      <div class="math-tooltip__label">In context</div>
      <div>${eq.tooltip.context}</div>
    </div>
  `;
  renderProse(tt);
  tt.classList.add("math-tooltip--visible");
  positionTooltip(e);
};

const hideTooltip = () => {
  if (!tooltipEl) return;
  tooltipEl.classList.remove("math-tooltip--visible");
};

const attachTooltip = (trigger: HTMLElement, eq: Equation) => {
  if (!eq.tooltip) return;
  trigger.classList.add("math-tooltipped");
  trigger.addEventListener("mouseenter", (e) => showTooltip(eq, e));
  trigger.addEventListener("mousemove", positionTooltip);
  trigger.addEventListener("mouseleave", hideTooltip);
};

// After KaTeX renders inline math, a trailing punctuation mark (period,
// comma, etc.) lives as a separate text node and can wrap orphaned to the
// next line. Walk every inline `.katex` and glue any leading punctuation in
// its next text-node sibling into a single `nowrap` span so they wrap as one.
const gluePunctuationToMath = (container: HTMLElement) => {
  container.querySelectorAll<HTMLElement>(".katex").forEach((katex) => {
    // Skip display math — block-level anyway, doesn't have this issue
    if (katex.parentElement?.classList.contains("katex-display")) return;

    const next = katex.nextSibling;
    if (!next || next.nodeType !== Node.TEXT_NODE) return;
    const text = next.textContent ?? "";
    const m = text.match(/^([.,;:!?)\]}]+)([\s\S]*)$/);
    if (!m) return;
    const [, punct, rest] = m;

    const wrapper = document.createElement("span");
    wrapper.className = "nowrap";
    katex.parentNode!.insertBefore(wrapper, katex);
    wrapper.appendChild(katex);
    wrapper.appendChild(document.createTextNode(punct));
    next.textContent = rest;
  });
};

// Scan a container for two kinds of opt-in tooltips:
//   1. `data-tip="topic-id"` — registry lookup
//   2. `data-tt-say` / `data-tt-sym` / `data-tt-ctx` — inline tooltip data,
//      no registry entry needed. Useful for one-off equations inside
//      sub-pages that don't deserve their own registry entry.
const attachInlineTooltips = (container: HTMLElement) => {
  container.querySelectorAll<HTMLElement>("[data-tip]").forEach((el) => {
    const tipId = el.getAttribute("data-tip");
    if (!tipId) return;
    const eq = equations[tipId];
    if (!eq) return;
    attachTooltip(el, eq);
  });

  container.querySelectorAll<HTMLElement>("[data-tt-say]").forEach((el) => {
    if (el.classList.contains("math-tooltipped")) return;
    const pronunciation = el.getAttribute("data-tt-say") ?? "";
    const symbols = el.getAttribute("data-tt-sym") ?? "";
    const context = el.getAttribute("data-tt-ctx") ?? "";
    if (!pronunciation) return;
    const syntheticEq: Equation = {
      id: `_inline_${el.tagName.toLowerCase()}`,
      tooltip: { pronunciation, symbols, context },
    };
    attachTooltip(el, syntheticEq);
  });
};

// For each `<a class="eq-link" data-eq="topic-id">`, attach the registered
// topic's tooltip on the anchor itself. Same id drives both click navigation
// and hover tooltip.
const attachEqLinkTooltips = (container: HTMLElement) => {
  container.querySelectorAll<HTMLElement>(".eq-link[data-eq]").forEach((link) => {
    if (link.classList.contains("math-tooltipped")) return;
    const targetId = link.getAttribute("data-eq");
    if (!targetId) return;
    const eq = equations[targetId];
    if (!eq) return;
    attachTooltip(link, eq);
  });
};

// Build a reverse-map: normalized LaTeX → topic. This lets us auto-attach
// tooltips to any rendered math (display or inline) whose source matches a
// registered equation, no matter how deep in the page it lives.
const normalizeTex = (s: string): string =>
  s
    .replace(/\\[,;:!]/g, "") // strip \, \; \: \! spacing macros
    .replace(/\\q?quad\b/g, "") // strip \quad and \qquad
    .replace(/\s+/g, ""); // strip remaining whitespace

const tooltipsByTex: Record<string, Equation> = {};
for (const eq of Object.values(equations)) {
  if (eq.tex && eq.tooltip) {
    tooltipsByTex[normalizeTex(eq.tex)] = eq;
  }
}

// After KaTeX has rendered, walk every `.katex` element. Each carries its
// source LaTeX inside a MathML annotation (KaTeX's `htmlAndMathml` output).
// Match the source against the registry; if a tooltip exists, attach it.
// Skip elements already inside an explicit tooltip wrapper.
const attachAutoTooltips = (container: HTMLElement) => {
  container.querySelectorAll<HTMLElement>(".katex").forEach((katexEl) => {
    const trigger =
      (katexEl.closest(".katex-display") as HTMLElement | null) ?? katexEl;
    if (trigger.closest("[data-tip], .eq-link, .math-tooltipped")) return;
    const annotation = katexEl.querySelector(
      'annotation[encoding="application/x-tex"]'
    );
    if (!annotation) return;
    const tex = annotation.textContent ?? "";
    const eq = tooltipsByTex[normalizeTex(tex)];
    if (!eq) return;
    attachTooltip(trigger, eq);
  });
};

const renderHome = () => {
  app.innerHTML = homeHTML;

  // Auto-render all $...$ and $$...$$ math in the home prose
  renderProse(app);

  // Keep trailing punctuation glued to inline math so it never wraps alone
  gluePunctuationToMath(app);

  // Wire all <a data-eq="…"> anchors (eq-links + eq-refs) to their hash routes
  app.querySelectorAll<HTMLAnchorElement>("a[data-eq]").forEach((ref) => {
    const targetId = ref.getAttribute("data-eq");
    if (!targetId) return;
    ref.href = `#/eq/${targetId}`;
  });

  // Tooltips: layered, all opt-in. Order matters only insofar as later
  // calls skip elements already tooltipped.
  attachEqLinkTooltips(app); // eq-link wrappers (registry-driven)
  attachInlineTooltips(app); // data-tip / data-tt-* inline data
  attachAutoTooltips(app); // unwrapped math matching the registry

  window.scrollTo({ top: homeScrollY, behavior: "instant" as ScrollBehavior });
};

const renderDetail = (path: string[]) => {
  const id = path[path.length - 1];
  const eq = equations[id];
  if (!eq || !eq.detail) {
    location.hash = "";
    return;
  }

  const crumbs: { label: string; href: string | null }[] = [
    { label: "Map", href: "#/" },
    ...path.map((segId, idx) => {
      const segEq = equations[segId];
      const label = segEq?.detail?.title ?? segId;
      const isCurrent = idx === path.length - 1;
      const href = isCurrent
        ? null
        : `#/eq/${path.slice(0, idx + 1).join("/")}`;
      return { label, href };
    }),
  ];

  const breadcrumbHTML = crumbs
    .map((c) =>
      c.href
        ? `<a class="breadcrumb-link" href="${c.href}">${c.label}</a>`
        : `<span class="breadcrumb-current">${c.label}</span>`
    )
    .join('<span class="breadcrumb-sep">/</span>');

  let parentHref = "#/";
  let parentLabel = "the map";
  if (path.length > 1) {
    parentHref = `#/eq/${path.slice(0, -1).join("/")}`;
    const parentId = path[path.length - 2];
    parentLabel = equations[parentId]?.detail?.title ?? parentId;
  }

  app.innerHTML = `
    <nav class="breadcrumb">${breadcrumbHTML}</nav>
    <article class="detail">
      ${eq.tex ? `<div class="detail-eq" id="detail-eq"></div>` : ""}
      <h1 class="detail-title">${eq.detail.title}</h1>
      <div class="detail-body">${eq.detail.html}</div>
      <a class="back-link back-link--bottom" href="${parentHref}">&larr; back to ${parentLabel}</a>
    </article>
  `;

  // Hero equation only for topics that have one
  if (eq.tex) {
    const eqEl = document.getElementById("detail-eq")!;
    renderTex(eqEl, eq.tex, true);
    attachTooltip(eqEl, eq);
  }

  // Auto-render inline math everywhere in the detail (including the title,
  // which can contain $...$ — e.g. "The size of $W$")
  const article = document.querySelector(".detail") as HTMLElement;
  renderProse(article);

  // Keep trailing punctuation glued to inline math so it never wraps alone
  gluePunctuationToMath(article);

  // Rewrite inline cross-references so they extend the current breadcrumb path
  const body = document.querySelector(".detail-body") as HTMLElement;
  body.querySelectorAll<HTMLAnchorElement>("a[data-eq]").forEach((ref) => {
    const targetId = ref.getAttribute("data-eq");
    if (!targetId) return;
    ref.href = `#/eq/${[...path, targetId].join("/")}`;
  });

  // Tooltips: same layering as the home page — eq-link wrappers,
  // explicit inline data, then auto-match for the rest.
  attachEqLinkTooltips(article);
  attachInlineTooltips(article);
  attachAutoTooltips(article);

  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
};

const route = () => {
  // The trigger element is about to be destroyed by the upcoming render,
  // so its mouseleave will never fire — dismiss the tooltip explicitly.
  hideTooltip();

  const hash = location.hash;
  const match = hash.match(/^#\/eq\/(.+)$/);
  const path = match ? match[1].split("/").filter(Boolean) : [];
  const goingToDetail = path.length > 0;

  // Capture the map's scroll position before leaving it for a detail page,
  // so we can restore it on return.
  if (lastRouteWasHome && goingToDetail) {
    homeScrollY = window.scrollY;
  }

  if (goingToDetail) {
    renderDetail(path);
    lastRouteWasHome = false;
  } else {
    renderHome();
    lastRouteWasHome = true;
  }
};

window.addEventListener("hashchange", route);
route();
