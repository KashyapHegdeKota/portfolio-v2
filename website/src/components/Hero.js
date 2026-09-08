"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "./BrandIcons";
import Magnetic from "./Magnetic";

const metrics = [
  { value: "250K+", label: "research papers indexed" },
  { value: "A100", label: "model training" },
  { value: "FAISS", label: "vector retrieval" },
];

const links = [
  {
    href: "mailto:kkota3@asu.edu",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/KashyapHegdeKota",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/kashyap-hegde-kota/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const heroRevealVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Hero() {
  const [introReady, setIntroReady] = useState(false);
  const [motionReady, setMotionReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMotionReady(true));
    const revealHero = () => setIntroReady(true);

    if (!document.documentElement.classList.contains("f1-loader-active")) {
      revealHero();
    }

    window.addEventListener("f1-loader-lights-out", revealHero);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("f1-loader-lights-out", revealHero);
    };
  }, []);

  const canAnimate = motionReady && shouldReduceMotion === false;

  return (
    <section
      id="about"
      className="section-pad hero-pad relative flex min-h-[92svh] items-center overflow-hidden pt-32 max-[640px]:min-h-0 max-[640px]:pt-24"
    >
      <div
        className="pointer-events-none absolute left-[8%] top-28 h-44 w-44 border border-cyan/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 right-[9%] hidden h-64 w-64 border border-ember/20 md:block"
        aria-hidden="true"
      />

      <motion.div
        className="content-grid relative z-10 grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        initial={canAnimate ? "hidden" : false}
        animate={canAnimate ? (introReady ? "visible" : "hidden") : undefined}
        variants={heroRevealVariants}
      >
        <div>
          <div
            className="mb-7 flex flex-wrap items-center gap-3 max-[640px]:mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-[8px] border border-acid/20 bg-acid/10 px-3 py-2 text-xs font-medium uppercase text-acid">
              <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_16px_rgba(200,255,93,0.7)]" />
              Open to internships and full-time roles
            </span>
            <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/58">
              <MapPin size={14} />
              Tempe, Arizona
            </span>
          </div>

          <h1
            className="fluid-copy type-display font-display max-w-5xl font-semibold text-porcelain"
          >
            From models and retrieval to software people can use.
          </h1>

          <p
            className="mt-8 max-w-2xl text-base leading-8 text-white/62 md:text-lg max-[640px]:mt-6"
          >
            I&apos;m Kashyap Hegde Kota, a computer science student and AI product
            engineer. I build search tools, train models, and develop web apps
            and cloud services.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row max-[640px]:mt-7"
          >
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-porcelain px-5 text-sm font-semibold text-ink transition-colors hover:bg-acid sm:w-auto"
                data-cursor="button"
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <a
              href="/resume.pdf"
              className="inline-flex h-12 w-full items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.05] px-5 text-sm font-semibold text-porcelain backdrop-blur-glass transition-colors hover:border-cyan/40 sm:w-auto"
              aria-label="Open resume PDF"
              data-cursor="link"
            >
              Resume
            </a>
          </div>
        </div>

        <aside
          className="relative mx-auto w-full max-w-[470px] max-[640px]:max-w-[300px]"
        >
          <div
            className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[8px]"
          >
            <Image
              src="/Kashyap picture.webp"
              alt="Portrait of Kashyap Hegde Kota"
              fill
              priority
              quality={82}
              sizes="(max-width: 640px) 300px, (max-width: 768px) 86vw, 430px"
              className="object-cover grayscale-[0.12] saturate-[1.12]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 to-transparent p-5">
              <p className="font-display text-2xl font-semibold text-porcelain">
                AI product engineer
              </p>
              <p className="mt-1 text-sm text-white/58">Next.js / FastAPI / Cloud</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 border-y border-white/10 max-[640px]:mt-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-l border-white/10 px-3 py-4 first:border-l-0 max-[640px]:px-2.5 max-[640px]:py-3"
              >
                <p className="font-display text-xl font-semibold text-porcelain">
                  {metric.value}
                </p>
                <p className="mt-2 text-[0.68rem] leading-4 text-white/60">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex">
        <div className="flex gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="grid h-11 w-11 place-items-center rounded-[8px] border border-white/10 bg-white/[0.05] text-white/62 transition-colors hover:border-cyan/40 hover:text-porcelain"
              aria-label={link.label}
              data-cursor="link"
            >
              <link.icon size={17} />
            </a>
          ))}
        </div>
        <a
          href="#projects"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white/60"
          aria-label="Continue to projects"
          data-cursor="link"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
