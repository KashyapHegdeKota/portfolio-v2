import ProjectCard, { ProjectActions } from "./ProjectCard";
import { projectsData } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

const featuredProjects = projectsData.slice(0, 3);
const moreProjects = projectsData.slice(3);

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="content-grid">
        <AnimatedSection className="mb-12 max-w-3xl max-[640px]:mb-8">
          <p className="mb-4 text-sm font-semibold uppercase text-cyan">
            Selected projects
          </p>
          <h2 className="fluid-copy type-section-title font-display font-semibold text-porcelain">
            Search, simulation, and image captioning.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/58 max-[640px]:mt-4">
            Research paper search, F1 freight emissions, and image captioning,
            with source code and live apps to explore.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 max-[640px]:gap-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.slug}
              className={index === 0 ? "lg:col-span-2" : ""}
              delay={0.08 * index}
            >
              <ProjectCard project={project} featured={index === 0} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 max-[640px]:mt-10" delay={0.12}>
          <h3 className="font-display text-3xl font-semibold text-porcelain">More Work</h3>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10 max-[640px]:mt-4">
            {moreProjects.map((project) => (
              <article
                key={project.slug}
                className="grid gap-5 py-6 max-[640px]:gap-3 max-[640px]:py-4 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)_auto] md:items-start md:gap-8"
              >
                <div>
                  <p className="text-xs uppercase text-white/62">
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
                  <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[0.72rem] text-white/62">
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
