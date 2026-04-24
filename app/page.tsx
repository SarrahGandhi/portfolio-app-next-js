"use client";

import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landing/Banner";
import Projects from "@/components/projects/projects";
import About from "@/components/about/AboutMe";
import Skills from "@/components/stack/Skills";
import Experiences from "@/components/Experience/Experiences";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <Landing />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </>
  );
}