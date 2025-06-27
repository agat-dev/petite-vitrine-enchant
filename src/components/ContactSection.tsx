
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
    <section id="contact" className="py-20 bg-gradient-to-br from-success to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-anthracite mb-4">
            Discutons de votre projet
          </h2>
          <p className="font-source-sans text-lg text-anthracite/70 max-w-2xl mx-auto">
            Un projet en tête ? Une question ? Contactons-nous pour un échange personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="animate-slide-in-left">
            <Card className="h-full border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-2xl text-anthracite">
                  Parlons de votre projet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-source-sans font-semibold text-anthracite">
                      Téléphone
                    </div>
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="font-source-sans text-primary hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-source-sans font-semibold text-anthracite">
                      Email
                    </div>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="font-source-sans text-primary hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-source-sans font-semibold text-anthracite">
                      Localisation
                    </div>
                    <div className="font-source-sans text-anthracite/70">
                      {contact.location}
                    </div>
                    <div className="font-source-sans text-sm text-primary">
                      {contact.zone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-source-sans font-semibold text-anthracite">
                      Disponibilité
                    </div>
                    <div className="font-source-sans text-anthracite/70">
                      Lun - Ven : 9h - 18h
                    </div>
                    <div className="font-source-sans text-sm text-primary">
                      Réponse sous 24h garantie
                    </div>
                  </div>
                </div>

                <div className="bg-accent/20 p-4 rounded-lg mt-8">
                  <h3 className="font-montserrat font-semibold text-anthracite mb-2">
                    Devis gratuit et sans engagement
                  </h3>
                  <p className="font-source-sans text-sm text-anthracite/70">
                    Nous étudions votre projet et vous proposons une solution adaptée à vos besoins et votre budget.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-2xl text-anthracite">
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
                        className="font-source-sans"
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
                        className="font-source-sans"
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
                        className="font-source-sans"
                      />
                    </div>
                    <div>
                      <Input
                        name="business"
                        placeholder="Votre activité"
                        value={formData.business}
                        onChange={handleChange}
                        className="font-source-sans"
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
                      className="font-source-sans"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-medium"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
