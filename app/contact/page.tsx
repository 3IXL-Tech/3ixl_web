"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [nameError, setNameError] = useState("");

  // ================= HANDLE INPUT =================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = value.trim();

    if (name === "name") {
      if (/\d/.test(sanitizedValue)) {
        setNameError("❌ Full Name cannot contain numbers");
        return;
      } else {
        setNameError("");
      }
    }

    setFormData({ ...formData, [name]: sanitizedValue });
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#020617] via-[#031525] to-[#041c2e]" />

      <div className="absolute inset-0 -z-10 opacity-20">
        <Image src="/images/bg.png" alt="bg" fill className="object-cover" />
      </div>

      {/* HEADER */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-16">
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We&apos;d love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 pb-24">
        <div className="grid md:grid-cols-3 gap-14">

          {/* FORM */}
          <motion.div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-teal-400">
              Send Us a Message
            </h2>

            {responseMessage && (
              <p className="mb-4 text-center text-sm text-green-400">
                {responseMessage}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-400"
                />
                {nameError && (
                  <p className="text-red-400 text-sm mt-1">{nameError}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-400"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-teal-400 resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full font-semibold border-2 border-teal-400 hover:bg-teal-400 hover:text-black transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

          {/* INFO */}
          <motion.div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl h-fit">
            <h2 className="text-xl font-bold mb-8 text-teal-400">
              Contact Info
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image src="/images/phone.png" alt="phone" width={26} height={26} />
                <span className="text-gray-300">+233 506506443</span>
              </div>

              <div className="flex items-center space-x-4">
                <Image src="/images/mail.png" alt="mail" width={26} height={26} />
                <span className="text-gray-300">contact@3ixl.com</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}