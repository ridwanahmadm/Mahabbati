// Package estimator: variant + guests + add-ons → estimate, mirrored into a prefilled WhatsApp message.
import { gsap, reducedMotion } from "./motion";

type Variant = {
  id: string;
  name: string;
  price: number;
  guests: { min: number; max: number; step: number; included: number };
  extra: { per: number; price: number };
  addons: string[];
};
type Data = {
  name: string;
  multi: boolean;
  waNumber: string;
  variants: Variant[];
  addons: Record<string, { label: string; price: number }>;
  /** Number locale and message templates for the page language ({x} placeholders). */
  locale: string;
  t: { included: string; over: string; extraRow: string; greet: string; guests: string; addons: string; estimate: string; close: string };
};
const fill = (tpl: string, v: Record<string, string | number>) => tpl.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));

const root = document.querySelector<HTMLElement>("[data-estimator]");
const raw = document.getElementById("est-data")?.textContent;

if (root && raw) {
  const data = JSON.parse(raw) as Data;
  const fmt = (n: number) => "Rp" + new Intl.NumberFormat(data.locale).format(Math.round(n));
  const variants = [...root.querySelectorAll<HTMLInputElement>("[data-variant]")];
  const range = root.querySelector<HTMLInputElement>("[data-guests-range]")!;
  const number = root.querySelector<HTMLInputElement>("[data-guests]")!;
  const hint = root.querySelector<HTMLElement>("[data-guests-hint]")!;
  const addons = [...root.querySelectorAll<HTMLInputElement>("[data-addon]")];
  const totalEl = root.querySelector<HTMLElement>("[data-total]")!;
  const breakdown = root.querySelector<HTMLElement>("[data-breakdown]")!;
  const waLinks = [...document.querySelectorAll<HTMLAnchorElement>("[data-wa]")];
  const stickyTotal = document.querySelector<HTMLElement>("[data-sticky-total]");
  const sticky = document.querySelector<HTMLElement>("[data-sticky-est]");
  const panels = [...document.querySelectorAll<HTMLElement>("[data-variant-panel]")];
  const shown = { v: 0 };

  const current = () => data.variants.find((v) => v.id === (variants.find((r) => r.checked)?.value ?? data.variants[0].id))!;

  const clamp = (v: Variant, n: number) => {
    if (Number.isNaN(n)) return v.guests.included;
    const stepped = Math.round(n / v.guests.step) * v.guests.step;
    return Math.min(v.guests.max, Math.max(v.guests.min, stepped));
  };

  const applyVariant = (v: Variant) => {
    for (const el of [range, number]) {
      el.min = String(v.guests.min);
      el.max = String(v.guests.max);
      el.step = String(v.guests.step);
    }
    const g = clamp(v, Number(number.value));
    range.value = number.value = String(g);
    root.querySelectorAll<HTMLElement>("[data-addon-row]").forEach((row) => {
      const ok = (row.dataset.for ?? "").split(" ").includes(v.id);
      row.hidden = !ok;
      if (!ok) row.querySelector<HTMLInputElement>("input")!.checked = false;
    });
    panels.forEach((p) => (p.hidden = p.dataset.variantPanel !== v.id));
  };

  const render = () => {
    const v = current();
    const guests = clamp(v, Number(number.value));
    const over = Math.max(0, guests - v.guests.included);
    const blocks = Math.ceil(over / v.extra.per);
    const extra = blocks * v.extra.price;
    const picked = addons.filter((a) => a.checked && !a.closest("li")?.hidden).map((a) => a.value);
    const addonSum = picked.reduce((s, id) => s + data.addons[id].price, 0);
    const total = v.price + extra + addonSum;

    const t = data.t;
    hint.textContent =
      fill(t.included, { n: v.guests.included }) + (over > 0 ? " " + fill(t.over, { over, per: v.extra.per }) : "");

    const rows: [string, number][] = [[data.multi ? `${data.name}, ${v.name}` : data.name, v.price]];
    if (extra) rows.push([fill(t.extraRow, { over }), extra]);
    picked.forEach((id) => rows.push([data.addons[id].label, data.addons[id].price]));
    breakdown.innerHTML = "";
    for (const [label, value] of rows) {
      const li = document.createElement("li");
      const a = document.createElement("span");
      const b = document.createElement("span");
      a.textContent = label;
      b.textContent = fmt(value);
      b.className = "num";
      li.append(a, b);
      breakdown.append(li);
    }

    if (reducedMotion()) {
      totalEl.textContent = fmt(total);
    } else {
      gsap.to(shown, {
        v: total,
        duration: 0.45,
        ease: "power2.out",
        overwrite: true,
        onUpdate: () => (totalEl.textContent = fmt(shown.v)),
        onComplete: () => (totalEl.textContent = fmt(total)),
      });
    }
    if (stickyTotal) stickyTotal.textContent = fmt(total);

    const msg =
      fill(t.greet, { name: data.multi ? `${data.name} (${v.name})` : data.name }) + "\n" +
      fill(t.guests, { n: guests }) + "\n" +
      (picked.length ? fill(t.addons, { list: picked.map((id) => data.addons[id].label).join(", ") }) + "\n" : "") +
      fill(t.estimate, { total: fmt(total) }) + "\n" + t.close;
    const href = `https://wa.me/${data.waNumber}?text=${encodeURIComponent(msg)}`;
    waLinks.forEach((a) => (a.href = href));
  };

  shown.v = current().price;
  variants.forEach((r) =>
    r.addEventListener("change", () => {
      applyVariant(current());
      render();
    }),
  );
  range.addEventListener("input", () => {
    number.value = range.value;
    render();
  });
  number.addEventListener("input", () => {
    const n = Number(number.value);
    if (!Number.isNaN(n)) range.value = String(clamp(current(), n));
    render();
  });
  number.addEventListener("change", () => {
    number.value = String(clamp(current(), Number(number.value)));
    range.value = number.value;
    render();
  });
  addons.forEach((a) => a.addEventListener("change", render));

  applyVariant(current());
  render();

  // Mobile: a bottom bar keeps the estimate and the WhatsApp action reachable while reading.
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
