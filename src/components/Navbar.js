import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>NextBoolean</Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/careers" style={styles.link}>Careers</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/admin-login" style={{ ...styles.link, color: "#ff3333", fontWeight: "bold" }}>Admin</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#00aaff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  logoText: {
    color: "white",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};
