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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    longDescription:
      "This comprehensive e-commerce solution includes product management, inventory tracking, user accounts, shopping cart, checkout process, and payment processing through Stripe. The platform features responsive design for optimal viewing on any device, advanced filtering and search capabilities, and an admin dashboard for managing products, orders, and customer data.",
    image: "/projects/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/pyuan07/project1",
    demo: "https://project1-demo.com",
    featured: true,
    category: "Web App",
  },
  {
    id: "project2",
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application using AI to prioritize tasks, suggest schedules, and provide productivity insights.",
    longDescription:
      "This innovative task manager leverages OpenAI's GPT models to analyze your tasks, understand priorities, and suggest optimal scheduling. Features include natural language task entry, smart categorization, automatic priority detection, customizable workflows, productivity analytics, and cross-device synchronization. The application uses machine learning to adapt to your work habits and improve recommendations over time.",
    image: "/projects/project2.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "PostgreSQL",
      "Tailwind",
    ],
    github: "https://github.com/pyuan07/project2",
    demo: "https://project2-demo.com",
    featured: true,
    category: "AI & ML",
  },
  {
    id: "project3",
    title: "Real-time Collaboration Tool",
    description:
      "A collaborative workspace allowing multiple users to edit documents, chat, and manage projects in real-time.",
    longDescription:
      "This real-time collaboration platform enables teams to work together seamlessly regardless of location. It features concurrent document editing with conflict resolution, presence indicators showing who's currently viewing or editing, instant messaging and thread-based discussions, file sharing and version history, kanban boards for project management, and detailed activity logs and notifications. WebSocket technology ensures all changes are synchronized instantly across all users.",
    image: "/projects/project3.jpg",
    technologies: ["React", "Firebase", "WebSockets", "Material UI", "Redux"],
    github: "https://github.com/pyuan07/project3",
    demo: "https://project3-demo.com",
    featured: true,
    category: "Web App",
  },
  {
    id: "project4",
    title: "Mobile Fitness Tracker",
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with visualization and goal setting.",
    longDescription:
      "This comprehensive fitness tracking app helps users monitor their health and fitness journey. Features include customizable workout plans and exercise library, nutrition tracking with barcode scanning for food items, health metrics monitoring (weight, heart rate, sleep, etc.), goal setting and progress visualization, activity reminders and motivational notifications, and social sharing capabilities for connecting with friends.",
    image: "/projects/project4.jpg",
    technologies: ["React Native", "Redux", "Firebase", "Chart.js", "Node.js"],
    github: "https://github.com/pyuan07/project4",
    demo: "https://project4-demo.com",
    featured: false,
    category: "Mobile App",
  },
  {
    id: "project5",
    title: "Developer Portfolio Template",
    description:
      "A customizable portfolio template for developers to showcase their skills and projects with minimal setup.",
    longDescription:
      "This portfolio template is designed specifically for developers who want to showcase their work without spending too much time on design and implementation. Built with Next.js and Tailwind CSS, it features a responsive design, dark/light mode support, customizable sections for projects, skills, and experience, SEO optimization, and built-in contact form functionality. The template is designed to be easily customizable with minimal code changes.",
    image: "/projects/project5.jpg",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com/pyuan07/project5",
    demo: "https://project5-demo.com",
    featured: false,
    category: "Web Design",
  },
  {
    id: "project6",
    title: "Weather Forecast Application",
    description:
      "A modern weather application providing real-time forecasts, radar maps, and severe weather alerts.",
    longDescription:
      "This weather application provides users with accurate, up-to-date weather information from around the world. Features include current conditions and hourly/daily forecasts, interactive radar and satellite maps, severe weather alerts and notifications, location-based automatic weather updates, historical weather data and trends, and a clean, intuitive interface optimized for both desktop and mobile devices. The app uses multiple weather APIs to ensure reliability and accuracy.",
    image: "/projects/project6.jpg",
    technologies: ["Vue.js", "Vuex", "Weather API", "Leaflet.js", "SCSS"],
    github: "https://github.com/pyuan07/project6",
    demo: "https://project6-demo.com",
    featured: false,
    category: "Web App",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
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

        <div className="flex justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <FiGithub size={16} /> <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <FiExternalLink size={16} /> <span>Live Demo</span>
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
