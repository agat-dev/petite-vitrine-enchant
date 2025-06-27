
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
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
            Des tarifs transparents et accessibles
          </h2>
          <p className="font-cormorant text-xl text-artdeco-cream/80 max-w-2xl mx-auto italic leading-relaxed">
            Choisissez la formule qui correspond à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-500 animate-fade-in bg-artdeco-black/50 backdrop-blur-sm border-artdeco-gold/30 rounded-none ${
                offer.popular ? 'border-artdeco-gold border-2 transform md:scale-105' : 'border-artdeco-gold/20'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-artdeco-gold text-artdeco-black px-6 py-2 text-sm font-montserrat font-medium tracking-wide uppercase">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-cinzel font-medium text-2xl text-artdeco-cream tracking-wide">
                  {offer.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="font-poiret font-normal text-4xl text-artdeco-gold">
                    {offer.price}
                  </span>
                  <span className="text-artdeco-cream/70 ml-2 font-cormorant">TTC</span>
                </div>
                <p className="font-cormorant text-artdeco-cream/70 mt-2 italic">
                  {offer.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-artdeco-gold flex-shrink-0" />
                      <span className="font-cormorant text-artdeco-cream/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-4 font-montserrat font-medium tracking-wide uppercase transition-all duration-500 rounded-none ${
                    offer.popular 
                      ? 'bg-artdeco-gold hover:bg-artdeco-darkGold text-artdeco-black border border-artdeco-gold hover:border-artdeco-darkGold' 
                      : 'bg-transparent border-2 border-artdeco-gold text-artdeco-gold hover:bg-artdeco-gold hover:text-artdeco-black'
                  }`}
                >
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="font-cormorant text-artdeco-cream/70 mb-4 italic text-lg">
            Besoin d'options supplémentaires ? Parlons-en !
          </p>
          <Button 
            variant="outline"
            onClick={scrollToContact}
            className="border-artdeco-gold text-artdeco-gold hover:bg-artdeco-gold hover:text-artdeco-black bg-transparent rounded-none px-8 py-4 font-montserrat tracking-wide uppercase transition-all duration-500"
          >
            Demander un devis personnalisé
          </Button>
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
