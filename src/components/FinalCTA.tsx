import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Pare de perder tempo com atendimentos manuais.
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-white opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Tenha sua própria IA conversacional e transforme o WhatsApp em uma máquina de conversão.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://wa.me/5571991252935?text=Ol%C3%A1%2C%20tudo%20bem%3F" 
              className="inline-flex items-center bg-accent hover:bg-accent-light text-white font-medium px-8 py-4 rounded-md transition-colors duration-300 text-lg shadow-lg"
            >
              <span className="mr-2">👉</span> Agende sua consultoria gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <p className="mt-6 text-white opacity-70">
              Vagas limitadas para consultorias neste mês
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;