
const ShowcaseSection = () => {
  const showcaseItems = [
    {
      title: "Atelier de Céramique",
      category: "Site vitrine + E-commerce",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Site moderne avec galerie et boutique en ligne"
    },
    {
      title: "Menuiserie Artisanale",
      category: "Site vitrine professionnel",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      description: "Présentation élégante du savoir-faire"
    },
    {
      title: "Salon de Coiffure",
      category: "Site + Réservation en ligne",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
      description: "Design moderne avec système de rendez-vous"
    },
    {
      title: "Boulangerie Artisanale",
      category: "Site vitrine + Blog",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      description: "Mise en valeur des produits et actualités"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-anthracite mb-4">
            Ils nous font confiance
          </h2>
          <p className="font-source-sans text-lg text-anthracite/70 max-w-2xl mx-auto">
            Découvrez quelques réalisations qui illustrent notre approche personnalisée
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
