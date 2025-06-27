
import content from '@/data/content.json';

const Footer = () => {
  const { contact } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LV</span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                La Petite Vitrine
              </span>
            </div>
            <p className="font-source-sans text-white/80 mb-6 leading-relaxed">
              Spécialiste du marketing digital pour artisans. Nous créons des sites internet professionnels et gérons votre présence en ligne pour développer votre activité.
            </p>
            <div className="space-y-2">
              <div className="font-source-sans text-white/80">
                <strong>Zone d'intervention :</strong> {contact.zone}
              </div>
              <div className="font-source-sans text-white/80">
                <strong>Basé à :</strong> {contact.location}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Nos Services
            </h3>
            <ul className="space-y-2 font-source-sans text-white/80">
              <li>Sites internet vitrine</li>
              <li>Référencement SEO</li>
              <li>Formation digital</li>
              <li>Maintenance et support</li>
              <li>Conseils marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-3 font-source-sans text-white/80">
              <div>
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="text-sm">
                Réponse sous 24h garantie
              </div>
            </div>
          </div>
        </div>

        {/* Mots-clés SEO */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="font-montserrat font-medium text-sm text-white/60 mb-2">
              Mots-clés : 
            </h4>
            <p className="font-source-sans text-xs text-white/50">
              site internet pas cher artisan • pack visibilité artisan • site internet pour coiffeuse • 
              site vitrine artisan • marketing digital artisan • création site web France • 
              référencement local artisan • site responsive artisan
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <div className="font-source-sans">
              © {currentYear} La Petite Vitrine. Tous droits réservés.
            </div>
            <div className="font-source-sans mt-2 md:mt-0">
              Marketing digital spécialisé pour artisans
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
