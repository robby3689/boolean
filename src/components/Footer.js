// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/careers" style={styles.link}>Careers</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
      <p style={styles.copy}>© {new Date().getFullYear()} NextBoolean. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f0f0f0",
    padding: "2rem 1rem",
    textAlign: "center",
    marginTop: "3rem",
    borderTop: "1px solid #ddd",
  },
  navLinks: {
    marginBottom: "1rem",
  },
  link: {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
  copy: {
    fontSize: "0.875rem",
    color: "#777",
  },
};
