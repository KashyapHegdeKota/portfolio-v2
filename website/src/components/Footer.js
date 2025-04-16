import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/KashyapHegdeKota",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://www.linkedin.com/in/kashyap-hegde-kota/",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={styles.socialLink}
            >
              <link.icon style={styles.icon} />
            </a>
          ))}
        </div>
        <p style={styles.copyright}>
          © {currentYear} Kashyap Hegde Kota. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f9fafb",
    borderTop: "1px solid #e5e7eb",
    padding: "2rem 0",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  socialLink: {
    color: "#374151",
    textDecoration: "none",
    fontSize: "1.5rem",
    transition: "color 0.3s ease",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  copyright: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
};
