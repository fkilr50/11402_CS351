const surfaces = document.querySelectorAll("[data-art-surface]");

for (const surface of surfaces) {
  const movingObjects = surface.querySelectorAll("[data-depth]");

  surface.addEventListener("pointermove", (event) => {
    const rect = surface.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    for (const object of movingObjects) {
      const depth = Number(object.dataset.depth || 0);
      object.style.setProperty("--shift-x", `${(x * depth).toFixed(2)}px`);
      object.style.setProperty("--shift-y", `${(y * depth).toFixed(2)}px`);
    }
  });

  surface.addEventListener("pointerleave", () => {
    for (const object of movingObjects) {
      object.style.setProperty("--shift-x", "0px");
      object.style.setProperty("--shift-y", "0px");
    }
  });
}

for (const object of document.querySelectorAll(".color-block, .object-art")) {
  object.addEventListener("click", () => {
    object.classList.toggle("is-active");
  });
}
