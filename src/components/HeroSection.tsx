
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=160&fit=crop&crop=face"
                alt="Artisan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-56 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=224&fit=crop"
                alt="Travail artisanal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=128&fit=crop&crop=face"
                alt="Menuisier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=192&fit=crop"
                alt="Artisan au travail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-2 pt-8">
            <div className="h-28 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=112&fit=crop&crop=face"
                alt="Céramiste" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=208&fit=crop&crop=face"
                alt="Coiffeuse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=144&fit=crop"
                alt="Atelier artisanal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-44 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=176&fit=crop"
                alt="Création artisanale"
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
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=192&fit=crop"
                alt="Ordinateur de travail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-32 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=128&fit=crop"
                alt="Laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=160&fit=crop"
                alt="Femme avec laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=144&fit=crop"
                alt="Réunion créative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-2">
            <div className="h-36 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=144&fit=crop"
                alt="Ambiance créative"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-52 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=208&fit=crop"
                alt="Nature inspiration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=200&h=160&fit=crop"
                alt="Architecture moderne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-28 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=112&fit=crop"
                alt="Business moderne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenu central */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
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
