"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Nana Amissah Amoah",
    role: "AI ENGINEER",
    image: "/images/amissa.png",
    email: "amissa@3ixl.com",
    linkedin: "https://www.linkedin.com/in/nana-amoah-51279b283/",
    whatsapp: "https://wa.me/233505884057",
  },
  {
    name: "Bernard Zephaniah Addo-Addo",
    role: "ML ENGINEER / LEAD INSTRUCTOR ",
    image: "/images/bernard.png",
    email: "zephania@3ixl.com",
    linkedin: "https://www.linkedin.com/in/bernard-zephaniah-addo-addo-6a728b220/",
    whatsapp: "https://wa.me/233540251498",
  },
  {
    name: "David Kwesi Sam",
    role: "FULL STACK DEVELOPER",
    image: "/images/david2.png",
    email: "dsam5@3ixl.com",
    linkedin: "https://www.linkedin.com/in/david-kwesi-sam/",
    whatsapp: "https://wa.me/233207132997",
  },
  {
    name: "Faustina Aba Owu",
    role: "MARKETING LEAD / PROGRAMS CORDINATOR",
    image: "/images/faustina2.png",
    email: "faustina@3ixl.com",
    linkedin: "https://www.linkedin.com/in/faustina-aba-owu-103880319/",
    whatsapp: "https://wa.me/233550592956",
  },
];

/* 🔥 NEW INTERNS DATA */
const interns = [
  {
    name: "Gideon Acheampong",
    role: "ML & UI/UX ENGINEER",
    image: "/images/gideon.png",
    email: "owusuacheampong670@gmail.com",
    linkedin: "https://www.linkedin.com/in/gideon-owusu-acheampong-3229b4233/",
    whatsapp: "https://wa.me/233200200747",
  },
  {
    name: "Benedicta Opoku",
    role: "PROGRAMS & MARKETING ASSOCIATE",
    image: "/images/benedicta.png",
    email: "Opokubenedicta1023@gmail.com",
    linkedin: "https://www.linkedin.com/in/benedicta-opoku-087848263/",
    whatsapp: "https://wa.me/233592243246",
  },
  {
    name: "Nana Buobu Adofo",
    role: "MARKETING ASSOCIATE",
    image: "/images/Nana_Buobu.png",
    email: "nanaadufobuobu100@gmail.com",
    linkedin: "https://www.linkedin.com/in/nana-adufo-buobu-353684261/",
    whatsapp: "https://wa.me/233554196024",
  },
];

export default function ReadMore() {
  return (
    <div className="relative min-h-screen pt-28 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#020617] via-[#031525] to-[#041c2e]" />

      <section className="container mx-auto px-6 md:px-16 py-20">

        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center md:text-left">
          Meet Our <span className="text-teal-400">Dedicated Team</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
              p-8 rounded-3xl transition-all duration-500 
              hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
            >
              {/* Floating Profile Image */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={170}
                  height={170}
                  className="rounded-2xl object-cover shadow-[0_0_25px_rgba(45,212,191,0.4)]"
                />
              </motion.div>

              <h2 className="text-2xl font-bold text-center mb-2">
                {member.name}
              </h2>

              <p className="text-teal-400 text-center mb-5">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-5 mb-5">
                
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/linkedIn.png"
                    alt="linkedin"
                    width={28}
                    height={28}
                    className="hover:scale-110 transition cursor-pointer"
                  />
                </a>

                <a href={member.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/whatsapp.png"
                    alt="whatsapp"
                    width={28}
                    height={28}
                    className="hover:scale-110 transition cursor-pointer"
                  />
                </a>

              </div>

              <p className="text-gray-400 text-center text-sm">
                Email : {member.email}
              </p>

            </motion.div>
          ))}

        </div>

        {/* ================= INTERN SECTION (NEW) ================= */}

        <div className="mt-28">

          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center md:text-left">
            Meet Our <span className="text-teal-400">Interns</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-12">

            {interns.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
                p-8 rounded-3xl transition-all duration-500 
                hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
              >
                {/* Floating Image */}
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-2xl object-cover shadow-[0_0_25px_rgba(45,212,191,0.4)]"
                  />
                </motion.div>

                <h2 className="text-xl font-bold text-center mb-2">
                  {member.name}
                </h2>

                <p className="text-teal-400 text-center mb-5">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mb-5">
                  
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/linkedIn.png"
                      alt="linkedin"
                      width={26}
                      height={26}
                      className="hover:scale-110 transition cursor-pointer"
                    />
                  </a>

                  <a href={member.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/whatsapp.png"
                      alt="whatsapp"
                      width={26}
                      height={26}
                      className="hover:scale-110 transition cursor-pointer"
                    />
                  </a>

                </div>

                <p className="text-gray-400 text-center text-sm">
                  Email : {member.email}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

      </section>
    </div>
  );
}