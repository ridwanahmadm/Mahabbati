// Tier picker: the chosen tier sets the price, the "what's included" panel and a prefilled WhatsApp message.
import { gsap, reducedMotion } from "./motion";

type Variant = { id: string; name: string; price: number; food: string };
type Data = {
  name: string;
  waNumber: string;
  variants: Variant[];
  /** Number locale and message templates for the page language ({x} placeholders). */
  locale: string;
  t: { greet: string; food: string; price: string; close: string };
};
const fill = (tpl: string, v: Record<string, string | number>) => tpl.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));

const root = document.querySelector<HTMLElement>("[data-estimator]");
const raw = document.getElementById("est-data")?.textContent;

if (root && raw) {
  const data = JSON.parse(raw) as Data;
  const fmt = (n: number) => "Rp" + new Intl.NumberFormat(data.locale).format(Math.round(n));
  const radios = [...root.querySelectorAll<HTMLInputElement>("[data-variant]")];
  const totalEl = root.querySelector<HTMLElement>("[data-total]")!;
  const tierEl = root.querySelector<HTMLElement>("[data-tier]");
  const waLinks = [...document.querySelectorAll<HTMLAnchorElement>("[data-wa]")];
  const stickyTotal = document.querySelector<HTMLElement>("[data-sticky-total]");
  const sticky = document.querySelector<HTMLElement>("[data-sticky-est]");
  const panels = [...document.querySelectorAll<HTMLElement>("[data-variant-panel]")];
  const shown = { v: 0 };

  const current = () => data.variants.find((v) => v.id === (radios.find((r) => r.checked)?.value ?? data.variants[0].id))!;

  const render = () => {
    const v = current();
    panels.forEach((p) => (p.hidden = p.dataset.variantPanel !== v.id));
    if (tierEl) tierEl.textContent = `${data.name}, ${v.name}`;

    if (reducedMotion()) {
      totalEl.textContent = fmt(v.price);
    } else {
      gsap.to(shown, {
        v: v.price,
        duration: 0.45,
        ease: "power2.out",
        overwrite: true,
        onUpdate: () => (totalEl.textContent = fmt(shown.v)),
        onComplete: () => (totalEl.textContent = fmt(v.price)),
      });
    }
    if (stickyTotal) stickyTotal.textContent = fmt(v.price);

    const msg = [
      fill(data.t.greet, { name: `${data.name} (${v.name})` }),
      v.food,
      fill(data.t.price, { total: fmt(v.price) }),
      data.t.close,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `https://wa.me/${data.waNumber}?text=${encodeURIComponent(msg)}`;
    waLinks.forEach((a) => (a.href = href));
  };

  shown.v = current().price;
  radios.forEach((r) => r.addEventListener("change", render));
  render();

  // Mobile: a bottom bar keeps the price and the WhatsApp action reachable while reading.
  if (sticky && "IntersectionObserver" in window) {
    let estimatorVisible = false;
    let pastHero = false;
    let atFooter = false;
    const sync = () => (sticky.hidden = estimatorVisible || atFooter || !pastHero);
    const footer = document.querySelector(".site-footer");
    if (footer)
      new IntersectionObserver(([e]) => {
        atFooter = e.isIntersecting;
        sync();
      }).observe(footer);
    new IntersectionObserver(([e]) => {
      estimatorVisible = e.isIntersecting;
      sync();
    }).observe(root);
    const hero = document.querySelector(".pd-hero");
    if (hero)
      new IntersectionObserver(([e]) => {
        pastHero = !e.isIntersecting;
        sync();
      }).observe(hero);
  }
}
