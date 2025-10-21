import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSteps from './components/ProcessSteps';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="py-20">
          <ProcessSteps />
        </div>
        <div className="py-20">
          <LeadForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
