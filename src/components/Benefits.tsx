import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Clock, Brain, FolderTree, Wrench, BarChart } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="flex flex-col items-start p-6 bg-white rounded-lg shadow-soft"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <div className="bg-secondary p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-primary-light">{description}</p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Bot className="h-6 w-6 text-accent" />,
      title: "Atendimento humanizado",
      description: "IA treinada para o seu negócio com linguagem natural e personalizada.",
      delay: 0
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Respostas instantâneas",
      description: "Disponibilidade 24 horas por dia, 7 dias por semana, sem espera.",
      delay: 0.1
    },
    {
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "Fluxos personalizados",
      description: "Agendamento, suporte e vendas adaptados ao seu modelo de negócio.",
      delay: 0.2
    },
    {
      icon: <FolderTree className="h-6 w-6 text-accent" />,
      title: "Segmentação inteligente",
      description: "Divisão por departamentos e integração com suas agendas e sistemas.",
      delay: 0.3
    },
    {
      icon: <Wrench className="h-6 w-6 text-accent" />,
      title: "Setup completo + manutenção",
      description: "Implementação profissional e atualizações contínuas inclusas.",
      delay: 0.4
    },
    {
      icon: <BarChart className="h-6 w-6 text-accent" />,
      title: "Relatórios detalhados",
      description: "Acompanhamento em tempo real de métricas e desempenho do atendimento.",
      delay: 0.5
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher a <span className="text-accent">Kondar</span>?
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-light">
            Transforme seu atendimento com tecnologia de ponta e suporte especializado
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;