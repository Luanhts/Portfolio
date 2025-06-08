import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import HomePage from "@/pages/portfolio/HomePage";
import AboutPage from "@/pages/portfolio/AboutPage";
import ProjectsPage from "@/pages/portfolio/ProjectsPage";
import SkillsPage from "@/pages/portfolio/SkillsPage";
import ContactPage from "@/pages/portfolio/ContactPage";
import ScrollToTop from "@/components/portfolio/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 pt-24 md:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/habilidades" element={<SkillsPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;