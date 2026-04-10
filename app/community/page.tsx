"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen pt-28 px-6 md:px-16 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#020617] via-[#031525] to-[#041c2e]" />
      
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image
          src="/images/bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Glow */}
      <div className="absolute -left-40 top-40 w-125 h-125 
      bg-teal-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-100 h-100 
      bg-green-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* HERO SECTION */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          3IXL <span className="text-teal-400">Community</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Learn, collaborate, and grow with like-minded individuals shaping the future of tech.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Your home for learning and collaboration
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our community connects learners, professionals, and innovators 
            through shared knowledge, hands-on experiences, and meaningful discussions.
          </p>
        </div>

        {/* RIGHT FLOATING IMAGE */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/community-main.png"
            alt="Community Collaboration"
            width={600}
            height={400}
            className="rounded-3xl object-cover"
          />
        </motion.div>
      </div>

      {/* COMMUNITY CARDS */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* AI LABS CARD */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 
          p-8 rounded-3xl hover:border-teal-400 
          hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] 
          transition-all duration-300"
        >
          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="mb-6 rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/ai-lab.png"
              alt="AI Labs"
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          <h3 className="text-2xl font-bold mb-3">Our Projects</h3>
          <p className="text-gray-400 mb-6">
            Step into a world of innovative projects
          </p>

          <Link href="/community/ai-labs">
            <button className="px-6 py-3 rounded-full border border-teal-400 
            text-white transition-all duration-300
            group-hover:bg-teal-500 group-hover:text-black">
              Explore
            </button>
          </Link>
        </motion.div>

        {/* WORKSHOPS CARD */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 
          p-8 rounded-3xl hover:border-teal-400 
          hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] 
          transition-all duration-300"
        >
          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="mb-6 rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/workshop.png"
              alt="Workshops"
              width={500}
              height={300}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          <h3 className="text-2xl font-bold mb-3">Workshops</h3>
          <p className="text-gray-400 mb-6">
            Hands-on sessions led by industry professionals to sharpen your skills.
          </p>

          <Link href="/community/workshops">
            <button className="px-6 py-3 rounded-full border border-teal-400 
            text-white transition-all duration-300
            group-hover:bg-teal-500 group-hover:text-black">
              Coming Soon
            </button>
          </Link>
        </motion.div>

      </div>

      {/* BOTTOM SPACING */}
      <div className="h-24"></div>

    </div>
  );
}