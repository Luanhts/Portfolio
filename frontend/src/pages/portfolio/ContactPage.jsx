import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/portfolio/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Send, Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio de formulário
    // Em um projeto real, você faria uma requisição para um backend aqui (ex: Supabase, Firebase Functions, etc.)
    // ou usaria um serviço como Formspree, Netlify Forms.
    try {
      // Validação básica
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error("Por favor, preencha todos os campos.");
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        throw new Error("Por favor, insira um email válido.");
      }

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay da API
      
      console.log("Form data submitted:", formData); // Log para debug
      
      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado por entrar em contato. Responderei em breve.",
        variant: "default",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro ao Enviar",
        description: error.message || "Houve um problema ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5 text-primary dark:text-accent" />, text: "seu.email@example.com", href: "mailto:seu.email@example.com" },
    { icon: <Linkedin className="h-5 w-5 text-primary dark:text-accent" />, text: "LinkedIn", href: "https://linkedin.com/in/your-linkedin" },
    { icon: <Github className="h-5 w-5 text-primary dark:text-accent" />, text: "GitHub", href: "https://github.com/luanhts" },
    { icon: <MapPin className="h-5 w-5 text-primary dark:text-accent" />, text: "Sua Cidade, Seu Estado" },
  ];

  return (
    <SectionWrapper id="contato" className="bg-secondary/30 dark:bg-gray-800/30">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5}} 
          className="text-4xl font-bold text-center mb-4"
        >
          Entre em <span className="gradient-text">Contato</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity:0, y: -20}} 
          animate={{ opacity:1, y:0}} 
          transition={{duration: 0.5, delay: 0.2}} 
          className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Tem alguma pergunta, proposta ou apenas quer dizer oi? Adoraria ouvir de você!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8 p-6 md:p-8 bg-card rounded-lg shadow-xl glassmorphism-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">Informações de Contato</h2>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-full">
                  {info.icon}
                </div>
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors">
                    {info.text}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{info.text}</span>
                )}
              </div>
            ))}
             <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">Prefere um café virtual?</h3>
                <p className="text-muted-foreground text-sm">Estou sempre aberto a um bom papo sobre tecnologia, projetos ou qualquer ideia inovadora. Vamos marcar!</p>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-xl glassmorphism-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay:0.1, ease: "easeOut" }}
          >
            <div>
              <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required className="mt-1 bg-background/70 dark:bg-gray-800/70" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required className="mt-1 bg-background/70 dark:bg-gray-800/70" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-foreground">Assunto</Label>
              <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Assunto da mensagem" required className="mt-1 bg-background/70 dark:bg-gray-800/70" />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Sua Mensagem</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Digite sua mensagem aqui..." rows={5} required className="mt-1 bg-background/70 dark:bg-gray-800/70" />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground shadow-lg transform hover:scale-105 transition-transform" disabled={isSubmitting}>
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                />
              ) : (
                <Send className="mr-2 h-5 w-5" />
              )}
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactPage;