// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const skills = [
  "React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion",
  "Git & GitHub", "REST APIs", "PHP", "MySQL", "Bootstrap", "ShadCN UI"
];

const SkillsSection = ({ isDark }) => {
  return (
    <motion.div id="skills" className="mt-28 max-w-7xl mx-auto px-6 md:px-16" variants={fadeInUp} initial="hidden" animate="visible">
      <h2 className={`text-3xl font-semibold mb-8 text-center ${isDark ? "text-white" : "text-gray-800"}`}>Skills</h2>
      <div className="relative overflow-hidden py-6 border-y border-gray-200">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* Render skills twice to create a seamless loop */}
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`min-w-[140px] text-center text-blue-600 font-semibold text-sm md:text-base px-4 py-3 rounded-xl shadow-md hover:scale-110 transition-transform duration-300 ${isDark ? "dark-skill-card" : "light-skill-card"}`}
            >
              {skill}
            </div>
          ))}
          {skills.map((skill, i) => (
            <div
              key={`duplicate-${i}`}
              className={`min-w-[140px] text-center text-blue-600 font-semibold text-sm md:text-base px-4 py-3 rounded-xl shadow-md hover:scale-110 transition-transform duration-300 ${isDark ? "dark-skill-card" : "light-skill-card"}`}
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;