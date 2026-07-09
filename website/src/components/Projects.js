import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

const spanMap = {
  feature: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-3",
  tall: "md:col-span-2 md:row-span-2",
  standard: "md:col-span-2",
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="content-grid">
        <AnimatedSection className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-cyan">
            Selected systems
          </p>
          <h2 className="font-display text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[0.9] text-porcelain">
            Work that moves from model to interface.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/58">
            A mix of AI infrastructure, serverless products, and expressive web
            apps built with an eye for speed, clarity, and small details.
          </p>
        </AnimatedSection>

        <div className="grid auto-rows-[minmax(320px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
          {projectsData.map((project, index) => (
            <AnimatedSection
              key={project.slug}
              className={spanMap[project.span] ?? spanMap.standard}
              delay={0.08 * index}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
