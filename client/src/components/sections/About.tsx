import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { founders } from '@/data/founders';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Quem está por trás da NovaCore's"
          subtitle="Dois engenheiros de software com a missão de entregar tecnologia que realmente funciona."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={itemVariants}
              className="relative p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white border-2 ${
                    index === 0
                      ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/50'
                      : 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/50'
                  }`}
                >
                  {founder.initials}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-1" style={{ fontFamily: 'Syne' }}>
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-center text-cyan-400 font-semibold mb-4 text-sm">
                {founder.role}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
                {founder.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href={founder.linkedin}
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={founder.github}
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
