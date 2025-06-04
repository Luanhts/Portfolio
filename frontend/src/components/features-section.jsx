import React from "react";
import { motion } from "framer-motion";
import { ScanLine, PieChart, BadgeDollarSign, Zap, Shield, Clock } from "lucide-react";
import FeatureCard from "@/components/feature-card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <ScanLine className="h-6 w-6 text-primary" />,
      title: "Escaneamento Inteligente",
      description: "Capture recibos e boletos com seu celular ou faça upload de arquivos digitais para processamento instantâneo."
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Categorização Automática",
      description: "Nossa IA identifica e classifica automaticamente seus gastos em categorias como alimentação, transporte, lazer e mais."
    },
    {
      icon: <BadgeDollarSign className="h-6 w-6 text-primary" />,
      title: "Controle Financeiro",
      description: "Visualize relatórios detalhados e acompanhe seus gastos por categoria, período e fornecedor."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Processamento Rápido",
      description: "Resultados em segundos com nossa tecnologia de reconhecimento avançada e processamento em nuvem."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Segurança Garantida",
      description: "Seus dados financeiros são protegidos com criptografia de ponta a ponta e nunca são compartilhados."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Histórico Completo",
      description: "Acesse todo seu histórico de gastos a qualquer momento, com busca avançada e filtros personalizados."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Recursos poderosos para suas finanças
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Transforme a maneira como você gerencia seus gastos com nossa tecnologia de ponta
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;