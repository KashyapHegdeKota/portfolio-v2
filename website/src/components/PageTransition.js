"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const PageTransitionContext = createContext({
  activePath: "/",
  transitioning: false,
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion !== false) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => setTransitioning(true));
    const timer = window.setTimeout(() => setTransitioning(false), 240);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname, shouldReduceMotion]);

  const value = useMemo(
    () => ({
      activePath: pathname,
      transitioning,
    }),
    [pathname, transitioning],
  );

  return (
    <PageTransitionContext.Provider value={value}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.main
          key={pathname}
          id="main-content"
          tabIndex={-1}
          className={transitioning ? "pointer-events-none" : undefined}
          initial={shouldReduceMotion === false ? { opacity: 0, y: 6 } : false}
          animate={shouldReduceMotion === false ? { opacity: 1, y: 0 } : undefined}
          exit={shouldReduceMotion === false ? { opacity: 0, y: -4 } : undefined}
          transition={shouldReduceMotion === false ? { duration: 0.22, ease: [0.25, 1, 0.5, 1] } : undefined}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
