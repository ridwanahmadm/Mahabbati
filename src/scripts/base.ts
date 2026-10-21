// Runs on every page: header state, mobile menu, scroll reveals, contextual cursor label, smoothing.
import { gsap, initSmoothScroll, reducedMotion, finePointer } from "./motion";

initSmoothScroll();

/* Header gets a hairline once the page scrolls. */
const header = document.querySelector<HTMLElement>("[data-header]");
const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Mobile menu: disclosure pattern, Escape closes and returns focus. */
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const panel = document.getElementById("mobile-nav");
const setMenu = (open: boolean) => {
  if (!toggle || !panel) return;
  toggle.setAttribute("aria-expanded", String(open));
  panel.hidden = !open;
  if (open) panel.querySelector<HTMLAnchorElement>("a")?.focus();
};
toggle?.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia("(min-width: 1201px)").addEventListener("change", (e) => e.matches && setMenu(false));

/* Language menu: disclosure button with a short list; closes on Escape, outside click, or focus leaving. */
const langMenu = document.querySelector<HTMLElement>("[data-lang-menu]");
const langBtn = langMenu?.querySelector<HTMLButtonElement>("[data-lang-toggle]");
const langList = langMenu?.querySelector<HTMLElement>("[data-lang-list]");
const setLang = (open: boolean) => {
  if (!langBtn || !langList) return;
  langBtn.setAttribute("aria-expanded", String(open));
  langList.hidden = !open;
};
langBtn?.addEventListener("click", () => {
  const open = langBtn.getAttribute("aria-expanded") !== "true";
  setLang(open);
  if (open) (langList?.querySelector<HTMLAnchorElement>('[aria-current="true"]') ?? langList?.querySelector("a"))?.focus();
});
document.addEventListener("click", (e) => {
  if (langMenu && !langMenu.contains(e.target as Node)) setLang(false);
});
langMenu?.addEventListener("focusout", (e) => {
  if (!langMenu.contains(e.relatedTarget as Node | null)) setLang(false);
});
langMenu?.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && langBtn?.getAttribute("aria-expanded") === "true") {
    setLang(false);
    langBtn.focus();
  }
});

/* Reveal once, when the element's top passes ~88% of the viewport.
   Chrome's IntersectionObserver honours the target's own clip-path, so masked reveals
   are observed through their parent. */
const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
if (reducedMotion() || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-in"));
} else {
  const owners = new Map<Element, HTMLElement[]>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        owners.get(entry.target)?.forEach((el) => el.classList.add("is-in"));
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0 },
  );
  revealEls.forEach((el) => {
    const watch = el.dataset.reveal === "mask" ? (el.parentElement ?? el) : el;
    owners.set(watch, [...(owners.get(watch) ?? []), el]);
    io.observe(watch);
  });
}

/* Contextual cursor label: an addition to the system cursor, never a replacement.
   Only on precise pointers with motion allowed; regions opt in with data-cursor="Label". */
const label = document.querySelector<HTMLElement>("[data-cursor-label]");
if (label && finePointer() && !reducedMotion()) {
  const xTo = gsap.quickTo(label, "x", { duration: 0.45, ease: "power3" });
  const yTo = gsap.quickTo(label, "y", { duration: 0.45, ease: "power3" });
  let active: HTMLElement | null = null;
  window.addEventListener(
    "pointermove",
    (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]") ?? null;
      const overControl = (e.target as HTMLElement | null)?.closest("button, a, input, label, summary");
      const next = overControl ? null : target;
      if (next !== active) {
        active = next;
        if (next) label.textContent = next.dataset.cursor ?? "";
        label.classList.toggle("is-on", !!next);
      }
    },
    { passive: true },
  );
  document.addEventListener("pointerleave", () => {
    active = null;
    label.classList.remove("is-on");
  });
}
