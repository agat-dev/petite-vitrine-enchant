
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Clock, Award } from 'lucide-react';
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
            {/* Grille asymétrique */}
            <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[500px]">
              {/* Photo client fictif - grande carte */}
              <div className="col-span-4 row-span-3 relative group">
                <div className="absolute -top-2 -left-2 w-full h-full bg-primary/10 rounded-xl transform rotate-2 transition-transform group-hover:rotate-3"></div>
                <div className="relative bg-white rounded-xl shadow-xl p-4 h-full flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                      alt="Pierre, menuisier satisfait"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-anthracite">Pierre M.</div>
                      <div className="text-sm text-anthracite/70">Menuisier</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-anthracite/80 italic leading-relaxed">
                    "Mon nouveau site a transformé mon activité. Plus de visibilité, plus de clients !"
                  </p>
                </div>
              </div>

              {/* Interface de site web fictive */}
              <div className="col-span-2 row-span-2 relative group">
                <div className="absolute -top-1 -right-1 w-full h-full bg-secondary/10 rounded-lg transform -rotate-1 transition-transform group-hover:-rotate-2"></div>
                <div className="relative bg-white rounded-lg shadow-lg p-3 h-full transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-1 bg-anthracite/10 rounded w-full"></div>
                    <div className="h-1 bg-anthracite/10 rounded w-2/3"></div>
                    <div className="flex gap-1 mt-2">
                      <div className="w-8 h-6 bg-accent/30 rounded"></div>
                      <div className="w-8 h-6 bg-success/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges de qualité */}
              <div className="col-span-3 row-span-1 flex gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                  <Shield className="w-3 h-3 mr-1" />
                  Certifié
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
                  <Clock className="w-3 h-3 mr-1" />
                  Livraison rapide
                </Badge>
              </div>

              {/* Badge satisfaction */}
              <div className="col-span-3 row-span-1 flex justify-end">
                <Badge className="bg-success/20 text-anthracite border-success/30 hover:bg-success/30 transition-colors">
                  <Award className="w-3 h-3 mr-1" />
                  100% Satisfait
                </Badge>
              </div>

              {/* Statistique finale */}
              <div className="col-span-6 row-span-1 flex justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-primary/10">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary">150+</div>
                    <div className="text-sm text-anthracite/70">Artisans accompagnés</div>
                  </div>
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
