
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LV</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-anthracite">
              La Petite Vitrine
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-anthracite hover:text-primary transition-colors font-source-sans"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-anthracite hover:text-primary transition-colors font-source-sans"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('offres')}
              className="text-anthracite hover:text-primary transition-colors font-source-sans"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('realisations')}
              className="text-anthracite hover:text-primary transition-colors font-source-sans"
            >
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-anthracite hover:text-primary transition-colors font-source-sans"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Devis Gratuit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-anthracite transition-all"></span>
            <span className="w-6 h-0.5 bg-anthracite transition-all"></span>
            <span className="w-6 h-0.5 bg-anthracite transition-all"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-anthracite hover:text-primary transition-colors font-source-sans text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-anthracite hover:text-primary transition-colors font-source-sans text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('offres')}
                className="text-anthracite hover:text-primary transition-colors font-source-sans text-left"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('realisations')}
                className="text-anthracite hover:text-primary transition-colors font-source-sans text-left"
              >
                Réalisations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-anthracite hover:text-primary transition-colors font-source-sans text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white w-fit"
              >
                Devis Gratuit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
