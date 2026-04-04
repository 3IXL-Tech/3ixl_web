"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-[#031525] to-[#041c2e]" />
      
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/bg.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-teal-500 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* ================= HEADER ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We'd love to hear from you! Reach out to us anytime.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 pb-24">

        {/* 3-column layout on desktop */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* ================= LEFT FRAME - BIG CONTACT FORM ================= */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 
            p-10 rounded-3xl
            hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)]
            transition-all duration-500"
          >
            <h2 className="text-2xl font-bold mb-8 text-teal-400">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10
                  focus:outline-none focus:border-teal-400
                  transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10
                  focus:outline-none focus:border-teal-400
                  transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10
                  focus:outline-none focus:border-teal-400
                  transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full font-semibold
                border-2 border-teal-400 text-white
                bg-transparent
                hover:bg-teal-400 hover:text-black
                transition-all duration-300 active:scale-95"
              >
                Send Message
              </button>

            </form>
          </motion.div>

          {/* ================= RIGHT FRAME - SMALL CONTACT INFO ================= */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 
            p-8 rounded-3xl
            hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
            transition-all duration-500 h-fit"
          >
            <h2 className="text-xl font-bold mb-8 text-teal-400">
              Our Contact Information
            </h2>

            <div className="space-y-8">

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/phone.png"
                  alt="phone"
                  width={26}
                  height={26}
                />
                <span className="text-gray-300 text-base">
                  +233 506506443
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/mail.png"
                  alt="mail"
                  width={26}
                  height={26}
                />
                <span className="text-gray-300 text-base">
                  contact@3ixl.com
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= FOLLOW US SECTION ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 pb-32">

        <h2 className="text-4xl font-bold mb-10">
          Follow <span className="text-teal-400">Us</span>
        </h2>

        <div className="flex space-x-8">

          <a
            href="https://www.linkedin.com/company/3ixledutech/?viewAsMember=true"
            target="_blank"
            className="hover:scale-110 transition duration-300"
          >
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </a>

          <a
            href="https://instagram.com/_3ixledutech"
            target="_blank"
            className="hover:scale-110 transition duration-300"
          >
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            className="hover:scale-110 transition duration-300"
          >
            <Image
              src="/images/X.png"
              alt="X"
              width={40}
              height={40}
            />
          </a>

        </div>

      </section>

    </div>
  );
}