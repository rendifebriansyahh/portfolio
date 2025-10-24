import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    desc: "Modern brand design",
    image: "/assets/project1.jpg",
  },
  {
    id: 2,
    title: "Poster Art",
    desc: "Creative poster layouts",
    image: "/assets/project2.jpg",
  },
  {
    id: 3,
    title: "UI Kit",
    desc: "Mobile UI components",
    image: "/assets/project3.jpg",
  },
  {
    id: 4,
    title: "Packaging Design",
    desc: "Elegant product packaging",
    image: "/assets/project4.jpg",
  },
  {
    id: 5,
    title: "App Dashboard",
    desc: "Modern analytics interface",
    image: "/assets/project5.jpg",
  },
  {
    id: 6,
    title: "Social Media",
    desc: "Vibrant campaign visuals",
    image: "/assets/project6.jpg",
  },
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen pt-24 pb-32 px-8 sm:px-12 z-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 tracking-tight text-center"
        >
          Featured Works
        </motion.h1>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.5 },
                },
              }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.2)] transition-all duration-500">
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.desc}
                  </p>
                </div>

                {/* Subtle hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#FB63AC]/30 to-[#6C63FF]/20 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
