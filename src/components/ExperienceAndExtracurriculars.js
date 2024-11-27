import React from "react";
import experiences from "../data/experiences";
import extracurriculars from "../data/extracurriculars";

const ExperienceAndExtracurriculars = () => (
  <section style={styles.page}>
    {/* Experiences Section */}
    <div id="experiences" style={styles.section}>
      <h2 style={styles.heading}>Experiences</h2>
      <ul style={styles.list}>
        {experiences.map((experience) => (
          <li key={experience.id} style={styles.item}>
            <h3 style={styles.title}>{experience.title}</h3>
            <p style={styles.text}>{experience.description}</p>
            <p style={styles.timeline}>
              <strong>Timeline:</strong> {experience.timeline}
            </p>
          </li>
        ))}
      </ul>
    </div>

    {/* Extracurriculars Section */}
    <div id="extracurriculars" style={styles.section}>
      <h2 style={styles.heading}>Experiences part 2, but less serious!</h2>
      <ul style={styles.list}>
        {extracurriculars.map((activity) => (
          <li key={activity.id} style={styles.item}>
            <h3 style={styles.title}>{activity.title}</h3>
            <p style={styles.text}>{activity.description}</p>
            <p style={styles.involvement}>
              <strong>Involvement:</strong> {activity.involvement}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const styles = {
  page: {
    padding: "2rem 1rem",
    fontFamily: "'Courier New', Courier, monospace",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f4f4e8",
  },
  section: {
    marginBottom: "3rem",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    borderBottom: "2px solid #555",
    paddingBottom: "0.5rem",
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
  },
  timeline: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#555",
  },
  involvement: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#555",
  },
};

export default ExperienceAndExtracurriculars;
