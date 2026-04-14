"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ← added for routing

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter(); // ← added

  // FAQ data
  const faqs = [
    {
      question: "What educational services do you offer?",
      answer:
        "We provide online courses and workshops tailored to enhance your skills and knowledge.",
    },
    {
      question: "How can I empower my business?",
      answer:
        "Our AI solutions and software development services can significantly boost your digital growth and efficiency.",
    },
    {
      question: "What type of workshops are available?",
      answer:
        "We offer various workshops focusing on digital skills, AI applications, and graphic design to meet diverse learning needs.",
    },
    {
      question: "Are your courses suitable for beginners?",
      answer:
        "Our courses are designed for all skill levels, from beginners to advanced learners.",
    },
    {
      question: "What is your approach to digital growth?",
      answer:
        "We combine AI innovation, strategic software development, and digital transformation frameworks to accelerate business success.",
    },
    {
      question: "Do you offer certificates?",
      answer:
        "Yes, all our courses come with certificates upon completion.",
    },
  ];

  // Services data with unique descriptions
  const services = [
    {
      title: "Digital Growth",
      description:
        "Boost your business digitally with AI-driven strategies, automation, and growth-focused solutions.",
    },
    {
      title: "Educational Services",
      description:
        "Enhance your skills with our curated online courses, workshops, and certifications for all levels.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">

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

      {/* Glow Effects */}
      <div className="absolute -left-40 top-40 w-125 h-125 bg-teal-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-green-500 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-14"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Our Best <br />
              <span className="text-teal-400">Services</span>
            </h1>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Image
                src="/images/service.png"
                alt="Services"
                width={600}
                height={500}
                className="object-contain drop-shadow-[0_0_40px_rgba(45,212,191,0.6)]"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE SERVICES */}
          <div className="space-y-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl
                  hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]
                  transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 text-teal-400">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  className="px-6 py-3 border border-teal-400 rounded-full text-white hover:bg-teal-400 hover:text-black transition duration-300"
                  onClick={() => {
                    if (service.title === "Digital Growth") {
                      router.push("/services/digital-growth"); // ← navigate to new page
                    }
                    if (service.title === "Educational Services") {
                      router.push("/services/educational-services");
                    }
                  }}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT FAQ TITLE */}
          <div>
            <h2 className="text-5xl font-bold">
              <span className="text-white">FAQ</span>
            </h2>
            <p className="text-gray-400 mt-6">
              Frequently Asked Questions about our services and programs.
            </p>
          </div>

          {/* RIGHT FAQ CARD */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10
            hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.25)]
            transition-all duration-500"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10 py-6">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-teal-400 text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 mt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}