import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p>I am a passionate web developer with experience in building responsive websites using modern technologies like React, Tailwind CSS, and more.</p>
    </motion.section>
  );
};

export default About;