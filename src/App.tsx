import "./App.css";
import { Header } from "./component/Header";
import { HeroSection } from "./component/HeroSection";
import { MyExperience } from "./component/MyExperience";
import { MySkills } from "./component/MySkills";
import { ProjectsSection } from "./component/Project";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <MySkills />
        <MyExperience />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
