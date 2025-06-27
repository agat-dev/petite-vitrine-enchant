
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import content from '@/data/content.json';

const TestimonialsSection = () => {
  const { testimonials } = content;

  const renderStars = (rating: number) => {
    return Array.from({length: 5}, (_, i) => (
      <Star 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-artdeco-gold fill-current' : 'text-artdeco-gold/30'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-artdeco-black relative overflow-hidden">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/4 left-1/4 w-28 h-28 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-artdeco-gold/20 rotate-12"></div>
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
            Ce que disent nos artisans
          </h2>
          <p className="font-cormorant text-xl text-artdeco-cream/80 max-w-2xl mx-auto italic leading-relaxed">
            Leur satisfaction est notre meilleure récompense
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-artdeco-charcoal/30 border-artdeco-gold/20 backdrop-blur-sm hover:bg-artdeco-charcoal/50 hover:border-artdeco-gold/40 transition-all duration-500 animate-fade-in rounded-none"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover mr-4 border border-artdeco-gold/30 filter grayscale contrast-125"
                    />
                    <div className="absolute -top-1 -left-1 w-3 h-3 border border-artdeco-gold/50 rotate-45"></div>
                  </div>
                  <div>
                    <div className="font-cinzel font-medium text-artdeco-cream tracking-wide">
                      {testimonial.name}
                    </div>
                    <div className="font-cormorant text-sm text-artdeco-gold italic">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="font-cormorant text-artdeco-cream/90 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
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

export default TestimonialsSection;
