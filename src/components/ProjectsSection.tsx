"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "Nice Gadgets",
      description:
        "A responsive and user-friendly product catalog showcasing various phone models. Users can browse, filter by brand and price, view detailed pages for each phone, and enjoy smooth animations and intuitive navigation.",
      image: "/images/nice-gadgets.png",
      technologies: ["React", "TypeScript", "Bulma"],
      github: "https://github.com/Kirill1908/Nice-Gadgets",
      live: "https://kirill1908.github.io/Nice-Gadgets/",
    },
    {
      title: "Nature Guardians",
      description:
        "A responsive and user-friendly website for a nonprofit environmental organization. Users can learn about the mission, explore ongoing projects, read blog posts and news, discover upcoming events, and make donations to support the cause.",
      image: "/images/nature-guardians.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      github: "https://github.com/Kirill1908/Nature-Guardians",
      live: "https://nature-guardians.vercel.app/",
    },
    {
      title: "Creative Bakery",
      description:
        "A clean and modern landing page for a fictional bakery brand — Creative Bakery. The design emphasizes soft colors, elegant typography, and a calm visual atmosphere to create a refined user experience across all devices.",
      image: "/images/creative-bakery.png",
      technologies: ["HTML", "SCSS", "JavaScript"],
      github: "https://github.com/Kirill1908/Creative-Bakery-lp",
      live: "https://kirill1908.github.io/Creative-Bakery-lp/",
    },
    {
      title: "Bang & Olufsen",
      description:
        "A sleek and modern landing page inspired by Bang & Olufsen, showcasing elegant interior design elements, smooth layout, and responsive design.",
      image: "/images/bang-olufsen.png",
      technologies: ["HTML", "SCSS", "JavaScript"],
      github: "https://github.com/Kirill1908/Bang-Olufsen-lp",
      live: "https://kirill1908.github.io/Bang-Olufsen-lp/",
    },
    {
      title: "2048 Game",
      description:
        "A browser-based version of the classic 2048 game featuring keyboard controls, score tracking and smooth animations. Simple and intuitive interface for an engaging experience on any device.",
      image: "/images/2048-game.jpg",
      technologies: ["HTML", "SCSS", "JavaScript"],
      github: "https://github.com/Kirill1908/2048-Game",
      live: "https://kirill1908.github.io/2048-Game/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">My Projects</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        ></motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        ></motion.div>
      </div>
    </section>
  );
}
