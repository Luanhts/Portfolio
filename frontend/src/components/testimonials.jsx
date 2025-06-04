import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Profissional Autônoma",
      content: "O ReceiptScan revolucionou como eu gerencio meus gastos profissionais. Agora consigo separar facilmente despesas pessoais e de trabalho para o imposto de renda.",
      avatar: "1"
    },
    {
      name: "Carlos Mendes",
      role: "Pequeno Empresário",
      content: "Economizo horas toda semana que antes gastava organizando recibos e notas fiscais. A categorização automática é incrivelmente precisa!",
      avatar: "2"
    },
    {
      name: "Juliana Costa",
      role: "Gerente Financeira",
      content: "A interface é intuitiva e os relatórios são excelentes. Consigo ter uma visão clara dos gastos da empresa e identificar onde podemos economizar.",
      avatar: "3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            O que nossos usuários dizem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Milhares de pessoas já transformaram sua gestão financeira com nossa plataforma
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border relative"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img  alt={`Avatar de ${testimonial.name}`} className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1680049118554-b2e40e2eef36" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="mb-6 text-gray-700">{testimonial.content}</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;