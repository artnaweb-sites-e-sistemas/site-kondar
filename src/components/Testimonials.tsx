import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-soft p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute -top-3 -left-3">
        <Quote className="h-8 w-8 text-accent" />
      </div>
      <p className="text-primary-light italic mb-6 pt-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
          <span className="text-accent font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-primary-light">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Nunca imaginei que o WhatsApp da minha empresa pudesse trabalhar tão bem sozinho. A Kondar resolveu tudo.",
      author: "Mariana F.",
      company: "Clínica Integrativa",
      delay: 0
    },
    {
      quote: "A IA responde melhor que os atendentes que eu tinha antes. E o melhor: sem folga nem horário!",
      author: "João M.",
      company: "Loja de Móveis Planejados",
      delay: 0.2
    },
    {
      quote: "Hoje consigo fazer mais vendas, agendar consultas e reduzir chamados. Vale cada centavo.",
      author: "Carla T.",
      company: "Estúdio de Beleza",
      delay: 0.4
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossos <span className="text-accent">clientes</span> dizem
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-light">
            Histórias reais de empresas que transformaram seu atendimento
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;