// Interactive mass-spring chain showing pressure-wave propagation.
// Two sliders control K (stiffness) and rho (density per particle).
// Click anywhere on the chain to send a pulse; watch v = sqrt(K/rho)
// play out in real time.

let currentRaf: number | null = null;

export function initWaveSim(root: HTMLElement): void {
  // If a previous instance is still running (HMR or navigation), kill it.
  if (currentRaf !== null) {
    cancelAnimationFrame(currentRaf);
    currentRaf = null;
  }

  const canvas = root.querySelector("canvas") as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Match canvas internal resolution to displayed size for crispness
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || 600;
  const cssH = canvas.clientHeight || 160;
  canvas.width = cssW * dpr;
  canvas.height = cssH * dpr;
  ctx.scale(dpr, dpr);

  const W = cssW;
  const H = cssH;
  const Y = H / 2;

  // ── Physics ──────────────────────────────────────────────────────
  const N = 32;
  const x = new Float32Array(N);
  const vel = new Float32Array(N);
  const rest = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    rest[i] = i + 1; // rest positions in L-units (1, 2, …, N)
    x[i] = rest[i];
    vel[i] = 0;
  }
  const PX_PER_L = W / (N + 1);

  let K = 50;
  let RHO = 10;
  const TIME_SCALE = 5; // visible speed multiplier
  const SUBSTEPS = 8;

  const step = (dt: number) => {
    for (let i = 1; i < N - 1; i++) {
      const leftStretch = x[i - 1] - x[i] + 1;
      const rightStretch = x[i + 1] - x[i] - 1;
      const F = K * (leftStretch + rightStretch);
      vel[i] += (F / RHO) * dt;
    }
    vel[0] = 0;
    vel[N - 1] = 0;
    for (let i = 0; i < N; i++) {
      x[i] += vel[i] * dt;
      vel[i] *= 0.99995; // very light damping — lets slow waves propagate
    }
  };

  // ── Rendering ────────────────────────────────────────────────────
  // Map physical parameters to visual cues:
  //   – spring thickness grows with K (stiffer springs look more substantial)
  //   – mass radius grows with rho (heavier particles look heavier)
  const springWidthFor = (k: number) => 0.8 + (k / 200) * 2.5; // ~0.9 to ~3.3
  const massRadiusFor = (rho: number) => 3.5 + (rho / 50) * 4.5; // ~3.6 to ~8

  const draw = () => {
    ctx.clearRect(0, 0, W, H);

    // Springs as straight lines (thickness scales with K)
    ctx.strokeStyle = "rgba(138, 130, 117, 0.7)";
    ctx.lineWidth = springWidthFor(K);
    ctx.beginPath();
    for (let i = 0; i < N - 1; i++) {
      ctx.moveTo(x[i] * PX_PER_L, Y);
      ctx.lineTo(x[i + 1] * PX_PER_L, Y);
    }
    ctx.stroke();

    // Masses, sized by density (rho) and coloured by displacement
    const radius = massRadiusFor(RHO);
    for (let i = 0; i < N; i++) {
      const disp = Math.min(1, Math.abs(x[i] - rest[i]) / 0.6);
      const r = Math.round(235 + (217 - 235) * disp);
      const g = Math.round(228 + (122 - 228) * disp);
      const b = Math.round(212 + (74 - 212) * disp);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.beginPath();
      ctx.arc(x[i] * PX_PER_L, Y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // ── Animation loop ───────────────────────────────────────────────
  let lastTime = performance.now();
  const tick = (now: number) => {
    if (!document.body.contains(canvas)) {
      currentRaf = null;
      return;
    }
    const realDt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    const simDt = (realDt * TIME_SCALE) / SUBSTEPS;
    for (let s = 0; s < SUBSTEPS; s++) step(simDt);
    draw();
    currentRaf = requestAnimationFrame(tick);
  };
  currentRaf = requestAnimationFrame(tick);

  // ── Controls ─────────────────────────────────────────────────────
  const kSlider = root.querySelector(".wave-sim__k") as HTMLInputElement | null;
  const rhoSlider = root.querySelector(
    ".wave-sim__rho"
  ) as HTMLInputElement | null;
  const kValueEl = root.querySelector(".wave-sim__k-value");
  const rhoValueEl = root.querySelector(".wave-sim__rho-value");
  const vValueEl = root.querySelector(".wave-sim__v-value");

  const update = () => {
    if (kSlider) K = Number(kSlider.value);
    if (rhoSlider) RHO = Number(rhoSlider.value);
    if (kValueEl) kValueEl.textContent = String(K);
    if (rhoValueEl) rhoValueEl.textContent = String(RHO);
    if (vValueEl) vValueEl.textContent = Math.sqrt(K / RHO).toFixed(2);
  };

  kSlider?.addEventListener("input", update);
  rhoSlider?.addEventListener("input", update);
  update();

  // Pluck = fixed-displacement: shift one mass by a fixed offset and let go.
  // The amplitude of the resulting wave is set by how far we displaced
  // (not by K or rho), so dialling K and rho changes only the speed and
  // frequency of the propagation — not how big the swing is.
  const PLUCK_OFFSET = 0.4; // in L-units (rest spacing = 1)
  const pluck = (idx: number) => {
    x[idx] = rest[idx] + PLUCK_OFFSET;
    vel[idx] = 0;
  };

  // Click on canvas → pluck the nearest mass at click position
  canvas.addEventListener("click", (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    const cx = ((e.clientX - rect.left) / rect.width) * W;
    const idx = Math.max(2, Math.min(N - 3, Math.round(cx / PX_PER_L) - 1));
    pluck(idx);
  });

  // "Reset" button → clear all positions and velocities back to rest
  const resetBtn = root.querySelector(".wave-sim__reset");
  resetBtn?.addEventListener("click", () => {
    for (let i = 0; i < N; i++) {
      x[i] = rest[i];
      vel[i] = 0;
    }
  });
}
