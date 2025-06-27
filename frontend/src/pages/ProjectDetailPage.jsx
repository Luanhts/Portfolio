
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { toast } from '@/components/ui/use-toast';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Voltar aos projetos
          </Button>
        </div>
      </div>
    );
  }

  const handleLiveDemo = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const handleGithub = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>{project.title} - Detalhes do Projeto</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-white hover:text-purple-300 hover:bg-gray-800/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos projetos
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
              <span className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {project.category}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                onClick={handleLiveDemo}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Demo
              </Button>
              <Button 
                onClick={handleGithub}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                Ver Código
              </Button>
            </div>
          </motion.div>

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Galeria do Projeto</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Image */}
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/30 p-4">
                  <img  
                    alt={`Screenshot principal do projeto ${project.title}`}
                    className="w-full h-96 object-cover rounded-xl"
                   src="https://images.unsplash.com/photo-1648134859211-4a1b57575f4e" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl bg-gray-800/30 p-3">
                  <img  
                    alt={`Screenshot secundário do projeto ${project.title}`}
                    className="w-full h-44 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                   src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                </div>
                <div className="relative overflow-hidden rounded-xl bg-gray-800/30 p-3">
                  <img  
                    alt={`Screenshot mobile do projeto ${project.title}`}
                    className="w-full h-44 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                   src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Sobre o Projeto</h2>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="prose prose-lg prose-invert max-w-none">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Tecnologias</h2>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-4">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="flex items-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                      <span className="text-gray-200 font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="mt-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Estatísticas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Ano de Desenvolvimento</span>
                    <span className="text-white font-semibold">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Categoria</span>
                    <span className="text-white font-semibold">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Tecnologias</span>
                    <span className="text-white font-semibold">{project.technologies.length}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">Gostou do projeto?</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato para discutir como posso ajudar no seu próximo projeto!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={handleLiveDemo}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Ver Mais Projetos
                </Button>
                <Button 
                  onClick={handleGithub}
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
