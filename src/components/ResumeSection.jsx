// src/components/ResumeSection.jsx
import React from "react";
import { motion } from "framer-motion";
import myCertificate from "../assets/Adeeba Arif.png"
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const resumeFadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ResumeSection = ({ isDark }) => {
  return (
    <motion.section
      id="resume"
      className="mt-28 max-w-7xl mx-auto px-6 py-16"
      initial="initial"
      whileInView="whileInView"
      transition={resumeFadeIn.transition}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-white" : "text-gray-800"}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        RESUME
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Section */}
        <motion.div
          className={`p-6 rounded-lg border border-gray-200 shadow-lg transition-colors duration-300 ${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white"}`}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6 flex items-center text-blue-600">
            <FaGraduationCap className="mr-3 text-4xl" /> Education
          </h3>
          <div className="space-y-8">
            {/* Bachelor of Computer Science */}
            <motion.div
              className="relative pl-8 border-l-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
              <p className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Bachelor of Computer Science</p>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>2022-Present</p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-md`}>City University Of Science And Information Technology Peshawar</p>
            </motion.div>
            {/* Web development course */}
            <motion.div
              className="relative pl-8 border-l-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
              <p className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Web Development Course</p>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>Jan 2024-May 2025</p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-md`}>SMIT Peshawar</p>
            </motion.div>
          </div>
          {/* Devspire Certificate */}
          <motion.div
              className="relative pl-8 border-l-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
              <p className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Devspire Certificate</p>
              <img
                src= {myCertificate}
                alt="Devspire Web Development Certificate"
                title="Devspire Web Development Certificate"
                className="w-full h-auto rounded-lg shadow-md mt-2"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found"; }}
              />
            </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className={`p-6 rounded-lg border border-gray-200 shadow-lg transition-colors duration-300 ${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white"}`}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6 flex items-center text-blue-600">
            <FaBriefcase className="mr-3 text-4xl" /> Experience
          </h3>
          <div className="space-y-8">
            {/* MERN Stack Developer */}
            <motion.div
              className="relative pl-8 border-l-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
              <p className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>MERN Stack Developer</p>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>Jan 2024 - present</p>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-md`}>Beginner Level Learning Complete</p>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm mt-2`}>
                Beginner level techniques in MongoDB, Express.js, React.js
                and Node.js, building high-performance, scalable web
                applications with the MERN stack, one of the most in-demand tech
                stacks today.
              </p>
            </motion.div>
            {/* React Js Developer */}
            <motion.div
              className="relative pl-8 border-l-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full"></span>
              <p className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>React Js Developer</p>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>Jan 2024 - present</p>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm mt-2`}>
                Experienced React JS developer proficient in crafting innovative web
                applications, dedicated to cross-functional teamwork, delivering
                scalable and maintainable code, and staying current with cutting-
                edge technologies and best practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;