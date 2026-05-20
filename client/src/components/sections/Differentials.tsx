import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { differentials } from '@/data/differentials';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Differentials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionTitle title="Por que escolher a NovaCore's?" centered />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentials.map((diff, index) => {
            // @ts-ignore
            const IconComponent = Icons[diff.icon];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <IconComponent className="text-purple-400" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Syne' }}>
                  {diff.title}
                </h3>

                {/* Text */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {diff.text}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
