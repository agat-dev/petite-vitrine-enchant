import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import OffersSection from '@/components/OffersSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        <meta name="keywords" content="hairdresser, salon, coiffeur" />
      </Helmet>
      <div className="min-h-screen font-source-sans">
        <Header />
        <HeroSection />
        <ServicesSection />
        <OffersSection />
        <ShowcaseSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
