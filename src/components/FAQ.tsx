import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, delay }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-lg text-primary">{question}</span>
        <span className="text-accent ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-primary-light">{answer}</p>
      </div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Isso é um chatbot?",
      answer: "Não. É uma IA treinada com base no seu negócio. Vai muito além de respostas prontas, entendendo contextos e oferecendo soluções personalizadas."
    },
    {
      question: "Preciso de site ou sistema próprio?",
      answer: "Não. Tudo roda no seu WhatsApp Business. Basta ter uma conta ativa e nossa equipe cuida de toda a implementação."
    },
    {
      question: "Preciso contratar um plano?",
      answer: "Não. O primeiro passo é a consultoria. A partir dela, criamos um plano sob medida para as necessidades específicas do seu negócio."
    },
    {
      question: "Consigo usar em várias unidades ou departamentos?",
      answer: "Sim. Configuramos fluxos separados para diferentes áreas ou equipes, garantindo que cada departamento tenha um atendimento personalizado."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "Geralmente entre 7 a 14 dias, dependendo da complexidade dos fluxos e da quantidade de informações a serem treinadas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-light">
            Tire suas dúvidas sobre nossa solução de IA conversacional
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-soft p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;