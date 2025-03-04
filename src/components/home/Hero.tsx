import Link from "next/link";
import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900/40 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-60 right-1/4 w-80 h-80 bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900/40 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Ng Pin Yuan{" "}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              Software Engineer/ Web Developer (Full Stack)
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg">
              I build exceptional digital experiences with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Contact Me
              </Link>

              <a
                href="/resume/Resume_Pin Yuan.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors"
              >
                <FiDownload size={16} /> Download Resume
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/pyuan07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/pinyuanng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Replace with your own image */}
              <Image
                src="/profile.png"
                alt="Pin Yuan"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="transition-transform hover:scale-110 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
