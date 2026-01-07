"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiUser,
  FiAtSign,
  FiType,
  FiPhone
} from "react-icons/fi";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

import BackgroundDecoration from "@/components/layout/BackgroundDecoration";

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
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
       {/* Background Decoration */}
       <BackgroundDecoration />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-primary-foreground text-sm font-semibold mb-4"
          >
            Contact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            Let's <span className="text-primary">Connect.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
             Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                 <span className="w-1 h-6 bg-primary rounded-full"></span>
                 Contact Details
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:pinyuan13225@gmail.com" className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">Email</span>
                    <p className="text-gray-900 dark:text-white font-medium group-hover:text-primary transition-colors">pinyuan13225@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">Phone</span>
                    <div className="flex flex-col">
                       <a 
                         href="https://wa.me/6588955717"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-gray-900 dark:text-white font-medium hover:text-green-600 dark:hover:text-green-500 transition-colors flex items-center gap-2"
                       >
                         +65 8895 5717 (WhatsApp)
                       </a>
                       <p className="text-gray-900 dark:text-white font-medium">+60 18 375 8389</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">Location</span>
                    <p className="text-gray-900 dark:text-white font-medium">Malaysia (Johor) & Singapore</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Socials Card */}
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-3xl"
            >
               <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                 <span className="w-1 h-6 bg-primary rounded-full"></span>
                 Social Profiles
              </h3>
              
              <div className="flex gap-4">
                 <a
                    href="https://github.com/pyuan07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex flex-col items-center gap-2 group border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                  >
                    <FiGithub size={28} className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors"/>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/pinyuanng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex flex-col items-center gap-2 group border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  >
                    <FiLinkedin size={28} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"/>
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">LinkedIn</span>
                  </a>
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl h-full border-t-4 border-t-primary">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 h-full flex flex-col items-center justify-center"
                >
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <FiSend size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                    Thanks for reaching out! I've received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                       <div className="relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <FiUser />
                         </div>
                         <input
                          type="text"
                          id="name"
                          name="user_name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="John Doe"
                        />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                       <div className="relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <FiAtSign />
                         </div>
                         <input
                          type="email"
                          id="email"
                          name="user_email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="john@example.com"
                        />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                     <div className="relative">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                         <FiType />
                       </div>
                       <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="What's this about?"
                      />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                     <div className="relative">
                       <div className="absolute left-4 top-6 text-gray-400">
                         <FiMessageSquare />
                       </div>
                       <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                     </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-transparent border-2 border-primary text-gray-900 dark:text-white font-bold rounded-full shadow-lg hover:bg-primary/10 hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
