import React from "react";
import { motion } from "framer-motion";
import { Upload, Cpu, BarChart3, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-white" />,
      title: "Faça upload do seu recibo ou boleto",
      description: "Capture uma foto com seu celular ou faça upload de um arquivo digital em segundos.",
      color: "bg-blue-500"
    },
    {
      icon: <Cpu className="h-8 w-8 text-white" />,
      title: "Nossa IA analisa o documento",
      description: "Tecnologia avançada de reconhecimento extrai todos os dados relevantes automaticamente.",
      color: "bg-purple-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Visualize seus gastos categorizados",
      description: "Acesse relatórios detalhados e veja seus gastos organizados por categorias.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/30 text-primary">
            Processo Simples
          </Badge>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Como funciona
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Três passos simples para transformar seus recibos em insights financeiros
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_16px)] w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
              )}
              
              <div className="bg-white rounded-xl p-8 shadow-lg border relative z-10 h-full">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Benefícios comprovados</h3>
              <p className="text-muted-foreground mb-6">
                Nossos usuários experimentam resultados reais ao usar nossa plataforma para gerenciar suas finanças.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Economize até 5 horas por mês em gerenciamento financeiro",
                  "Reduza gastos em até 25% com insights claros sobre seus hábitos",
                  "Elimine completamente a papelada com armazenamento digital seguro",
                  "Prepare-se para impostos com relatórios organizados por categoria"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="blob-animation absolute -z-10 inset-0 bg-gradient-to-r from-primary/20 to-purple-400/20 opacity-70"></div>
              <img  alt="Dashboard mostrando análise financeira" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1586448354773-30706da80a04" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;