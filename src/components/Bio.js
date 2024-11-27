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
      padding: "4rem 2rem",
      backgroundColor: "#F9F4F0", // Soft beige background
      borderBottom: "1px solid #EAE7DC", // Subtle border
      textAlign: "center",
      fontFamily: "'DM Sans', sans-serif",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#A062D0", // Deep purple for the heading
      marginBottom: "1rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      textShadow: "1px 1px 4px #F0E4FF", // Subtle lavender glow
      fontWeight: "bold",
    },
    text: {
      fontSize: "1.2rem",
      color: "#222222", // Timeless dark for readability
      lineHeight: "1.8",
      maxWidth: "600px",
      margin: "0 auto",
      fontFamily: "'DM Sans', sans-serif",
    },
}

export default Bio;