"use client";

import { ReactLenis } from 'lenis/react';

export function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
