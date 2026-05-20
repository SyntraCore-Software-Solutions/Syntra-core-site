import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ContactFormData } from '@/types';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: integrar com Formspree ou EmailJS
      console.log('Dados do formulário:', data);
      // Simular envio
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Vamos construir algo juntos?"
          subtitle="Tem uma ideia ou um problema pra resolver? Fala com a gente."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Mail className="text-cyan-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Syne' }}>
                  Email
                </h3>
                <a
                  href="mailto:contato@novacore.com.br"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  contato@novacore.com.br
                </a>
                <p className="text-sm text-gray-500 mt-1">/* TODO: trocar pelo e-mail real */</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Phone className="text-cyan-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Syne' }}>
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5500000000000"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  (00) 00000-0000
                </a>
                <p className="text-sm text-gray-500 mt-1">/* TODO: trocar pelo número real */</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Syne' }}>
                  Localização
                </h3>
                <p className="text-gray-400">Brasil 🇧🇷</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Syne' }}>
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  title="GitHub"
                >
                  gh
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  title="Instagram"
                >
                  ig
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Seu nome completo
              </label>
              <Input
                {...register('name', { required: 'Nome é obrigatório' })}
                placeholder="João Silva"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Seu email
              </label>
              <Input
                {...register('email', {
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
                type="email"
                placeholder="seu@email.com"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Project Type */}
            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Descreva seu projeto
              </label>
              <Textarea
                {...register('message', { required: 'Mensagem é obrigatória' })}
                placeholder="Conte-nos sobre sua ideia..."
                rows={4}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 resize-none"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensagem
                </>
              )}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
