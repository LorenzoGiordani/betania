import { useEffect } from 'react';
import { Heart, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const sedi = [
  {
    name: 'Comunità Betania',
    location: 'Marore (PR)',
    description: 'Sede principale dove ha inizio il percorso comunitario. È qui che, una volta completata la successione del cammino terapeutico, verrà programmato l\'ultimo periodo del reinserimento.',
    image: '/images/MARORE3.jpg',
    phase: 'Sede Principale',
  },
  {
    name: 'La Rocca',
    location: 'Roccalanzona (PR)',
    description: 'È la sede dove gli ospiti trascorrono i primi mesi del periodo di accoglienza, in un ambiente tranquillo e protetto.',
    image: '/images/la rocca.jpg',
    phase: 'Accoglienza',
  },
  {
    name: 'Cascina Ghiara',
    location: 'Ghiara di Fontanellato (PR)',
    description: 'È la sede dove normalmente si svolge il Periodo Comunitario, con attività strutturate e lavoro in gruppo.',
    image: '/images/GHIARA.jpg',
    phase: 'Periodo Comunitario',
  },
  {
    name: 'Il Francobollo',
    location: 'Coloreto (PR)',
    description: 'Sede a bassa intensità terapeutica. Il completamento del percorso comunitario è previsto normalmente in questa sede.',
    image: '/images/COLORETO.JPG',
    phase: 'Bassa Intensità',
  },
];

const phases = [
  {
    number: '01',
    title: 'Accoglienza',
    description: 'Primo contatto e inserimento nella struttura. Fase di conoscenza reciproca e valutazione delle necessità.',
  },
  {
    number: '02',
    title: 'Periodo Comunitario',
    description: 'Svolgimento del programma terapeutico con attività strutturate, lavoro in gruppo e percorsi personalizzati.',
  },
  {
    number: '03',
    title: 'Reinserimento',
    description: 'Fase finale del percorso con gradualità verso l\'autonomia, supporto nella ricerca di lavoro e alloggio.',
  },
];

export function ProgrammaTerapeutico() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-white/80" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Programma Terapeutico
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            "Progetto di un percorso" - Un cammino di recupero e rinascita
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-betania-secondary text-lg leading-relaxed mb-6">
              La Comunità accoglie maggiorenni provenienti dal mondo della dipendenza patologica, 
              della devianza, del malessere e della marginalità. Il programma terapeutico e di 
              convivenza, denominato <span className="italic font-medium text-betania-primary">"Progetto di un percorso"</span>, 
              è proposto e sostenuto da operatori professionali con rapporto di assunzione, 
              da volontari e da terapeuti (medici, psicologi, psichiatri, etc.).
            </p>
            <p className="text-betania-secondary leading-relaxed">
              La Comunità è di tipo residenziale; tuttavia in qualche particolare situazione 
              opera anche come centro semi-residenziale.
            </p>
          </div>
        </div>
      </section>

      {/* Le Tre Fasi */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Le Tre Fasi del Percorso
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="reveal bg-white rounded-xl p-8 shadow-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-display font-bold text-betania-primary/20 mb-4">
                  {phase.number}
                </div>
                <h3 className="text-xl font-display font-bold text-betania-primary mb-4">
                  {phase.title}
                </h3>
                <p className="text-betania-secondary leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Sedi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Le Nostre Sedi
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary max-w-2xl mx-auto">
              Per conservare dinamiche di relazione di tipo familiare, la Comunità propone 
              e attiva il programma terapeutico articolando il percorso in tre sedi operative 
              residenziali ed una per programmi a bassa intensità terapeutica.
            </p>
          </div>

          <div className="space-y-12">
            {sedi.map((sede, index) => (
              <div
                key={sede.name}
                className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={sede.image}
                      alt={sede.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-betania-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        {sede.phase}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 text-betania-light mb-2">
                    <Home className="w-5 h-5" />
                    <span className="text-sm">{sede.location}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-betania-primary mb-4">
                    {sede.name}
                  </h3>
                  <p className="text-betania-secondary leading-relaxed mb-6">
                    {sede.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-betania-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Vuoi Maggiori Informazioni?
            </h2>
            <p className="text-betania-secondary text-lg mb-8">
              Contattaci per scoprire come possiamo aiutarti o i tuoi cari 
              nel percorso di recupero.
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
        </div>
      </section>
    </div>
  );
}
