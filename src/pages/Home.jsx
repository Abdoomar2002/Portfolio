import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Home;
