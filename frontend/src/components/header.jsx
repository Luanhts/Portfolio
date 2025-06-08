import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mr-2">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="font-bold text-xl">ReceiptScan</span>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-6"
        >
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Recursos</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">Como funciona</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Preços</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
        </motion.nav>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Button variant="outline" className="hidden sm:inline-flex">Entrar</Button>
          <Button className="gradient-bg border-0">Começar grátis</Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;