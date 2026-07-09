"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

const accentMap = {
  cyan: {
    border: "hover:border-cyan/40",
    text: "text-cyan",
    glow: "group-hover:shadow-[0_0_60px_rgba(139,233,253,0.16)]",
  },
  ember: {
    border: "hover:border-ember/40",
    text: "text-ember",
    glow: "group-hover:shadow-[0_0_60px_rgba(255,107,53,0.16)]",
  },
  violet: {
    border: "hover:border-violet/40",
    text: "text-violet",
    glow: "group-hover:shadow-[0_0_60px_rgba(167,139,250,0.16)]",
  },
  acid: {
    border: "hover:border-acid/40",
    text: "text-acid",
    glow: "group-hover:shadow-[0_0_60px_rgba(200,255,93,0.14)]",
  },
};

export default function ProjectCard({ project, spanClass = "" }) {
  const accent = accentMap[project.accent] ?? accentMap.cyan;
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 190, damping: 24, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 190, damping: 24, mass: 0.7 });
  const rotateX = useTransform(smoothY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5]);
  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 34%)`;

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.article
      className={`group relative min-h-[320px] overflow-hidden rounded-[8px] border border-white/10 bg-[#101010]/72 transition duration-500 ${accent.border} ${accent.glow} ${spanClass}`}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_36%,rgba(255,255,255,0.04))] opacity-70" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glare }}
        aria-hidden="true"
      />

      <div className="relative flex h-full min-h-[320px] flex-col">
        <div className="relative min-h-[210px] flex-1 overflow-hidden border-b border-white/10">
          <Image
            src={project.imageUrl}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/20 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-[8px] border border-white/12 bg-black/36 px-3 py-1 text-[0.68rem] uppercase text-white/68 backdrop-blur-glass">
              {project.eyebrow}
            </span>
            <span className="rounded-[8px] border border-white/12 bg-black/36 px-3 py-1 text-[0.68rem] uppercase text-white/68 backdrop-blur-glass">
              {project.year}
            </span>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col p-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className={`mb-2 text-xs font-semibold uppercase ${accent.text}`}>
                {project.metric}
              </p>
              <h3 className="font-display text-2xl font-semibold leading-tight text-porcelain">
                {project.title}
              </h3>
            </div>
            <span className="shrink-0 rounded-[8px] border border-white/10 px-3 py-1 text-xs text-white/54">
              {project.status}
            </span>
          </div>

          <p className="text-sm leading-6 text-white/58">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.72rem] text-white/54"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-porcelain px-3 text-sm font-semibold text-ink transition-colors hover:bg-acid"
                data-cursor="button"
              >
                Live
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold text-porcelain transition-colors hover:border-cyan/40"
                data-cursor="link"
              >
                <Github size={15} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
