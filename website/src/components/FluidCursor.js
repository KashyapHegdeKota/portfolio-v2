"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const spring = {
  stiffness: 540,
  damping: 34,
  mass: 0.55,
};

const variants = {
  idle: {
    scale: 1,
    opacity: 0.74,
    borderRadius: "999px",
    backgroundColor: "rgba(139, 233, 253, 0.16)",
    borderColor: "rgba(139, 233, 253, 0.42)",
  },
  link: {
    scale: 1.82,
    opacity: 0.9,
    borderRadius: "999px",
    backgroundColor: "rgba(200, 255, 93, 0.2)",
    borderColor: "rgba(200, 255, 93, 0.78)",
  },
  button: {
    scale: 2.24,
    opacity: 0.94,
    borderRadius: "8px",
    backgroundColor: "rgba(255, 107, 53, 0.2)",
    borderColor: "rgba(255, 107, 53, 0.82)",
  },
  launch: {
    scale: 2.55,
    opacity: 0.98,
    borderRadius: "8px",
    backgroundColor: "rgba(34, 197, 94, 0.2)",
    borderColor: "rgba(187, 247, 208, 0.94)",
  },
};

function getCursorMode(target) {
  if (!(target instanceof Element)) {
    return "idle";
  }

  const trigger = target.closest("button, a, [data-cursor]");
  if (!trigger) {
    return "idle";
  }

  const cursorMode = trigger.getAttribute("data-cursor");

  if (cursorMode === "launch") {
    return "launch";
  }

  return trigger.tagName === "BUTTON" || cursorMode === "button" ? "button" : "link";
}

export default function FluidCursor() {
  const [mode, setMode] = useState("idle");
  const [visible, setVisible] = useState(false);
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);
  const rotate = useTransform(x, [-200, 1600], [-16, 16]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return undefined;
    }

    document.documentElement.classList.add("has-fluid-cursor");

    const handleMove = (event) => {
      pointerX.set(event.clientX - 13);
      pointerY.set(event.clientY - 13);
      setVisible(true);
      setMode(getCursorMode(event.target));
    };

    const handleLeave = () => setVisible(false);
    const handleOver = (event) => setMode(getCursorMode(event.target));

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      document.documentElement.classList.remove("has-fluid-cursor");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[200] hidden h-[26px] w-[26px] border md:block"
      animate={mode}
      initial={false}
      style={{
        x,
        y,
        rotate,
        opacity: visible ? undefined : 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
        boxShadow: "0 0 44px rgba(139, 233, 253, 0.18)",
      }}
      transition={{ type: "spring", stiffness: 480, damping: 26, mass: 0.6 }}
      variants={variants}
    />
  );
}
