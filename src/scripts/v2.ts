// Runs on every /v2/ page: header hairline, mobile menu, the photo rail's buttons.

const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 4);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Mobile menu: disclosure pattern; Escape closes and returns focus. */
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const panel = document.getElementById("v2-mobile-nav");
const setMenu = (open: boolean) => {
  if (!toggle || !panel) return;
  toggle.setAttribute("aria-expanded", String(open));
  panel.hidden = !open;
};
toggle?.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
panel?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) setMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia("(min-width: 64.0625rem)").addEventListener("change", (e) => e.matches && setMenu(false));

/* Photo rail: buttons step one photo; they disable at either end. */
document.querySelectorAll<HTMLElement>("[data-rail]").forEach((rail) => {
  const scope = rail.closest("section") ?? document;
  const prev = scope.querySelector<HTMLButtonElement>("[data-rail-prev]");
  const next = scope.querySelector<HTMLButtonElement>("[data-rail-next]");
  const step = () => (rail.querySelector("li")?.getBoundingClientRect().width ?? 320) + 16;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sync = () => {
    if (prev) prev.disabled = rail.scrollLeft <= 2;
    if (next) next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
  };
  prev?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: reduce ? "auto" : "smooth" }));
  next?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: reduce ? "auto" : "smooth" }));
  rail.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  sync();
});

/* Package carousel: native scroll-snap does the moving; this adds depth, the name tabs, arrows and keys. */
document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((root) => {
  const track = root.querySelector<HTMLElement>("[data-carousel-track]")!;
  const slides = [...root.querySelectorAll<HTMLElement>("[data-slide]")];
  const tabs = [...root.querySelectorAll<HTMLButtonElement>("[data-carousel-tab]")];
  const prev = root.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let active = -1;
  let frame = 0;

  const centreOf = (el: HTMLElement) => el.offsetLeft + el.offsetWidth / 2;
  const goTo = (i: number, instant = false) => {
    const s = slides[Math.max(0, Math.min(slides.length - 1, i))];
    track.scrollTo({ left: centreOf(s) - track.clientWidth / 2, behavior: instant || reduce.matches ? "auto" : "smooth" });
  };

  const update = () => {
    frame = 0;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((s, i) => {
      const dist = Math.abs(centreOf(s) - mid);
      if (dist < bestDist) [best, bestDist] = [i, dist];
      s.style.setProperty("--d", Math.min(1, dist / (s.offsetWidth || 1)).toFixed(3));
    });
    if (best !== active) {
      active = best;
      slides.forEach((s, i) => s.toggleAttribute("data-active", i === best));
      tabs.forEach((t, i) => (i === best ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current")));
      if (prev) prev.disabled = best === 0;
      if (next) next.disabled = best === slides.length - 1;
    }
  };
  const schedule = () => (frame ||= requestAnimationFrame(update));

  root.classList.add("is-live");
  track.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", () => {
    goTo(active, true);
    schedule();
  });
  prev?.addEventListener("click", () => goTo(active - 1));
  next?.addEventListener("click", () => goTo(active + 1));
  tabs.forEach((t, i) => t.addEventListener("click", () => goTo(i)));
  track.addEventListener("keydown", (e) => {
    if (e.target !== track || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) return;
    e.preventDefault();
    goTo(active + (e.key === "ArrowRight" ? 1 : -1));
  });
  slides.forEach((s, i) => {
    // A side card first comes to the centre; the second click (or the centred card) opens the package.
    s.addEventListener("click", (e) => {
      if (i === active) return;
      e.preventDefault();
      goTo(i);
    });
    s.addEventListener("focusin", () => i !== active && goTo(i));
  });

  goTo(Number(root.dataset.start ?? 0), true);
  update();
});
