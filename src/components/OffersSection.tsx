
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
    <section id="offres" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-anthracite mb-4">
            Des tarifs transparents et accessibles
          </h2>
          <p className="font-source-sans text-lg text-anthracite/70 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 animate-fade-in ${
                offer.popular ? 'border-primary border-2 transform md:scale-105' : 'border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-montserrat font-bold text-2xl text-anthracite">
                  {offer.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="font-montserrat font-bold text-4xl text-primary">
                    {offer.price}
                  </span>
                  <span className="text-anthracite/70 ml-2">TTC</span>
                </div>
                <p className="font-source-sans text-anthracite/70 mt-2">
                  {offer.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-source-sans text-anthracite/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-3 font-medium ${
                    offer.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="font-source-sans text-anthracite/70 mb-4">
            Besoin d'options supplémentaires ? Parlons-en !
          </p>
          <Button 
            variant="outline"
            onClick={scrollToContact}
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
