import { motion } from 'framer-motion';
import { Code, Database, Zap, Terminal } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Code size={28} className="#FF4C61" />,
    skills: ["React","Typescript","JavaScript (ES6+)", "PHP","VueJS","Bootstrap", "HTML5", "CSS3",]
  },
  {
    category: "Backend",
    icon: <Terminal size={28} className="#FF4C61" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Python"]
  },
  {
    category: "Bancos de Dados",
    icon: <Database size={28} className="#FF4C61" />,
    skills: ["PostgreSQL", "MySql", "MongoDB", "FireBase"]
  },
  {
    category: "Outras Habilidades",
    icon: <Zap size={28} className="#FF4C61" />,
    skills: ["Metodologias Ágeis", "Resolução de Problemas", "Comunicação", "Aprendizado Contínuo",]
  }
];

export function SectionTwo() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const skillTagVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F2F5F7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1f1f1f]">Minhas Habilidades</h2>
          <p className="text-base sm:text-lg text-gray-500 mt-3 max-w-xl mx-auto">
            Um resumo das tecnologias e ferramentas que utilizo para criar soluções incríveis.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((categoryItem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center mb-5">
                <span className="p-2.5 bg-[#FFE5E5] rounded-md mr-4 text-[#FF4C61]">
                  {categoryItem.icon}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{categoryItem.category}</h3>
              </div>

              <motion.ul 
                className="flex flex-wrap gap-2"
                variants={{ visible: { transition: { staggerChildren: 0.07 }}}}
              >
                {categoryItem.skills.map((skill, skillIndex) => (
  <motion.li
    key={skillIndex}
    variants={skillTagVariants}
    className="bg-[#FFE5E5] text-[#FF4C61] text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
  >
    {skill}
  </motion.li>
))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
