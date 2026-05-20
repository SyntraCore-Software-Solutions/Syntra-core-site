import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">NC</span>
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Syne' }}>
                NovaCore's
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Engenharia que resolve. Velocidade que surpreende.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'Syne' }}>
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <Mail size={18} />
                <span className="text-sm">contato@novacore.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                <Phone size={18} />
                <span className="text-sm">(00) 00000-0000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">Brasil 🇧🇷</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'Syne' }}>
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  title={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>&copy; {currentYear} NovaCore's. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
