"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const words = ["Tech", "AI", "Innovation"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Image slider state
  const images = ["/images/resized_image.png", "/images/output.png"];
  const [currentImage, setCurrentImage] = useState(0);

  // Typing animation
  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(word.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText(word.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  // 7-second image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-[#031525] to-[#041c2e]" />

      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Elevate your <br />
              Craft in{" "}
              <span className="text-teal-400">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              Empowering learners, businesses, and communities through intelligent solutions
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center justify-center
              px-8 py-3
              border border-teal-400
              rounded-full
              text-teal-400
              hover:bg-teal-400
              hover:text-black
              hover:shadow-[0_0_20px_#2dd4bf]
              transition-all duration-300
              active:scale-95"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Right Image Slider with Floating Motion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-10 overflow-hidden">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Floating Motion */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={images[currentImage]}
                      alt="Slide Image"
                      width={420}
                      height={520}
                      priority
                      className="object-contain drop-shadow-[0_0_35px_rgba(45,212,191,0.4)]"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}