// src/Home.jsx (The main orchestrated component)
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../app.css'
// Import the new separate components
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import FooterComponent from "../components/FooterComponent";

const titles = ["MERN Stack Developer", "React JS Developer", "Full Stack Developer"];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDark, setIsDark] = useState(false); // State to track if dark mode is active

  useEffect(() => {
    const fullText = titles[currentTitle];
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentTitle]);

  // Effect to listen for changes on the <html> element's class list
  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Create a MutationObserver to watch for changes on the html element's class attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    // Configure and start the observer
    observer.observe(document.documentElement, { attributes: true });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="home"
      className={`min-h-screen pt-28 px-6 md:px-16 transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-sky-50 to-white text-gray-900"}`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <HeroSection isDark={isDark} displayText={displayText} />

      {/* About Section */}
      <AboutSection isDark={isDark} />

      {/* Projects Overview */}
      <ProjectsSection isDark={isDark} />

      {/* Services */}
      <ServicesSection isDark={isDark} />

      {/* Skills */}
      <SkillsSection isDark={isDark} />

      {/* Resume Section with Education and Experience */}
      <ResumeSection isDark={isDark} />

      {/* Contact Section */}
      <ContactSection isDark={isDark} />

      {/* Footer */}
      <FooterComponent isDark={isDark} />

      {/* Styles for animations specific to this layout, typically in global CSS */}
      <style jsx>{`
        @keyframes border-gradient {
          0% {
            border-color: #3b82f6;
            box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6;
          }
          50% {
            border-color: #60a5fa;
            box-shadow: 0 0 20px #60a5fa, 0 0 30px #60a5fa, 0 0 40px #60a5fa, 0 0 50px #60a5fa;
          }
          100% {
            border-color: #3b82f6;
            box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6;
          }
        }
        .animate-border-gradient {
          animation: border-gradient 3s infinite;
          pointer-events: none;
        }

        .light-skill-card {
          box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3), 0 0 10px rgba(0, 191, 255, 0.4);
          background-color: #f0f9ff;
        }

        .dark-skill-card {
          box-shadow: 0 4px 15px rgba(0, 102, 255, 0.5), 0 0 10px rgba(0, 102, 255, 0.6);
          background-color: #1f2937; /* Darker background for dark mode skills */
          color: #bfdbfe; /* Lighter text color for dark mode skills */
        }
      `}</style>
    </motion.section>
  );
};

export default Home;