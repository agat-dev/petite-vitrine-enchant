
import { Image, Star, Users } from 'lucide-react';
import content from '@/data/content.json';

const ServicesSection = () => {
  const { pillars } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'image':
        return <Image className="w-8 h-8" />;
      case 'star':
        return <Star className="w-8 h-8" />;
      case 'users':
        return <Users className="w-8 h-8" />;
      default:
        return <Star className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-artdeco-black relative overflow-hidden">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-artdeco-gold/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* Ornement supérieur */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-24 h-px bg-gradient-to-l from-artdeco-gold to-transparent"></div>
            <div className="relative mx-3">
              <div className="w-4 h-4 border border-artdeco-gold rotate-45 bg-transparent"></div>
              <div className="absolute top-1/2 left-1/2 w-px h-px rounded-full bg-artdeco-gold transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-artdeco-gold to-transparent"></div>
          </div>

          <h2 className="font-cinzel font-normal text-3xl md:text-4xl text-artdeco-cream mb-6 tracking-wide">
            Une approche complète pour votre réussite
          </h2>
          <p className="font-cormorant text-xl text-artdeco-cream/80 max-w-2xl mx-auto italic leading-relaxed">
            Trois piliers essentiels pour développer votre activité artisanale sur le web
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-500 animate-fade-in bg-artdeco-charcoal/30 backdrop-blur-sm border border-artdeco-gold/20 p-8 rounded-none"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-artdeco-gold/10 w-20 h-20 border border-artdeco-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-artdeco-gold/20 transition-all duration-300 transform rotate-45">
                <div className="text-artdeco-gold group-hover:text-artdeco-gold transition-colors transform -rotate-45">
                  {getIcon(pillar.icon)}
                </div>
              </div>
              <h3 className="font-cinzel font-medium text-xl text-artdeco-cream mb-4 tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-cormorant text-artdeco-cream/70 leading-relaxed italic">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ornement final */}
        <div className="flex justify-center items-center mt-16">
          <div className="w-16 h-px bg-gradient-to-l from-artdeco-gold to-transparent"></div>
          <div className="relative mx-2">
            <div className="w-3 h-3 border border-artdeco-gold transform rotate-45 bg-transparent"></div>
            <div className="absolute top-1/2 left-1/2 w-px h-px rounded-full bg-artdeco-gold transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-artdeco-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
