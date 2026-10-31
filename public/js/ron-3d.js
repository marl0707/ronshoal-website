// Keep the poster visible while offscreen. Importing the runtime also fetches
// Three.js and the model, so the import itself must wait for the section.
export function deferRon3D(doc, Observer, loadRuntime) {
  const entries = [...doc.querySelectorAll("[data-ron-3d]")];
  let requested = false;
  let observer;

  const loadOnce = () => {
    if (requested) return;
    requested = true;
    observer?.disconnect();
    for (const entry of entries) {
      entry.removeEventListener("focusin", loadOnce);
      entry.removeEventListener("pointerenter", loadOnce);
    }
    Promise.resolve().then(loadRuntime).catch(() => {
      // A failed CDN/runtime must leave the existing static image usable.
      for (const entry of entries) {
        entry.classList.add("is-static");
        entry.dataset.ron3dStatus = "fallback";
      }
    });
  };

  for (const entry of entries) {
    entry.dataset.ron3dStatus = "deferred";
    entry.addEventListener("focusin", loadOnce, { once: true });
    entry.addEventListener("pointerenter", loadOnce, { once: true });
  }
  if (entries.length) {
    if (typeof Observer === "function") {
      try {
        observer = new Observer((records) => {
          if (records.some((record) => record.isIntersecting)) loadOnce();
        }, { rootMargin: "300px" });
        for (const entry of entries) {
          if (!requested) observer.observe(entry);
        }
      } catch {
        loadOnce();
      }
    } else {
      loadOnce();
    }
  }
  return { get requested() { return requested; } };
}

if (typeof document !== "undefined") {
  deferRon3D(document, window.IntersectionObserver,
    () => import("./ron-3d-runtime.js"));
}
