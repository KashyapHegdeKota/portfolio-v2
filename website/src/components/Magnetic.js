"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, useRef } from "react";

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
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  const handlePointerMove = useCallback(
    (event) => {
      const element = ref.current;

      if (
        !element ||
        shouldReduceMotion !== false ||
        !window.matchMedia("(pointer: fine)").matches
      ) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x.set((event.clientX - centerX) * strength);
      y.set((event.clientY - centerY) * strength);
    },
    [shouldReduceMotion, strength, x, y],
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
      whileHover={shouldReduceMotion === false ? { scale } : undefined}
      transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.5 }}
    >
      {children}
    </motion.span>
  );
}
