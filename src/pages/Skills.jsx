import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Framer Motion"];

  return (
    <motion.section
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;