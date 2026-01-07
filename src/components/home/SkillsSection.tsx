"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiLayout, FiServer, FiSettings, FiTool } from "react-icons/fi";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: FiLayout,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML", level: "Advanced" },
      { name: "Redux", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: FiServer,
    skills: [
      { name: "C#", level: "Advanced" },
      { name: "ASP.NET & Core", level: "Advanced" },
      { name: "ASP.NET MVC", level: "Advanced" },
      { name: "Entity Framework", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
    ],
  },
  {
    title: "Database",
    icon: FiDatabase,
    skills: [
      { name: "MSSQL", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "T-SQL", level: "Advanced" },
      { name: "RabbitMQ", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps",
    icon: FiSettings,
    skills: [
      { name: "Docker", level: "Beginner" },
      { name: "Azure/AWS", level: "Beginner" },
      { name: "Vercel", level: "Beginner" },
      { name: "CI/CD", level: "Beginner" },
    ],
  },
  {
    title: "Tools & Others",
    icon: FiTool,
    skills: [
      { name: "Agile/Scrum", level: "Advanced" },
      { name: "Git/TortoiseSVN", level: "Advanced" },
      { name: "SSMS", level: "Advanced" },
      { name: "Production Support", level: "Advanced" },
      { name: "Visual Studio", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Swagger", level: "Advanced" },
      { name: "Cursor AI", level: "Intermediate" },
    ],
  },
];

const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case "Beginner":
      return "bg-blue-500";
    case "Intermediate":
      return "bg-green-500";
    case "Advanced":
      return "bg-purple-500";
    case "Expert":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-sm font-medium mb-6"
        >
          Technical Proficiency
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          My Skills & Expertise
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           viewport={{ once: true }}
           className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
        >
          A comprehensive overview of the technologies and tools I use to build scalable and efficient solutions.
        </motion.p>

        {/* Legend */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16 text-sm"
        >
          {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${getLevelColor(level as SkillLevel)}`}></span>
              <span className="text-gray-600 dark:text-gray-400">{level}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-2xl ${
                category.title === "Tools & Others" ? "md:col-span-2 lg:col-span-3" : "h-full"
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 pl-3 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)} group-hover:scale-125 transition-transform`}></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                    
                    {/* Tooltip for level */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
