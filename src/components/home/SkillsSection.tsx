"use client";

import { FiCode, FiDatabase, FiServer, FiCloud, FiCpu } from "react-icons/fi";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

// Define skill proficiency levels
type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Define skill with proficiency
interface Skill {
  name: string;
  level: ProficiencyLevel;
}

// Color mapping for proficiency levels
const proficiencyColors: Record<ProficiencyLevel, string> = {
  Beginner: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Intermediate:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Advanced:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Expert: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

const SkillCard = ({
  icon: Icon,
  title,
  skills,
  className = "",
}: {
  icon: IconType;
  title: string;
  skills: Skill[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`text-sm px-3 py-1 rounded-full flex items-center gap-1 ${
              proficiencyColors[skill.level]
            }`}
          >
            <span>{skill.name}</span>
            <span className="text-xs opacity-80">• {skill.level}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: "Frontend",
      skills: [
        { name: "React", level: "Advanced" as ProficiencyLevel },
        { name: "JavaScript", level: "Advanced" as ProficiencyLevel },
        { name: "TypeScript", level: "Advanced" as ProficiencyLevel },
        { name: "HTML", level: "Advanced" as ProficiencyLevel },
        { name: "Redux", level: "Intermediate" as ProficiencyLevel },
      ],
    },
    {
      icon: FiServer,
      title: "Backend",
      skills: [
        { name: "C#", level: "Advanced" as ProficiencyLevel },
        { name: "ASP.NET & Core", level: "Advanced" as ProficiencyLevel },
        { name: "ASP.NET MVC", level: "Advanced" as ProficiencyLevel },
        { name: "Entity Framework", level: "Advanced" as ProficiencyLevel },
        { name: "RESTful APIs", level: "Advanced" as ProficiencyLevel },
        { name: "Java", level: "Intermediate" as ProficiencyLevel },
      ],
    },
    {
      icon: FiDatabase,
      title: "Database",
      skills: [
        { name: "MSSQL", level: "Advanced" as ProficiencyLevel },
        { name: "Redis", level: "Advanced" as ProficiencyLevel },
        { name: "T-SQL", level: "Advanced" as ProficiencyLevel },
        { name: "RabbitMQ", level: "Intermediate" as ProficiencyLevel },
      ],
    },
    {
      icon: FiCloud,
      title: "DevOps",
      skills: [
        { name: "Docker", level: "Beginner" as ProficiencyLevel },
        { name: "Azure/AWS", level: "Beginner" as ProficiencyLevel },
        { name: "Vercel", level: "Beginner" as ProficiencyLevel },
      ],
    },
    {
      icon: FiCpu,
      title: "Tools & Others",
      skills: [
        { name: "Agile/Scrum", level: "Advanced" as ProficiencyLevel },
        { name: "Git/TortoiseSVN", level: "Advanced" as ProficiencyLevel },
        { name: "SSMS", level: "Advanced" as ProficiencyLevel },
        { name: "Production Support", level: "Advanced" as ProficiencyLevel },
        { name: "Visual Studio", level: "Advanced" as ProficiencyLevel },
        { name: "Postman", level: "Advanced" as ProficiencyLevel },
        { name: "Swagger", level: "Advanced" as ProficiencyLevel },
        { name: "Cursor AI", level: "Intermediate" as ProficiencyLevel },
      ],
      isWide: true, // Mark this category to span two columns
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            My Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            I've gained expertise in various technologies through hands-on
            projects and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Beginner
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Intermediate
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Advanced
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Expert
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              className={category.isWide ? "md:col-span-2 lg:col-span-3" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
