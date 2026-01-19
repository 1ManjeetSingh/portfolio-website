"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
    </div>
  );
}