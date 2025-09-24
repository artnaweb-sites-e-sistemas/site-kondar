import React from 'react';
import { motion } from 'framer-motion';
// Removido MessageCircle, usando SVG customizado do WhatsApp

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-50 -skew-x-12 transform translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-6">
              Atendimento por WhatsApp no piloto automático — 
              <span className="text-accent"> rápido, humanizado e inteligente.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-light mb-8 max-w-xl">
              Configure sua IA conversacional treinada sob medida para o seu negócio e transforme o WhatsApp em um canal de vendas e suporte altamente eficiente.
            </p>
            
            <motion.a 
              href="https://wa.me/5571991252935?text=Ol%C3%A1%2C%20tudo%20bem%3F"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">👉</span> Agende uma consultoria gratuita
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 pl-0 lg:pl-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-white rounded-xl shadow-soft p-6 md:p-8">
              <div className="absolute -top-4 -left-4 bg-accent text-white p-3 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
              </div>
              
              <div className="flex flex-col space-y-4 mb-4">
                <div className="bg-secondary p-4 rounded-lg ml-auto max-w-[80%]">
                  <p className="text-primary">Olá! Como posso ajudar sua empresa hoje?</p>
                </div>
                
                <div className="bg-primary p-4 rounded-lg mr-auto max-w-[80%]">
                  <p className="text-white">Preciso agendar uma consultoria sobre atendimento automatizado.</p>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg ml-auto max-w-[80%]">
                  <p className="text-primary">Claro! Temos horários disponíveis nesta semana. Qual seria o melhor dia para você?</p>
                </div>
                
                <div className="bg-primary p-4 rounded-lg mr-auto max-w-[80%]">
                  <p className="text-white">Quarta-feira às 15h seria perfeito.</p>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg ml-auto max-w-[80%]">
                  <p className="text-primary">Perfeito! Reservei quarta-feira às 15h para sua consultoria gratuita. Você receberá todas as informações por e-mail. Mais alguma dúvida?</p>
                </div>
              </div>
              
              <div className="text-center text-sm text-primary-light">
                <p>IA conversacional treinada para agendamentos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;