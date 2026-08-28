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
    const timer = window.setTimeout(() => setTransitioning(false), 240);

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
      <AnimatePresence mode="sync" initial={false}>
        <motion.main
          key={pathname}
          className={transitioning ? "pointer-events-none" : undefined}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
