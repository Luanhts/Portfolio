import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/portfolio/SectionWrapper";
import { Briefcase, GraduationCap, Lightbulb, Users } from "lucide-react";

const AboutPage = () => {
  const timelineEvents = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary dark:text-accent" />,
      date: "2018 - 2022",
      title: "Bacharelado em Ciência da Computação",
      institution: "Universidade Fictícia de Tecnologia",
      description: "Foco em desenvolvimento de software, algoritmos e estruturas de dados. Projeto de conclusão sobre sistemas distribuídos.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary dark:text-accent" />,
      date: "2022 - 2023",
      title: "Desenvolvedor Web Júnior",
      institution: "Tech Solutions Inc.",
      description: "Desenvolvimento e manutenção de aplicações web utilizando React, Node.js e MongoDB. Colaboração em equipes ágeis.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary dark:text-accent" />,
      date: "2023 - Presente",
      title: "Desenvolvedor Full Stack Pleno",
      institution: "Inova Web Ltda.",
      description: "Liderança técnica em projetos, arquitetura de novas funcionalidades e otimização de performance. Mentoria de desenvolvedores juniores.",
    },
  ];

  return (
    <SectionWrapper id="sobre" className="bg-secondary/30 dark:bg-gray-800/30">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5}} 
          className="text-4xl font-bold text-center mb-4"
        >
          Sobre <span className="gradient-text">Mim</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5, delay: 0.2}} 
          className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
        >
          Minha jornada no mundo da tecnologia, paixões e como posso agregar valor aos seus projetos.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img  
              src="https://images.unsplash.com/photo-1522071820081-009f0129c7da" 
              alt="Luan HTS trabalhando" 
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px] border-2 border-primary/10 dark:border-accent/10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-foreground">Minha História</h2>
            <p className="text-muted-foreground leading-relaxed">
              Desde cedo, fui fascinado por como a tecnologia pode transformar ideias em realidade. Comecei minha jornada com pequenos scripts e projetos pessoais, o que rapidamente evoluiu para uma paixão por desenvolvimento web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que a chave para um bom software é a combinação de código limpo, design intuitivo e uma profunda compreensão das necessidades do usuário. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fora do trabalho, gosto de explorar novas tecnologias, contribuir para projetos open-source e participar de comunidades de desenvolvimento.
            </p>
          </motion.div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">Minha Trajetória Profissional</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-border -translate-x-1/2"></div>
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="hidden md:block relative">
                  <div className="absolute w-6 h-6 rounded-full bg-primary dark:bg-accent -mt-3 -left-[11px] border-4 border-background z-10 flex items-center justify-center">
                    {React.cloneElement(event.icon, { className: "h-3 w-3 text-primary-foreground dark:text-accent-foreground"})}
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-6 bg-card rounded-lg shadow-lg glassmorphism-card">
                  <div className="flex items-center md:hidden mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary dark:bg-accent flex items-center justify-center mr-3">
                       {React.cloneElement(event.icon, { className: "h-5 w-5 text-primary-foreground dark:text-accent-foreground"})}
                    </div>
                    <span className="text-sm font-semibold text-primary dark:text-accent">{event.date}</span>
                  </div>
                  <span className="hidden md:inline-block text-sm font-semibold text-primary dark:text-accent mb-1">{event.date}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{event.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;