import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '@/data/services';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Services() {
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
    <section id="services" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionTitle title="Nossos Serviços" centered />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            // @ts-ignore
            const IconComponent = Icons[service.icon];

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-900/80 hover:shadow-lg hover:shadow-cyan-500/10"
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  <IconComponent className="text-cyan-400" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
