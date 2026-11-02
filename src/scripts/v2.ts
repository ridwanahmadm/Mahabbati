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
