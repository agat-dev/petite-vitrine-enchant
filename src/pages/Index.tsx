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
        <title>Artisan Coiffeur Paris - Votre beauté mérite d'être révélée</title>
        <meta name="description" content="Salon de coiffure d'exception au cœur de Paris. Coiffeurs-visagistes experts, coupes sur-mesure et colorations tendance. Découvrez notre expertise rue de la Paix." />
        <meta name="keywords" content="coiffeur Paris, salon coiffure visagiste, coupe femme homme, coloration balayage, brushing professionnel, soin capillaire, Paris 2ème arrondissement" />
        <meta property="og:title" content="Artisan Coiffeur Paris - Salon de coiffure d'exception" />
        <meta property="og:description" content="Découvrez notre salon de coiffure parisien. Des coupes sur-mesure et colorations tendance par nos coiffeurs-visagistes experts." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=center" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artisan Coiffeur Paris - Salon de coiffure moderne" />
        <meta name="twitter:description" content="Salon de coiffure d'exception à Paris. Coiffeurs-visagistes experts pour des coupes sur-mesure." />
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
