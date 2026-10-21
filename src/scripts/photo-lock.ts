// Photo privacy demo: request → approved → photo opens for 24 hours.
const root = document.querySelector<HTMLElement>("[data-photo-demo]");

if (root) {
  const btn = root.querySelector<HTMLButtonElement>("[data-photo-request]")!;
  const status = root.querySelector<HTMLElement>("[data-photo-status]")!;
  const badge = root.querySelector<HTMLElement>("[data-photo-badge]")!;
  const wrap = root.querySelector<HTMLElement>("[data-photo-timer-wrap]")!;
  const timerEl = root.querySelector<HTMLElement>("[data-photo-timer]")!;
  const live = root.querySelector<HTMLElement>("[data-photo-live]")!;
  const badgeHtml = badge.innerHTML;

  const T = JSON.parse(root.dataset.i18n ?? "{}") as Record<string, string>;
  const f = (k: string) => T[k] ?? k;
  let state: "locked" | "waiting" | "open" = "locked";
  let tick: number | undefined;

  const fmt = (s: number) =>
    [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) => String(n).padStart(2, "0")).join(":");
  const say = (msg: string) => {
    status.textContent = msg;
    live.textContent = msg;
  };

  btn.addEventListener("click", () => {
    if (state === "locked") {
      state = "waiting";
      btn.disabled = true;
      say(f("sent"));
      window.setTimeout(() => {
        state = "open";
        root.classList.add("is-open");
        badge.textContent = f("approvedBadge");
        say(f("approved"));
        wrap.hidden = false;
        let left = 24 * 3600;
        timerEl.textContent = fmt(left);
        tick = window.setInterval(() => (timerEl.textContent = fmt(--left)), 1000);
        btn.disabled = false;
        btn.textContent = f("lockAgain");
      }, 1100);
    } else if (state === "open") {
      state = "locked";
      if (tick) window.clearInterval(tick);
      root.classList.remove("is-open");
      badge.innerHTML = badgeHtml;
      wrap.hidden = true;
      btn.textContent = f("request");
      say(f("relocked"));
    }
  });
}
