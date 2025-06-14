// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/portfolio.png"; // Ensure correct paths
import project2 from "../assets/blog .png";
import project3 from "../assets/hostel img.png";
import project4 from "../assets/coffee web.png";
import project5 from "../assets/phone web.png";
import project6 from "../assets/react-based.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern React portfolio using Framer Motion, showcasing projects, resume, and skills.",
    img: project1,
  },
  {
    title: "Blog Platform",
    desc: "React-based blog website having different pages and layouts.",
    img: project2,
  },
  {
    title: "Hostel Meal Management System",
    desc: "PHP/MySQL based system for managing hostel meals, menus, and student attendance.",
    img: project3,
  },
  {
    title: "Coffee Shop Website",
    desc: "Beautiful HTML/CSS website for a coffee shop with smooth transitions, grid layout and full responsiveness.",
    img: project4,
  },
  {
    title: "Phone Store (Responsive)",
    desc: "HTML/CSS commercial website for selling phones with clean UI and full responsiveness.",
    img: project5,
  },
  {
    title: "E-commerce Website",
    desc: "React-based e-commerce app with product listings, cart, and dynamic filtering.",
    img: project6,
  },
];

const ProjectsSection = ({ isDark }) => {
  return (
    <motion.div id="projects" className="mt-28 max-w-7xl mx-auto px-6 md:px-16" variants={fadeInUp}>
      <h2 className={`text-3xl font-semibold mb-10 text-center ${isDark ? "text-white" : "text-gray-800"}`}>Projects Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, desc, img }, i) => (
          <motion.div
            key={i}
            className={`rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 relative ${isDark ? "bg-gray-800 text-white" : "bg-white"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <img src={img} alt={title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-sm`}>{desc}</p>
            </div>
            {/* The animated border will need the CSS in the main Home component or a shared CSS file */}
            <span className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-xl pointer-events-none animate-border-gradient"></span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;