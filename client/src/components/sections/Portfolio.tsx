import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossos Projetos"
          subtitle="Cada projeto é uma solução real para um problema real."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <div className="text-gray-600 text-4xl font-bold opacity-30">
                  {project.id.toUpperCase()}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-cyan-400 font-semibold cursor-pointer"
                  >
                    Ver projeto <ArrowRight size={18} />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg border border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
