// @ts-check
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * @typedef {"loading" | "counting" | "launch" | "complete"} LoaderStatus
 *
 * @typedef {Object} F1PageLoaderProps
 * @property {() => void} [onComplete]
 * @property {() => void} [onLightsOut]
 */

const LIGHT_COUNT = 5;
const INTRO_DELAY_MS = 100;
const LIGHT_INTERVAL_MS = 190;
const LIGHTS_HOLD_MS = 240;
const LIGHTS_OUT_PAYOFF_MS = 180;
const EXIT_SECONDS = 0.38;

const overlayVariants = {
  loading: { opacity: 1 },
  counting: { opacity: 1 },
  launch: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: EXIT_SECONDS,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const topPanelVariants = {
  exit: {
    y: "-104%",
    transition: {
      duration: EXIT_SECONDS,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const bottomPanelVariants = {
  exit: {
    y: "104%",
    transition: {
      duration: EXIT_SECONDS,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.04,
    },
  },
};

const gantryVariants = {
  loading: { opacity: 0, y: 24, scale: 0.96 },
  counting: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 },
  },
  launch: {
    opacity: 1,
    y: -4,
    scale: 1.01,
    transition: { duration: 0.18, ease: [0.25, 1, 0.5, 1] },
  },
};

const lightVariants = {
  unlit: {
    backgroundColor: "rgba(50, 14, 14, 0.36)",
    borderColor: "rgba(248, 113, 113, 0.18)",
    boxShadow:
      "inset 0 0 24px rgba(0,0,0,0.75), 0 0 12px rgba(127, 29, 29, 0.16)",
    scale: 1,
  },
  lit: {
    backgroundColor: "rgb(220, 38, 38)",
    borderColor: "rgba(254, 202, 202, 0.9)",
    boxShadow:
      "0 0 30px rgba(239,68,68,0.8), 0 0 72px rgba(239,68,68,0.46), inset 0 0 18px rgba(255,255,255,0.28)",
    scale: 1.035,
  },
  out: {
    backgroundColor: "rgba(24, 12, 12, 0.58)",
    borderColor: "rgba(248, 113, 113, 0.12)",
    boxShadow: "inset 0 0 28px rgba(0,0,0,0.88)",
    scale: 0.97,
  },
};

/**
 * @param {F1PageLoaderProps} props
 */
export default function F1PageLoader({
  onComplete,
  onLightsOut,
}) {
  const [status, setStatus] = useState(/** @type {LoaderStatus} */ ("loading"));
  const [activeLights, setActiveLights] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRefs = useRef(/** @type {number[]} */ ([]));
  const finishingRef = useRef(false);

  const clearTimers = useCallback(() => {
    timeoutRefs.current.forEach((timer) => window.clearTimeout(timer));
    timeoutRefs.current = [];
  }, []);

  /**
   * @param {number} duration
   */
  const wait = useCallback(
    (duration) =>
      new Promise((resolve) => {
        const timer = window.setTimeout(resolve, duration);
        timeoutRefs.current.push(timer);
      }),
    [],
  );

  const finishSequence = useCallback(async () => {
    if (finishingRef.current) {
      return;
    }

    finishingRef.current = true;
    clearTimers();
    setStatus("launch");
    setActiveLights(0);
    onLightsOut?.();

    await wait(LIGHTS_OUT_PAYOFF_MS);
    setVisible(false);
  }, [clearTimers, onLightsOut, wait]);

  useEffect(() => {
    let cancelled = false;
    async function runSequence() {
      await wait(INTRO_DELAY_MS);

      if (cancelled) {
        return;
      }

      setStatus("counting");

      for (let light = 1; light <= LIGHT_COUNT; light += 1) {
        await wait(LIGHT_INTERVAL_MS);

        if (cancelled) {
          return;
        }

        setActiveLights(light);
      }

      await wait(LIGHTS_HOLD_MS);

      if (cancelled) {
        return;
      }

      await finishSequence();
    }

    void runSequence();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [
    clearTimers,
    finishSequence,
    wait,
  ]);

  const handleExitComplete = useCallback(() => {
    setStatus("complete");
    onComplete?.();
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-[#0a0a0a]"
          aria-live="polite"
          aria-label="F1 lights-out introduction"
          aria-modal="true"
          role="dialog"
          initial="loading"
          animate={status}
          exit="exit"
          variants={overlayVariants}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-30 inline-flex h-10 items-center rounded-[8px] border border-white/16 bg-black/48 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/78 transition-colors hover:border-cyan/45 hover:text-porcelain focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            onClick={finishSequence}
          >
            Skip intro
          </button>
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#0a0a0a]"
            variants={topPanelVariants}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0a0a0a]"
            variants={bottomPanelVariants}
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(239,68,68,0.16),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.055),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-display text-xs font-semibold uppercase tracking-[0.42em] text-white/38">
                Formation lap complete
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.4rem,8vw,6.5rem)] font-semibold uppercase leading-none text-white">
                Five lights
              </h1>
            </motion.div>

            <motion.div
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.72)] backdrop-blur-glass sm:p-5"
              variants={gantryVariants}
            >
              <div className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-black/60 p-2 sm:gap-4 sm:p-4">
                {Array.from({ length: LIGHT_COUNT }).map((_, index) => {
                  const isLit = activeLights > index;

                  return (
                    <motion.div
                      key={index}
                      className="grid h-[clamp(3rem,11vw,6.2rem)] w-[clamp(3rem,11vw,6.2rem)] place-items-center rounded-full border bg-red-950/30 shadow-inner"
                      animate={status === "launch" ? "out" : isLit ? "lit" : "unlit"}
                      initial="unlit"
                      variants={lightVariants}
                      transition={
                        status === "launch"
                          ? { duration: 0.12, ease: "easeOut" }
                          : {
                              type: "spring",
                              stiffness: 380,
                              damping: 24,
                              mass: 0.55,
                            }
                      }
                      aria-label={`Race start light ${index + 1} ${
                        isLit && status !== "launch" ? "red" : "off"
                      }`}
                    >
                      <span className="h-[70%] w-[70%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.38),transparent_18%),radial-gradient(circle,rgba(255,255,255,0.08),transparent_62%)]" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.p
              className="mt-8 min-h-6 text-center font-display text-sm font-semibold uppercase tracking-[0.34em] text-red-200/70"
              animate={{ opacity: status === "launch" ? 1 : 0.58 }}
              transition={{ duration: 0.18 }}
            >
              {status === "launch"
                ? "Away we go"
                : "Awaiting race control"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
