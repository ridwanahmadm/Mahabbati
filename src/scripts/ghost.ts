// Anti-ghosting simulation: send a request, move time forward, watch the quota come back on day 7.
import { gsap, reducedMotion } from "./motion";

const root = document.querySelector<HTMLElement>("[data-ghost]");

if (root) {
  const $ = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const quotaEl = $<HTMLElement>("[data-quota]");
  const req = $<HTMLElement>("[data-req]");
  const status = $<HTMLElement>("[data-status]");
  const range = $<HTMLInputElement>("[data-range]");
  const dayOut = $<HTMLOutputElement>("[data-day]");
  const days = [...root.querySelectorAll<HTMLLIElement>("[data-days] li")];
  const send = $<HTMLButtonElement>("[data-send]");
  const play = $<HTMLButtonElement>("[data-play]");
  const reset = $<HTMLButtonElement>("[data-reset]");
  const coin = $<SVGElement>("[data-coin]");
  const live = $<HTMLElement>("[data-live]");
  const still = reducedMotion();

  // Copy comes from the page (data-i18n), so the same demo runs in both languages.
  const T = JSON.parse(root.dataset.i18n ?? "{}") as Record<string, string>;
  const f = (k: string, v: Record<string, number> = {}) => (T[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => String(v[x] ?? ""));
  const START = 10;
  let quota = START;
  let refunded = false;
  let timer: number | undefined;

  const showQuota = (to: number) => {
    if (still) {
      quotaEl.textContent = String(to);
      return;
    }
    const n = { v: Number(quotaEl.textContent) };
    gsap.to(n, {
      v: to,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => (quotaEl.textContent = String(Math.round(n.v))),
    });
  };
  const announce = (msg: string) => {
    live.textContent = "";
    requestAnimationFrame(() => (live.textContent = msg));
  };

  const setDay = (d: number) => {
    range.value = String(d);
    dayOut.textContent = f("day", { d });
    range.setAttribute("aria-valuetext", f("day", { d }));
    days.forEach((li, i) => li.classList.toggle("is-past", i < d));

    if (d >= 7 && !refunded) {
      refunded = true;
      stop();
      req.dataset.state = "cancelled";
      status.textContent = f("cancelled");
      range.disabled = true;
      play.disabled = true;
      reset.hidden = false;
      flyCoin();
      quota += 1;
      showQuota(quota);
      announce(f("day7", { q: quota }));
    } else if (d > 0 && !refunded) {
      status.textContent = f("waitingN", { d });
    } else if (!refunded) {
      status.textContent = f("waiting");
    }
  };

  const flyCoin = () => {
    if (still) return;
    const from = req.getBoundingClientRect();
    const to = quotaEl.getBoundingClientRect();
    const box = coin.getBoundingClientRect();
    const dx = from.left + from.width - 60 - box.left;
    const dy = from.top + from.height / 2 - box.top;
    gsap.fromTo(
      coin,
      { x: dx, y: dy, opacity: 0, scale: 0.6 },
      {
        keyframes: [
          { opacity: 1, scale: 1.1, duration: 0.25, ease: "power2.out" },
          { x: to.left - box.left - 8, y: to.top - box.top - 4, duration: 0.7, ease: "power3.inOut" },
          { opacity: 0, scale: 0.4, duration: 0.25, ease: "power2.in" },
        ],
      },
    );
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = undefined;
    play.querySelector("span.label")?.remove();
  };

  send.addEventListener("click", () => {
    if (quota <= 0) return;
    quota -= 1;
    showQuota(quota);
    req.dataset.state = "waiting";
    send.disabled = true;
    range.disabled = false;
    play.disabled = false;
    setDay(0);
    announce(f("sent", { q: quota }));
    range.focus();
  });

  range.addEventListener("input", () => setDay(Number(range.value)));

  play.addEventListener("click", () => {
    if (timer) return;
    let d = Number(range.value);
    timer = window.setInterval(() => {
      d += 1;
      setDay(Math.min(d, 7));
      if (d >= 7) stop();
    }, still ? 80 : 420);
  });

  reset.addEventListener("click", () => {
    stop();
    quota = START;
    refunded = false;
    quotaEl.textContent = String(START);
    req.dataset.state = "idle";
    status.textContent = f("idle");
    send.disabled = false;
    range.disabled = true;
    play.disabled = true;
    reset.hidden = true;
    setDay(0);
    status.textContent = f("idle");
    announce(f("reset"));
    send.focus();
  });
}
