import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/portfolio/SectionWrapper";
import SkillBadge from "@/components/portfolio/SkillBadge";
import { Code, Database, Server, Cloud, Smartphone, Users, Brain, MessageSquare, Palette, GitBranch } from "lucide-react";

const skillsData = {
  frontend: [
    { name: "HTML5", icon: <Code /> }, { name: "CSS3", icon: <Palette /> }, { name: "JavaScript (ES6+)", icon: <Code /> },
    { name: "React", icon: <Code /> }, { name: "Next.js", icon: <Code /> }, { name: "Vue.js", icon: <Code /> },
    { name: "Angular", icon: <Code /> }, { name: "Tailwind CSS", icon: <Palette /> }, { name: "Sass/SCSS", icon: <Palette /> },
    { name: "TypeScript", icon: <Code /> }, { name: "Framer Motion", icon: <Palette /> }, { name: "Redux", icon: <Code /> },
  ],
  backend: [
    { name: "Node.js", icon: <Server /> }, { name: "Express.js", icon: <Server /> }, { name: "Python (Django/Flask)", icon: <Server /> },
    { name: "Java (Spring Boot)", icon: <Server /> }, { name: "Ruby on Rails", icon: <Server /> }, { name: "PHP (Laravel)", icon: <Server /> },
    { name: "REST APIs", icon: <Server /> }, { name: "GraphQL", icon: <Server /> },
  ],
  databases: [
    { name: "MongoDB", icon: <Database /> }, { name: "PostgreSQL", icon: <Database /> }, { name: "MySQL", icon: <Database /> },
    { name: "Firebase Firestore", icon: <Database /> }, { name: "Redis", icon: <Database /> },
  ],
  devops: [
    { name: "Docker", icon: <Cloud /> }, { name: "Kubernetes", icon: <Cloud /> }, { name: "AWS", icon: <Cloud /> },
    { name: "Google Cloud", icon: <Cloud /> }, { name: "Azure", icon: <Cloud /> }, { name: "CI/CD (Jenkins, GitHub Actions)", icon: <Cloud /> },
    { name: "Git", icon: <GitBranch /> },
  ],
  mobile: [
    { name: "React Native", icon: <Smartphone /> }, { name: "Flutter", icon: <Smartphone /> }, { name: "Swift (iOS)", icon: <Smartphone /> },
    { name: "Kotlin (Android)", icon: <Smartphone /> },
  ],
  softSkills: [
    { name: "Comunicação Efetiva", icon: <MessageSquare /> }, { name: "Trabalho em Equipe", icon: <Users /> }, { name: "Resolução de Problemas", icon: <Brain /> },
    { name: "Pensamento Crítico", icon: <Brain /> }, { name: "Adaptabilidade", icon: <Users /> }, { name: "Gerenciamento de Tempo", icon: <Brain /> },
    { name: "Liderança", icon: <Users /> }, { name: "Criatividade", icon: <Palette /> },
  ],
};

const SkillCategory = ({ title, skills, icon }) => (
  <motion.div 
    className="mb-12 p-6 rounded-lg bg-card glassmorphism-card shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
      {React.cloneElement(icon, { className: "mr-3 h-7 w-7 text-primary dark:text-accent" })}
      {title}
    </h2>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} index={index} />
      ))}
    </div>
  </motion.div>
);

const SkillsPage = () => {
  return (
    <SectionWrapper id="habilidades">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5}} 
          className="text-4xl font-bold text-center mb-4"
        >
          Minhas <span className="gradient-text">Habilidades</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5, delay: 0.2}} 
          className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Um conjunto diversificado de ferramentas e tecnologias que utilizo para construir aplicações robustas e eficientes.
        </motion.p>

        <SkillCategory title="Frontend Development" skills={skillsData.frontend} icon={<Code />} />
        <SkillCategory title="Backend Development" skills={skillsData.backend} icon={<Server />} />
        <SkillCategory title="Bancos de Dados" skills={skillsData.databases} icon={<Database />} />
        <SkillCategory title="DevOps & Ferramentas" skills={skillsData.devops} icon={<Cloud />} />
        <SkillCategory title="Desenvolvimento Mobile" skills={skillsData.mobile} icon={<Smartphone />} />
        <SkillCategory title="Soft Skills" skills={skillsData.softSkills} icon={<Users />} />
      </div>
    </SectionWrapper>
  );
};

export default SkillsPage;