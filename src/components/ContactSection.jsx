// src/components/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = ({ isDark }) => {
  return (
    <>
      <motion.h2
        id="contact"
        className={`text-4xl font-bold text-center mt-28 mb-16 ${isDark ? "text-white" : "text-gray-800"}`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact me
      </motion.h2>
      <motion.section
        className={`max-w-7xl mx-auto px-6 py-16 rounded-3xl shadow-xl flex flex-col md:flex-row items-start justify-between gap-12 transition-colors duration-300 ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Let's Talk</h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-800"} mb-8`}>
            Feel free to reach out to me for any questions, collaboration, or just to say hello!
          </p>
          <div className="space-y-4">
            <div className={`flex items-center text-lg ${isDark ? "text-gray-300" : "text-gray-800"}`}>
              <FaEnvelope className="mr-4 text-blue-500 text-2xl" />
              <a href="mailto:adeebaarif@gmail.com" className="hover:text-blue-600 transition-colors">adeebaarif@gmail.com</a>
            </div>
            <div className={`flex items-center text-lg ${isDark ? "text-gray-300" : "text-gray-800"}`}>
              <FaPhone className="mr-4 text-blue-500 text-2xl" />
              <a href="tel:+923334567890" className="hover:text-blue-600 transition-colors">+92 333 4567890</a>
            </div>
            <div className={`flex items-center text-lg ${isDark ? "text-gray-300" : "text-gray-800"}`}>
              <FaMapMarkerAlt className="mr-4 text-blue-500 text-2xl" />
              Rawalpindi, Pakistan
            </div>
          </div>
          <div className="mt-8 flex gap-6 text-3xl text-blue-500">
            <motion.a
              href="https://github.com/Adeeba-Arif"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adeeba-arif-a86851240/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 p-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <form className={`p-8 rounded-xl shadow-2xl flex flex-col gap-6 transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border border-gray-200"}`}>
            <input type="text" placeholder="Your Name" className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? "bg-gray-700 text-white border-gray-600" : "border-gray-300 text-gray-800"}`} />
            <input type="email" placeholder="Your Email" className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? "bg-gray-700 text-white border-gray-600" : "border-gray-300 text-gray-800"}`} />
            <textarea rows="6" placeholder="Your Message" className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? "bg-gray-700 text-white border-gray-600" : "border-gray-300 text-gray-800"}`} />
            <motion.button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ContactSection;