# worldline

*A working map of what reality is, written iteratively.*

A single microsite that introduces one symbol — $w$, for the world — then carves it through a sequence of definitions: the questioner $i$, time $T$, energy $E$, heat $Q$, temperature $\Theta$, entropy $S$. Each new symbol earns its place by what it lets the previous ones do.

Every equation is **hoverable** for a three-section tooltip — *pronunciation · symbols · contextual meaning* — and many are **clickable** into deep dives, sometimes several layers nested, with a breadcrumb that extends as you drill.

## The endeavor

This started as a single question — *give me a map of reality so I can master it* — and opened, predictably, into something neither shallow nor finished.

Each section earns its content by being lived and contemplated in alternation. The map is the contemplative pole; the body, breath, and practice are the operational pole. The two feed each other. Mastery, in this frame, is not a finished map but a **rhythm of contemplate ↔ operate** that tightens both over time.

The name *worldline* is borrowed from physics: the trajectory of $i$ through $w$ over $T$. You are a worldline reading about worldlines.

## Architecture

- **Vite + TypeScript** for the build
- **KaTeX** with auto-render for inline `$x$` and display `$$x$$`
- **A single registry of "topics"** — each topic optionally carries `tex` (a LaTeX equation), `tooltip` (three-section hover content), and `detail` (a deep-dive HTML page)

One markup pattern, at every depth:

```html
$x$                                              <!-- inline math -->
$$x$$                                            <!-- display math -->
<a class="eq-link" data-eq="topic-id">$$x$$</a>  <!-- clickable to deep dive -->
<div data-tt-say="…" data-tt-sym="…" data-tt-ctx="…">$$x$$</div>  <!-- inline tooltip data -->
```

Hash-based routing lets sub-pages reach arbitrary depth, with a breadcrumb that grows as you drill:

```
Map / Boltzmann / What k_B is / k_B T at room temperature
```

## Running locally

```bash
npm install
npm run dev
```

Serves on http://localhost:5174 (or the next free port).

## Status

Iterative. Eight sections, dozens of equations, deep dives nested up to four levels. Each new section earns its content as the work moves outward.
