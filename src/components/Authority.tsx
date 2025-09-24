import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, ThumbsUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, delay }) => {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mr-3 text-accent">
        {icon}
      </div>
      <p className="text-primary font-medium">{title}</p>
    </motion.div>
  );
};

const Authority: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Segurança de dados garantida",
      delay: 0
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Tecnologia de ponta em IA",
      delay: 0.1
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Especialistas certificados",
      delay: 0.2
    },
    {
      icon: <ThumbsUp className="h-5 w-5" />,
      title: "Satisfação garantida",
      delay: 0.3
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary rounded-xl shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Autoridade e Garantia
              </motion.h2>
              
              <motion.p 
                className="text-primary-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Na Kondar, usamos as tecnologias mais atuais em IA conversacional para garantir que seu atendimento seja profissional, rápido e alinhado ao que o cliente espera — sem robôs genéricos e scripts engessados.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Feature 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    delay={feature.delay}
                  />
                ))}
              </div>
            </div>
            
            <motion.div 
              className="bg-primary p-8 md:p-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Mais de <span className="text-accent">200+</span> empresas
                </h3>
                <p className="text-white opacity-80 mb-6">
                  já transformaram seu atendimento com a Kondar
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  <div className="bg-primary-light rounded p-3 text-center">
                    <p className="text-2xl font-bold text-accent">97%</p>
                    <p className="text-sm text-white opacity-80">Satisfação</p>
                  </div>
                  <div className="bg-primary-light rounded p-3 text-center">
                    <p className="text-2xl font-bold text-accent">24/7</p>
                    <p className="text-sm text-white opacity-80">Disponibilidade</p>
                  </div>
                  <div className="bg-primary-light rounded p-3 text-center">
                    <p className="text-2xl font-bold text-accent">70%</p>
                    <p className="text-sm text-white opacity-80">Menos custos</p>
                  </div>
                  <div className="bg-primary-light rounded p-3 text-center">
                    <p className="text-2xl font-bold text-accent">3x</p>
                    <p className="text-sm text-white opacity-80">Mais conversões</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;