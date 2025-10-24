import React, { useEffect, useState, useRef, memo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AuroraButton from "../components/AuroraButton";

// 🔧 Memoized icon list (tidak re-render)
const tools = [
  { name: "Corel Draw", logo: "/assets/icons/CorelDraw.svg" },
  { name: "Illustrator", logo: "/assets/icons/illustrator.svg" },
  { name: "Photoshop", logo: "/assets/icons/photoshop.svg" },
  { name: "Figma", logo: "/assets/icons/figma.svg" },
  { name: "Canva", logo: "/assets/icons/canva.svg" },
];

const featuredProjects = [
  { id: 1, title: "Brand Identity", image: "/assets/project1.jpg" },
  { id: 2, title: "Poster Art", image: "/assets/project2.jpg" },
  { id: 3, title: "UI Kit", image: "/assets/project3.jpg" },
];

function Home() {
  // ✍️ Efek teks mengetik
  const roles = ["Graphic Designer", "UI/UX Enthusiast", "Visual Storyteller"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setCurrentText(roles[index].substring(0, subIndex));
    }, deleting ? 35 : 65); // ⚡ sedikit lebih cepat tapi halus
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  // 🌫️ Parallax lembut
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 200], [0, 40]);
  const y2 = useTransform(scrollY, [0, 200], [0, -25]);

  // 🎯 Ref & inView untuk animasi skills
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { amount: 0.3 });

  // ✨ Variants (efisien)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const iconContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-hidden">
      {/* 🌅 HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          style={{ y: y1 }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="glass p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 relative"
        >
          <motion.div style={{ y: y2 }} className="w-48 h-48 flex-shrink-0">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-full h-full object-cover rounded-full shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-2 leading-tight">
              <span className="h1-gradient">Rendi </span>
              <span className="text-[#FB63AC]">Febriansyah</span>
            </h1>

            <motion.h2
              key={currentText}
              className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 min-h-[30px] mb-4"
            >
              <span className="border-r-2 border-[#FB63AC] pr-1 animate-pulse">
                {currentText}
              </span>
            </motion.h2>

            <p className="text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mx-auto md:mx-0">
              I craft elegant visual identities and UI assets — combining
              minimal aesthetics with playful interactions.
            </p>

            <div className="mt-6 flex gap-3 items-center justify-center md:justify-start">
              <a href="/portfolio">
                <AuroraButton>See portfolio</AuroraButton>
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-xl border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold transition-transform duration-300 hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ⚙️ SKILLS SECTION */}
      <section
        ref={skillsRef}
        className="py-20 px-6 text-center relative overflow-hidden"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          My Toolkit
        </motion.h2>

        <motion.div
          variants={iconContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-8 md:gap-12 items-center"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={iconVariant}
              whileHover={{ scale: 1.1, y: -3 }}
              className="flex flex-col items-center justify-center w-20 md:w-24"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-12 h-12 md:w-14 md:h-14 mb-2 drop-shadow-md"
                loading="lazy"
                decoding="async"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle gradient motion effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #FB63AC 0%, transparent 70%)",
              "radial-gradient(circle at 80% 70%, #6C63FF 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          viewport={{ once: true }}
          className="absolute inset-0 -z-10 blur-3xl"
        />
      </section>

      {/* 🎨 FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i * 0.15}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold">
                {p.title}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/portfolio">
            <AuroraButton>View All Projects</AuroraButton>
          </a>
        </div>
      </section>

      {/* 🧠 ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          As a graphic designer, I love turning abstract ideas into bold visuals.
          My focus lies in blending minimalism with strong storytelling — from
          brand identities to engaging UI kits.
        </motion.p>

        <div className="mt-8">
          <a href="/about">
            <AuroraButton>More About Me</AuroraButton>
          </a>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="w-full py-20 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="glass p-10 rounded-2xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Let’s build something amazing together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I’m always open to freelance collaborations and creative projects.
          </p>
          <a href="/contact">
            <AuroraButton>Get in Touch</AuroraButton>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default memo(Home);
