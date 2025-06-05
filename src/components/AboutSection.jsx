// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/adeeba.jpeg"; // Ensure this path is correct

const AboutSection = ({ isDark }) => {
  return (
    <motion.section
      id="about"
      className={`mt-28 max-w-7xl mx-auto px-6 md:px-16 py-16 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12 transition-colors duration-300 ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="md:w-1/3 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img
          src={profilePic}
          alt="Adeeba Arif"
          className={`rounded-xl w-64 h-64 md:w-72 md:h-72 object-cover shadow-2xl border-4 ${isDark ? "border-gray-600" : "border-gray-700"}`}
        />
      </motion.div>

      <motion.div
        className="md:w-2/3 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p
          className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          MERN Stack Developer
        </motion.p>
        <motion.h2
          className="text-2xl text-blue-500 font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Hello! I'm Adeeba Arif
        </motion.h2>
        <motion.p
          className={`leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-800"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        >
          I am an Beginner Level MERN Stack developer with a strong understanding of APIs,
          Redux Toolkit, MUI, Tailwind and Node.js. I excel at developing web applications
          using React.js, Next.js, Node.js, Express.js and MongoDB. I consistently deliver high-
          quality software solutions that meet business requirements and enhance the
          user experience.
        </motion.p>

        <motion.div
          className={`text-lg space-y-2 mb-8 ${isDark ? "text-gray-300" : "text-gray-800"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <p><span className="font-semibold text-blue-500 w-24 inline-block">Email</span> : Adeebaarif@gmail.com </p>
          <p><span className="font-semibold text-blue-500 w-24 inline-block">From</span> : Rawalpindi, Pakistan </p>
          <p><span className="font-semibold text-blue-500 w-24 inline-block">Language</span> : English, Urdu, Punjabi </p>
        </motion.div>

        <motion.button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6, type: "spring", stiffness: 150 }}
          viewport={{ once: true }}
        >
          Hire Me
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;