import React from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import StarsBackground from "./components/StarsBackground";
import LaunchIntro from "./components/LaunchIntro";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Training from "./sections/Training";
import Contact from "./sections/Contact";

const App: React.FC = () => {
  return (
    <>
      <StarsBackground />
      <LaunchIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Contact />
      </main>
      <footer>
        <span>Built with ♥ · Hamzeh Jarrar · Palestine 🇵🇸</span>
      </footer>
    </>
  );
};

export default App;