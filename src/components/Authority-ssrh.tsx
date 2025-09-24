import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const AuthoritySSRH = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Empresas Atendidas',
      description: 'Confiaram em nossa solução'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Aumento Médio',
      description: 'Na taxa de conversão'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Satisfação',
      description: 'Dos nossos clientes'
    },
    {
      icon: Shield,
      number: '24/7',
      label: 'Disponibilidade',
      description: 'Suporte especializado'
    }
  ];

  const features = [
    {
      title: 'IA Conversacional Avançada',
      description: 'Utilizamos modelos de linguagem de última geração para criar conversas naturais e eficazes.'
    },
    {
      title: 'Integração Nativa WhatsApp',
      description: 'Conectamos diretamente com a API oficial do WhatsApp Business para máxima confiabilidade.'
    },
    {
      title: 'Aprendizado Contínuo',
      description: 'Nossa IA aprende com cada interação, melhorando constantemente a qualidade das respostas.'
    },
    {
      title: 'Segurança Empresarial',
      description: 'Criptografia end-to-end e conformidade com LGPD para proteger seus dados e dos clientes.'
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologia de Ponta em IA Conversacional
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Na Kondar, usamos as tecnologias mais atuais em IA conversacional para garantir que seu atendimento seja profissional, rápido e alinhado ao que o cliente espera — sem robôs genéricos e scripts engessados.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">
                {feature.title}
              </h3>
              <p className="opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Mais de <span className="text-accent">500 empresas</span><br />
            já transformaram seu atendimento com a Kondar
          </h3>
          <motion.a
            href="https://wa.me/5571991252935"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Conosco Agora
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySSRH;