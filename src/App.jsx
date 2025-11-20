import AboutMeMain from "./componements/aboutMeSection/AboutMeMain"
import ContactMeMain from "./componements/contactMeSection/ContactMeMain";
import ExperienceMain from "./componements/experienceSection/ExperienceMain";
import FooterMain from "./componements/footer/FooterMain";
import HeroGradient from "./componements/heroSection/HeroGradient";
import HeroMain from "./componements/heroSection/HeroMain";
import NavbarMain from "./componements/navbar/NavbarMain";
import ProjectsMain from "./componements/projectsSection/ProjectsMain";
import SkillsMain from "./componements/skillsSection/SkillsMain";
import SubSkills from "./componements/skillsSection/SubSkills";
import SubHeroMain from "./componements/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      
    </main>
  );
}

export default App;