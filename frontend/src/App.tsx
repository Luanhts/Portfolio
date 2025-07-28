import { BrowserRouter as Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { MainContent } from "./Components/MainContent";
import { SectionTwo } from "./Components/SectionTwo";
import { ProjectsPage } from "./pages/ProjectsPage.tsx";
import { ProjectDetailPage } from "./pages/ProjectDetailPage.tsx";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <div >
              <section id="Home">
                <MainContent />
              </section>
              <section id="Skills" className="scroll-mt-15">
                <SectionTwo />
              </section>
              <section id="Projetos" className="scroll-mt-15">
                <ProjectsPage />
              </section>
            </div>
          }
        />
        <Route path="/projeto/:id" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
