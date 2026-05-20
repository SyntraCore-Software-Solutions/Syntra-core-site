import { motion } from 'framer-motion';
import { useState } from 'react';
import { technologies } from '@/data/technologies';

export function Technologies() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate array for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 font-semibold mb-2">Stack Moderno</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Syne' }}
          >
            Trabalhamos com qualquer tecnologia
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={{ x: isPaused ? 0 : -1000 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 w-40 md:w-48 h-32 md:h-40 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)' }}
            >
              <span className="text-4xl md:text-5xl">{tech.icon}</span>
              <span className="text-gray-300 font-medium text-center text-sm md:text-base">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
