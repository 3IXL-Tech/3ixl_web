"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function EducationalServices() {
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const endValue = 100;

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * endValue));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      startTime = null;
      setCount(0);
      animationFrame = requestAnimationFrame(animate);
    };

    startAnimation();

    const interval = setInterval(() => {
      startAnimation();
    }, 5000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      image: "/images/joseph.png",
      text: `"3IXL EDUTECH gave me hands-on experience in Data Analytics!"`,
      name: "Joseph Niakoh",
      role: "Data Analyst",
    },
    {
      image: "/images/duncan1.png",
      text: `"The bootcamp transformed my confidence in Machine Learning."`,
      name: "Buabeng Duncan Frimpong",
      role: "Risk, Actuarial and underwriting officer ",
    },
    {
      image: "/images/luccy.png",
      text: `"I gained hands on experience on analazing Data to make informed decisions"`,
      name: "Lucy Ansah Kyere",
      role: "Business Analyst",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">
      
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-[#031525] to-[#041c2e]" />
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image src="/images/bg.png" alt="bg" fill className="object-cover" />
      </div>

      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-teal-500 opacity-20 blur-[150px] rounded-full"></div>

      <section className="relative z-10 container mx-auto px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={testimonials[activeIndex].image}
                      alt="education"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 text-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex + "text"}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-gray-300 text-lg mb-4">
                      {testimonials[activeIndex].text}
                    </p>
                    <h4 className="font-bold text-white text-xl">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-teal-400">
                      {testimonials[activeIndex].role}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <div>
              <h2 className="text-2xl font-bold text-teal-400">
                Trained Over
              </h2>

              <motion.div
                key={count}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="text-6xl font-extrabold mt-3 text-white"
              >
                {count}+
              </motion.div>

              <p className="text-gray-400 mt-2">
                Learners since 2024
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Learners across the globe have been empowered through
              structured bootcamp programs, immersive workshops, and
              career-focused learning tracks. We provide hands-on training in
              Python Programming, Machine Learning, Deep Learning, Excel,
              Power BI, SQL, Cybersecurity, Mobile App Development, and
              Frontend & Backend Engineering equipping students with
              real-world skills that drive innovation, confidence, and career
              advancement in today’s digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-6 md:px-16 pb-32">
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            title: "Career Focused Programs",
            desc: "Structured programs designed to transition you into high-demand tech careers through mentorship, real projects, and job-ready training.",
            link: "educational-services/career-focused"
          },
          {
            title: "Level-Up Skills Programs",
            desc: "Advanced training tracks crafted to elevate your existing expertise and keep you competitive in a rapidly evolving tech industry.",
            link: "educational-services/level-up_skills"
          },
          {
            title: "Free Courses",
            desc: "Access foundational tech knowledge at no cost through our introductory courses designed to kickstart your learning journey."
          }].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.3)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {card.desc}
              </p>

              {card.link ? (
                <Link href={card.link}>
                  <button className="px-6 py-3 border border-teal-400 rounded-full text-white hover:bg-teal-400 hover:text-black transition duration-300">
                    Learn More
                  </button>
                </Link>
              ) : (
                <button className="px-6 py-3 border border-teal-400 rounded-full text-white hover:bg-teal-400 hover:text-black transition duration-300">
                  Coming Soon
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}