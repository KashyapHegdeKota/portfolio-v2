"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const spring = {
  stiffness: 540,
  damping: 34,
  mass: 0.55,
};

const variants = {
  idle: {
    scale: 0.72,
    opacity: 0.62,
    borderRadius: "999px",
    backgroundColor: "rgba(139, 233, 253, 0.08)",
    borderColor: "rgba(139, 233, 253, 0.58)",
  },
  link: {
    scale: 1.08,
    opacity: 0.82,
    borderRadius: "999px",
    backgroundColor: "rgba(200, 255, 93, 0.1)",
    borderColor: "rgba(200, 255, 93, 0.72)",
  },
  button: {
    scale: 1.28,
    opacity: 0.88,
    borderRadius: "999px",
    backgroundColor: "rgba(139, 233, 253, 0.12)",
    borderColor: "rgba(139, 233, 253, 0.8)",
  },
  launch: {
    scale: 1.28,
    opacity: 0.88,
    borderRadius: "999px",
    backgroundColor: "rgba(139, 233, 253, 0.12)",
    borderColor: "rgba(139, 233, 253, 0.8)",
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

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return undefined;
    }

    document.documentElement.classList.add("has-fluid-cursor");

    const handleMove = (event) => {
      pointerX.set(event.clientX - 9);
      pointerY.set(event.clientY - 9);
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
      className="fixed left-0 top-0 z-[200] hidden h-[18px] w-[18px] border md:block"
      animate={mode}
      initial={false}
      style={{
        x,
        y,
        opacity: visible ? undefined : 0,
        pointerEvents: "none",
      }}
      transition={{ type: "spring", stiffness: 520, damping: 36, mass: 0.5 }}
      variants={variants}
    />
  );
}
