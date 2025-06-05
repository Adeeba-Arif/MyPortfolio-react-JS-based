// src/components/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building fast, scalable, and responsive web applications with modern technologies like React, Node.js, and MongoDB.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces focused on usability and seamless user experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimization",
    description: "Creating mobile-first designs and optimizing websites for smooth performance on all devices.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 30px rgba(0, 102, 255, 0.25)"
  }
};

const ServicesSection = ({ isDark }) => {
  return (
    <section id="services" className="mt-28 max-w-7xl mx-auto px-6 md:px-16 py-16">
      <motion.h2
        className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-800"}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map(({ icon, title, description }, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={`relative group rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-blue-500 ${isDark ? "bg-gray-800 text-white" : "bg-white"}`}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl group-hover:blur-sm group-hover:scale-110 transition-all duration-500"></div>

            <div className="relative z-10 text-blue-600 text-5xl mb-6">{icon}</div>
            <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;