import { useEffect } from 'react';
import { BookOpen, Wrench, PenTool, GraduationCap, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const laboratori = [
  {
    icon: Wrench,
    title: 'Laboratorio Elettrico',
    description: 'Assemblaggio quadri elettrici, installazioni e riparazioni. Formazione pratica per l\'inserimento lavorativo nel settore elettrico.',
    image: '/images/lab-elettrico.jpg',
    activities: [
      'Assemblaggio quadri elettrici',
      'Installazioni elettriche civili',
      'Manutenzione impianti',
      'Riparazioni elettriche',
    ],
  },
  {
    icon: PenTool,
    title: 'Falegnameria',
    description: 'Falegnameria e restauro mobili. Attività artigianali per l\'apprendimento del mestiere e la produzione di manufatti in legno.',
    image: '/images/falegnameria.jpg',
    activities: [
      'Lavorazione del legno',
      'Restauro mobili',
      'Creazione oggetti artigianali',
      'Finiture e verniciatura',
    ],
  },
  {
    icon: Wrench,
    title: 'Officina Meccanica',
    description: 'Officina meccanica per automezzi. Manutenzione e riparazione di veicoli con formazione pratica sul campo.',
    image: '/images/officina.jpg',
    activities: [
      'Manutenzione automezzi',
      'Riparazioni meccaniche',
      'Tagliandi e controlli',
      'Formazione pratica',
    ],
  },
];

const corsi = [
  {
    title: 'Corso Installatore Elettricista',
    durata: '6 mesi',
    descrizione: 'Formazione completa per diventare installatore elettricista qualificato, con stage in aziende partner.',
  },
  {
    title: 'Corso di Alfabetizzazione',
    durata: 'Continuo',
    descrizione: 'Corsi di italiano per stranieri e supporto all\'integrazione linguistica e culturale.',
  },
  {
    title: 'Laboratorio di Ceramica',
    durata: 'Modulare',
    descrizione: 'Corso di lavorazione della ceramica, dalla preparazione dell\'argilla alla cottura e decorazione.',
  },
];

export function Laboratori() {
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
          <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Laboratori
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Formazione professionale, artigianato e attività creative per il reinserimento lavorativo
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-betania-secondary text-lg leading-relaxed mb-6">
              I laboratori della Cooperativa Sociale Betania rappresentano un'opportunità concreta 
              per chi desidera acquisire competenze professionali, esprimere la propria creatività 
              e trovare un percorso verso l'inserimento lavorativo.
            </p>
            <p className="text-betania-secondary text-lg leading-relaxed">
              Offriamo formazione pratica, attività artigianali e corsi di specializzazione 
              in un ambiente inclusivo e stimolante.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratori */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              I Nostri Laboratori
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {laboratori.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <div
                  key={lab.title}
                  className="reveal bg-white rounded-xl shadow-lg card-hover overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-14 h-14 rounded-full bg-betania-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-betania-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-betania-primary mb-3">
                      {lab.title}
                    </h3>
                    <p className="text-betania-secondary mb-6 leading-relaxed">
                      {lab.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-betania-primary">Attività:</p>
                      <ul className="text-sm text-betania-secondary space-y-1">
                        {lab.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-betania-primary" />
                            {activity}
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

      {/* Corsi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Corsi e Formazione
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary max-w-2xl mx-auto mt-4">
              Percorsi formativi certificati per l'inserimento nel mondo del lavoro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corsi.map((corso, index) => (
              <div
                key={corso.title}
                className="reveal bg-betania-cream p-6 rounded-xl border-l-4 border-betania-primary"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <GraduationCap className="w-6 h-6 text-betania-primary" />
                  <span className="text-sm text-betania-light bg-white px-3 py-1 rounded-full">
                    {corso.durata}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-betania-primary mb-2">
                  {corso.title}
                </h3>
                <p className="text-betania-secondary text-sm">
                  {corso.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centro Studi */}
      <section className="py-16 bg-betania-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal text-white">
              <h2 className="text-3xl font-display font-bold mb-6">
                Centro Studi
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Il Centro Studi Betania è un luogo di ricerca, formazione e sperimentazione 
                pedagogica. Svolge attività di documentazione, ricerca e sperimentazione 
                nell'ambito dell'accoglienza e dell'inclusione sociale.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">Ricerca sociale e pedagogica</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">Documentazione e pubblicazioni</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">Formazione per operatori sociali</span>
                </div>
              </div>
            </div>
            <div className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Attività del Centro Studi
              </h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <span>Monitoraggio e valutazione dei progetti</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <span>Collaborazione con università e istituzioni</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <span>Organizzazione di convegni e seminari</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white mt-2" />
                  <span>Pubblicazione di materiali e studi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-betania-beige">
        <div className="container mx-auto px-4 text-center reveal">
          <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
            Vuoi partecipare ai nostri laboratori?
          </h2>
          <p className="text-betania-secondary max-w-2xl mx-auto mb-8">
            Scopri i corsi in partenza e come iscriverti. Siamo a disposizione per 
            fornirti tutte le informazioni necessarie.
          </p>
          <Link to="/contatti">
            <Button
              size="lg"
              className="bg-betania-primary text-white hover:bg-betania-dark px-8 py-6 text-lg"
            >
              Richiedi Informazioni
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
