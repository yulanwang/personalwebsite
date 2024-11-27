import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll"; // Import scroller for smooth scrolling

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, section) => {
    if (window.location.pathname === path) {
      // Use scroller to smoothly scroll to the section
      scroller.scrollTo(section, {
        duration: 800,
        smooth: "easeInOutQuad",
        offset: -70, // Adjust for header height
      });
    } else {
      // Navigate to the target path
      navigate(path);
      setTimeout(() => {
        // Scroll to the section after navigation
        scroller.scrollTo(section, {
          duration: 800,
          smooth: "easeInOutQuad",
          offset: -70,
        });
      }, 100); // Delay to ensure the DOM is updated
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Yulan Wang</h1>
      <nav style={styles.nav}>
        <a onClick={() => handleNavigation("/", "bio")} style={styles.link}>
          About Me
        </a>
        <a onClick={() => handleNavigation("/", "projects")} style={styles.link}>
          Projects
        </a>
        <a onClick={() => handleNavigation("/", "experiences")} style={styles.link}>
          Experiences
        </a>
        <RouterLink to="/sketchbook" style={styles.link}>
          Sketchbook
        </RouterLink>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: "2px solid #333",
  },
  title: {
    fontSize: "2rem",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "#0077cc",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
};

export default Header;
