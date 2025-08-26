"use client";

import Link from "next/link";
import { FiBriefcase } from "react-icons/fi";
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

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
          <FiBriefcase size={20} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {experience.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {experience.company}
          </p>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {experience.description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-purple-600 dark:text-purple-400 font-medium">
          {experience.period}
        </span>
      </div>
    </motion.div>
  );
};

const FeaturedExperience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and key roles that have shaped my expertise as a developer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/resume"
            className="inline-block px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors"
          >
            View Full Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience; 