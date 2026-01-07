"use client";

import {
  FiDownload,
  FiBook,
  FiBriefcase,
  FiCode,
  FiAward,
  FiUser,
  FiMapPin,
  FiPhone,
  FiMail
} from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundDecoration from "@/components/layout/BackgroundDecoration";

const contactDetails = [
  { icon: FiMail, text: "pinyuan13225@gmail.com" },
  { icon: FiPhone, text: "+65 8895 5717" },
  { icon: FiPhone, text: "+60 18 375 8389" },
  { icon: FiMapPin, text: "Jurong East, Singapore" },
  { icon: FiMapPin, text: "Kluang, Johor, Malaysia" },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    title: "Backend",
    skills: ["ASP.NET Core", "Node.js", "C#", "RESTful APIs", "Entity Framework"]
  },
  {
    title: "Database & Cloud",
    skills: ["MSSQL", "PostgreSQL", "Redis", "Azure", "Docker"]
  }
];

const ResumeContent = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
       {/* Background Decoration */}
       <BackgroundDecoration />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My professional background and full credentials.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
          >
            <a
              href="/resume/Resume_Pin Yuan.pdf"
              className="group relative px-8 py-4 bg-transparent border-2 border-primary text-gray-900 dark:text-white font-bold rounded-full shadow-lg hover:bg-primary/10 hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-3 overflow-hidden"
              download
            >
              <span className="relative z-10 flex items-center gap-2">
                 <FiDownload className="group-hover:animate-bounce" /> 
                 <span>Download PDF</span>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Resume Paper Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          {/* Resume Header / Profile */}
          <div className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-full border-4 border-white dark:border-gray-700 shadow-xl">
                <Image
                  src="/about-picture.jpg"
                  alt="Pin Yuan"
                  fill
                  className="object-cover scale-[2.0]"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Pin Yuan</h2>
                   <p className="text-xl text-primary font-medium">Software Engineer / Web Developer</p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {contactDetails.map((contact, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-full border border-gray-200 dark:border-gray-600">
                      <contact.icon className="text-primary" /> {contact.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
             {/* Left Sidebar (Skills & Education) */}
             <div className="bg-gray-50 dark:bg-gray-900/30 p-8 md:p-12 space-y-12 border-r border-gray-100 dark:border-gray-700">
                
                {/* Contact (Mobile Repetition omitted for cleaner look, handled in Header) */}
                
                {/* Skills */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                      <FiCode size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skills</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {skillCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">{category.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map(skill => (
                            <span key={skill} className="px-2.5 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                      <FiBook size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                       <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-white dark:ring-gray-800" />
                       <h4 className="font-bold text-gray-900 dark:text-white leading-tight mb-1">BSc (Hons) in Software Engineering</h4>
                       <p className="text-sm text-primary font-medium mb-1">2019 - 2022</p>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Asia Pacific University</p>
                       <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full">First Class Honours</span>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                       <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
                       <h4 className="font-bold text-gray-900 dark:text-white leading-tight mb-1">Dual Degree Programme</h4>
                       <p className="text-sm text-primary font-medium mb-1">2019 - 2022</p>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Staffordshire University</p>
                    </div>
                  </div>
                </section>

                {/* Certifications (Moved to Sidebar) */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                      <FiAward size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Certified ASP.NET Developer",
                        issuer: "Microsoft",
                        date: "May 2022",
                        url: "https://www.credly.com/badges/dc3aedb1-db0f-4840-901b-734947a5d661/linked_in_profile"
                      },
                      {
                        title: "Azure Fundamentals",
                        issuer: "Microsoft",
                        date: "March 2022",
                        url: "https://www.credly.com/badges/af683ef6-5be7-4831-94a1-4d9b988c69bf/linked_in_profile"
                      },
                    ].map((cert, i) => (
                      <a 
                        key={i} 
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors group"
                      >
                         <h4 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.issuer} • {cert.date}</p>
                      </a>
                    ))}
                  </div>
                </section>
             </div>

             {/* Right Content (Summary & Experience) */}
             <div className="lg:col-span-2 p-8 md:p-12 space-y-12">
                
                {/* Summary */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                      <FiUser size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Professional Summary</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    I'm a Software Engineer based in Malaysia (Johor) and Singapore, specializing in building RESTful APIs and responsive web applications using modern technologies. I graduated from Asia Pacific University with a Bachelor's degree in Software Engineering, earning First Class Honours. I am driven by using code to make life more effective and efficient, and I am passionate about AI integration and exploring the latest technologies.
                  </p>
                </section>

                {/* Experience */}
                <section>
                   <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                      <FiBriefcase size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
                  </div>

                  <div className="space-y-10">
                    {[
                      {
                        title: "Software Engineer",
                        company: "Morpheus Consulting Pte Ltd, Singapore",
                        period: "2023 - Present (2 years 1 month)",
                        responsibilities: [
                          "Engineered and optimized real-time, high-traffic data pipelines with Redis and RabbitMQ, achieving sub-second to ~2s latency and high system stability.",
                          "Enhanced in-house business systems and backoffice, improving system performance and reliability, and integrated new business requirements.",
                          "Implemented observability with Prometheus, Grafana, and Elasticsearch, plus anomaly detection for proactive incident response.",
                          "Provided production support, troubleshooting and fixing critical and tricky issues (like multithreading & concurrency issue...)",
                          "Transferred to subsidiary (Dodgson Matrix Sdn Bhd) in 2025 and continue the same system development and train new engineers, accelerating team onboarding.",
                        ],
                      },
                      {
                        title: "Software Engineer (Freelance)",
                        company: "Soft Rock Technologies Sdn Bhd, Malaysia",
                        period: "2021 - 2022 (7 months)",
                        responsibilities: [
                          "Mainly involved in the development, enhancement and customization of Recipe Management Module.",
                        ],
                      },
                      {
                        title: "Software Engineer (Internship)",
                        company: "Soft Rock Technologies Sdn Bhd, Malaysia",
                        period: "2021 (5 months)",
                        responsibilities: [
                          "Involved in company software design, development, integration and testing.",
                          "Researched & Developed Smart Factory Website, especially Recipe Management Module.",
                          "Learned a lot of useful skills, technologies and knowledge as well as the real-world development life cycle (Agile Scrum) and project structure of ASP.NET Core API, MVC.",
                          "Developed server backend with RESTful API and client frontend with MVC.",
                        ],
                      },
                    ].map((job, i) => (
                      <div key={i} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 group">
                         <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-orange-500 group-hover:scale-125 transition-transform" />
                         
                         <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                           <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h4>
                           <span className="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full">{job.period}</span>
                         </div>
                         
                         <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 flex items-center gap-2">
                           <FiBriefcase className="text-gray-400" size={14} /> {job.company}
                         </p>
                         
                         <ul className="space-y-2">
                           {job.responsibilities.map((resp, idx) => (
                             <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                               <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                               {resp}
                             </li>
                           ))}
                         </ul>
                      </div>
                    ))}
                  </div>
                </section>


             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function ResumePage() {
  return <ResumeContent />;
}
