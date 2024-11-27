import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import sketches from "../data/sketches";
import Contact from "./Contact";
import Header from "./Header";

Modal.setAppElement("#root");

const Sketchbook = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSketch, setSelectedSketch] = useState(null);
  const [hoveredSketch, setHoveredSketch] = useState(null);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const openModal = (sketch) => {
    setSelectedSketch(sketch);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent page scrolling
  };

  const closeModal = () => {
    setSelectedSketch(null);
    setModalIsOpen(false);
    setIsImageEnlarged(false); // Reset enlarged state
    document.body.style.overflow = "auto"; // Re-enable page scrolling
  };

  const toggleImageSize = () => {
    setIsImageEnlarged((prev) => !prev); // Toggle enlarged state
  };

  return (
    <div style={styles.container}>

      {/* Intro Section */}
      <section style={styles.intro}>
        <img
          src="/img/sketchbook/sketches.jpeg"
          alt="Sketches laid out"
          style={styles.introImage}
        />
        <div style={styles.introText}>
          <h1>Welcome to My Sketchbook</h1>
          <p>
            This is a collection of sketches I made during my journey in France.
            Each piece represents a feeling, a moment, and things I saw that are precious to me.
            Explore the artwork and read the stories behind each sketch.
          </p>
        </div>
      </section>

      <div style={styles.grid}>
        {sketches.map((sketch) => (
          <div
          key={sketch.id}
          style={styles.card}
          onClick={() => openModal(sketch)}
          onMouseEnter={() => setHoveredSketch(sketch.id)}
          onMouseLeave={() => setHoveredSketch(null)}
        >
          <div style={styles.imageWrapper}>
            {/* Conditionally render reference image or just show the sketch */}
            {sketch.referenceImage && hoveredSketch === sketch.id ? (
              <img
                src={sketch.referenceImage}
                alt={`${sketch.title} reference`}
                style={styles.image}
              />
            ) : (
              <img
                src={sketch.imageUrl}
                alt={`${sketch.title} sketch`}
                style={styles.image}
              />
            )}
          </div>
          <h2 style={styles.sketchTitle}>{sketch.title}</h2>
        </div>
        ))}
      </div>

      {/* Contact Section */}
      <Contact /> {/* Include the Contact component here */}

      {/* Animated Modal */}
      <AnimatePresence>
        {modalIsOpen && selectedSketch && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={styles.modalOverlay}
            onClick={closeModal} // Close modal on overlay click
            >
            
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedSketch.title}</h2>
              <div
                style={{
                  ...styles.imageWrapper,
                  ...(isImageEnlarged ? styles.enlargedImageWrapper : {}),
                }}
                onClick={toggleImageSize}
              >
                <img
                  src={selectedSketch.imageUrl}
                  alt={`${selectedSketch.title} sketch`}
                  style={{
                    ...styles.modalImage,
                    ...(isImageEnlarged ? styles.enlargedImage : {}),
                  }}
                />
              </div>
              <p style={styles.description}>{selectedSketch.description}</p>
              <button onClick={closeModal} style={styles.closeButton}>
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },

  
  content: {
    maxWidth: "600px",
    margin: "auto",
    padding: "0", // Padding moved to the modal content style
    borderRadius: "8px",
    textAlign: "center",
    background: "none", // Let Framer Motion handle the styling
  },
};

const styles = {

    intro: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
        marginBottom: "2rem",
        padding: "1rem",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    
    
      introImage: {
        width: "50%", 
        height: "auto",
        borderRadius: "8px",
      },
    
      introText: {
        width: "50%",
        fontSize: "1rem",
        color: "#333",
        textAlign: "left",
        lineHeight: "1.5",
      },
    

    container: {
        padding: "0", // Remove padding for the container
        margin: "0",
        fontFamily: "'Courier New', Courier, monospace",
        backgroundColor: "#f4f4e8",
        color: "#333",
        maxWidth: "100vw", // Ensure the container spans the full viewport width
        overflowX: "hidden", // Prevent horizontal scrolling
    },

  title: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "1rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Ensure at least 2 cards per row
    gap: "2rem", // Minimal gap between cards
    justifyItems: "center", // Center cards within the grid
    padding: "0 1rem", // Small padding to prevent cards from touching screen edges
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    width: "100%", // Ensure cards fill the available grid column space
  },

  sketchTitle: {
    fontSize: "1.2rem",
    margin: "1rem 0 0.5rem",
  },

  imageWrapper: {
    margin: "0 auto",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  enlargedImageWrapper: {
    position: "fixed", // Full-screen mode
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Darken the background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensure it appears above everything
  },

  image: {
    width: "100%", // Fill the container
    height: "auto", // Maintain aspect ratio
    objectFit: "contain", // Ensure image scales without distortion
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add subtle shadow
    transition: "transform 0.3s ease",
  },

  modalContent: {
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#fff",
    textAlign: "center",
    fontFamily: "'Courier New', Courier, monospace", // Match font with global styles
    fontSize: "1rem", // Adjust font size for readability
    color: "#333", // Match the text color with the page
    overflowY: "auto", // Allow scrolling inside the modal
    maxHeight: "90vh", // Limit modal height for scrolling
    maxWidth: "80vw",
  },

  modalImage: {
    width: "90%", // Maximize modal image width
    maxWidth: "800px", // Increase maximum modal image size
    height: "auto",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    objectFit: "contain",
  },

  enlargedImage: {
    width: "90vw", // Full-screen image width
    maxWidth: "1000px", // Remove max-width constraint
    maxHeight: "800px",
    borderRadius: "0", // Remove border radius for full-screen
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    overflowY: "hidden", // Prevent scrolling in overlay
  },

  closeButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0077cc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "'Courier New', Courier, monospace", // Match button font
  },

  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "1rem",
    textAlign: "center",
    fontFamily: "'Courier New', Courier, monospace",
  },
};

export default Sketchbook;
