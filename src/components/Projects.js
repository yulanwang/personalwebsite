import React from "react";
import projects from "../data/projects";
import "../App.css"

const Projects = () => (

  
  <section id="projects" style={styles.section}>
    <h2 style={styles.heading}>Projects</h2>
    <div style={styles.grid}>
      {projects.map((project) => (
        <div
          key={project.id}
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.background = "var(--secondary-bg)"}}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "#FFFFFF"
          }}
        >
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.text}>{project.description}</p>
          <p style={styles.technologies}>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--dark-green)"; // Set hover color to orange
                e.target.style.borderBottomColor = "var(--dark-green)"; // Set underline color
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--dark-text)"; // Revert to dark text
                e.target.style.borderBottomColor = "transparent"; // Revert underline
              }}
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    padding: "2rem 1rem",
    backgroundColor: "#FFFFFF",
    color: "var(--dark-text)",
    fontFamily: "'DM Sans', sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "var(--dark-text)",
    textAlign: "center",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "0.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Adjust for 2-3 cards per row
    gap: "1.5rem", // Space between cards
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "2px solid #e0e0e0",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    color: "var(--dark-text)",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
  technologies: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "var(--dark-text)",
    marginBottom: "0.5rem",
  },
  link: {
    display: "inline-block",
    marginTop: "0.5rem",
    color: "var(--dark-text)",
    textDecoration: "none",
    fontWeight: "bold",
    borderBottom: "1px solid transparent",
    transition: "color 0.3s ease, border-color 0.3s ease",
  },
  hoverLink: {
    color: "var(--hover-accent)", // Highlight on hover (orange from palette)
    transform: "scale(1.1)", // Slight zoom effect
  },
};

export default Projects;
