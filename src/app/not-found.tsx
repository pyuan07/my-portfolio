import Link from "next/link";
import { FiHome, FiCompass } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <FiCompass className="relative text-9xl text-violet-600 dark:text-violet-400 rotate-45" />
      </div>
      
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        Well, this is awkward...
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        You've stumbled upon a page that doesn't exist. I usually write better code than this! 
        Maybe I moved it, or maybe you just mistyped. Let's get you back to the fun stuff.
      </p>

      <Link 
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-violet-600/20"
      >
        <FiHome size={20} />
        Go Home
      </Link>
    </div>
  );
}
