const surfaces = document.querySelectorAll("[data-art-surface]");

for (const surface of surfaces) {
  surface.addEventListener("pointermove", (event) => {
    const rect = surface.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    surface.style.setProperty("--mx", x.toFixed(3));
    surface.style.setProperty("--my", y.toFixed(3));
  });

  surface.addEventListener("pointerleave", () => {
    surface.style.setProperty("--mx", "0");
    surface.style.setProperty("--my", "0");
  });
}

for (const block of document.querySelectorAll(".art-block, .color-block")) {
  block.addEventListener("click", () => {
    block.classList.toggle("is-active");
  });
}
