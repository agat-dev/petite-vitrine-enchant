
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
    <section id="accueil" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-success to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-anthracite leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="font-source-sans text-lg md:text-xl text-anthracite/80 mb-8 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img 
                src={hero.image}
                alt={hero.alt}
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-2xl">150+</div>
                  <div className="text-sm">Artisans accompagnés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
