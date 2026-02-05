import { useEffect } from 'react';
import { BookOpen, Wrench, GraduationCap, ArrowRight, Hammer, Car, Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const laboratori = [
  {
    icon: Wrench,
    title: 'Assemblaggio Quadri Elettrici',
    description: 'Laboratorio di assemblaggio e cablaggio quadri elettrici industriali.',
    image: '/images/lab elettrico.jpg',
  },
  {
    icon: Car,
    title: 'Officina Meccanica',
    description: 'Officina meccanica per automezzi, riparazioni e manutenzione.',
    image: '/images/officina.JPG',
  },
  {
    icon: Hammer,
    title: 'Falegnameria e Restauro',
    description: 'Falegnameria artigianale e restauro di mobili antichi.',
    image: '/images/falegnameria.jpg',
  },
  {
    icon: Tractor,
    title: 'Conduzione Terreni Agricoli',
    description: 'Attività agricole e gestione di terreni.',
  },
];

const centroStudi = {
  finalita: [
    'Promuovere iniziative culturali di ricerca e di sensibilizzazione intorno alle grandi tematiche del volontariato, del disagio giovanile e dell\'educazione alla pace',
    'Coordinare interventi di prevenzione primaria, con le Scuole di ogni ordine e grado e Università',
    'Offrire agli ospiti e agli operatori della Comunità opportunità formative e culturali',
    'Mantenere contatti con altre entità territoriali del volontariato e del privato sociale promotori di iniziative culturali',
  ],
  attivita: [
    'Raccoglie in modo sistematico materiale formativo, informativo e di approfondimento sulle tematiche specifiche della Comunità',
    'Conduce studi, selezioni bibliografiche e schede a tema sulle problematiche legate al disagio giovanile',
    'Cura l\'organizzazione di un servizio di biblioteca, il settore delle pubblicazioni di Betania e la loro diffusione',
    'Organizza seminari, incontri, tavole rotonde sulle tematiche emergenti, le problematiche del disagio e le politiche sociali',
    'Predispone l\'utilizzo e la diffusione di strumenti d\'informazione come giornali, libri e riviste',
  ],
};

export function Cooperativa() {
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
            <BookOpen className="w-8 h-8 text-white/80" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Cooperativa e Centro Studi
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Formazione professionale, ricerca e promozione culturale
          </p>
        </div>
      </section>

      {/* Cooperativa Sociale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Cooperativa Sociale Betania
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal">
              <div className="bg-betania-cream rounded-xl p-8 mb-6">
                <div className="quote-mark font-display text-4xl">"</div>
                <blockquote className="text-betania-dark italic leading-relaxed -mt-4">
                  La Cooperativa ha finalità didattiche, formative e di avviamento al lavoro. 
                  Promossa dalla Comunità Betania ne ripropone gli scopi e le finalità umanitarie. 
                  Pertanto si prefigge di favorire la promozione socio-culturale e il senso comunitario 
                  cooperativistico, fornendo agli utenti una preparazione professionale orientata al 
                  graduale e progressivo inserimento nel mondo della produzione.
                </blockquote>
                <cite className="text-betania-light text-sm not-italic mt-4 block">
                  — Dallo Statuto
                </cite>
              </div>
            </div>
            <div className="reveal">
              <h3 className="text-xl font-display font-bold text-betania-primary mb-4">
                Metodologie
              </h3>
              <p className="text-betania-secondary leading-relaxed mb-6">
                Per raggiungere tali finalità la Cooperativa promuove e gestisce corsi di formazione 
                volti alla qualificazione culturale e professionale.
              </p>
              <h3 className="text-xl font-display font-bold text-betania-primary mb-4">
                Personale
              </h3>
              <p className="text-betania-secondary leading-relaxed">
                L'organizzazione della Cooperativa è sostenuta da chi ricopre cariche sociali; 
                l'attività dei laboratori è guidata da operatori professionisti e da educatori.
              </p>
            </div>
          </div>

          {/* Laboratori */}
          <div className="text-center mb-12 reveal">
            <h3 className="text-2xl font-display font-bold text-betania-primary mb-4">
              I Nostri Laboratori
            </h3>
            <p className="text-betania-secondary max-w-2xl mx-auto">
              Attività artigianali per la formazione professionale e l'inserimento lavorativo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laboratori.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <div
                  key={lab.title}
                  className="reveal bg-betania-cream rounded-xl overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {lab.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={lab.image}
                        alt={lab.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-betania-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-display font-bold text-betania-primary">
                        {lab.title}
                      </h4>
                    </div>
                    <p className="text-betania-secondary">
                      {lab.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impresa Sociale */}
      <section className="py-16 bg-betania-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Trasformazione in Impresa Sociale
            </h2>
            <div className="section-divider mx-auto bg-white/50" />
            <p className="text-white/80 leading-relaxed">
              Con la nuova legge del Terzo Settore dal gennaio 2024 la Cooperativa, 
              adottando un nuovo statuto, si è trasformata in Impresa Sociale, 
              permettendo così la futura gestione delle attività ora in capo all'Associazione Betania.
            </p>
          </div>
        </div>
      </section>

      {/* Centro Studi */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Centro Studi e Documentazione
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary max-w-2xl mx-auto">
              Attivo dal gennaio 1984, il Centro Studi promuove la ricerca e la sensibilizzazione 
              sulle tematiche del volontariato e del disagio giovanile.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Finalità */}
            <div className="reveal">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-betania-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-betania-primary">
                    Finalità
                  </h3>
                </div>
                <ul className="space-y-4">
                  {centroStudi.finalita.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-betania-primary mt-2 flex-shrink-0" />
                      <span className="text-betania-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Attività */}
            <div className="reveal">
              <div className="bg-white rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-betania-secondary flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-betania-primary">
                    Attività
                  </h3>
                </div>
                <ul className="space-y-4">
                  {centroStudi.attivita.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-betania-secondary mt-2 flex-shrink-0" />
                      <span className="text-betania-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Vuoi Collaborare?
            </h2>
            <p className="text-betania-secondary text-lg mb-8">
              Scopri come puoi contribuire ai nostri progetti formativi e di ricerca.
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
