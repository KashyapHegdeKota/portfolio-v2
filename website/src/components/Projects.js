import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  return (
    <section id="projects" style={styles.projectsSection}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects I've Built</h2>
        <p style={styles.description}>
          Here are some of the projects I've worked on. Click on the links to
          explore more!
        </p>
        <div style={styles.grid}>
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.3 + index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  projectsSection: {
    padding: "4rem 0",
    backgroundColor: "#f9fafb",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    color: "#6b7280",
    textAlign: "center",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
  },
};
