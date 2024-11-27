import React from "react";

const Bio = () => (
  <section id="bio" style={styles.section}>
    <h2 style={styles.heading}>Hello, it's Yulan.</h2>
    <p style={styles.text}>
      I'm a Computer Science and Mathematics student. But I'm also an artist, maker, and reader.   
    </p>
  </section>
);

const styles = {
  section: {
    padding: "2rem 0",
    borderBottom: "1px solid #ccc",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};

export default Bio;