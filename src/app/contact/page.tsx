"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS environment variables are not properly configured');
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Map the EmailJS field names to our form state fields
    const fieldMap: { [key: string]: string } = {
      user_name: "name",
      user_email: "email",
    };

    const stateField = fieldMap[name] || name;
    setFormData((prev) => ({ ...prev, [stateField]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_PUBLIC_KEY
        );

        if (result.text === "OK") {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          throw new Error("Failed to send email");
        }
      }
    } catch (err) {
      setError("There was an error sending your message. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Contact Information */}
              <div className="md:col-span-1 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                      <FiMail size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:pinyuan13225@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      pinyuan13225@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                      <FiPhone size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +6588955717
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                      <FiMapPin size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      18, Jalan Murni 3, Taman Murni,
                      <br />
                      86000 Kluang, Johor, Malaysia
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                      Follow Me
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/pyuan07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        aria-label="GitHub"
                      >
                        <FiGithub size={24} />
                      </a>
                      <a
                        href="https://linkedin.com/in/pinyuanng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Thank you for your message. I'll get back to you as soon
                      as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                      Send a Message
                    </h3>

                    {error && (
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                        placeholder="Subject of your message"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={20} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
