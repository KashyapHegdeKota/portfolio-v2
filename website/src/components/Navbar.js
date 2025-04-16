"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <a href="#hero" style={styles.brand}>
          Kashyap Hegde Kota
        </a>
        <div style={styles.linksContainer}>
          <div style={{ ...styles.links, display: isOpen ? "block" : "none" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={styles.link}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={styles.menuButton}
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#4f46e5",
    textDecoration: "none",
  },
  linksContainer: {
    display: "flex",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#374151",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    transition: "background-color 0.3s ease",
  },
  menuButton: {
    background: "none",
    border: "none",
    color: "#374151",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "0.5rem",
  },
};
