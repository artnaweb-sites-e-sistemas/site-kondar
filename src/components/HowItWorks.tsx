import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, RefreshCw } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, delay }) => {
  return (
    <motion.div 
      className="relative bg-white rounded-xl shadow-soft p-6 md:p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="relative mb-6">
        <div className="absolute -top-4 -left-4 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10">
          {number}
        </div>
        <div className="bg-secondary p-4 rounded-full inline-block">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-primary-light">{description}</p>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary rounded-full opacity-50 transform -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 
        left-1/2 -translate-x-1/2 w-40 h-40 
        bg-accent opacity-5 rounded-full 
        md:w-80 md:h-80 md:left-auto md:right-0 md:translate-x-1/3
      "></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Como <span className="text-accent">Funciona</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-light">
            Um processo simples e eficiente para automatizar seu atendimento
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative">
          {/* Connecting Line (visible on md screens and up) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-accent-light"></div>
          
          <Step 
            number={1}
            icon={<Search className="h-8 w-8 text-accent" />}
            title="Diagnóstico gratuito"
            description="Você agenda uma consultoria e entendemos os fluxos da sua empresa."
            delay={0}
          />
          
          <Step 
            number={2}
            icon={<Settings className="h-8 w-8 text-accent" />}
            title="Configuração personalizada"
            description="Criamos a IA com base nas particularidades do seu negócio, linguagem e estrutura de atendimento."
            delay={0.2}
          />
          
          <Step 
            number={3}
            icon={<RefreshCw className="h-8 w-8 text-accent" />}
            title="Manutenção contínua"
            description="Seu sistema fica sempre atualizado e alinhado às mudanças da sua operação."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;