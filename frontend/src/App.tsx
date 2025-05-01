import "./App.css";
import { MainContent } from "./Components/MainContent";
import { NavBar } from "./Components/NavBar";
import { SectionTwo } from "./Components/SectionTwo";
import { SectionThree } from "./Components/SectionThree";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <MainContent />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
