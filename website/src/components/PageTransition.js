"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timer = window.setTimeout(() => setTransitioning(false), 560);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const value = useMemo(
    () => ({
      activePath: pathname,
      transitioning,
    }),
    [pathname, transitioning],
  );

  return (
    <PageTransitionContext.Provider value={value}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className={transitioning ? "pointer-events-none" : undefined}
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
          transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
