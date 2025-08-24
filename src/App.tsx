import "./App.css";
import { Header } from "./component/Header";
import { HeroSection } from "./component/HeroSection";
import { MySkills } from "./component/MySkills";
import { ProjectsSection } from "./component/Project";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <MySkills />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
