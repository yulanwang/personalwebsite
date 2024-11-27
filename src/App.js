import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import theme from "./styles/theme";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
import Sketchbook from "./components/Sketchbook";
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
    backgroundColor: "#f4f4e8",
    color: "#3a3a3a",
    padding: "1rem",
  },
  main: {
    margin: "0 auto",
    maxWidth: "800px",
  },
};
  
export default App;
