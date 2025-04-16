import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const contactMethods = [
    {
      href: "mailto:kkota3@asu.edu",
      label: "Email",
      icon: FaEnvelope,
    },
    {
      href: "https://www.linkedin.com/in/kashyap-hegde-kota/",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/KashyapHegdeKota",
      label: "GitHub",
      icon: FaGithub,
    },
  ];

  return (
    <AnimatedSection delay={0.3}>
      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Get In Touch</h2>
          <p style={styles.description}>
            Feel free to reach out to me for collaborations or just a friendly
            chat!
          </p>
          <div style={styles.contactMethods}>
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.label} delay={0.4 + index * 0.1}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactLink}
                  aria-label={method.label}
                >
                  <method.icon style={styles.icon} />
                  <span style={styles.contactLabel}>{method.label}</span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

const styles = {
  contactSection: {
    padding: "4rem 0",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    color: "#6b7280",
    marginBottom: "2rem",
  },
  contactMethods: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  contactLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#374151",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  contactLabel: {
    marginTop: "0.5rem",
    fontSize: "0.875rem",
  },
  icon: {
    fontSize: "2rem",
    color: "#4f46e5",
  },
};
