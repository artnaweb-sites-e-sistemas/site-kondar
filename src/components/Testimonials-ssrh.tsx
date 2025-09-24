import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSSRH = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'Nunca imaginei que o WhatsApp da minha empresa pudesse trabalhar tão bem sozinho. A Kondar resolveu tudo.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Diretora de Marketing, EcoVerde',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'Em 30 dias, nossos leads qualificados aumentaram 250%. O ROI foi imediato e surpreendente.',
      rating: 5
    },
    {
      name: 'Roberto Mendes',
      role: 'Fundador, InvestSmart',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'A qualidade das respostas é impressionante. Nossos clientes nem percebem que é uma IA conversando.',
      rating: 5
    },
    {
      name: 'Mariana Santos',
      role: 'Gerente Comercial, VendaMais',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'Implementação foi super rápida. Em 2 horas já estava funcionando perfeitamente no nosso WhatsApp.',
      rating: 5
    },
    {
      name: 'Pedro Oliveira',
      role: 'Diretor, ConsultaPro',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'Nosso time de vendas agora foca apenas nos leads mais quentes. A produtividade triplicou.',
      rating: 5
    },
    {
      name: 'Juliana Ferreira',
      role: 'CMO, DigitalFlow',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      quote: 'O suporte da equipe é excepcional. Sempre disponíveis para ajudar e otimizar nossos resultados.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empresas que já transformaram seu atendimento e aumentaram suas vendas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-accent mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
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

export default TestimonialsSSRH;