
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { SmartSuggestions } from '../components/SmartSuggestions';
import { DesignedByPros } from '../components/DesignedByPros';
import { Testimonials } from '../components/Testimonials';
import { Insights } from '../components/Insights';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <SmartSuggestions />
            <DesignedByPros />
            <Testimonials />
            <Insights />
            <CTASection />
            <Footer />
        </>
    );
}
