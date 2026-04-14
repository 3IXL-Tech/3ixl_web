"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AILabsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Adding a specific identifier for the email subject if desired
          message: `[COLLABORATION REQUEST]\n\n${formData.message}`,
        }),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-28 px-6 md:px-16 text-white overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#020617] via-[#031525] to-[#041c2e]" />

      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image
          src="/images/bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute -left-40 top-40 w-125 h-125 bg-teal-500 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-green-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* ================= HEADER ================= */}
      <div className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Our <span className="text-teal-400">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Explore innovative solutions we are building to solve real-world problems 
          using AI, data, and technology.
        </motion.p>
      </div>

      {/* ================= PROJECT CARDS ================= */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Project 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-teal-400 hover:shadow-[0_0_50px_rgba(45,212,191,0.35)] transition-all duration-300"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative w-full h-56"
          >
            <Image src="/images/edu.png" alt="EduCompass" fill className="object-cover" />
          </motion.div>
          <div className="p-10">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">EduCompass</h3>
            <p className="text-gray-300 mb-6">
              A smart recommendation system designed to guide students in selecting 
              the right schools and programs for both undergraduate and postgraduate studies.
            </p>
            <button className="px-6 py-3 rounded-full border border-teal-400 text-white transition-all duration-300 group-hover:bg-teal-500 group-hover:text-black">
              View Project
            </button>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-teal-400 hover:shadow-[0_0_50px_rgba(45,212,191,0.35)] transition-all duration-300"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative w-full h-56"
          >
            <Image src="/images/med.png" alt="Health AI Project" fill className="object-cover" />
          </motion.div>
          <div className="p-10">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">HealthAI (In Progress)</h3>
            <p className="text-gray-300 mb-6">
              An AI-powered healthcare solution focused on improving early detection, 
              diagnosis, and decision-making using data-driven insights.
            </p>
            <button className="px-6 py-3 rounded-full border border-teal-400 text-white transition-all duration-300 group-hover:bg-teal-500 group-hover:text-black">
              View Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* ================= NEW COLLAB SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-16 mt-28 items-center">
        {/* LEFT IMAGE FRAME */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <Image
            src="/images/ab1.png"
            alt="Collaboration"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* RIGHT FORM */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reach out for <span className="text-teal-400">Collaboration</span>
          </h2>

          <p className="text-gray-400 mb-8">
            Fill in your details and our team will get in touch with you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {status && <p className="text-teal-400 text-sm font-medium mb-4">{status}</p>}

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all duration-300"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all duration-300"
            />

            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-all duration-300 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-full border border-teal-400 text-white hover:bg-teal-500 hover:text-black transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* ================= EXTRA SECTION ================= */}
      <div className="mt-28 text-center">
        <h2 className="text-3xl font-bold mb-6">
          More Projects <span className="text-teal-400">Coming Soon</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We are continuously building innovative AI and data-driven solutions. 
          Stay connected to see what we launch next.
        </p>
      </div>

      <div className="h-24"></div>
    </div>
  );
}