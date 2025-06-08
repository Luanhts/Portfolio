import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary dark:bg-gray-800 text-secondary-foreground dark:text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/luanhts" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:seuemail@example.com" className="hover:text-primary dark:hover:text-accent transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Luan HTS. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Desenvolvido com <span role="img" aria-label="coração">❤️</span> usando React e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;