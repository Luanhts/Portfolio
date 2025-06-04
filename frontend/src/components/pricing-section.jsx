import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      description: "Perfeito para começar a organizar suas finanças",
      features: [
        "5 escaneamentos por mês",
        "Categorização básica",
        "Armazenamento por 30 dias",
        "Exportação em PDF"
      ],
      popular: false,
      buttonText: "Começar grátis"
    },
    {
      name: "Premium",
      price: "R$ 29,90",
      period: "/mês",
      description: "Ideal para uso pessoal e controle financeiro completo",
      features: [
        "50 escaneamentos por mês",
        "Categorização avançada com IA",
        "Armazenamento ilimitado",
        "Exportação em múltiplos formatos",
        "Relatórios personalizados",
        "Sincronização com apps bancários"
      ],
      popular: true,
      buttonText: "Assinar agora"
    },
    {
      name: "Empresarial",
      price: "R$ 79,90",
      period: "/mês",
      description: "Para pequenas empresas e profissionais autônomos",
      features: [
        "Escaneamentos ilimitados",
        "Categorização avançada com IA",
        "Armazenamento ilimitado",
        "Exportação em múltiplos formatos",
        "Relatórios avançados para empresas",
        "Múltiplos usuários",
        "Integração contábil"
      ],
      popular: false,
      buttonText: "Contato comercial"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Planos para todas as necessidades
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Escolha o plano ideal para seu controle financeiro
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 shadow-lg border relative ${
                plan.popular ? "border-primary" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1">
                  Mais popular
                </Badge>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? "gradient-bg border-0" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;