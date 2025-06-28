
import content from '@/data/content.json';

const AboutSection = () => {
  const { about } = content;

  return (
    <section className="py-20 bg-artdeco-charcoal relative overflow-hidden">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-artdeco-gold/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src={about.image}
                alt="Expert marketing digital"
                className="w-full max-w-md mx-auto lg:mx-0 border border-artdeco-gold/30 filter grayscale contrast-125"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 border border-artdeco-gold/50 rotate-45"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border border-artdeco-gold/50 rotate-45"></div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            {/* Ornement supérieur */}
            <div className="flex items-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-artdeco-gold to-transparent"></div>
              <div className="relative mx-2">
                <div className="w-3 h-3 border border-artdeco-gold transform rotate-45 bg-transparent"></div>
              </div>
            </div>

            <h2 className="font-cinzel font-normal text-3xl md:text-4xl text-artdeco-cream mb-6 tracking-wide">
              {about.title}
            </h2>
            <p className="font-cormorant text-xl text-artdeco-cream/80 mb-8 leading-relaxed italic">
              {about.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-artdeco-black/30 backdrop-blur-sm border border-artdeco-gold/20">
                <div className="font-poiret font-normal text-3xl text-artdeco-gold mb-2">
                  {about.experience}
                </div>
                <div className="font-cormorant text-sm text-artdeco-cream/70 italic">
                  d'expérience
                </div>
              </div>
              <div className="text-center p-6 bg-artdeco-black/30 backdrop-blur-sm border border-artdeco-gold/20">
                <div className="font-poiret font-normal text-3xl text-artdeco-gold mb-2">
                  {about.clients}
                </div>
                <div className="font-cormorant text-sm text-artdeco-cream/70 italic">
                  accompagnés
                </div>
              </div>
            </div>

            <div className="bg-artdeco-black/50 backdrop-blur-sm p-6 border-l-4 border-artdeco-gold">
              <p className="font-cormorant text-artdeco-cream italic text-lg leading-relaxed">
                "Notre mission est de révéler le potentiel client par la création de coiffures uniques. Notre expertise en visagisme et notre passion pour la coiffure nous permettent de transformer chaque rendez-vous en une expérience inoubliable."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
