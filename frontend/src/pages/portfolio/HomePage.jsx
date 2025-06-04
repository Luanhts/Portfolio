import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/portfolio/SectionWrapper";

const HomePage = () => {
  return (
    <SectionWrapper id="home" className="flex items-center">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Olá, eu sou <span className="gradient-text">Luan HTS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e experiências de usuário incríveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground shadow-lg transform hover:scale-105 transition-transform">
                <Link to="/projetos">
                  Meus Projetos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 dark:border-accent/50 dark:text-accent dark:hover:bg-accent/10 shadow-lg transform hover:scale-105 transition-transform">
                <a href="/curriculo-luanhts.pdf" download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a 
                href="https://github.com/luanhts" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors"
              >
                <Github size={32} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors"
              >
                <Linkedin size={32} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 animated-gradient-bg rounded-full blur-3xl opacity-30 dark:opacity-20 -z-10"></div>
            <img  
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="Luan HTS - Desenvolvedor Full Stack" 
              className="rounded-full shadow-2xl mx-auto w-3/4 md:w-full max-w-md border-4 border-primary/20 dark:border-accent/20"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomePage;