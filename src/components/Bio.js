import React, { useState } from "react";
import "../App.css";

const Bio = () => {
  const [activeItem, setActiveItem] = useState("read"); // Default to "read"

  const items = {
    read: {
      title: "Crime and Punishment",
      subtitle: "by Fyodor Dostoevsky",
      image: "/img/crime-and-punishment.jpg",
    },
    album: {
      title: "The Velvet Underground & Nico",
      subtitle: "by The Velvet Underground and Nico",
      embed: (
        <iframe style={{ borderRadius: "12px", border: "none" }} src="https://open.spotify.com/embed/album/4xwx0x7k6c5VuThz5qVqmV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      ),
    },
    movie: {
      title: "Gladiator II",
      subtitle: "Directed by Ridley Scott",
      image: "/img/gladiatorii.webp",
    },
  };

  return (
    <section id="bio" style={styles.section}>
      <div style={styles.container}>
        {/* Top Section: Bio Text and Portrait */}
        <div style={styles.topSection}>
          {/* Bio Text */}
          <div style={styles.textContainer}>
          <h2 style={styles.heading}>Hello, it's <span style={styles.headingName}>Yulan.</span></h2>
            <p style={styles.text}>
              I'm a Computer Science and Mathematics student. But I'm also an artist, maker, and reader.
            </p>
          </div>

          {/* Portrait */}
          <div style={styles.imageContainer}>
            <img
              src="/img/Wang,Yulan copy.jpg"
              alt="Portrait of Yulan"
              style={styles.portrait}
            />
          </div>
        </div>

        {/* Current Highlight Section */}
        <div style={styles.highlightContainer}>
          <div style={styles.nav}>
            <div style={styles.navItem}>I'm currently </div>
            <span
              style={{
                ...styles.navItem,
                ...(activeItem === "read" ? styles.activeNavItem : {}),
              }}
              onMouseEnter={() => setActiveItem("read")}
            >
              reading
            </span>
            <span
              style={{
                ...styles.navItem,
                ...(activeItem === "album" ? styles.activeNavItem : {}),
              }}
              onMouseEnter={() => setActiveItem("album")}
            >
              listening to
            </span>
            <span
              style={{
                ...styles.navItem,
                ...(activeItem === "movie" ? styles.activeNavItem : {}),
              }}
              onMouseEnter={() => setActiveItem("movie")}
            >
              watching
            </span>
          </div>
          <div style={styles.content}>
            {activeItem === "album" ? (
              items[activeItem].embed
            ) : (
              <>
                <img
                  src={items[activeItem].image}
                  alt={items[activeItem].title}
                  style={styles.image}
                />
                <div>
                  <h3 style={styles.itemTitle}>{items[activeItem].title}</h3>
                  <p style={styles.itemSubtitle}>{items[activeItem].subtitle}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "2rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    margin: "1rem 0",
    fontFamily: "'DM Sans', sans-serif",
  },
  container: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    gap: "0rem",
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  portrait: {
    width: "270px",
    height: "auto",
    borderRadius: "8px",
    objectFit: "contain",
  },
  heading: {
    fontSize: "3.8rem",
    marginBottom: "1rem",
    color: "var(--dark-text)",
  },
  headingName: {
    fontSize: "3.8rem",
    marginBottom: "1rem",
    color: "var(--hover-accent)",
  },
  text: {
    fontSize: "2rem",
    lineHeight: "1.6",
    color: "var(--dark-text)",
  },
  highlightContainer: {
    marginTop: "0rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  navItem: {
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "var(--dark-text)",
    padding: "0.5rem",
    borderBottom: "2px solid transparent",
    transition: "color 0.3s ease, border-color 0.3s ease",
  },
  activeNavItem: {
    color: "var(--hover-accent)",
    borderColor: "var(--hover-accent)",
  },
  content: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  image: {
    height: "150px",
    width: "auto",
    borderRadius: "8px",
    objectFit: "contain",
  },
  itemTitle: {
    fontSize: "1.5rem",
    margin: "0 0 0.5rem 0",
    color: "var(--dark-text)",
  },
  itemSubtitle: {
    fontSize: "1.2rem",
    color: "var(--dark-text)",
    fontStyle: "italic",
  },
  link: {
    fontSize: "1rem",
    color: "var(--accent-purple)",
    textDecoration: "none",
    marginTop: "0.5rem",
    display: "inline-block",
    transition: "color 0.3s ease",
  },
  spotifyEmbed: {
    borderRadius: "12px",
    border: "none",
  },
};

export default Bio;
