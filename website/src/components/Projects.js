import ProjectCard, { ProjectActions } from "./ProjectCard";
import { projectsData } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

const featuredProjects = projectsData.slice(0, 3);
const moreProjects = projectsData.slice(3);

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="content-grid">
        <AnimatedSection className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-cyan">
            Selected systems
          </p>
          <h2 className="fluid-copy font-display text-[clamp(2.5rem,12vw,6.5rem)] font-semibold leading-[0.92] text-porcelain">
            Work that moves from model to interface.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/58">
            A mix of AI infrastructure, serverless products, and expressive web
            apps built with an eye for speed, clarity, and small details.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.slug}
              className={index === 0 ? "lg:col-span-2" : ""}
              delay={0.08 * index}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16" delay={0.12}>
          <h3 className="font-display text-3xl font-semibold text-porcelain">More Work</h3>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {moreProjects.map((project) => (
              <article
                key={project.slug}
                className="grid gap-5 py-6 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)_auto] md:items-start md:gap-8"
              >
                <div>
                  <p className="text-xs uppercase text-white/48">
                    {project.eyebrow}
                    <span className="mx-2 text-white/22" aria-hidden="true">/</span>
                    {project.year}
                    <span className="mx-2 text-white/22" aria-hidden="true">/</span>
                    {project.status}
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-semibold leading-tight text-porcelain">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-xs font-semibold uppercase text-cyan">
                    {project.metric}
                  </p>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-6 text-white/58">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[0.72rem] text-white/54">
                    {project.tags.map((tag, index) => (
                      <span key={tag}>
                        {tag}
                        {index < project.tags.length - 1 && (
                          <span className="ml-2 text-white/22" aria-hidden="true">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <ProjectActions project={project} compact />
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
