import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/portfolio/SectionWrapper";
import ProjectCard from "@/components/portfolio/ProjectCard";

const projectsData = [
  {
    title: "Sistema de E-commerce Moderno",
    description: "Plataforma de e-commerce completa com carrinho de compras, checkout, painel de admin e integração de pagamentos. Foco em performance e UX.",
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Aplicativo de Gerenciamento de Tarefas",
    description: "Um app intuitivo para organizar tarefas, definir prioridades e colaborar em equipe. Inclui notificações e relatórios de progresso.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    tags: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Dashboard Analítico Interativo",
    description: "Painel de visualização de dados com gráficos interativos, filtros dinâmicos e exportação de relatórios. Construído com D3.js e React.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "D3.js", "Python (Flask)", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Blog Pessoal Minimalista",
    description: "Um blog com design limpo e focado no conteúdo, construído com um gerador de site estático para máxima performance e segurança.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    tags: ["Next.js", "Markdown", "Vercel", "SEO"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Ferramenta de Colaboração em Tempo Real",
    description: "Aplicação que permite edição colaborativa de documentos em tempo real, utilizando WebSockets e CRDTs.",
    imageUrl: "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Sistema de Reservas Online",
    description: "Plataforma para agendamento de serviços e reservas, com calendário interativo e notificações por email/SMS.",
    imageUrl: "https://images.unsplash.com/photo-1560439514-494f3036a097",
    tags: ["Angular", "Spring Boot", "MySQL", "Twilio"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsPage = () => {
  return (
    <SectionWrapper id="projetos">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5}} 
          className="text-4xl font-bold text-center mb-4"
        >
          Meus <span className="gradient-text">Projetos</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5, delay: 0.2}} 
          className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Uma seleção dos meus trabalhos mais recentes e desafiadores. Explore e veja o que posso construir!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPage;