
import { Button } from '@/components/ui/button';
import content from '@/data/content.json';

const HeroSection = () => {
  const { hero } = content;

  const scrollToOffers = () => {
    const element = document.getElementById('offres');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center pt-20 bg-luxury-gradient relative overflow-hidden">
      {/* Images en maçonnerie - côté gauche - pleine hauteur */}
      <div className="absolute left-0 top-0 w-1/4 h-screen">
        <div className="grid grid-cols-2 gap-2 h-full py-4">
          {/* Colonne 1 */}
          <div className="space-y-2">
            <div className="h-40 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=160&fit=crop"
                alt="Salon de coiffure moderne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-56 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=224&fit=crop"
                alt="Coiffure créative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&h=128&fit=crop"
                alt="Coupe de cheveux"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&h=192&fit=crop"
                alt="Brushing professionnel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-2 pt-8">
            <div className="h-28 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=200&h=112&fit=crop"
                alt="Produits capillaires" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=200&h=208&fit=crop"
                alt="Coloration cheveux"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=200&h=144&fit=crop"
                alt="Shampooing soin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-44 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=200&h=176&fit=crop"
                alt="Coiffure tendance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Images en maçonnerie - côté droit - pleine hauteur */}
      <div className="absolute right-0 top-0 w-1/4 h-screen">
        <div className="grid grid-cols-2 gap-2 h-full py-4">
          {/* Colonne 1 */}
          <div className="space-y-2 pt-12">
            <div className="h-48 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=200&h=192&fit=crop"
                alt="Salon élégant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8198e7f9fe5f?w=200&h=128&fit=crop"
                alt="Outils de coiffure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=200&h=160&fit=crop"
                alt="Femme cheveux bouclés"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=200&h=144&fit=crop"
                alt="Détente salon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-2">
            <div className="h-36 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1595475038665-d7e8395f3fb2?w=200&h=144&fit=crop"
                alt="Coiffure mariage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=208&fit=crop"
                alt="Cheveux longs brillants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8198e7f9fe5f?w=200&h=160&fit=crop"
                alt="Accessoires coiffure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-28 bg-luxury-pearl rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=200&h=112&fit=crop"
                alt="Ambiance salon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenu central */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center px-8 md:px-16 lg:px-24">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-luxury-obsidian leading-tight mb-6 drop-shadow-lg">
              {hero.title}
            </h1>
            <p className="font-source-sans text-lg md:text-xl text-secondary/80 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToOffers}
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-luxury-gold via-luxury-gold to-amber-400 hover:from-amber-400 hover:via-luxury-gold hover:to-luxury-gold text-luxury-obsidian px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 rounded-full min-w-[200px] hover:scale-105 transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.cta}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"></div>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open(`tel:0673981638`, '_self')}
                className="group relative overflow-hidden border-2 border-luxury-obsidian/20 backdrop-blur-sm bg-white/10 text-luxury-obsidian hover:bg-luxury-obsidian hover:text-white px-10 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-500 rounded-full min-w-[200px] hover:scale-105 transform hover:border-luxury-obsidian"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06 73 98 16 38
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-obsidian/0 via-luxury-obsidian/5 to-luxury-obsidian/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay dégradé pour adoucir les images sur les côtés */}
      <div className="absolute left-0 top-0 w-1/4 h-screen bg-gradient-to-r from-transparent via-luxury-champagne/30 to-luxury-champagne/60 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/4 h-screen bg-gradient-to-l from-transparent via-luxury-champagne/30 to-luxury-champagne/60 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
