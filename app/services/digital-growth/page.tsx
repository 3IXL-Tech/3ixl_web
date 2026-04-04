"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalGrowth() {
  const services = [
    {
      title: "Application Development",
      image: "/images/app_dev.png",
    },
    {
      title: "Website Development",
      image: "/images/web_dev.png",
    },
    {
      title: "AI Application",
      image: "/images/AI_app.png",
    },
    {
      title: "Project Assistanship",
      image: "/images/project_assist.png",
    },
  ];

  const testimonials = [
    {
      name: "Emmanuel Buabeng",
      rating: 4,
      image: "/images/client1.png",
      comment: "Fantastic service! Our business grew tremendously.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      image: "/images/client3.png",
      comment: "Professional and efficient. Highly recommend.",
    },
    {
      name: "Alex Johnson",
      rating: 5,
      image: "/images/client2.png",
      comment: "Innovative solutions and great support team.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">

      {/* Background */}
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

      {/* ================= SERVICES GRID ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-teal-400 text-center">
          Digital Growth Services
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl p-10 pt-20 min-h-[260px]
                         hover:border-teal-400 
                         hover:shadow-[0_0_40px_rgba(45,212,191,0.25)]
                         transition-all duration-300"
            >
              {/* Floating Image Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-14 left-1/2 -translate-x-1/2 
                           w-28 h-28 rounded-2xl 
                           bg-white/10 backdrop-blur-lg 
                           border border-white/10 
                           flex items-center justify-center"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain drop-shadow-[0_0_25px_rgba(45,212,191,0.6)]"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center mt-6">
                {service.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative z-10 container mx-auto px-6 md:px-16 py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-teal-400 text-center">
          What Our Clients Say
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl p-8 text-center
                         hover:border-teal-400 
                         hover:shadow-[0_0_40px_rgba(45,212,191,0.25)]
                         transition-all duration-300"
            >
              {/* Client Image */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover rounded-full border border-teal-400"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-xl text-teal-400 mb-3">
                {client.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: client.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - client.rating }).map((_, idx) => (
                  <span key={idx} className="text-gray-500 text-lg">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 leading-relaxed">
                {client.comment}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}