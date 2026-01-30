
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SmartSuggestions } from './components/SmartSuggestions';
import { DesignedByPros } from './components/DesignedByPros';
import { Testimonials } from './components/Testimonials';
import { Insights } from './components/Insights';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <SmartSuggestions />
      <DesignedByPros />
      <Testimonials />
      <Insights />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
