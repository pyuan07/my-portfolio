"use client";
import Link from "next/link";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";
import MagneticButton from "@/components/ui/MagneticButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full mix-blend-multiply blur-[100px] animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full mix-blend-multiply blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-pink-200/40 dark:bg-pink-900/20 rounded-full mix-blend-multiply blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-primary-foreground text-sm font-medium"
              >
                👋 Welcome to my portfolio
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400">
                  Ng Pin Yuan
                </span>
              </h1>

              <div className="text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 h-[60px] lg:h-auto">
                <span className="mr-2">I am a</span>
                <span className="text-gray-900 dark:text-gray-100 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-bold">
                   <Typewriter
                      options={{
                        strings: [
                          "Software Engineer",
                          "Full Stack Developer",
                          "Problem Solver"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                </span>
              </div>
            </div>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building exceptional digital experiences with modern technologies. 
              Passionate about creating elegant solutions to complex problems and delivering 
              high-quality software.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >


              <Link href="/contact">
                <MagneticButton className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me <FiMail className="group-hover:animate-wiggle" />
                  </span>
                </MagneticButton>
              </Link>

              <a
                href="/resume/Resume_Pin Yuan.pdf"
                download
                className="group px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-sm"
              >
                <FiDownload className="group-hover:animate-bounce" /> 
                Download Resume
              </a>
            </motion.div>

            <motion.div 
              className="flex gap-6 items-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { href: "https://github.com/pyuan07", icon: FiGithub, label: "GitHub", hoverColor: "text-gray-900 dark:hover:text-white" },
                { href: "https://linkedin.com/in/pinyuanng", icon: FiLinkedin, label: "LinkedIn", hoverColor: "hover:text-[#0077b5]" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 dark:text-gray-400 ${social.hoverColor} transition-colors transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-[6px] border-white/20 dark:border-white/10 shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                 <Image
                  src="/profile.png"
                  alt="Pin Yuan"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-10 glass-card p-3 rounded-full flex items-center gap-3 pr-6"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shadow-sm">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">2+ Years</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-10 glass-card p-3 rounded-full flex items-center gap-3 pr-6"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 shadow-sm">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Based in</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Singapore & Malaysia</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
