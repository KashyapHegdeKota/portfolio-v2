"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const glyphs = "KASHYAPHEGDEKOTA011001<>/{}";
const finalWords = ["Kashyap", "Hegde", "Kota"];

function scrambleWord(word, tick) {
  return word
    .split("")
    .map((letter, index) => {
      if (tick > 14 + index * 2) {
        return letter;
      }

      return glyphs[(tick + index * 5) % glyphs.length];
    })
    .join("");
}

export default function PageLoader() {
  const [tick, setTick] = useState(0);
  const [visible, setVisible] = useState(true);

  const words = useMemo(
    () => finalWords.map((word) => scrambleWord(word, tick)),
    [tick],
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setVisible(false);
      return undefined;
    }

    const ticker = window.setInterval(() => {
      setTick((value) => value + 1);
    }, 46);

    const closer = window.setTimeout(() => {
      setVisible(false);
    }, 2100);

    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(closer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-4%",
            transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="w-full max-w-5xl px-6">
            <motion.p
              className="mb-5 text-xs uppercase text-white/38"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Initializing creative system
            </motion.p>

            <div className="font-display text-[clamp(3.1rem,12vw,10rem)] font-semibold leading-[0.86] text-porcelain">
              {words.map((word, index) => (
                <motion.div
                  key={finalWords[index]}
                  className="overflow-hidden"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 170,
                    damping: 25,
                  }}
                >
                  <span className="block">{word}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-6 right-6 h-px origin-left bg-white/14"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.85, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
