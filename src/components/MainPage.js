import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import ExperienceAndExtracurriculars from "./ExperienceAndExtracurriculars";
import Contact from "./Contact";

const MainPage = () => (
    
  <div>
    {/* About Me Section */}
    <section id="bio">
      <Bio />
    </section>
    {/* Projects Section */}
    <section id="projects">
      <Projects />
    </section>
    {/* Experiences Section */}
    <section id="experiences">
      <ExperienceAndExtracurriculars />
    </section>
    {/* Contact Section */}
    <section id="contact">
      <Contact />
    </section>
  </div>
);

export default MainPage;