// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/adeeba.jpeg"; // Ensure this path is correct

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HeroSection = ({ isDark, displayText }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between pt-24 gap-12 max-w-7xl mx-auto"
      variants={fadeInUp}
    >
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <motion.img
          src={profilePic}
          alt="Adeeba Arif"
          className={`rounded-xl w-72 h-72 md:w-80 md:h-80 object-cover shadow-xl border-4 ${isDark ? "border-gray-700" : "border-white"}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.div className="md:w-1/2 text-center md:text-left" variants={fadeInUp}>
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Hi, I’m <span className="text-blue-600">Adeeba Arif</span>
        </h1>
        <p className="text-xl text-blue-600 h-10 font-mono tracking-wide">{displayText}</p>
        <p className={`mt-4 max-w-lg mx-auto md:mx-0 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          I build modern, elegant, and responsive web apps using the MERN stack.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl text-blue-600">
          <a href="https://github.com/Adeeba-Arif" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;