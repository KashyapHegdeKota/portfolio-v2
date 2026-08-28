"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Github } from "./BrandIcons";

const accentMap = {
  cyan: {
    border: "hover:border-cyan/40",
    text: "text-cyan",
  },
  ember: {
    border: "hover:border-ember/40",
    text: "text-ember",
  },
  violet: {
    border: "hover:border-violet/40",
    text: "text-violet",
  },
  acid: {
    border: "hover:border-acid/40",
    text: "text-acid",
  },
};

export function ProjectActions({ project, compact = false }) {
  const liveClass = compact
    ? "inline-flex min-h-10 items-center gap-2 py-2 text-sm font-semibold text-porcelain transition-colors hover:text-acid"
    : "inline-flex h-10 items-center gap-2 rounded-[8px] bg-porcelain px-3 text-sm font-semibold text-ink transition-colors hover:bg-acid";
  const codeClass = compact
    ? "inline-flex min-h-10 items-center gap-2 py-2 text-sm font-semibold text-white/58 transition-colors hover:text-cyan"
    : "inline-flex h-10 items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold text-porcelain transition-colors hover:border-cyan/40";

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={liveClass}
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
          className={codeClass}
          data-cursor="link"
        >
          <Github size={15} />
          Code
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const accent = accentMap[project.accent] ?? accentMap.cyan;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={`group relative min-h-[320px] overflow-hidden rounded-[8px] border border-white/10 bg-[#101010]/72 transition-colors duration-300 ${accent.border}`}
    >
      <div className="relative flex h-full min-h-[320px] flex-col">
        <div className="relative min-h-[210px] flex-1 overflow-hidden border-b border-white/10">
          <Image
            src={project.imageUrl}
            alt={`${project.title} interface preview`}
            fill
            loading="lazy"
            quality={82}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
            className={`object-cover transition duration-500 group-hover:scale-[1.025] ${
              imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className={`absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.05),rgba(255,255,255,0.12),rgba(255,255,255,0.05))] transition-opacity duration-500 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/20 to-transparent" />
          <div className="absolute left-4 top-4 rounded-[8px] bg-black/48 px-3 py-1 text-[0.68rem] uppercase text-white/68 backdrop-blur-glass">
            {project.eyebrow}
            <span className="mx-2 text-white/30" aria-hidden="true">/</span>
            {project.year}
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
            <span className="shrink-0 pt-1 text-xs uppercase text-white/54">
              {project.status}
            </span>
          </div>

          <p className="text-sm leading-6 text-white/58">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-[0.72rem] text-white/54">
            {project.tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < project.tags.length - 1 && (
                  <span className="ml-2 text-white/22" aria-hidden="true">/</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}
