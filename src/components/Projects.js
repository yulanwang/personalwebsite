import React from "react";
import projects from "../data/projects";

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2 style={styles.heading}>Projects</h2>
    <ul style={styles.list}>
      {projects.map((project) => (
        <li key={project.id} style={styles.item}>
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
            >
              View Project
            </a>
          )}
        </li>
      ))}
    </ul>
  </section>
);

const styles = {
  section: {
    padding: "2rem 0",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  technologies: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#555",
  },
  link: {
    display: "inline-block",
    marginTop: "0.5rem",
    color: "#0077cc",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Projects;
