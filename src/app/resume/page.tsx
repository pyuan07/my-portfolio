"use client";

import {
  FiDownload,
  FiBook,
  FiBriefcase,
  FiCode,
  FiAward,
} from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

const ResumeContent = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional background, experience, and skills.
          </p>
          <div className="mt-6">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              download
            >
              <FiDownload /> Download Resume (PDF)
            </a>
          </div>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-500 hover:scale-105">
                <Image
                  src="/profile.png"
                  alt="Pin Yuan"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold">Pin Yuan</h2>
                <p className="text-xl">Software Engineer / Web Developer</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span>pinyuan13225@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span>+6588955717</span>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span>Jurong East, Singapore</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span>Kluang, Johor, Malaysia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <motion.div
            {...fadeIn}
            className="p-8 border-b border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              I'm a passionate software engineer specializing in building
              responsive web applications with modern technologies. As a
              graduate from Asia Pacific University with a Bachelor's degree in
              Software Engineering, I bring both academic knowledge and
              practical experience from my freelance and professional work.
              Currently, I'm working as a Software Engineer at Morpheus
              Consulting Pte Ltd in Singapore, where I integrate and enhance
              in-house systems and websites to support business growth and
              improve user experience.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            {...fadeIn}
            className="p-8 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiBriefcase
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Software Engineer",
                  company: "Morpheus Consulting Pte Ltd, Singapore",
                  period: "2023 - Present (2 years 1 month)",
                  responsibilities: [
                    "Integrated and enhanced in-house systems and websites to support business growth and improve user experience.",
                    "Developed tools and applications to monitor system performance and ensure operational stability.",
                    "Provided Production Support by investigating, troubleshooting, and resolving reported issues and bugs.",
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
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between flex-wrap">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {exp.company}
                  </p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            {...fadeIn}
            className="p-8 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiBook
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  degree:
                    "Bachelor's Degree, Software Engineering (First Class Honours)",
                  school:
                    "Asia Pacific University of Technology and Innovation (APU / APIIT)",
                  period: "2019 - 2022",
                },
                {
                  degree:
                    "Bachelor's Degree, Software Engineering (Dual Degree Programme)",
                  school: "Staffordshire University",
                  period: "2019 - 2022",
                },
                {
                  degree: "High School",
                  school: "Chong Hwa High School (Kluang)",
                  period: "2013 - 2018",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between flex-wrap">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {edu.school}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications - Upgraded version */}
          <motion.div
            {...fadeIn}
            className="p-8 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiAward
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Certified ASP.NET Developer",
                  issuer: "Microsoft",
                  date: "May 2022",
                  description:
                    "Advanced knowledge in ASP.NET Core MVC applications using .NET Core tools and technologies, plus core Azure services, security, network security, and governance features.",
                  credentialUrl:
                    "https://www.credly.com/badges/dc3aedb1-db0f-4840-901b-734947a5d661/linked_in_profile",
                  iconBg: "bg-blue-100 dark:bg-blue-900/30",
                  iconColor: "text-blue-600 dark:text-blue-400",
                },
                {
                  title: "Microsoft Certified: Azure Fundamentals",
                  issuer: "Microsoft",
                  date: "March 2022",
                  description:
                    "Foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
                  credentialUrl:
                    "https://www.credly.com/badges/af683ef6-5be7-4831-94a1-4d9b988c69bf/linked_in_profile",
                  iconBg: "bg-blue-100 dark:bg-blue-900/30",
                  iconColor: "text-blue-600 dark:text-blue-400",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className={`${cert.iconBg} w-10 h-10 rounded-lg flex items-center justify-center ${cert.iconColor} shrink-0`}
                    >
                      <FiAward size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                    {cert.description}
                  </p>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors"
                  >
                    <span>View Credential</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div {...fadeIn} className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <FiCode
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Technical Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "HTML",
                    "Mantine UI",
                  ],
                },
                {
                  category: "Backend",
                  skills: ["ASP.NET Core", "ASP.NET MVC", "RESTful APIs"],
                },
                {
                  category: "Database",
                  skills: ["SSMS", "SQL", "T-SQL", "Redis", "RabbitMQ"],
                },
                {
                  category: "Tools",
                  skills: ["Git", "Azure", "Visual Studio", "AI"],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.05 + 0.1,
                        }}
                        viewport={{ once: true }}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function ResumePage() {
  return <ResumeContent />;
}
