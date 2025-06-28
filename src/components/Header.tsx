
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
    <header className="fixed top-0 w-full bg-artdeco-black/95 backdrop-blur-sm border-b border-artdeco-gold/20 z-50">
      <div className="container mx-auto px-4 md:py-4 py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 flex items-center justify-center">
              <span className="text-artdeco-black font-cinzel font-bold text-lg">
                <img 
                  src="/logo.png"
                  alt="Logo"
                  className="w-20 h-20 object-contain"
                />
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-artdeco-cream text-lg hover:text-artdeco-gold transition-colors font-poiret tracking-wide"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-artdeco-cream text-lg hover:text-artdeco-gold transition-colors font-poiret tracking-wide"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('offres')}
              className="text-artdeco-cream text-lg hover:text-artdeco-gold transition-colors font-poiret tracking-wide"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('realisations')}
              className="text-artdeco-cream text-lg hover:text-artdeco-gold transition-colors font-poiret tracking-wide"
            >
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-artdeco-cream text-lg hover:text-artdeco-gold transition-colors font-poiret tracking-wide"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-artdeco-gold hover:bg-artdeco-darkGold text-artdeco-black font-montserrat font-medium tracking-wide uppercase px-6 py-2 rounded-none border border-artdeco-gold hover:border-artdeco-darkGold transition-all duration-300"
            >
              Devis Gratuit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-artdeco-gold transition-all"></span>
            <span className="w-6 h-0.5 bg-artdeco-gold transition-all"></span>
            <span className="w-6 h-0.5 bg-artdeco-gold transition-all"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-artdeco-gold/20 pt-4 bg-artdeco-black/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-artdeco-cream hover:text-artdeco-gold transition-colors font-poiret text-left tracking-wide"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-artdeco-cream hover:text-artdeco-gold transition-colors font-poiret text-left tracking-wide"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('offres')}
                className="text-artdeco-cream hover:text-artdeco-gold transition-colors font-poiret text-left tracking-wide"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('realisations')}
                className="text-artdeco-cream hover:text-artdeco-gold transition-colors font-poiret text-left tracking-wide"
              >
                Réalisations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-artdeco-cream hover:text-artdeco-gold transition-colors font-poiret text-left tracking-wide"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-artdeco-gold hover:bg-artdeco-darkGold text-artdeco-black w-fit font-montserrat font-medium tracking-wide uppercase px-6 py-2 rounded-none border border-artdeco-gold hover:border-artdeco-darkGold transition-all duration-300"
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
