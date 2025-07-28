
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "../ui/button";
import { projects } from "../data/projects";

export function ProjectDetailPage() {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const project = projects.find((p) => p.id === parseInt(id || "0"));
  
  const isDisabled = project?.id === 1;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Detalhes do Projeto`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline" >
            Voltar aos projetos
          </Button>
        </div>
      </div>
    );
  }

  const handleLiveDemo = () => {
    alert("🚧 Esta funcionalidade ainda não foi implementada.");
  };

  const handleGithub = () => {
    alert("🚧 Esta funcionalidade ainda não foi implementada.");
  };

  return (
    <div className="min-h-screen text-white">
      {/* Navegação superior */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:text-purple-300 hover:bg-gray-800/50 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2 cursor:pointer" />
            Voltar aos projetos
          </Button>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Cabeçalho do projeto */}
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
            <span className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {project.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-black">
            {project.title}
          </h1>

          <p className="text-xl text-black leading-relaxed max-w-4xl whitespace-pre-line">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={!isDisabled ? handleLiveDemo: undefined}
              disabled={isDisabled}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
            <Button
              onClick={handleGithub}
              variant="outline"
              disabled={isDisabled}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
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
            ></motion.div>


        {/* Descrição completa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-black mb-6">
            Sobre o Projeto
          </h2>
          <div className="bg-gray-200 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="space-y-4">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-black leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tecnologias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Tecnologias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.technologies?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 p-3 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <span className="text-black">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
