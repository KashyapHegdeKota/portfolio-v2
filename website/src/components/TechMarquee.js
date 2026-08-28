"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const stack = [
  "Next.js",
  "React",
  "FastAPI",
  "Python",
  "PyTorch",
  "AWS Lambda",
  "Oracle Cloud",
  "DynamoDB",
  "FAISS",
  "Sentence Transformers",
  "Firebase",
  "Tailwind CSS",
  "MLOps",
  "Selenium",
];

function startLoop(controls) {
  controls.start({
    x: "-50%",
    transition: {
      duration: 26,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  });
}

export default function TechMarquee() {
  const controls = useAnimationControls();
  const items = [...stack, ...stack];

  useEffect(() => {
    startLoop(controls);
  }, [controls]);

  return (
    <section
      className="border-y border-white/10 bg-white/[0.025] py-5"
      aria-label="Technology stack"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => startLoop(controls)}
      data-cursor="link"
    >
      <div className="content-grid overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-3"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="inline-flex h-11 items-center border-r border-white/10 px-4 text-sm font-medium text-white/64 last:border-r-0"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
