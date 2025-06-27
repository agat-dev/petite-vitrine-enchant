
const ShowcaseSection = () => {
  const showcaseItems = [
    {
      title: "Coupe Moderne",
      category: "Coiffure Femme",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1595475038665-d7e8395f3fb2?w=400&h=300&fit=crop",
      description: "Coiffure élégante pour votre jour J"
    },
    {
      title: "Soin Profond",
      category: "Soins Capillaires",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop",
      description: "Traitement réparateur pour cheveux abîmés"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-anthracite mb-4">
            Nos Réalisations
          </h2>
          <p className="font-source-sans text-lg text-anthracite/70 max-w-2xl mx-auto">
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
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h4 className="font-montserrat font-semibold text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="font-source-sans text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-montserrat font-semibold text-anthracite mb-1">
                  {item.title}
                </h3>
                <p className="font-source-sans text-sm text-primary font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
