"use client";

import Link from "next/link";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Software Engineer",
    company: "Morpheus Consulting Pte Ltd, Singapore",
    period: "2023 - Present",
    description: "Engineered real-time & high-traffic data pipelines, enhanced business systems, implemented monitoring solutions, and provided production support for the system and backoffice.",
  },
  {
    id: "exp2",
    title: "Software Engineer (Freelance)",
    company: "Soft Rock Technologies Sdn Bhd, Malaysia",
    period: "2021 - 2022",
    description: "Mainly involved in the development, enhancement and customization of Recipe Management Module.",
  },
  {
    id: "exp3",
    title: "Software Engineer (Internship)",
    company: "Soft Rock Technologies Sdn Bhd, Malaysia",
    period: "2021",
    description: "Involved in company software design, development, integration and testing. Developed Smart Factory Website, especially Recipe Management Module.",
  },
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 md:mb-12 ${
      isEven ? "md:flex-row-reverse" : ""
    }`}>
      <div className="hidden md:block w-5/12"></div>
      
      <div className="z-20 flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg shrink-0">
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:w-5/12 mt-4 md:mt-0"
      >
        <div className="glass-card p-6 rounded-2xl relative group">
          <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white/50 dark:bg-gray-800/50 rotate-45 transform ${
            isEven ? "-right-2 border-r border-t border-white/20" : "-left-2 border-l border-b border-white/20"
          }`}></div>
          
          <div className="flex flex-col gap-2 mb-4">
             <div className="flex items-center gap-2 text-sm text-primary dark:text-primary-foreground font-medium bg-primary/10 w-fit px-3 py-1 rounded-full">
              <FiCalendar size={14} />
              {experience.period}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium">
              <FiBriefcase size={16} />
              {experience.company}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeaturedExperience = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 -z-10 opacity-30">
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
             className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-primary-foreground text-sm font-semibold mb-4"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional career path and key roles that have shaped my skills in software engineering.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2"></div>
          
          <div className="flex flex-col pl-10 md:pl-0">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border hover:border-primary/50 text-gray-900 dark:text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            View Full Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience; 