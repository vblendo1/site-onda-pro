import { ThemeProvider } from './contexts/ThemeContext';
import PortfolioNav from './components/portfolio/PortfolioNav';
import PortfolioHero from './components/portfolio/PortfolioHero';
import AboutSection from './components/portfolio/AboutSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ContactSection from './components/portfolio/ContactSection';
import PortfolioFooter from './components/portfolio/PortfolioFooter';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <PortfolioNav />
        <main id="home">
          <PortfolioHero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <PortfolioFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
