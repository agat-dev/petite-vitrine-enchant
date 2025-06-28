
const ShowcaseSection = () => {
  const showcaseItems = [
    {
      title: "Coupe Moderne",
      category: "Coiffure Femme",
      image: "https://images.unsplash.com/photo-1670797904283-072ad4dde22c?w=400&h=300&fit=crop",
      description: "Coupe tendance avec dégradé personnalisé"
    },
    {
      title: "Coloration Éclatante",
      category: "Couleur & Mèches",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      description: "Coloration naturelle aux reflets dorés"
    },
    {
      title: "Coiffure de Mariage",
      category: "Événements Spéciaux",
      image: "https://images.unsplash.com/photo-1606251706444-d069cd266189?w=400&h=300&fit=crop",
      description: "Coiffure élégante pour votre jour J"
    },
    {
      title: "Soin Profond",
      category: "Soins Capillaires",
      image: "https://images.unsplash.com/photo-1648313143853-aa913f6ad44a?w=400&h=300&fit=crop",
      description: "Traitement réparateur pour cheveux abîmés"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-artdeco-black relative overflow-hidden">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/4 left-1/3 w-28 h-28 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-artdeco-gold/20 rotate-12"></div>
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
            Nos Réalisations
          </h2>
          <p className="font-cormorant text-xl text-artdeco-cream/80 max-w-2xl mx-auto italic leading-relaxed">
            Découvrez quelques-unes de nos créations qui illustrent notre savoir-faire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcaseItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden border border-artdeco-gold/20 bg-artdeco-charcoal/30 backdrop-blur-sm">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-artdeco-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-artdeco-black p-4">
                    <h4 className="font-cinzel font-medium text-lg mb-2 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="font-cormorant text-sm italic">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-artdeco-charcoal/20 border border-artdeco-gold/10">
                <h3 className="font-cinzel font-medium text-artdeco-cream mb-1 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-cormorant text-sm text-artdeco-gold font-medium italic">
                  {item.category}
                </p>
              </div>
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

export default ShowcaseSection;
