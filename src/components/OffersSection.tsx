
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import content from '@/data/content.json';

const OffersSection = () => {
  const { offers } = content;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offres" className="py-20 bg-artdeco-charcoal relative overflow-hidden">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-artdeco-gold/20 rotate-12"></div>
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
            Nos Forfaits Beauté
          </h2>
          <p className="font-cormorant text-xl text-artdeco-cream/80 max-w-2xl mx-auto italic leading-relaxed">
            Des prestations sur mesure pour révéler votre beauté naturelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-artdeco-black/50 backdrop-blur-sm border transition-all duration-500 hover:transform hover:scale-105 animate-fade-in ${
                offer.popular 
                  ? 'border-artdeco-gold bg-artdeco-gold/5' 
                  : 'border-artdeco-gold/30'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-artdeco-gold text-artdeco-black px-6 py-2 font-cinzel font-medium text-sm tracking-wide uppercase">
                    Le plus populaire
                  </div>
                </div>
              )}

              {/* Image de l'offre */}
              <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
                <img 
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-artdeco-black/40"></div>
                <div className="absolute bottom-4 left-8">
                  <div className="text-artdeco-gold font-poiret text-4xl font-normal">
                    {offer.price}
                  </div>
                </div>
              </div>

              <h3 className="font-cinzel font-medium text-2xl text-artdeco-cream mb-3 tracking-wide">
                {offer.name}
              </h3>
              <p className="font-cormorant text-artdeco-cream/70 mb-6 italic leading-relaxed">
                {offer.description}
              </p>

              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="bg-artdeco-gold/20 border border-artdeco-gold/30 w-5 h-5 flex items-center justify-center mt-0.5 transform rotate-45">
                      <Check className="w-3 h-3 text-artdeco-gold transform -rotate-45" />
                    </div>
                    <span className="font-cormorant text-artdeco-cream/80 italic">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                className={`w-full group relative overflow-hidden px-8 py-6 text-lg font-normal transition-all duration-500 border rounded-none min-h-[60px] hover:scale-105 transform font-montserrat tracking-wide uppercase ${
                  offer.popular
                    ? 'bg-artdeco-gold hover:bg-artdeco-darkGold text-artdeco-black border-artdeco-gold hover:border-artdeco-darkGold'
                    : 'bg-transparent border-artdeco-gold text-artdeco-gold hover:bg-artdeco-gold hover:text-artdeco-black'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Réserver ce forfait
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
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

export default OffersSection;
