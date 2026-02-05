import { useEffect } from 'react';
import { Building2, Heart, Sun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const servizi = [
  {
    title: 'Vallerano - Vacanze e Formazione',
    icon: Sun,
    description: 'Centro estivo e luogo di formazione situato a Vallerano di Calestano, immerso nella natura dell\'Appennino parmense.',
    details: [
      'Vacanze estive per gruppi e famiglie',
      'Campi scuola e attività di formazione',
      'Percorsi di educazione ambientale',
      'Ritiri spirituali e momenti di riflessione',
      'Attività ricreative e sportive',
    ],
    location: 'Vallerano di Calestano, Parma (PR)',
  },
  {
    title: 'Casa Protetta AIDS',
    icon: Heart,
    description: 'Struttura residenziale dedicata all\'accoglienza di persone sieropositive con bisogni sanitari e sociali specifici.',
    details: [
      'Accoglienza residenziale specializzata',
      'Supporto sanitario e psicologico',
      'Gestione terapie e controlli medici',
      'Reinserimento sociale post-degenza',
      'Confidenzialità e rispetto della privacy',
    ],
    location: 'Parma (PR)',
  },
  {
    title: 'Accoglienza Notturna',
    icon: Building2,
    description: 'Servizio di emergenza per persone senza dimora che necessitano di un rifugio sicuro durante la notte.',
    details: [
      'Posti letto per emergenza notturna',
      'Pasti serali e colazione',
      'Doccia e servizi igienici',
      'Orientamento ai servizi sociali',
      'Mediazione con strutture diurne',
    ],
    location: 'Parma (PR)',
  },
];

export function AltriServizi() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-betania-secondary">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Altri Servizi
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Una rete diversificata di servizi per rispondere a diverse esigenze di accoglienza e supporto
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servizi.map((servizio, index) => {
              const Icon = servizio.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={servizio.title}
                  className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-14 h-14 rounded-full bg-betania-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-betania-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-betania-primary mb-4">
                      {servizio.title}
                    </h2>
                    <p className="text-betania-secondary text-lg leading-relaxed mb-6">
                      {servizio.description}
                    </p>
                    <div className="bg-betania-cream rounded-lg p-4 mb-6">
                      <p className="text-betania-primary font-medium">
                        <strong>Ubicazione:</strong> {servizio.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="bg-betania-cream rounded-xl p-8">
                      <h3 className="text-xl font-display font-bold text-betania-primary mb-4">
                        Servizi offerti
                      </h3>
                      <ul className="space-y-3">
                        {servizio.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-betania-primary mt-2 flex-shrink-0" />
                            <span className="text-betania-secondary">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-betania-beige">
        <div className="container mx-auto px-4 text-center reveal">
          <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
            Hai bisogno di informazioni?
          </h2>
          <p className="text-betania-secondary max-w-2xl mx-auto mb-8">
            Contattaci per sapere di più sui nostri servizi e verificare la disponibilità
          </p>
          <Link to="/contatti">
            <Button
              size="lg"
              className="bg-betania-primary text-white hover:bg-betania-dark px-8 py-6 text-lg"
            >
              Contattaci
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
