'use client';

import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export function SkillsSection() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive Design',
    'React', 'Next.js', 'TypeScript', 'Framer Motion', 'Lucide Icons',
    'Git', 'GitHub', 'Vercel', 'Netlify'
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
          
          <p className="text-white opacity-80 text-lg md:text-xl mt-10 max-w-2xl mx-auto leading-relaxed">
            Here are the modern frameworks, tools, and practices I leverage to bring digital ideas to life.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-5 justify-center pt-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              custom={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="px-6 py-3 bg-white/5 text-white rounded-full text-base font-medium border border-white/10 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10 opacity-90 group-hover:opacity-100 group-hover:text-white transition-all duration-200">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};