import { useEffect } from 'react';
import { Home, Heart, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Home,
    title: 'Struttura Protetta',
    description: 'Casa protetta con 12 posti letto per persone sieropositive che necessitano di un ambiente adeguato.',
  },
  {
    icon: Heart,
    title: 'Assistenza Sanitaria',
    description: 'Contatti costanti con strutture invianti, reparti ospedalieri di riferimento e servizio A.D.M.A. dell\'Ausl.',
  },
  {
    icon: Users,
    title: 'Comunità di Supporto',
    description: 'Presenza di una piccola comunità di religiose che prestano servizio e offrono sostegno quotidiano.',
  },
];

export function CasaFrancesco() {
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
      <section className="relative py-20 bg-betania-primary">
        <div className="container mx-auto px-4 text-center">
          <Home className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Casa Francesco
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Sede protetta per sieropositivi e malati di AIDS
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-betania-secondary text-lg leading-relaxed mb-6">
              Casa Francesco sorge in un terreno adiacente alla sede principale della Comunità a Marore. 
              L'edificio a pianta rettangolare si sviluppa intorno ad una corte ad archi ornata ai lati 
              da aiuole con piante di ulivo, di palma e di oleandro.
            </p>
            <p className="text-betania-secondary text-lg leading-relaxed">
              Sul lato nord il primo piano accoglie una piccola comunità di religiose che prestano 
              il loro servizio a Betania. Al piano terra un corridoio interno collega stanze e vetrate 
              che affacciano sul cortile, consentendo a tutti di muoversi senza alcuna barriera.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="reveal bg-white p-8 rounded-xl shadow-lg card-hover"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-betania-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-betania-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-betania-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-betania-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structure Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-display font-bold text-betania-primary mb-6">
                La Struttura
              </h2>
              <div className="section-divider mb-8" />
              <div className="space-y-4 text-betania-secondary">
                <p className="leading-relaxed">
                  <strong className="text-betania-primary">Ubicazione:</strong> Marore (PR)
                </p>
                <p className="leading-relaxed">
                  <strong className="text-betania-primary">Capacità:</strong> 12 posti letto
                </p>
                <p className="leading-relaxed">
                  <strong className="text-betania-primary">Inaugurazione:</strong> 15 giugno 2001
                </p>
                <p className="leading-relaxed">
                  <strong className="text-betania-primary">Convenzione:</strong> Azienda USL dal 10/01/2003
                </p>
                <p className="leading-relaxed">
                  <strong className="text-betania-primary">Destinatari:</strong> Persone sieropositive 
                  che necessitano di una casa ospitale ed adeguata al loro tipo di malattia e disagio.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-betania-primary">Caratteristiche:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Casa protetta (non struttura ospedaliera)</li>
                  <li>Corte ad archi con aiuole</li>
                  <li>Accesso senza barriere architettoniche</li>
                  <li>Presenza di comunità religiosa di supporto</li>
                  <li>Contatti costanti con strutture sanitarie di riferimento</li>
                  <li>Collaborazione con il servizio A.D.M.A. dell'Ausl di Parma</li>
                </ul>
              </div>
            </div>
            <div className="reveal">
              <div className="relative">
                <img
                  src="/images/casa francesco.JPG"
                  alt="Casa Francesco"
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-display font-bold text-betania-primary">12</div>
                        <div className="text-sm text-betania-secondary">Posti letto</div>
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold text-betania-primary">2001</div>
                        <div className="text-sm text-betania-secondary">Anno inaugurazione</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finalita */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-6 text-center">
              Finalità
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-betania-secondary text-lg leading-relaxed text-center">
              L'obiettivo primario è l'accoglienza di persone sieropositive che necessitano 
              di una casa ospitale ed adeguata al loro tipo di malattia e disagio. 
              Trattandosi di una casa protetta e non di struttura ospedaliera, vengono tenuti 
              per ogni utente contatti costanti con le strutture invianti, i reparti ospedalieri 
              di riferimento e con il servizio "A.D.M.A." dell'Ausl di Parma.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-betania-primary">
        <div className="container mx-auto px-4 text-center reveal">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Vuoi saperne di più?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contattaci per maggiori informazioni su Casa Francesco e sui nostri servizi
          </p>
          <Link to="/contatti">
            <Button
              size="lg"
              className="bg-white text-betania-primary hover:bg-white/90 px-8 py-6 text-lg"
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
