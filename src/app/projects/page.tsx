"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";

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
      "This portfolio template is designed specifically for developers who want to showcase their work without spending too much time on design and implementation. Built with Next.js and Tailwind CSS, it features a responsive design, dark/light mode support, customizable sections for projects, skills, and experience, and built-in contact form functionality. The template is designed to be easily customizable with minimal code changes.",
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
      "By integrating voice-to-text (Deepgram) and AI-powered processing (OpenRouter), users can effortlessly add transactions by speaking naturally. VoxSpend aims to provide a seamless and intuitive experience for users to monitor their spending without manual data entry. Currently still debugging and implementing during personal free time. This project is a personal project developed solely by me with AI helps on UI.",
    image: "/projects/project2.png",
    technologies: ["React", "shadcn/ui", "TypeScript", "ASP.Net Web Api", "SQLLite", "OpenRouter Ai", "Deepgram"],
    github: "https://github.com/pyuan07/VoxSpend",
    demo: "https://youtu.be/9D5igNpvaX8",
    featured: false,
    category: "Web App",
  },
  {
    id: "project6",
    title: "TODO",
    description:
      "TODO",
    longDescription:
      "TODO",
    image: "/projects/project6.jpg",
    technologies: [],
    github: "https://github.com/pyuan07/project6",
    demo: "https://project6-demo.com",
    featured: false,
    category: "Web App",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  // Simplify the button text function
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Standardized button area at bottom */}
        <div className="flex mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 flex-1 justify-center"
          >
            <FiGithub size={16} /> <span>Code</span>
          </a>
          <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 flex-1 justify-center"
          >
            <FiExternalLink size={16} /> <span>{getDemoButtonText()}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills and
              interests in web development and software engineering.
            </p>
          </div>

          {/* Filter Section - For future enhancement */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
              <FiFilter size={18} />
              <span className="font-medium">All Projects</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
