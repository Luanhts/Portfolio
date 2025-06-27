import * as React from "react";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Meus Projetos - Portfolio";
  }, []);

  const handleProjectClick = (projectId: number): void => {
    navigate(`/projeto/${projectId}`);
  };

  return (
    <div className="min-h-screen p-8 bg-white text-[#21243D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Meus Projetos</h1>
          <div className="w-24 h-1 bg-[#FF4C61] mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => handleProjectClick(project.id)}
              className="flex flex-col md:flex-row gap-6 border-b border-[#E0E0E0] pb-10 cursor-pointer hover:scale-[1.01] transition-transform duration-300"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full md:w-64 h-auto rounded-md object-cover"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <div className="flex items-center gap-4 my-3">
                  <span className="bg-[#FF4C61] text-white text-sm px-3 py-1 rounded font-bold">
                    {project.year}
                  </span>
                  <span className="text-[#8695A4] text-sm">
                    {project.category}
                  </span>
                </div>
                <p className="text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
