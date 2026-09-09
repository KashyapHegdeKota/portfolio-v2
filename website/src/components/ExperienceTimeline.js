"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BriefcaseBusiness, Cpu, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experience = [
  {
    title: "Computer Science, B.S.",
    org: "Arizona State University",
    date: "2023 - Present",
    icon: GraduationCap,
    accent: "text-acid",
    summary:
      "Focused on distributed systems, applied machine learning, web infrastructure, and product engineering.",
    impact: ["AI and ML coursework", "CS foundations", "Research projects"],
  },
  {
    title: "Software Development Intern",
    org: "WalnuTech PBC Inc.",
    date: "October 2025 - Present",
    icon: BriefcaseBusiness,
    accent: "text-cyan",
    summary:
      "Built a human-in-the-loop scholarship data pipeline with Python, Flask, and LangGraph. Added LLM verification and asynchronous ingestion, reducing processing time from 10 seconds to 200ms per scholarship.",
    impact: ["LLM verification", "Async ingestion", "API failure tests"],
  },
  {
    title: "AI Project Developer",
    org: "Independent Projects",
    date: "2024 - Present",
    icon: Cpu,
    accent: "text-ember",
    summary:
      "Built research paper search, image captioning, episode recommendations, and an algorithm tutor, including model training, cloud deployment, and web interfaces.",
    impact: ["FAISS retrieval", "PyTorch training", "Serverless deployments"],
  },
];

function TimelineItem({ item }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.42, once: false });
  const shouldReduceMotion = useReducedMotion();
  const [motionReady, setMotionReady] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMotionReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  const canAnimate = motionReady && shouldReduceMotion === false;
  const Icon = item.icon;

  return (
    <motion.article
      ref={ref}
      className="relative grid gap-5 max-[640px]:gap-3 md:grid-cols-[12rem_1fr]"
      initial={canAnimate ? { opacity: 0, y: 14 } : false}
      whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ amount: 0.36, once: true }}
      transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="hidden pt-2 text-right md:block">
        <p className="font-display text-2xl font-semibold text-porcelain">{item.date}</p>
      </div>

      <div
        className={`glass-panel relative rounded-[8px] p-5 transition duration-500 max-[640px]:p-4 ${
          inView ? "border-cyan/24" : "border-white/10"
        }`}
      >
        <div
          className={`absolute -left-[2.1rem] top-6 hidden h-4 w-4 rounded-full border bg-[#0a0a0a] md:block ${
            inView ? "border-cyan/55" : "border-white/20"
          }`}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 max-[640px]:mb-3">
              <span className={`grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.05] ${item.accent}`}>
                <Icon size={18} />
              </span>
              <span className="rounded-[8px] border border-white/10 px-3 py-1 text-xs uppercase text-white/60 md:hidden">
                {item.date}
              </span>
            </div>
            <h3 className="font-display text-3xl font-semibold leading-tight text-porcelain">
              {item.title}
            </h3>
            <p className="mt-2 text-sm uppercase text-white/60">{item.org}</p>
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
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58 max-[640px]:mt-4">{item.summary}</p>
      </div>
    </motion.article>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [motionReady, setMotionReady] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMotionReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section-pad relative" ref={ref}>
      <div className="content-grid">
        <div className="mb-12 max-w-3xl max-[640px]:mb-8">
          <p className="mb-4 text-sm font-semibold uppercase text-ember">Background</p>
          <h2 className="fluid-copy type-section-title font-display font-semibold text-porcelain">
            Experience
          </h2>
        </div>

        <div className="relative grid gap-5 max-[640px]:gap-3 md:gap-8">
          <div className="absolute left-[12.95rem] top-0 hidden h-full w-px bg-white/10 md:block" />
          <motion.div
            className="absolute left-[12.95rem] top-0 hidden h-full w-px origin-top bg-cyan/45 md:block"
            style={{ scaleY: motionReady && shouldReduceMotion === false ? scaleY : 1 }}
            aria-hidden="true"
          />
          {experience.map((item) => (
            <TimelineItem key={`${item.title}-${item.date}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
