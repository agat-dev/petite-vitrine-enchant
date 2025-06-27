
import content from '@/data/content.json';

const Footer = () => {
  const { contact } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-artdeco-black text-white py-12 relative overflow-hidden border-t border-artdeco-gold/20">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-artdeco-gold/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-artdeco-gold border border-artdeco-gold transform rotate-45 flex items-center justify-center">
                <span className="text-artdeco-black font-cinzel font-bold text-lg transform -rotate-45">LV</span>
              </div>
              <span className="font-cinzel font-medium text-xl text-artdeco-cream tracking-wide">
                La Petite Vitrine
              </span>
            </div>
            <p className="font-cormorant text-artdeco-cream/80 mb-6 leading-relaxed italic">
              Spécialiste du marketing digital pour artisans. Nous créons des sites internet professionnels et gérons votre présence en ligne pour développer votre activité.
            </p>
            <div className="space-y-2">
              <div className="font-cormorant text-artdeco-cream/80">
                <strong className="text-artdeco-gold">Zone d'intervention :</strong> {contact.zone}
              </div>
              <div className="font-cormorant text-artdeco-cream/80">
                <strong className="text-artdeco-gold">Basé à :</strong> {contact.location}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cinzel font-medium text-lg mb-4 text-artdeco-gold tracking-wide">
              Nos Services
            </h3>
            <ul className="space-y-2 font-cormorant text-artdeco-cream/80">
              <li className="hover:text-artdeco-gold transition-colors cursor-pointer">Sites internet vitrine</li>
              <li className="hover:text-artdeco-gold transition-colors cursor-pointer">Référencement SEO</li>
              <li className="hover:text-artdeco-gold transition-colors cursor-pointer">Formation digital</li>
              <li className="hover:text-artdeco-gold transition-colors cursor-pointer">Maintenance et support</li>
              <li className="hover:text-artdeco-gold transition-colors cursor-pointer">Conseils marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel font-medium text-lg mb-4 text-artdeco-gold tracking-wide">
              Contact
            </h3>
            <div className="space-y-3 font-cormorant text-artdeco-cream/80">
              <div>
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-artdeco-gold transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:text-artdeco-gold transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="text-sm italic text-artdeco-gold">
                Réponse sous 24h garantie
              </div>
            </div>
          </div>
        </div>

        {/* Ornement central */}
        <div className="flex justify-center items-center my-8">
          <div className="w-24 h-px bg-gradient-to-l from-artdeco-gold to-transparent"></div>
          <div className="relative mx-3">
            <div className="w-4 h-4 border border-artdeco-gold rotate-45 bg-transparent"></div>
            <div className="absolute top-1/2 left-1/2 w-px h-px rounded-full bg-artdeco-gold transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-artdeco-gold to-transparent"></div>
        </div>

        {/* Mots-clés SEO */}
        <div className="border-t border-artdeco-gold/20 pt-8">
          <div className="text-center mb-6">
            <h4 className="font-cinzel font-medium text-sm text-artdeco-gold/80 mb-2 tracking-wide">
              Mots-clés : 
            </h4>
            <p className="font-cormorant text-xs text-artdeco-cream/50 italic">
              site internet pas cher artisan • pack visibilité artisan • site internet pour coiffeuse • 
              site vitrine artisan • marketing digital artisan • création site web France • 
              référencement local artisan • site responsive artisan
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-artdeco-cream/60">
            <div className="font-cormorant italic">
              © {currentYear} La Petite Vitrine. Tous droits réservés.
            </div>
            <div className="font-cormorant mt-2 md:mt-0 italic">
              Marketing digital spécialisé pour artisans
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
