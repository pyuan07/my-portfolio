"use client";

import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/pyuan07",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={20} />,
      url: "https://linkedin.com/in/pinyuanng",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={20} />,
      url: "mailto:pinyuan13225@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed z-50 bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}

      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <motion.div
          className="container mx-auto px-4"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">
            {/* Logo & Bio */}
            <motion.div variants={itemVariants} className="max-w-md">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Pin Yuan
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Software Engineer specializing in modern web technologies and
                enterprise applications. Based in Singapore and Malaysia.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>

            {/* Connect */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start md:items-end"
            >
              <p className="text-sm font-medium text-gray-800 dark:text-white mb-3">
                Connect
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transform hover:scale-110 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-4"
          />

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            <p>© {new Date().getFullYear()} Pin Yuan. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
