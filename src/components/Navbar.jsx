import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "resume", to: "resume" },
  { name: "services", to: "services" },
  { name: "About me", to: "about" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex justify-between items-center
        shadow transition-colors duration-300
        ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
      `}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="text-xl font-bold text-blue-600 cursor-pointer"
      >
        Adeeba Arif
      </ScrollLink>

      {/* Links */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80} // adjust scroll for fixed navbar
                className="text-sm font-medium cursor-pointer hover:text-blue-700 transition duration-200"
                activeClass="text-blue-600"
                spy={true}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark/light theme"
          className="text-2xl focus:outline-none"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
