"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const spring = {
  stiffness: 320,
  damping: 24,
  mass: 0.62,
};

export default function Magnetic({
  children,
  className = "",
  strength = 0.16,
  scale = 1.015,
  cursor = "button",
}) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(finePointer && !reducedMotion);
  }, []);

  const handlePointerMove = useCallback(
    (event) => {
      const element = ref.current;

      if (!element || !enabled) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x.set((event.clientX - centerX) * strength);
      y.set((event.clientY - centerY) * strength);
    },
    [enabled, strength, x, y],
  );

  const handlePointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.span
      ref={ref}
      className={`inline-flex transform-gpu ${className}`}
      data-cursor={cursor}
      data-magnetic="true"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileHover={enabled ? { scale } : undefined}
      transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.5 }}
    >
      {children}
    </motion.span>
  );
}
