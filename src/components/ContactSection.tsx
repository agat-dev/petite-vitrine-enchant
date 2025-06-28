
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import content from '@/data/content.json';

const ContactSection = () => {
  const { contact } = content;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-artdeco-charcoal relative overflow-hidden">
      {/* Motifs Art Déco en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-artdeco-pattern bg-repeat"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-artdeco-gold/20 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-artdeco-gold/20 rotate-12"></div>
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
            Discutons de votre projet
          </h2>
          <p className="font-cormorant text-xl text-artdeco-cream/80 max-w-2xl mx-auto italic leading-relaxed">
            Envie d'un nouveau style ? Une question ? Contactons-nous pour un échange personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="animate-slide-in-left">
            <Card className="h-full border-artdeco-gold/20 bg-artdeco-black/30 backdrop-blur-sm rounded-none">
              <CardHeader>
                <CardTitle className="font-cinzel font-medium text-2xl text-artdeco-cream tracking-wide">
                  Parlons de votre projet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-artdeco-gold/10 p-3 border border-artdeco-gold/30 transform rotate-45">
                    <Phone className="w-6 h-6 text-artdeco-gold transform -rotate-45" />
                  </div>
                  <div>
                    <div className="font-cinzel font-medium text-artdeco-cream tracking-wide">
                      Téléphone
                    </div>
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="font-cormorant text-artdeco-gold hover:text-artdeco-darkGold transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-artdeco-gold/10 p-3 border border-artdeco-gold/30 transform rotate-45">
                    <Mail className="w-6 h-6 text-artdeco-gold transform -rotate-45" />
                  </div>
                  <div>
                    <div className="font-cinzel font-medium text-artdeco-cream tracking-wide">
                      Email
                    </div>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="font-cormorant text-artdeco-gold hover:text-artdeco-darkGold transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-artdeco-gold/10 p-3 border border-artdeco-gold/30 transform rotate-45">
                    <MapPin className="w-6 h-6 text-artdeco-gold transform -rotate-45" />
                  </div>
                  <div>
                    <div className="font-cinzel font-medium text-artdeco-cream tracking-wide">
                      Localisation
                    </div>
                    <div className="font-cormorant text-artdeco-cream/70 italic">
                      {contact.location}
                    </div>
                    <div className="font-cormorant text-sm text-artdeco-gold italic">
                      {contact.zone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-artdeco-gold/10 p-3 border border-artdeco-gold/30 transform rotate-45">
                    <Clock className="w-6 h-6 text-artdeco-gold transform -rotate-45" />
                  </div>
                  <div>
                    <div className="font-cinzel font-medium text-artdeco-cream tracking-wide">
                      Disponibilité
                    </div>
                    <div className="font-cormorant text-artdeco-cream/70 italic">
                      Lun - Ven : 9h - 18h
                    </div>
                    <div className="font-cormorant text-sm text-artdeco-gold italic">
                      Réponse sous 24h garantie
                    </div>
                  </div>
                </div>

                <div className="bg-artdeco-gold/10 p-6 border border-artdeco-gold/20 mt-8">
                  <h3 className="font-cinzel font-medium text-artdeco-cream mb-2 tracking-wide">
                    Devis gratuit et sans engagement
                  </h3>
                  <p className="font-cormorant text-artdeco-cream/70 italic">
                    Nous étudions votre projet et vous proposons une solution adaptée à vos besoins et votre budget.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-slide-in-right">
            <Card className="border-artdeco-gold/20 bg-artdeco-black/30 backdrop-blur-sm rounded-none">
              <CardHeader>
                <CardTitle className="font-cinzel font-medium text-2xl text-artdeco-cream tracking-wide">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="font-cormorant bg-artdeco-charcoal/50 border-artdeco-gold/30 text-artdeco-cream placeholder:text-artdeco-cream/50 rounded-none focus:border-artdeco-gold"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="font-cormorant bg-artdeco-charcoal/50 border-artdeco-gold/30 text-artdeco-cream placeholder:text-artdeco-cream/50 rounded-none focus:border-artdeco-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Votre téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="font-cormorant bg-artdeco-charcoal/50 border-artdeco-gold/30 text-artdeco-cream placeholder:text-artdeco-cream/50 rounded-none focus:border-artdeco-gold"
                      />
                    </div>
                    <div>
                      <Input
                        name="business"
                        placeholder="Votre activité"
                        value={formData.business}
                        onChange={handleChange}
                        className="font-cormorant bg-artdeco-charcoal/50 border-artdeco-gold/30 text-artdeco-cream placeholder:text-artdeco-cream/50 rounded-none focus:border-artdeco-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Décrivez-nous votre projet..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="font-cormorant bg-artdeco-charcoal/50 border-artdeco-gold/30 text-artdeco-cream placeholder:text-artdeco-cream/50 rounded-none focus:border-artdeco-gold"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-artdeco-gold hover:bg-artdeco-darkGold text-artdeco-black py-4 font-montserrat font-medium tracking-wide uppercase transition-all duration-500 rounded-none border border-artdeco-gold hover:border-artdeco-darkGold"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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

export default ContactSection;
