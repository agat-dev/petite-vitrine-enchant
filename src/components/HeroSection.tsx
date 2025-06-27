
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
    <section id="accueil" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-success to-white relative overflow-hidden">
      {/* Images en maçonnerie - côté gauche - pleine hauteur */}
      <div className="absolute left-0 top-0 w-1/4 h-screen">
        <div className="grid grid-cols-2 gap-2 h-full py-4">
          {/* Colonne 1 */}
          <div className="space-y-2">
            <div className="h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200&h=160&fit=crop"
                alt="Salon de coiffure moderne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-56 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=224&fit=crop"
                alt="Coiffure créative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=200&h=128&fit=crop"
                alt="Coupe de cheveux"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&h=192&fit=crop"
                alt="Brushing professionnel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-2 pt-8">
            <div className="h-28 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=200&h=112&fit=crop"
                alt="Produits capillaires" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=200&h=208&fit=crop"
                alt="Coloration cheveux"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=200&h=144&fit=crop"
                alt="Shampooing soin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-44 bg-gray-200 rounded-lg overflow-hidden">
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
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=200&h=192&fit=crop"
                alt="Salon élégant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8198e7f9fe5f?w=200&h=128&fit=crop"
                alt="Outils de coiffure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=200&h=160&fit=crop"
                alt="Femme cheveux bouclés"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=200&h=144&fit=crop"
                alt="Détente salon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-2">
            <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595475038665-d7e8395f3fb2?w=200&h=144&fit=crop"
                alt="Coiffure mariage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=208&fit=crop"
                alt="Cheveux longs brillants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8198e7f9fe5f?w=200&h=160&fit=crop"
                alt="Accessoires coiffure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-28 bg-gray-200 rounded-lg overflow-hidden">
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
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-anthracite leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="font-source-sans text-lg md:text-xl text-anthracite/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToOffers}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium"
              >
                {hero.cta}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open(`tel:0673981638`, '_self')}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                06 73 98 16 38
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour adoucir les images sur les côtés */}
      <div className="absolute left-0 top-0 w-1/4 h-screen bg-gradient-to-r from-transparent to-white/60 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/4 h-screen bg-gradient-to-l from-transparent to-white/60 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
