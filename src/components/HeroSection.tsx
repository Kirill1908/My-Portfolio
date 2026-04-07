"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Mail, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; left: string; top: string; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const generated = [...Array(50)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));

      setParticles(generated);
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {mounted &&
          particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
              style={{
                left: p.left,
                top: p.top,
              }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 text-lg tracking-wider"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl text-white mb-6"
          >
            Kyrylo Hasan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8"
          >
            I&apos;m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Front-End Developer
            </span>{" "}
            specializing in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Modern Web Applications
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            I specialize in building high-performance web interfaces using
            React, Next.js, and Tailwind CSS. My focus is on writing
            pixel-perfect, clean code and ensuring seamless mobile
            responsiveness for every project I bring to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
              <Button
                onClick={() =>
                  window.open(
                    "/CV_Kyrylo_Hasan_Front-End_Developer_Dnipro.pdf",
                    "_blank",
                  )
                }
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                View My CV
              </Button>

              <a
                href="/CV_Kyrylo_Hasan_Front-End_Developer_Dnipro.pdf"
                download="CV_Kyrylo_Hasan_Front-End_Developer_Dnipro.pdf"
                className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center cursor-pointer shadow-lg shadow-emerald-500/20"
                title="Download PDF"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {[
                { icon: FaGithub, href: "https://github.com/Kirill1908" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/kyrylo-hasan-09634611a/",
                },
                { icon: Mail, href: "mailto:kyrylo.hasan.dev@gmail.com" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};