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
          <ExperienceItem 
          key={experience.id} 
          title={experience.title} 
          description={experience.description} 
          timeline={experience.timeline} 
        />
        ))}
      </ul>
    </div>

    {/* Extracurriculars Section */}
    <div id="extracurriculars" style={styles.section}>
      <h2 style={styles.heading}>Experiences part 2, but less serious!</h2>
      <ul style={styles.list}>
        {extracurriculars.map((activity) => (
          <ExperienceItem 
          key={activity.id} 
          title={activity.title} 
          description={activity.description} 
          involvement={activity.involvement} 
        />
        ))}
      </ul>
    </div>
  </section>
);

const styles = {
  page: {
    padding: "3rem 2rem",
    fontFamily: "'DM Sans', sans-serif",
    backgroundColor: "#F9F4F0", // Soft beige
    lineHeight: "1.8",
    color: "#22222", // Timeless dark
  },
  section: {
    marginBottom: "4rem",
    padding: "1rem",
    backgroundColor: "#FFFAF5", // Light pastel
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    color: "#A062D0", // Deep purple for emphasis
    marginBottom: "1.5rem",
    borderBottom: "2px solid #EAE7DC",
    paddingBottom: "0.5rem",
    fontWeight: 700,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    marginBottom: "2rem",
    padding: "1rem",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    backgroundColor: "#34A5A5", // Bright teal for card background
    color: "#FFFFFF", // Contrast text color

  },
  itemHover: {
    backgroundColor: "rgb(255, 79, 0)", // Highlighted orange on hover
    transform: "translateY(-5px)", // Subtle lift effect
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    color: "#FFFFFF", // White text for titles
    fontWeight: 700,
  },
  text: {
    fontSize: "1rem",
    color: "#FFFFFF",
    marginBottom: "0.5rem",
  },
  timeline: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#F0E4FF", 
  },
  involvement: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "#F0E4FF", 
  },
};

const ExperienceItem = ({ id, title, description, timeline, involvement }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      key={id}
      style={{
        ...styles.item,
        ...(isHovered ? styles.itemHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.text}>{description}</p>
      {timeline && (
        <p style={styles.timeline}>
          <strong>Timeline:</strong> {timeline}
        </p>
      )}
      {involvement && (
        <p style={styles.involvement}>
          <strong>Involvement:</strong> {involvement}
        </p>
      )}
    </li>
  );
};

export default ExperienceAndExtracurriculars;
