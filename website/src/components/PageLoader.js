"use client";

import { useEffect, useState } from "react";
import F1PageLoader from "./F1PageLoader";

const SESSION_KEY = "signal-workshop:f1-intro-seen";

export default function PageLoader() {
  const [mode, setMode] = useState("pending");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;

    try {
      seen = window.sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      // The intro can still run when storage is unavailable.
    }

    if (reducedMotion || seen) {
      window.dispatchEvent(new Event("f1-loader-lights-out"));
      window.dispatchEvent(new Event("f1-loader-complete"));
      setMode("complete");
      return;
    }

    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Session persistence is a progressive enhancement.
    }

    setMode("full");
  }, []);

  useEffect(() => {
    if (mode !== "full") {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.classList.add("f1-loader-active");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.classList.remove("f1-loader-active");
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [mode]);

  if (mode === "pending") {
    return <div className="fixed inset-0 z-[120] bg-[#0a0a0a]" aria-hidden="true" />;
  }

  if (mode !== "full") {
    return null;
  }

  return (
    <F1PageLoader
      onLightsOut={() => {
        window.dispatchEvent(new Event("f1-loader-lights-out"));
      }}
      onComplete={() => {
        window.dispatchEvent(new Event("f1-loader-complete"));
        setMode("complete");
      }}
    />
  );
}
