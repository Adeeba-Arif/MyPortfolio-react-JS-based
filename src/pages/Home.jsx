import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/adeeba.jpeg";
import project1 from "../assets/portfolio.png";
import project2 from "../assets/blog .png";
import project3 from "../assets/hostel img.png";
import project4 from "../assets/coffee web.png";
import project5 from "../assets/phone web.png";
import project6 from "../assets/react-based.png";
import { FaGithub, FaLinkedin, FaCode, FaPaintBrush, FaMobileAlt, FaGraduationCap, FaBriefcase, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const titles = ["MERN Stack Developer", "React JS Developer", "Full Stack Developer"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const resumeFadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  // State to track if dark mode is active
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitle];
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentTitle]);

  // Effect to listen for changes on the <html> element's class list
  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Create a MutationObserver to watch for changes on the html element's class attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    // Configure and start the observer
    observer.observe(document.documentElement, { attributes: true });

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <motion.section
      id="home"
      // Dynamically apply background and text colors based on theme
      className={`min-h-screen pt-28 px-6 md:px-16 transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-sky-50 to-white text-gray-900"}`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Projects Overview */}
      <motion.div id="projects" className="mt-28 max-w-7xl mx-auto px-6 md:px-16" variants={fadeInUp}>
        <h2 className={`text-3xl font-semibold mb-10 text-center ${isDark ? "text-white" : "text-gray-800"}`}>Projects Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
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
          ].map(({ title, desc, img }, i) => (
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
              <span className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-xl pointer-events-none animate-border-gradient"></span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services */}
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

      {/* Skills */}
      <motion.div id="skills" className="mt-28 max-w-7xl mx-auto px-6 md:px-16" variants={fadeInUp} initial="hidden" animate="visible">
        <h2 className={`text-3xl font-semibold mb-8 text-center ${isDark ? "text-white" : "text-gray-800"}`}>Skills</h2>
        <div className="relative overflow-hidden py-6 border-y border-gray-200">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[
              "React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion",
              "Git & GitHub", "REST APIs", "PHP", "MySQL", "Bootstrap", "ShadCN UI"
            ].map((skill, i) => (
              <React.Fragment key={i}>
                <div
                  className={`min-w-[140px] text-center text-blue-600 font-semibold text-sm md:text-base px-4 py-3 rounded-xl shadow-md hover:scale-110 transition-transform duration-300 ${isDark ? "dark-skill-card" : "light-skill-card"}`}
                >
                  {skill}
                </div>
              </React.Fragment>
            ))}
              {/* Duplicate the skills to create a seamless infinite scroll effect */}
            {[
              "React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion",
              "Git & GitHub", "REST APIs", "PHP", "MySQL", "Bootstrap", "ShadCN UI"
            ].map((skill, i) => (
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

      {/* Resume Section with Education and Experience */}
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

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className={`mt-20 py-8 text-center text-sm ${isDark ? "text-gray-300" : "text-black"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Adeeba Arif. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes border-gradient {
          0% {
            border-color: #3b82f6;
            box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6;
          }
          50% {
            border-color: #60a5fa;
            box-shadow: 0 0 20px #60a5fa, 0 0 30px #60a5fa, 0 0 40px #60a5fa, 0 0 50px #60a5fa;
          }
          100% {
            border-color: #3b82f6;
            box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6;
          }
        }
        .animate-border-gradient {
          animation: border-gradient 3s infinite;
          pointer-events: none;
        }

        .light-skill-card {
          box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3), 0 0 10px rgba(0, 191, 255, 0.4);
          background-color: #f0f9ff;
        }

        .dark-skill-card {
          box-shadow: 0 4px 15px rgba(0, 102, 255, 0.5), 0 0 10px rgba(0, 102, 255, 0.6);
          background-color: #1f2937; /* Darker background for dark mode skills */
          color: #bfdbfe; /* Lighter text color for dark mode skills */
        }
      `}</style>
    </motion.section>
  );
};

export default Home;