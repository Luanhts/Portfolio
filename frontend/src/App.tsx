import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <>
              <MainContent />
              <SectionTwo />
              <ProjectsPage />
            </>
          }
        />
        <Route path="/projeto/:id" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
