import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, Shield, Zap, HeadphonesIcon } from 'lucide-react';

const BenefitsSSRH = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Seus clientes são atendidos a qualquer hora, mesmo quando você está dormindo.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Qualificação Automática',
      description: 'A IA identifica leads qualificados e direciona para sua equipe de vendas.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Conversões',
      description: 'Resposta imediata aumenta em até 300% a taxa de conversão de leads.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Dados Seguros',
      description: 'Todas as conversas são criptografadas e seus dados ficam protegidos.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Integração Rápida',
      description: 'Configure em minutos e comece a usar imediatamente, sem complicações.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte Especializado',
      description: 'Nossa equipe te ajuda a configurar e otimizar seu atendimento.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Transforme Seu Atendimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Por que escolher a <span className="text-accent">Kondar</span>?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://wa.me/5571991252935"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
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

export default BenefitsSSRH;