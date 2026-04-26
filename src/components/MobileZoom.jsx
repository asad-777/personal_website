"use client";

import { useEffect } from "react";

export function MobileZoom() {
  useEffect(() => {
    const applyZoom = () => {
      const target = document.querySelector(".zoom-content");
      if (!target) return;

      if (window.innerWidth < 1024) {
        // Using 'zoom' on a specific wrapper is much more stable than body zoom
        // and automatically handles the layout height, preventing extra scroll space.
        target.style.zoom = "80%";
      } else {
        target.style.zoom = "100%";
      }
    };

    applyZoom();
    window.addEventListener("resize", applyZoom);
    return () => window.removeEventListener("resize", applyZoom);
  }, []);

  return null;
}
