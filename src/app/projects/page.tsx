"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFilter, FiFolder } from "react-icons/fi";

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: string;
};

// This would ideally come from a database or CMS
const projects: Project[] = [
  {
    id: "project1",
    title: "My Portfolio",
    description:
      "A portfolio for a Software Engineer / Web Developer",
    longDescription:
      "This portfolio template is designed specifically for developers who want to showcase their work without spending too much time on design and implementation. Built with Next.js and Tailwind CSS, it features a responsive design, dark/light mode support, customizable sections for projects, skills, and experience, and built-in contact form functionality.",
    image: "/projects/project1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
    ],
    github: "https://github.com/pyuan07/my-portfolio",
    demo: "https://pyuan-portfolio.vercel.app/",
    featured: true,
    category: "Web Design",
  },
  {
    id: "project2",
    title: "VoxSpend",
    description:
      "VoxSpend is a smart expense tracking application designed to simplify financial management through voice input.",
    longDescription:
      "By integrating voice-to-text (Deepgram) and AI-powered processing (OpenRouter), users can effortlessly add transactions by speaking naturally. VoxSpend aims to provide a seamless and intuitive experience for users to monitor their spending without manual data entry.",
    image: "/projects/project2.png",
    technologies: ["React", "shadcn/ui", "TypeScript", "ASP.Net Web Api", "postgres", "OpenRouter Ai", "Deepgram"],
    github: "https://github.com/pyuan07/VoxSpend",
    demo: "https://voxspend-demo.vercel.app/login",
    featured: true,
    category: "Web App",
  },
  // Placeholder for future projects
];

const categories = ["All", "Web Design", "Web App", "Mobile App", "Other"];

const ProjectCard = ({ project }: { project: Project }) => {
  const getDemoButtonText = () => {
    if (project.demo.includes('youtu') || project.demo.includes('youtube')) {
      return 'Video Demo';
    } else if (/\.(jpg|jpeg|png|gif)$/.test(project.demo)) {
      return 'View Preview';
    } else {
      return 'Live Demo';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary/30"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
           <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
             {project.category}
           </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800"
              >
                {tech}
              </span>
            ))}
             {project.technologies.length > 4 && (
               <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500">
                 +{project.technologies.length - 4} more
               </span>
             )}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700/50">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FiGithub size={18} /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600 text-white font-medium text-sm hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/20"
            >
              <FiExternalLink size={18} /> {getDemoButtonText()}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

import BackgroundDecoration from "@/components/layout/BackgroundDecoration";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background decoration */}
      <BackgroundDecoration />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Projects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            A curated selection of my work in software engineering and full-stack development.
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25 scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

         {/* Empty State */}
         {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 text-gray-400">
                <FiFolder size={32} />
              </div>
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </motion.div>
          )}
      </div>
    </div>
  );
}
