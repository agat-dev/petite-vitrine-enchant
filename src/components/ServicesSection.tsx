
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-anthracite mb-4">
            Une approche complète pour votre réussite
          </h2>
          <p className="font-source-sans text-lg text-anthracite/70 max-w-2xl mx-auto">
            Trois piliers essentiels pour développer votre activité artisanale sur le web
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary group-hover:text-primary transition-colors">
                  {getIcon(pillar.icon)}
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-anthracite mb-4">
                {pillar.title}
              </h3>
              <p className="font-source-sans text-anthracite/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
