import { motion } from 'framer-motion';

interface BadgeCustomProps {
  text: string;
  icon?: string;
  variant?: 'default' | 'accent' | 'secondary';
}

export function BadgeCustom({ text, icon, variant = 'default' }: BadgeCustomProps) {
  const variants = {
    default: 'bg-gray-900 border border-gray-700 text-gray-300',
    accent: 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400',
    secondary: 'bg-purple-500/10 border border-purple-500/30 text-purple-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 } as any}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </motion.div>
  );
}
