"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function SQLCoursePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const topics = [
    {
      title: "What You Will Learn",
      content: [
        "SQL Fundamentals (SELECT, WHERE, ORDER BY)",
        "Joins (INNER, LEFT, RIGHT, FULL)",
        "Aggregation & Grouping (GROUP BY, HAVING)",
        "Subqueries & Window Functions",
        "Database Design & Normalization",
        "Performance Optimization & Query Tuning",
      ],
    },
    {
      title: "Requirements",
      content: [
        "Laptop (8GB RAM recommended)",
        "No prior SQL experience needed",
        "Basic computer literacy",
        "Interest in working with data",
      ],
    },
    {
      title: "Career Paths",
      content: [
        "Data Analyst",
        "Business Intelligence Analyst",
        "Database Administrator",
        "Data Engineer (Entry Level)",
        "Analytics Consultant",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden px-6 md:px-16">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#020617] via-[#031525] to-[#041c2e]" />
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image src="/images/bg.png" alt="bg" fill className="object-cover" />
      </div>

      {/* Glow */}
      <div className="absolute -left-40 top-40 w-125 h-125 bg-teal-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* ================= HEADER ================= */}
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Advanced SQL for <span className="text-teal-400">Data Management</span>
      </h1>

      {/* ================= TOP SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT - DESCRIPTION */}
        <div className="space-y-6">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-300"
          >
            <h3 className="text-teal-400 font-semibold mb-2 text-lg">
              Master Real-World SQL
            </h3>
            <p className="text-gray-300">
              This course equips you with practical SQL skills used in real-world
              data roles — from querying databases to solving business problems.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-300"
          >
            <h3 className="text-teal-400 font-semibold mb-2 text-lg">
              Hands-On Learning
            </h3>
            <p className="text-gray-300">
              Work on practical datasets, real queries, and case studies that
              simulate industry-level data analysis tasks.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-300"
          >
            <h3 className="text-teal-400 font-semibold mb-2 text-lg">
              Industry-Focused Skills
            </h3>
            <p className="text-gray-300">
              Learn how SQL is used in analytics, reporting, and backend systems,
              preparing you for real data roles.
            </p>
          </motion.div>

        </div>

        {/* RIGHT - ACCORDION */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-4">

          {topics.map((item, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-teal-400">
                  {item.title}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2 text-gray-300">
                  {item.content.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= PAYMENT SECTION ================= */}
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
              <li>• Pay 50% of the course fee upfront</li>
              <li>• Access first phase of learning materials</li>
              <li>• Remaining balance split into installments</li>
            </ul>

            <button className="px-6 py-3 rounded-full border border-teal-400 
            text-white hover:bg-teal-500 hover:text-black transition duration-300" onClick={() => window.open("https://paystack.shop/pay/8pr-ykvk4n", "_blank")}>
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
              <li>• Pay full course fee upfront</li>
              <li>• Unlock all course materials instantly</li>
              <li>• Learn at your own pace</li>
            </ul>

            <button className="px-6 py-3 rounded-full border border-teal-400 
            text-white hover:bg-teal-500 hover:text-black transition duration-300" onClick={() => window.open("https://paystack.shop/pay/57h77nmdb0", "_blank")}>
              Enroll Now
            </button>
          </motion.div>

        </div>
      </div>

      <div className="h-24"></div>
    </div>
  );
}