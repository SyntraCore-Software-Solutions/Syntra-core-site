import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 } as any}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Syne' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl" style={{ fontFamily: 'DM Sans' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
