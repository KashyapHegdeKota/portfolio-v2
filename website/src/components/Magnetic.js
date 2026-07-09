"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
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
  strength = 0.28,
  rotation = 5,
  scale = 1.035,
  cursor = "button",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);
  const rotateX = useTransform(smoothY, [-30, 30], [rotation, -rotation]);
  const rotateY = useTransform(smoothX, [-30, 30], [-rotation, rotation]);

  const handlePointerMove = useCallback(
    (event) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x.set((event.clientX - centerX) * strength);
      y.set((event.clientY - centerY) * strength);
    },
    [strength, x, y],
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
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.6 }}
    >
      {children}
    </motion.span>
  );
}
