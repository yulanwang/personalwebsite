
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll"; // Import scroller for smooth scrolling


const Header = () => {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);

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
        {[
          { label: "About Me", path: "/", section: "bio" },
          { label: "Projects", path: "/", section: "projects" },
          { label: "Experiences", path: "/", section: "experiences" },
        ].map((item, index) => (
          <a
            key={index}
            onClick={() => handleNavigation(item.path, item.section)}
            style={{
              ...styles.link,
              ...(hoveredLink === index ? styles.hoverLink : {}),
            }}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {item.label}
          </a>
        ))}
        <RouterLink
          to="/sketchbook"
          style={{
            ...styles.link,
            ...(hoveredLink === "sketchbook" ? styles.hoverLink : {}),
          }}
          onMouseEnter={() => setHoveredLink("sketchbook")}
          onMouseLeave={() => setHoveredLink(null)}
        >
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
    background: "#FFFFFF", // Clean white background
    padding: "1rem 0",
    borderBottom: "2px solid #333",
  },
  title: {
    fontSize: "2rem",
    color: "#2D2D2D", // Dark charcoal for timeless text
    margin: 0,
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)", // Soft shadow
    fontFamily: "'DM Sans', sans-serif", 
  },

  nav: {
    display: "flex",
    gap: "2rem",
  },

  link: {
    textDecoration: "none",
    color: "#A062D0", // purple
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
  },

  hoverLink: {
    color: "rgb(255, 79, 0)", // Highlight on hover (orange from palette)
    transform: "scale(1.1)", // Slight zoom effect
  },
};

export default Header;
