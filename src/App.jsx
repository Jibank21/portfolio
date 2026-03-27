import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/NavBar";
import AboutSection from "./component/sections/AboutSection";
import ContactSection from "./component/sections/ContactSection";
import ExperienceSection from "./component/sections/ExperienceSection";
import HeroSection from "./component/sections/HeroSection";
import ProjectsSection from "./component/sections/ProjectSection";
import SkillsSection from "./component/sections/SkillSection";


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}