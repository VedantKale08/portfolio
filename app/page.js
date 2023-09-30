"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeV1 from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "work", "skills"];
      let currentActiveSection = "";
      for (const s of sections) {
        const element = document.getElementById(s);
        if (s) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActiveSection = s;
          }
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header activeSection={activeSection}/>
      <HomeV1 />
      <Projects />
      <Skills />
      <Work />
      <About />
      <Footer />
    </main>
  );
}
