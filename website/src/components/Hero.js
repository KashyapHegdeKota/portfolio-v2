import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection delay={0.1}>
      <section id="about" style={styles.heroSection}>
        <div style={styles.container}>
          <img
            src="/Kashyap picture.jpg"
            alt="Profile"
            style={{
              marginTop: "2rem",
              filter: "brightness(0.9)",
              borderRadius: "50%",
              width: "300px",
              height: "300px",
              marginBottom: "1rem",
            }}
          />
          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.highlight}>Kashyap Hegde Kota</span>
          </h1>
          <p style={styles.paragraph}>
            I’m a Computer Science student at Arizona State University with a
            strong academic background and industry experience through a recent
            software development internship. I’m passionate about technology,
            quick to learn, and always looking for opportunities to grow and
            make a meaningful impact.
          </p>
          <div style={styles.buttonContainer}>
            <a href="#projects" style={styles.primaryButton}>
              View My Projects
            </a>
            <a href="#contact" style={styles.secondaryButton}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

const styles = {
  heroSection: {
    padding: "4rem 0",
    background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
    textAlign: "center",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  highlight: {
    color: "#4f46e5",
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#6b7280",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  primaryButton: {
    display: "inline-block",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  secondaryButton: {
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "#4f46e5",
    padding: "0.75rem 1.5rem",
    border: "1px solid #4f46e5",
    borderRadius: "0.375rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
