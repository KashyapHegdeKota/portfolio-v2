// src/components/AnimatedSection.js
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMotionReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const canAnimate = motionReady && shouldReduceMotion === false;

  return (
    <motion.div
      initial={canAnimate ? "hidden" : "visible"}
      whileInView={canAnimate ? "visible" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay: Math.min(delay, 0.12) }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
