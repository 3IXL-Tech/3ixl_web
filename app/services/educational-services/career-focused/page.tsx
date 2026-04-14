"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CareerFocused() {
  const [months, setMonths] = useState(0);

  // 🔥 6 Months Animation
  useEffect(() => {
    let start = 0;
    const end = 6;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setMonths(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden px-6 md:px-16">

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#020617] via-[#031525] to-[#041c2e]" />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image
          src="/images/bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute -left-40 top-40 w-125 h-125 bg-teal-500 opacity-20 blur-[150px] rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className="space-y-8 md:space-y-12">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Industry-Aligned
          </motion.h1>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <span className="text-6xl md:text-8xl font-extrabold text-teal-400">
              {months}
            </span>
            <span className="text-3xl md:text-4xl font-semibold text-gray-300">Months</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl"
          >
            Join our comprehensive program and accelerate your journey into the world of technology, AI, and data-driven skills.
          </motion.p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
          p-10 rounded-3xl
          hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)]
          transition-all duration-300"
        >
          <h2 className="text-3xl font-bold mb-6">
            What’s Included
          </h2>

          <ul className="space-y-5 text-gray-300">
            <li>• Complete Curriculum</li>
            <li>• Scheduled Instructor Meetings</li>
            <li>• On-Demand Support</li>
            <li>• Internship Opportunity</li>
            <li>• Portfolio Building</li>
          </ul>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-24">

        {/* DATA SCIENCE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl overflow-hidden
          hover:border-teal-400 hover:shadow-[0_0_50px_rgba(45,212,191,0.35)]
          transition-all duration-300"
        >
          <div className="relative w-full h-56">
            <Image src="/images/ds.png" alt="Data Science" fill className="object-cover" />
          </div>

          <div className="p-10">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">
              Data Science & Machine Learning Engineering
            </h3>

            <p className="text-gray-300 mb-6">
              Hands-on Python programming, data analysis, machine learning,
              and real-world problem solving.
            </p>

            <Link href="career-focused/data-science-specialization">
              <button className="px-6 py-3 rounded-full border border-teal-400 
              text-white hover:bg-teal-400 hover:text-black
              transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* DATA ANALYTICS */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-3xl overflow-hidden
          hover:border-teal-400 hover:shadow-[0_0_50px_rgba(45,212,191,0.35)]
          transition-all duration-300"
        >
          <div className="relative w-full h-56">
            <Image src="/images/data-analytics.png" alt="Data Analytics" fill className="object-cover" />
          </div>

          <div className="p-10">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">
              Data Analytics
            </h3>

            <p className="text-gray-300 mb-6">
              Learn how to solve complex business problems using data-driven insights.
            </p>

            <button className="px-6 py-3 rounded-full border border-teal-400 
              text-white hover:bg-teal-400 hover:text-black
              transition duration-300">
              Coming Soon
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}