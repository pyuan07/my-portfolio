"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiDownload, FiBriefcase, FiMapPin, FiExternalLink } from "react-icons/fi";

const TechStack = () => {
  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "C#", "ASP.NET", 
    "SQL", "Tailwind CSS", "Git", "Azure", "Docker"
  ];

  return (
    <div className="w-full overflow-hidden py-10 opacity-70">
       <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300">
            {tech} •
          </span>
        ))}
        {technologies.map((tech, index) => (
          <span key={`dup-${index}`} className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300">
            {tech} •
          </span>
        ))}
      </div>
    </div>
  );
};

import BackgroundDecoration from "@/components/layout/BackgroundDecoration";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 overflow-x-hidden">
      {/* Background Ambience */}
      <BackgroundDecoration />

      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
          >
            <div className="md:w-5/12 relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-[2rem] rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-500" />
               <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/about-picture.jpg"
                  alt="Pin Yuan"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-white p-4">
                  <p className="flex items-center gap-2 text-sm font-medium mb-1 opacity-90">
                    <FiMapPin /> Singapore & Malaysia
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium opacity-90">
                     Software Engineer
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-7/12 space-y-8">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
                >
                  Beyond the Code.
                </motion.h1>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                <p>
                  I'm a <span className="font-semibold text-gray-900 dark:text-white">Software Engineer</span> based in Malaysia (Johor) and Singapore, specializing in building RESTful APIs and responsive web applications using modern technologies. I graduated from <span className="font-semibold text-gray-900 dark:text-white">Asia Pacific University</span> with a Bachelor's degree in Software Engineering, earning First Class Honours.
                </p>
                <p>
                  I am driven by using code to make life more effective and efficient, which is exactly why I'm pursuing a career in Software Engineering and Web Development. Beyond my core work, I love exploring the latest technologies. In my free time, I build hobby projects to expand my technical skills and knowledge. I am also passionate about <span className="font-semibold text-gray-900 dark:text-white">AI integration</span> and its potential to transform applications.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                  <a
                  href="/resume/Resume_Pin Yuan.pdf"
                   download
                  className="group relative px-8 py-4 bg-transparent border-2 border-primary text-gray-900 dark:text-white rounded-full font-bold shadow-lg hover:bg-primary/10 hover:shadow-primary/30 hover:-translate-y-1 transform transition-all flex items-center gap-3 text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FiDownload className="group-hover:animate-bounce" /> Download Resume
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <TechStack />

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto py-20">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            My Journey
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                type: "work",
                role: "Software Engineer",
                org: "Morpheus Consulting Pte Ltd",
                period: "2023 - Present",
                desc: "Integrating and enhancing in-house systems to support business growth and improve user experience."
              },
              {
                type: "work",
                role: "Software Engineer (Freelance)",
                org: "Soft Rock Technologies Sdn Bhd",
                period: "2021 - 2022",
                desc: "Developed and customized Recipe Management Modules for smart factory solutions."
              },
              {
                type: "education",
                role: "BSc (Hons) in Software Engineering",
                org: "Asia Pacific University (APU)",
                period: "2019 - 2022",
                desc: "First Class Honours. Dual Degree with Staffordshire University."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                 <div className="md:flex items-start gap-6 group">
                   <div className="hidden md:flex flex-col items-end w-48 shrink-0 py-2 pr-8">
                     <span className="text-sm font-semibold text-primary">{item.period}</span>
                     <span className="text-xs text-gray-500 uppercase tracking-wider">{item.type}</span>
                   </div>
                   
                   <div className="absolute left-0 md:left-48 md:-ml-[9px] top-3 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-sm z-10 group-hover:scale-125 transition-transform" />
                   <div className="absolute left-[7px] md:left-48 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -z-10 last:hidden" />

                   <div className="glass-card p-6 rounded-2xl flex-1 hover:border-primary/30 transition-colors">
                      <div className="md:hidden mb-2 flex items-center gap-2 text-sm text-gray-500">
                        <span className="text-primary font-semibold">{item.period}</span> • <span>{item.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                      <p className="text-primary/80 font-medium mb-3 flex items-center gap-2">
                         {item.type === 'work' ? <FiBriefcase size={16}/> : <FiBookOpen size={16}/>} 
                         {item.org}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Professional Growth</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Certifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Certified ASP.NET Developer",
                issuer: "APU",
                year: "2022",
                color: "blue",
                url: "https://www.credly.com/badges/dc3aedb1-db0f-4840-901b-734947a5d661/linked_in_profile"
              },
              {
                title: "Azure Fundamentals",
                issuer: "Microsoft",
                year: "2022",
                color: "sky",
                url: "https://www.credly.com/badges/af683ef6-5be7-4831-94a1-4d9b988c69bf/linked_in_profile"
              }
            ].map((cert, i) => (
              <motion.a 
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl group cursor-pointer relative overflow-hidden flex flex-col items-start border border-transparent hover:border-primary/20 transition-all dark:bg-gray-800/40"
              >
                 <div className={`absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-${cert.color}-500 transform translate-x-2 translate-y-2`}>
                   <FiAward size={100} />
                 </div>
                 <div className="relative z-10 w-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-${cert.color}-100 dark:bg-${cert.color}-900/30 text-${cert.color}-600 flex items-center justify-center`}>
                        <FiAward size={24} />
                      </div>
                      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                        <FiExternalLink size={20} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white">{cert.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-6">{cert.issuer} • {cert.year}</p>
                    
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                      View Credential <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                    </span>
                 </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
