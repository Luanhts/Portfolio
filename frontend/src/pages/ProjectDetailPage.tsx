import * as React from "react";

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

  // Define título da aba dinamicamente
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
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar aos projetos
          </Button>
        </div>
      </div>
    );
  }

  const handleLiveDemo = () => {
    alert("🚧 Esta funcionalidade ainda não foi implementada.");
  };

  const handleGithub = (): void => {
    alert({
      title: "🚧 Esta funcionalidade ainda não foi implementada.",
    });
  };

  return (
    <div className="min-h-screen text-white">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:text-purple-300 hover:bg-gray-800/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos projetos
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
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

          <h1 className="text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button onClick={handleLiveDemo}>Ver Demo</Button>
            <Button onClick={handleGithub} variant="outline">
              Ver Código
            </Button>
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Sobre o Projeto
          </h2>
          <div className="bg-gray-800/30 p-8 rounded-xl">
            {project.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
