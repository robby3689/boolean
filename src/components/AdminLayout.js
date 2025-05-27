// src/components/AdminLayout.js
import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div style={styles.wrapper}>
      <aside style={styles.sidebar}>
        <h3 style={styles.logo}>NextBoolean CMS</h3>
        <nav style={styles.nav}>
          <Link to="/admin-panel" style={styles.link}>Dashboard</Link>
          <Link to="/admin-upload" style={styles.link}>Upload</Link>
          <Link to="/" style={{ ...styles.link, color: "#d9534f" }}>Back to Site</Link>
        </nav>
      </aside>
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "1rem",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
};
