import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import theme from "./styles/theme";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
import Sketchbook from "./components/Sketchbook";
import './App.css';
// import MyReviews from "./components/MyReviews";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === "/") {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname, hash]);

  return null;
};


const App = () => (

  <Router>
    <div style={styles.container}>
      <Header />
      <ScrollToHash />
      <div style={styles.gradientOverlay}></div>
      <main style={styles.main}>
        <Routes>
          {/* Main Page: Bio, Projects, Experiences */}
          <Route path="/" element={<MainPage />} />
          {/* Sketchbook and MyReviews are separate pages */}
          <Route path="/sketchbook" element={<Sketchbook />} />
          {/* <Route path="/myreviews" element={<MyReviews />} /> */}
          {/* Contact stays on the same page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  </Router>
);


const styles = {
  container: {
    fontFamily: "'Courier New', Courier, monospace",
    backgroundColor: "#FFFFFF",
    color: "#3a3a3a",
    padding: "1rem",
    position: "relative", // Required for pseudo-elements to work
  },
  gradientOverlay: {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to right, #1E3D34, #FFFFFF 30%, #FFFFFF 70%, #FFB6C1)",
    zIndex: -1, // Push the gradient behind content
  },
  main: {
    margin: "0 auto",
    maxWidth: "75%",
    backgroundColor: "#FFFFFF", // Ensure the middle stays white
    padding: "2rem",
    borderRadius: "12px", // Optional for cleaner edges
    position: "relative",
  },
};

export default App;
