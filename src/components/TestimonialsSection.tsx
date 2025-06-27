
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import content from '@/data/content.json';

const TestimonialsSection = () => {
  const { testimonials } = content;

  const renderStars = (rating: number) => {
    return Array.from({length: 5}, (_, i) => (
      <Star 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-anthracite text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Ce que disent nos artisans
          </h2>
          <p className="font-source-sans text-lg text-white/80 max-w-2xl mx-auto">
            Leur satisfaction est notre meilleure récompense
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-montserrat font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="font-source-sans text-sm text-white/70">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="font-source-sans text-white/90 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
