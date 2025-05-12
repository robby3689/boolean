import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: "3rem", textAlign: "center" }}
    >
      <h1>Master Tech Skills with <span style={{ color: "#0ea5e9" }}>NextBoolean</span></h1>
      <p style={{ marginTop: "1rem", color: "#555" }}>
        Upskill with our job-ready, project-based IT courses.
      </p>
      <Link to="/courses">
        <button style={{
          marginTop: "2rem",
          padding: "10px 25px",
          fontSize: "1rem",
          backgroundColor: "#0ea5e9",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          transition: "background 0.3s"
        }}
        onMouseOver={e => e.target.style.backgroundColor = "#0284c7"}
        onMouseOut={e => e.target.style.backgroundColor = "#0ea5e9"}>
          Explore Courses
        </button>
      </Link>
    </motion.div>
  );
}
