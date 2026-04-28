"use client";

import { useEffect } from "react";

export default function ImageDownloadGuard() {
  useEffect(() => {
    const onContextMenu = (e) => {
      const el = e.target;
      if (el instanceof Element && el.closest("img")) {
        e.preventDefault();
      }
    };

    const onDragStart = (e) => {
      const el = e.target;
      if (el instanceof Element && el.closest("img")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart, true);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart, true);
    };
  }, []);

  return null;
}
