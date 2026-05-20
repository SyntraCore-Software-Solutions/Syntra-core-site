import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BadgeCustom } from '@/components/ui/BadgeCustom';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <BadgeCustom text="Software House 🚀" variant="accent" />
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Syne' }}
              >
                Engenharia que resolve.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Velocidade que surpreende.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Somos engenheiros de software que transformam qualquer ideia em produto real — do site
              simples ao sistema mais complexo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => handleScroll('#services')}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold flex items-center gap-2 group"
              >
                Ver nossos serviços
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => handleScroll('#contact')}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-900 font-semibold"
              >
                Falar com a equipe
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-96">
              {/* Animated Code Block */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/30 p-6 backdrop-blur-sm"
              >
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-cyan-400">
                    <span className="text-purple-400">const</span> solution = <span className="text-green-400">'novacore'</span>;
                  </div>
                  <div className="text-cyan-400">
                    <span className="text-purple-400">function</span> <span className="text-yellow-400">build</span>() {'{'}
                  </div>
                  <div className="text-gray-400 ml-4">
                    <span className="text-purple-400">return</span> <span className="text-green-400">'excellence'</span>;
                  </div>
                  <div className="text-cyan-400">{'}'}</div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-32 h-32 border border-cyan-500/20 rounded-full flex items-center justify-center"
              >
                <Code2 className="text-cyan-500/40" size={48} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
