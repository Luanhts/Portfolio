import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl gradient-bg p-8 md:p-12 text-white"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comece a organizar suas finanças hoje mesmo
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Junte-se a milhares de usuários que já transformaram sua gestão financeira com nossa plataforma inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Começar gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Agendar demonstração
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <img  alt="Aplicativo ReceiptScan em dispositivos" className="max-w-xs mx-auto md:max-w-sm" src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;