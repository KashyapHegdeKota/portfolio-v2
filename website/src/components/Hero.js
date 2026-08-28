"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin } from "./BrandIcons";
import Magnetic from "./Magnetic";

const metrics = [
  { value: "250K+", label: "research papers indexed" },
  { value: "A100", label: "GPU data pipelines" },
  { value: "15ms", label: "retrieval-minded builds" },
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
    y: 52,
    filter: "blur(18px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

export default function Hero() {
  const [introReady, setIntroReady] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 110, damping: 26, mass: 0.7 });
  const smoothY = useSpring(mouseY, { stiffness: 110, damping: 26, mass: 0.7 });
  const fieldX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const fieldY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);
  const imageRotate = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  useEffect(() => {
    const revealHero = () => setIntroReady(true);

    if (!document.documentElement.classList.contains("f1-loader-active")) {
      revealHero();
    }

    window.addEventListener("f1-loader-lights-out", revealHero);

    return () => {
      window.removeEventListener("f1-loader-lights-out", revealHero);
    };
  }, []);

  return (
    <section
      id="about"
      className="section-pad relative flex min-h-[92svh] items-center overflow-hidden pt-32"
      onPointerMove={handlePointerMove}
    >
      <motion.div
        className="pointer-events-none absolute left-[8%] top-28 h-44 w-44 border border-cyan/20"
        style={{ x: fieldX, y: fieldY, rotate: imageRotate }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-20 right-[9%] hidden h-64 w-64 border border-ember/20 md:block"
        style={{ x: fieldY, y: fieldX, rotate: imageRotate }}
        aria-hidden="true"
      />

      <motion.div
        className="content-grid relative z-10 grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        initial="hidden"
        animate={introReady ? "visible" : "hidden"}
        variants={heroRevealVariants}
      >
        <div>
          <motion.div
            className="mb-7 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24 }}
          >
            <span className="inline-flex items-center gap-2 rounded-[8px] border border-acid/20 bg-acid/10 px-3 py-2 text-xs font-medium uppercase text-acid">
              <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_16px_rgba(200,255,93,0.7)]" />
              Open to bold engineering work
            </span>
            <span className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/58">
              <MapPin size={14} />
              Tempe, Arizona
            </span>
          </motion.div>

          <motion.h1
            className="fluid-copy type-display font-display max-w-5xl font-semibold text-porcelain"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            Building systems with taste, speed, and signal.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-white/62 md:text-lg"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.54 }}
          >
            I am Kashyap Hegde Kota, a computer science student and full-stack
            builder turning AI, cloud infrastructure, and product craft into fast
            interfaces that feel alive.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.68 }}
          >
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-porcelain px-5 text-sm font-semibold text-ink transition-colors hover:bg-acid sm:w-auto"
                data-cursor="button"
              >
                Explore Work
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto" cursor="link">
              <a
                href="/resume.pdf"
                className="inline-flex h-12 w-full items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.05] px-5 text-sm font-semibold text-porcelain backdrop-blur-glass transition-colors hover:border-cyan/40 sm:w-auto"
                data-cursor="link"
              >
                Resume
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.aside
          className="relative mx-auto w-full max-w-[470px]"
          initial={{ opacity: 0, y: 48, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[8px]"
            style={{ rotate: imageRotate }}
          >
            <Image
              src="/Kashyap picture.jpg"
              alt="Portrait of Kashyap Hegde Kota"
              fill
              priority
              sizes="(max-width: 768px) 86vw, 430px"
              className="object-cover grayscale-[0.12] saturate-[1.12]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 to-transparent p-5">
              <p className="font-display text-2xl font-semibold text-porcelain">
                AI product engineer
              </p>
              <p className="mt-1 text-sm text-white/58">Next.js / FastAPI / Cloud</p>
            </div>
          </motion.div>

          <div className="mt-4 grid grid-cols-3 border-y border-white/10">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="border-l border-white/10 px-3 py-4 first:border-l-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 + index * 0.08 }}
              >
                <p className="font-display text-xl font-semibold text-porcelain">
                  {metric.value}
                </p>
                <p className="mt-2 text-[0.68rem] leading-4 text-white/45">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex">
        <div className="flex gap-2">
          {links.map((link) => (
            <Magnetic key={link.label} strength={0.18} rotation={3} cursor="link">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.05] text-white/62 transition-colors hover:border-cyan/40 hover:text-porcelain"
                aria-label={link.label}
                data-cursor="link"
              >
                <link.icon size={17} />
              </a>
            </Magnetic>
          ))}
        </div>
        <motion.a
          href="#projects"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white/60"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Continue to projects"
          data-cursor="link"
        >
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
}
