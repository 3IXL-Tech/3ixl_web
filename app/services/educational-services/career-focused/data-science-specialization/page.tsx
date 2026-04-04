"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function DataScienceSpecialization() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const topics = [
    {
      title: "What You Will Learn",
      content: [
        "Python for Data Science & ML",
        "Math & Statistics for Machine Learning",
        "Classical Machine Learning",
        "Advanced ML & Feature Engineering",
        "Deep Learning & Neural Networks",
        "Production ML Systems",
      ],
    },
    {
      title: "Requirements",
      content: [
        "Laptop (8GB RAM Recommended)",
        "No prior programming experience needed",
        "Strong interest in data & problem solving",
        "Eagerness to learn",
      ],
    },
    {
      title: "Career Paths",
      content: [
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Engineer",
        "Business Intelligence Engineer",
        "AI Consultant",
        "AI/ML Associate",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 text-white bg-gradient-to-br from-[#020617] via-[#031525] to-[#041c2e] px-6 md:px-16 overflow-hidden">

      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-teal-500 opacity-20 blur-[150px] rounded-full"></div>

      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        DS & ML Engineering Specialization
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        {/* LEFT DESCRIPTION */}
        <div className="space-y-6">
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-300"
          >
            <h3 className="text-teal-400 font-semibold mb-2 text-lg">
              Career-Transforming Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              This program is designed to be an intense and structured path that 
              transforms you into an industry-ready Data & ML professional.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-300"
          >
            <h3 className="text-teal-400 font-semibold mb-2 text-lg">
              Built for Busy Professionals
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Designed around a 20-hour/week commitment, the curriculum focuses on 
              depth, efficiency, and practical mastery without unnecessary overload.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-300"
          >
            <h3 className="text-teal-400 font-semibold mb-2 text-lg">
              Intuition → Math → Code → Production
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every concept is taught step-by-step: first understanding the intuition, 
              then the mathematics, implementing in code, and finally deploying in 
              real production environments.
            </p>
          </motion.div>

        </div>

        {/* RIGHT SINGLE FRAME DROPDOWN */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl overflow-hidden
          hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)]
          transition-all duration-300"
        >
          {topics.map((item, index) => (
            <div key={index} className="border-b border-white/10 last:border-none">

              {/* HEADER ROW */}
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-teal-400 text-2xl"
                >
                  ⌄
                </motion.span>
              </div>

              {/* ANIMATED CONTENT */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <ul className="space-y-3 text-gray-300">
                        {item.content.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </motion.div>
      </div>

      {/* PAYMENT SECTION */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Payment Plan
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PLAN 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl
            hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.35)]
            transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-6">
              Pay-as-You-Learn
            </h3>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li>• Pay 50% of the full course fee today</li>
              <li>• Unlocks all materials for the first 3 months</li>
              <li>• Remaining balance split into monthly payments</li>
            </ul>
            <button className="px-6 py-3 rounded-full border border-teal-400 
              text-white hover:bg-teal-400 hover:text-black
              transition duration-300">
              Enroll Now
            </button>
          </motion.div>

          {/* PLAN 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl
            hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.35)]
            transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-6">
              Full Access
            </h3>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li>• Pay the full course fee upfront</li>
              <li>• Unlock all 6 months immediately</li>
              <li>• Learn at your own speed</li>
            </ul>

            <button className="px-6 py-3 rounded-full border border-teal-400 
              text-white hover:bg-teal-400 hover:text-black
              transition duration-300">
              Enroll Now
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}