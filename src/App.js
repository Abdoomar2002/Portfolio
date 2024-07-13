// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
