export default function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      <img
        src={project.imageUrl || "/placeholder-project.png"}
        alt={project.title}
        style={styles.image}
      />
      <div style={styles.content}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.description}>{project.description}</p>
        <div style={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div style={styles.links}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%", // Ensures consistent height
    padding: "1rem", // Adds padding for better alignment
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "fill",
    filter: "brightness(0.9)",
    transition: "transform 0.3s ease",
  },
  content: {
    flexGrow: 1, // Ensures content takes up available space
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Aligns content to start
    gap: "1rem", // Adds consistent spacing between elements
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "0.5rem", // Ensures consistent spacing below title
    textAlign: "center", // Centers the title for uniformity
  },
  description: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "1rem",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
    justifyContent: "center", // Centers the tags
  },
  tag: {
    backgroundColor: "#e0e7ff",
    color: "#4338ca",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "0.75rem",
  },
  links: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center", // Centers the links
    marginTop: "auto", // Pushes links to the bottom for consistent height
  },
  link: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.875rem",
    transition: "color 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
};
