import projectImg2 from "../assets/imgs/projects-imgs/project-img2.png";

export const projects = [
  {
    id: 1,
    title: "Sistema Web (MondeLuxe)",
    year: 2025,
    category: "Gestão",
    mainImage: projectImg2,
    description:
      `Sistema completo de gestão para franquias, com integração a APIs e relatórios avançados.\n
      Por motivos de confidencialidade e privacidade da empresa, este projeto não está disponível para visualização.`,
    fullDescription:
      "Este projeto foi desenvolvido com foco em performance, UX e integração com múltiplas APIs, como TiendaNube. Ideal para gerenciamento de vendas, cashback e estoque.\n\nImplementa autenticação JWT, painel administrativo e upload de imagens com marca d’água.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "S3", "JWT"],
  },
  {
    id: 2,
    title: "Controle Fácil",
    year: 2025,
    category: "Sistema Web",
    mainImage: projectImg2,
    description:
      "Aplicação financeira para controle de gastos com OCR e gráficos automáticos.",
    fullDescription:
      "Permite leitura de boletos e comprovantes usando OCR, categorização automática e relatórios em tempo real. Ideal para consultorias financeiras ou uso pessoal.",
    technologies: ["Vue.js", "Express.js", "Tesseract.js", "Chart.js"],
  },
  {
    id: 3,
    title: "TSW PG (Save Your Future)",
    year: 2025,
    category: "Hackathon",
    mainImage: projectImg2,
    description:
      "Projeto premiado em hackathon com foco em educação financeira para jovens.",
    fullDescription:
      "Permite arredondar gastos e guardar troco automaticamente. Interface simples e intuitiva para engajamento jovem.",
    technologies: ["React", "Firebase", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Smart Report",
    year: 2024,
    category: "Web App",
    mainImage: projectImg2,
    description:
      "Sistema de relatórios personalizados e automáticos para clínicas e empresas.",
    fullDescription:
      "Gera relatórios periódicos com base em dados brutos, gráficos comparativos e exportação em PDF com layout responsivo.",
    technologies: ["Vue.js", "Node.js", "PDFKit"],
  },
];
