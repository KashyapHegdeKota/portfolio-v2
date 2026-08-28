"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BriefcaseBusiness, Cpu, GraduationCap } from "lucide-react";
import { useRef } from "react";

const experience = [
  {
    title: "Computer Science, B.S.",
    org: "Arizona State University",
    date: "2023 - Present",
    icon: GraduationCap,
    accent: "text-acid",
    summary:
      "Focused on distributed systems, applied machine learning, web infrastructure, and product engineering craft.",
    impact: ["Dean's-list velocity", "CS foundations", "Research-first build habits"],
  },
  {
    title: "Software Development Intern",
    org: "Industry Engineering Team",
    date: "2025",
    icon: BriefcaseBusiness,
    accent: "text-cyan",
    summary:
      "Contributed to production workflows with a bias for clear interfaces, reliable APIs, and fast iteration loops.",
    impact: ["Feature delivery", "API integration", "Code review discipline"],
  },
  {
    title: "AI Systems Builder",
    org: "Independent Projects",
    date: "2024 - Present",
    icon: Cpu,
    accent: "text-ember",
    summary:
      "Built retrieval, captioning, recommender, and code-assistant systems across cloud, model, and frontend boundaries.",
    impact: ["FAISS retrieval", "PyTorch training", "Serverless deployments"],
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.42, once: false });
  const Icon = item.icon;

  return (
    <motion.article
      ref={ref}
      className="relative grid gap-5 md:grid-cols-[12rem_1fr]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.36, once: true }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
    >
      <div className="hidden pt-2 text-right md:block">
        <p className="font-display text-2xl font-semibold text-porcelain">{item.date}</p>
      </div>

      <div
        className={`glass-panel relative rounded-[8px] p-5 transition duration-500 ${
          inView ? "border-white/20 shadow-glow" : "border-white/10"
        }`}
      >
        <div
          className={`absolute -left-[2.1rem] top-6 hidden h-4 w-4 rounded-full border border-white/20 bg-[#0a0a0a] md:block ${
            inView ? "shadow-[0_0_24px_rgba(139,233,253,0.55)]" : ""
          }`}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.05] ${item.accent}`}>
                <Icon size={18} />
              </span>
              <span className="rounded-[8px] border border-white/10 px-3 py-1 text-xs uppercase text-white/48 md:hidden">
                {item.date}
              </span>
            </div>
            <h3 className="font-display text-3xl font-semibold leading-tight text-porcelain">
              {item.title}
            </h3>
            <p className="mt-2 text-sm uppercase text-white/45">{item.org}</p>
          </div>
          <ul className="flex max-w-md list-disc flex-wrap gap-x-5 gap-y-2 pl-4 marker:text-white/24">
            {item.impact.map((impact) => (
              <li
                key={impact}
                className="text-xs text-white/58"
              >
                {impact}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58">{item.summary}</p>
      </div>
    </motion.article>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section-pad relative" ref={ref}>
      <div className="content-grid">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-ember">Signal path</p>
          <h2 className="fluid-copy font-display text-[clamp(2.5rem,12vw,6.5rem)] font-semibold leading-[0.92] text-porcelain">
            Experience shaped by building in public.
          </h2>
        </div>

        <div className="relative grid gap-5 md:gap-8">
          <div className="absolute left-[12.95rem] top-0 hidden h-full w-px bg-white/10 md:block" />
          <motion.div
            className="absolute left-[12.95rem] top-0 hidden h-full w-px origin-top bg-gradient-to-b from-cyan via-acid to-ember md:block"
            style={{ scaleY }}
            aria-hidden="true"
          />
          {experience.map((item, index) => (
            <TimelineItem key={`${item.title}-${item.date}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
