// @ts-check
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * @typedef {"loading" | "counting" | "lights-out" | "complete"} LoaderStatus
 *
 * @typedef {Object} F1PageLoaderProps
 * @property {() => void} [onComplete]
 * @property {() => void} [onLightsOut]
 * @property {string} [audioSrc] Place your supplied "5 lights out and away we go" audio in /public and pass the public path here.
 * @property {boolean} [soundEnabled]
 * @property {number} [lightIntervalMs] Interval between each red light, kept between 500ms and 1000ms.
 * @property {[number, number]} [randomPauseRangeMs] Randomized delay after all five lights are lit.
 */

const LIGHT_COUNT = 5;
const DEFAULT_AUDIO_SRC = "/audio/f1-lights-out-and-away-we-go.mp3";
const DEFAULT_PAUSE_RANGE_MS = [800, 2500];

const overlayVariants = {
  loading: { opacity: 1 },
  counting: { opacity: 1 },
  "lights-out": { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.64, ease: [0.76, 0, 0.24, 1] },
  },
};

const topPanelVariants = {
  exit: {
    y: "-104%",
    transition: { duration: 0.78, ease: [0.76, 0, 0.24, 1] },
  },
};

const bottomPanelVariants = {
  exit: {
    y: "104%",
    transition: { duration: 0.78, ease: [0.76, 0, 0.24, 1], delay: 0.04 },
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
  "lights-out": {
    opacity: 0,
    y: -26,
    scale: 1.06,
    transition: { duration: 0.18, ease: "easeOut" },
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
};

/**
 * @param {number} min
 * @param {number} max
 */
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} value
 */
function clampLightInterval(value) {
  return Math.min(1000, Math.max(500, value));
}

/**
 * @param {F1PageLoaderProps} props
 */
export default function F1PageLoader({
  onComplete,
  onLightsOut,
  audioSrc = DEFAULT_AUDIO_SRC,
  soundEnabled = true,
  lightIntervalMs = 700,
  randomPauseRangeMs = DEFAULT_PAUSE_RANGE_MS,
}) {
  const [status, setStatus] = useState(/** @type {LoaderStatus} */ ("loading"));
  const [activeLights, setActiveLights] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRefs = useRef(/** @type {number[]} */ ([]));
  const audioRef = useRef(/** @type {HTMLAudioElement | null} */ (null));
  const audioContextRef = useRef(/** @type {AudioContext | null} */ (null));

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

  const playCountdownBeep = useCallback(() => {
    if (!soundEnabled) {
      return;
    }

    try {
      const AudioContextConstructor =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextConstructor) {
        return;
      }

      const context =
        audioContextRef.current ?? new AudioContextConstructor();
      audioContextRef.current = context;

      if (context.state === "suspended") {
        void context.resume();
      }

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = context.currentTime;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.18, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.17);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.18);
    } catch {
      // Autoplay policies can block audio contexts. The visual sequence should continue.
    }
  }, [soundEnabled]);

  const playLightsOutAudio = useCallback(() => {
    if (!soundEnabled || !audioRef.current) {
      return;
    }

    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => {
      // Browser autoplay policy can block this until the user has interacted.
    });
  }, [soundEnabled]);

  useEffect(() => {
    if (soundEnabled && audioSrc) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.preload = "auto";
      audioRef.current.volume = 0.92;
    }

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
      void audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, [audioSrc, soundEnabled]);

  useEffect(() => {
    let cancelled = false;
    const interval = clampLightInterval(lightIntervalMs);
    const [minPause, maxPause] = randomPauseRangeMs;

    async function runSequence() {
      await wait(260);

      if (cancelled) {
        return;
      }

      setStatus("counting");

      for (let light = 1; light <= LIGHT_COUNT; light += 1) {
        await wait(interval);

        if (cancelled) {
          return;
        }

        setActiveLights(light);
        playCountdownBeep();
      }

      await wait(randomBetween(minPause, maxPause));

      if (cancelled) {
        return;
      }

      setStatus("lights-out");
      setActiveLights(0);
      playLightsOutAudio();
      onLightsOut?.();

      await wait(90);

      if (!cancelled) {
        setVisible(false);
      }
    }

    void runSequence();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [
    clearTimers,
    lightIntervalMs,
    onLightsOut,
    playCountdownBeep,
    playLightsOutAudio,
    randomPauseRangeMs,
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
          initial="loading"
          animate={status}
          exit="exit"
          variants={overlayVariants}
        >
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
                      animate={isLit ? "lit" : "unlit"}
                      initial="unlit"
                      variants={lightVariants}
                      transition={
                        status === "lights-out"
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: 380,
                              damping: 24,
                              mass: 0.55,
                            }
                      }
                      aria-label={`Race start light ${index + 1} ${
                        isLit ? "on" : "off"
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
              animate={{ opacity: status === "lights-out" ? 1 : 0.58 }}
              transition={{ duration: 0.18 }}
            >
              {status === "lights-out" ? "Away we go" : "Awaiting race control"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
