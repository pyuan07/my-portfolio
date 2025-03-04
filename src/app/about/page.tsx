"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiDownload } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm a passionate software engineer with a love for creating
              elegant, efficient, and user-friendly solutions.
            </p>
          </div>

          {/* About Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/profile-about.jpg"
                  alt="Pin Yuan"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Hello, I'm{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  Pin Yuan
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                I'm a software engineer based in Kluang, Johor, Malaysia,
                specializing in building responsive web applications with modern
                technologies. I'm a fresh graduate from Asia Pacific University
                with a Bachelor's degree in Software Engineering.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                I am interested in pursuing a career in Software Engineering/Web
                Development. Besides, I was also doing software engineering
                freelance during the last year of my university studies.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                Currently, I'm working as a Software Engineer at Morpheus
                Consulting Pte Ltd in Singapore, where I integrate and enhance
                in-house systems and websites to support business growth and
                improve user experience.
              </p>

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  download
                >
                  <FiDownload /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Education & Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic background and professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <FiBookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-6 pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    Bachelor's Degree, Software Engineering (First Class
                    Honours)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Asia Pacific University of Technology and Innovation (APU /
                    APIIT), 2019-2022
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    Bachelor's Degree, Software Engineering (Dual Degree
                    Programme)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Staffordshire University, 2019-2022
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    High School
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Chong Hwa High School (Kluang), 2013-2018
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <FiAward size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Experience
                </h3>
              </div>

              <div className="space-y-6 pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    Software Engineer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Morpheus Consulting Pte Ltd, 2023-Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Integrated and enhanced in-house systems and websites to
                    support business growth and improve user experience.
                    Developed tools and applications to monitor system
                    performance and ensure operational stability.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    Software Engineer (Freelance)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Soft Rock Technologies Sdn Bhd, 2021-2022
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Mainly involved in the development, enhancement and
                    customization of Recipe Management Module.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                    Software Engineer (Internship)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Soft Rock Technologies Sdn Bhd, 2021
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Involved in company software design, development,
                    integration and testing. Researched & Developed Smart
                    Factory Website, especially Recipe Management Module.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications I've earned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`${cert.iconBg} w-12 h-12 rounded-lg flex items-center justify-center ${cert.iconColor} shrink-0`}
                  >
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors"
                >
                  <span>View Credential</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
        </div>
      </section>
    </>
  );
}
