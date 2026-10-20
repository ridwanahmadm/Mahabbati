// Horizontal rows: native scroll + snap, drag with a mouse, and buttons as the single-pointer path (WCAG 2.5.7).
document.querySelectorAll<HTMLElement>("[data-row]").forEach((row) => {
  const scope = row.closest("section") ?? document;
  const prev = scope.querySelector<HTMLButtonElement>("[data-row-prev]");
  const next = scope.querySelector<HTMLButtonElement>("[data-row-next]");
  const card = () => (row.querySelector("li")?.getBoundingClientRect().width ?? 280) + 32;

  const sync = () => {
    const max = row.scrollWidth - row.clientWidth - 2;
    if (prev) prev.disabled = row.scrollLeft <= 2;
    if (next) next.disabled = row.scrollLeft >= max;
  };
  const smooth = () => (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");
  prev?.addEventListener("click", () => row.scrollBy({ left: -card(), behavior: smooth() }));
  next?.addEventListener("click", () => row.scrollBy({ left: card(), behavior: smooth() }));
  row.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  sync();

  row.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") row.scrollBy({ left: card(), behavior: smooth() });
    if (e.key === "ArrowLeft") row.scrollBy({ left: -card(), behavior: smooth() });
  });

  // Mouse drag (touch already scrolls natively). The pointer is captured only once
  // the mouse has really moved, so a plain click still reaches the card link.
  let startX = 0;
  let startLeft = 0;
  let pressed = false;
  let moved = false;
  row.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    startX = e.clientX;
    startLeft = row.scrollLeft;
    pressed = true;
    moved = false;
  });
  row.addEventListener("pointermove", (e) => {
    if (!pressed) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 6) {
      moved = true;
      row.setPointerCapture(e.pointerId);
      row.classList.add("is-dragging");
    }
    if (moved) row.scrollLeft = startLeft - dx;
  });
  const end = (e: PointerEvent) => {
    if (!pressed) return;
    pressed = false;
    row.classList.remove("is-dragging");
    if (row.hasPointerCapture(e.pointerId)) row.releasePointerCapture(e.pointerId);
  };
  // Links and images inside the row would otherwise start a native drag and cancel ours.
  row.addEventListener("dragstart", (e) => e.preventDefault());
  row.addEventListener("pointerup", end);
  row.addEventListener("pointercancel", end);
  row.addEventListener("click", (e) => moved && e.preventDefault(), true);
});
