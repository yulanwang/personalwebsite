import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
import sketches from "../data/sketches";
import Contact from "./Contact";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

Modal.setAppElement("#root");

// set arrow components 

// Corrected Arrow Components
const NextArrow = ({ onClick }) => (
    <div 
        style={styles.arrowRight} 
        onClick={(event) => {
            event.stopPropagation(); // Prevent triggering the modal
            onClick(); // Call the slider navigation function
        }}>
      &#8250;
    </div>

);
  
const PrevArrow = ({ onClick }) => (
    <div 
        style={styles.arrowLeft} 
        onClick={(event) => {
            event.stopPropagation(); // Prevent triggering the modal
            onClick(); // Call the slider navigation function
        }}>
      &#8249;
    </div>
);
  

const Sketchbook = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSketch, setSelectedSketch] = useState(null);
  const [hoveredSketch, setHoveredSketch] = useState(null);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
            Each piece represents a feeling, a moment, and things I saw that are
            precious to me. Explore the artwork and read the stories behind each
            sketch.
          </p>
        </div>
      </section>

      {/* Sketch Cards */}
      <div style={styles.grid}>
        {sketches.map((sketch) => (
          <div
            key={sketch.id}
            style={{
                ...styles.card,
                ...(hoveredSketch === sketch.id ? styles.cardHover : {}),
            }}
            onClick={() => openModal(sketch)}
            onMouseEnter={() => setHoveredSketch(sketch.id)}
            onMouseLeave={() => setHoveredSketch(null)}
          >

              {/* Show reference image on hover if available */}
              {sketch.pages ? (

                    <Slider {...sliderSettings}>
                        {sketch.pages.map((page, index) => (
                        <img
                            key={index}
                            src={page}
                            alt={`${sketch.title} page ${index + 1}`}
                            style={styles.sliderImage}
                        />
                        ))}
                    </Slider>
              ) : (
                  <img
                    src={
                        hoveredSketch === sketch.id && sketch.referenceImage
                        ? sketch.referenceImage
                        : sketch.imageUrl
                    }
                    alt={sketch.title}
                    style={styles.image}
                  />
                )}
            <h2 style={styles.sketchTitle}>{sketch.title}</h2>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Modal */}
      <AnimatePresence>
        {modalIsOpen && selectedSketch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={styles.modalOverlay}
            onClick={closeModal}
          >
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>{selectedSketch.title}</h2>

              {/* Slideshow for Multi-Page Sketches in Modal */}
              {selectedSketch.pages ? (
                <Slider {...sliderSettings}>
                  {selectedSketch.pages.map((page, index) => (
                    <img
                      key={index}
                      src={page}
                      alt={`${selectedSketch.title} page ${index + 1}`}
                      style={{
                        ...styles.modalImage,
                        ...(isImageEnlarged ? styles.enlargedImage : {}),
                      }}
                      onClick={toggleImageSize}
                    />
                  ))}
                </Slider>
              ) : (
                // Single Image Sketch
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
              )}
              <p style={styles.description}>{selectedSketch.description}</p>
              <button
                style={{
                    ...styles.closeButton,
                    ...(isHovered ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={styles.grainOverlay}></div>
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
        backgroundColor: "#FFFFFF", // Secondary background
        color: "var(--dark-text)", // Text color
        borderRadius: "10px",
      },
    
    
    introImage: {
        width: "50%", 
        height: "auto",
        borderRadius: "8px",
    },
    
    introText: {
        width: "50%",
        fontSize: "1rem",
        color: "var(--dark-text)",
        textAlign: "left",
        lineHeight: "1.5",
    },
    

    container: {
        padding: "0", // Remove padding for the container
        margin: "0",
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: "#FFFFFF",
        color: "var(--dark-text)", // Timeless dark for text
        maxWidth: "100vw", // Ensure the container spans the full viewport width
        overflowX: "hidden", // Prevent horizontal scrolling
    },

    title: {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "1rem",
        color: "var(--dark-text)",
        textShadow: "1px 1px 4px #1E3D34",
    },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Ensure at least 2 cards per row
    gap: "2rem", // Minimal gap between cards
    justifyItems: "center", // Center cards within the grid
    padding: "0 1rem", // Small padding to prevent cards from touching screen edges
  },

  card: {
    border: "1px solid #e0e0e0", // Soft neutral border
    backgroundColor: "#FFFFFF", // Timeless white
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    width: "100%", // Ensure cards fill the available grid column space
    overflow: "hidden", // Prevent content overflow
    position: "relative",
    color: "var(--secondary-bg)",
  },

  cardHover: {
    transform: "scale(1.03)",
    border: "2px solid var(--hover-accent)"
  },

  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    padding: "1rem",
    backgroundColor: "rgb(255, 79, 0)", // Bold orange
    color: "#FFFFFF", // White text
  },


  sliderImage: {
    height: "300px",        // Constrain the image height to a consistent value
    width: "100%",             // Automatically adjust width based on aspect ratio
    objectFit: "contain",      // Ensure the whole image fits without distortion
    borderRadius: "8px",       // Optional for rounded edges
    transition: "transform 0.3s ease",
    margin: "0 auto",   
    backgroundColor: "var(--secondary-bg)", // Neutral soft pink
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
    height: "800px",
    width: "100%",
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
    maxHeight: "300px", // Match height with slider for single images
    objectFit: "contain", // Maintain aspect ratio
    transition: "transform 0.3s ease",
  },

  modalContent: {
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#fff",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
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
    overflowY: "hidden", 
  },

  closeButton: {
    padding: "0.75rem 1.5rem",
    color: "var(--dark-text)",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "background-color 0.3s ease",
    backgroundColor: "var(--secondary-bg)", 
  },

  buttonHover: {
    backgroundColor: "var(--hover-accent)", 
    transform: "translateY(-2px)",
  },

  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "1rem",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
  },

  // style for arrows in sliders
  
  arrowRight: {
    position: "absolute",
    top: "50%",
    right: "5px",
    transform: "translateY(-50%)",
    fontSize: "4rem",
    color: "#FFFFFF",
    cursor: "pointer",
    zIndex: 2,
  },

  arrowLeft: {
    position: "absolute",
    top: "50%",
    left: "5px",
    transform: "translateY(-50%)",
    fontSize: "4rem",
    color: "#FFFFFF",
    cursor: "pointer",
    zIndex: 2,
  },

  grainOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none", // Ensure it doesn't interfere with interactions
    background: "url('/img/film-grain.png')", // Use a transparent grain texture
    opacity: 0.15,
    mixBlendMode: "overlay",
    animation: "grain 1s steps(10) infinite",
    zIndex: 1000, // Ensure it sits on top
  },
  flickerEffect: {
    animation: "flicker 2s infinite",
  },

};

export default Sketchbook;
