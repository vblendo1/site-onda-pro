import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Differentials from './components/Differentials';
import ProductCatalog from './components/ProductCatalog';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import ProcessSteps from './components/ProcessSteps';
import LeadForm from './components/LeadForm';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Differentials />
        <ProductCatalog />
        <Testimonials />
        <div id="como-funciona">
          <ProcessSteps />
        </div>
        <BlogSection />
        <div id="cadastro">
          <LeadForm />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
