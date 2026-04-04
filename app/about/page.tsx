"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen pt-28 overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-[#031525] to-[#041c2e]" />
      
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image
          src="/images/bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-teal-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="text-teal-400">3IXL EDUTECH</span>
            </h1>

            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              3IXL EDUTECH is a tech-driven start-up empowering individuals and
              businesses through innovative technology education and consulting.
              We provide hands-on training, internships, and enterprise
              solutions that enhance digital transformation.
            </p>

            {/* FIXED BUTTON */}
            <Link
              href="/about/read-more"
              className="
                inline-block
                px-8 py-4
                rounded-full
                font-semibold
                border-2 border-teal-400
                text-teal-400
                bg-transparent
                hover:bg-teal-500
                hover:text-white
                hover:border-teal-500
                transition-all duration-300
                active:scale-95
                cursor-pointer
              "
            >
              Read More
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <Image
                src="/images/roboto.png"
                alt="robot"
                width={500}
                height={500}
                className="object-contain drop-shadow-[0_0_40px_rgba(45,212,191,0.6)]"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="
              bg-white/5 backdrop-blur-xl border border-white/10
              p-10 rounded-3xl cursor-pointer
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
              transition-all duration-300
            "
          >
            <h2 className="text-3xl font-bold mb-4 text-teal-400">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To democratize access to advanced technology education and empower
              communities with AI-driven innovation.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="
              bg-white/5 backdrop-blur-xl border border-white/10
              p-10 rounded-3xl cursor-pointer
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
              transition-all duration-300
            "
          >
            <h2 className="text-3xl font-bold mb-4 text-teal-400">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To become Africa’s leading AI innovation and technology education
              ecosystem.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}