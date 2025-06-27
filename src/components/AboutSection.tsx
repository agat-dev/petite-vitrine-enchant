
import content from '@/data/content.json';

const AboutSection = () => {
  const { about } = content;

  return (
    <section className="py-20 bg-gradient-to-r from-accent/20 to-success/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img 
              src={about.image}
              alt="Expert marketing digital"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
            />
          </div>
          
          <div className="animate-slide-in-right">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-anthracite mb-6">
              {about.title}
            </h2>
            <p className="font-source-sans text-lg text-anthracite/80 mb-8 leading-relaxed">
              {about.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="font-montserrat font-bold text-2xl text-primary mb-1">
                  {about.experience}
                </div>
                <div className="font-source-sans text-sm text-anthracite/70">
                  d'expérience
                </div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl">
                <div className="font-montserrat font-bold text-2xl text-primary mb-1">
                  {about.clients}
                </div>
                <div className="font-source-sans text-sm text-anthracite/70">
                  accompagnés
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-xl border-l-4 border-primary">
              <p className="font-source-sans text-anthracite italic">
                "Mon objectif est simple : vous donner tous les outils pour que votre artisanat rayonne sur le web, sans complexité technique."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
