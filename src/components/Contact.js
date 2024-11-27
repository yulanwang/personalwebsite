import React from "react";

const Contact = () => (
  <section id="contact" style={styles.section}>
    <h2 style={styles.heading}>Let's get in touch!</h2>
    <p style={styles.text}>Feel free to connect with me through email or LinkedIn:</p>
    <a href="mailto:yulanw16@gmail.com" style={styles.link}>Email</a>
    <a href="https://www.linkedin.com/in/yulanwang" style={styles.link}>LinkedIn</a>
  </section>
);

const styles = {
  section: {
    padding: "2rem 0",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  link: {
    display: "inline-block",
    margin: "0.5rem",
    color: "#3a3a3a",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Contact;
