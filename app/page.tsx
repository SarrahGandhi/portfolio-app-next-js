"use client";

"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landing/Banner";
// import Highlights from "@/components/highlights/highlights";
import Projects from "@/components/projects/projects";
// import Contact from "@/components/contact/contact";
import About from "@/components/about/AboutMe";
import Skills from "@/components/stack/Skills";
import Experiences from "@/components/Experience/Experiences";
import Footer from "@/components/footer/footer";
import { useSmoothSectionScroll } from "@/hooks/useSmoothSectionScroll";

export default function Home() {
  // Define the section IDs in order
  const sectionIds = [
    "banner",
    "about-me",
    "my-stack",
    "my-experience",
    "my-projects",
    "footer",
  ];

  // Initialize smooth section scrolling
  // const { currentSectionIndex, scrollToSection, isScrolling } =
  //   useSmoothSectionScroll(sectionIds);

  return (
    <>
      <Navbar />
      <div className="landing-container">
        <Landing />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        {/* <Highlights />
        <Contact /> */}
        <Footer />
      </div>
    </>
  );
}