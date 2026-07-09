"use client";

import { useEffect, useState } from "react";
import F1PageLoader from "./F1PageLoader";

const raceStartAudio = "/audio/f1-lights-out-and-away-we-go.mp3";

export default function PageLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!showLoader) {
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
  }, [showLoader]);

  if (!showLoader) {
    return null;
  }

  return (
    <F1PageLoader
      audioSrc={raceStartAudio}
      onLightsOut={() => {
        window.dispatchEvent(new Event("f1-loader-lights-out"));
      }}
      onComplete={() => {
        window.dispatchEvent(new Event("f1-loader-complete"));
        setShowLoader(false);
      }}
    />
  );
}
