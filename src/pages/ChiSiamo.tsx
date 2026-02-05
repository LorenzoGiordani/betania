import { useEffect } from 'react';
import { Heart, Users, BookOpen, Calendar } from 'lucide-react';

const milestones = [
  {
    year: '1984',
    title: 'La nascita di Betania',
    description: 'Una sera di maggio del 1984, dopo aver riflettuto e pregato, decidiamo il nome della nostra comunità: "La chiamiamo Betania".',
  },
  {
    year: '1986',
    title: 'Entrata nel CNCA',
    description: 'Betania diventa membro del Coordinamento Nazionale delle Comunità di Accoglienza (CNCA).',
  },
  {
    year: '2001',
    title: 'Inaugurazione Casa Francesco',
    description: 'Il 15 giugno 2001 viene inaugurata la struttura per l\'accoglienza di persone sieropositive.',
  },
  {
    year: '2011',
    title: 'Inizio Accoglienza Migranti',
    description: 'Betania inizia ad occuparsi di accoglienza di persone immigrate, prevalentemente da paesi nord africani.',
  },
  {
    year: '2015',
    title: 'Strutturazione Progetto Migranti',
    description: 'Con l\'apertura della prima sede dedicata, avviene la vera strutturazione del progetto di integrazione.',
  },
  {
    year: '2024',
    title: 'Trasformazione in Impresa Sociale',
    description: 'La Cooperativa adotta un nuovo statuto e si trasforma in Impresa Sociale secondo la legge del Terzo Settore.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Accoglienza',
    description: 'Prediligiamo lo stile dell\'accoglienza e della condivisione, offrendo un ambiente familiare e caloroso.',
  },
  {
    icon: Users,
    title: 'Solidarietà',
    description: 'Siamo solidali con quanti, di ogni provenienza religiosa e culturale, promuovono un autentico movimento di civiltà.',
  },
  {
    icon: BookOpen,
    title: 'Formazione',
    description: 'Offriamo opportunità formative e culturali attraverso il Centro Studi e i laboratori della Cooperativa.',
  },
];

export function ChiSiamo() {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Chi Siamo
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            La storia, la missione e i valori della Comunità Betania
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="quote-mark font-display">"</div>
            <blockquote className="text-xl md:text-2xl text-betania-dark italic leading-relaxed -mt-8 mb-6">
              Innanzitutto bisogna decidere di ripartire dagli ultimi, 
              che sono il segno drammatico della crisi attuale... 
              perché crescere ancora la folla dei 'nuovi poveri'?
            </blockquote>
            <cite className="text-betania-light not-italic">
              — Chiesa Italiana e prospettive del Paese, CEI, 1981
            </cite>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
                Alla Vigilia di Betania
              </h2>
              <div className="section-divider" />
              <p className="text-betania-secondary leading-relaxed mb-4">
                Betania è nata come normale sviluppo di una convivenza comunitaria di giovani 
                che avevano maturato la scelta dell'obiezione di coscienza, dell'impegno nella 
                promozione della pace e di un servizio a persone in difficoltà.
              </p>
              <p className="text-betania-secondary leading-relaxed">
                Nata nell'ambito del volontariato, l'Associazione "Betania" si pone come risposta 
                umile alle situazioni di disagio presenti nel mondo giovanile. Attinge la forza 
                dalle radici del messaggio evangelico e si trova solidale con quanti, di ogni 
                provenienza religiosa e culturale, promuovono un autentico movimento di civiltà.
              </p>
            </div>
            <div className="reveal">
              <img
                src="/images/P1010734.JPG"
                alt="Incontro di gruppo"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Il Senso di un Nome */}
      <section className="py-16 bg-betania-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 lg:order-1">
              <img
                src="/images/la rocca.jpg"
                alt="La Rocca"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="reveal order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
                Il Senso di un Nome
              </h2>
              <div className="section-divider" />
              <p className="text-betania-secondary leading-relaxed mb-4">
                È un villaggio del Vangelo: vi abitavano Lazzaro, Marta e Maria. 
                Gesù sostava in casa di amici.
              </p>
              <p className="text-betania-secondary leading-relaxed mb-4">
                Dopo aver riflettuto e pregato abbiamo deciso il nome della nostra comunità: 
                <span className="italic font-medium text-betania-primary"> "La chiamiamo Betania"</span>.
              </p>
              <p className="text-betania-secondary leading-relaxed">
                Era una sera di maggio del 1984.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'Anima della Comunità */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              L'Anima della Comunità
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="reveal bg-betania-cream rounded-xl p-8 text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-betania-primary flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-betania-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-betania-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              La Nostra Storia
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="reveal timeline-item mb-8 last:mb-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-betania-primary" />
                    <span className="text-betania-primary font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-betania-dark mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-betania-secondary">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa Promuoviamo */}
      <section className="py-16 bg-betania-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              La Comunità Promuove
            </h2>
            <div className="section-divider mx-auto bg-white/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Programma Terapeutico
              </h3>
              <p className="text-white/80 leading-relaxed">
                Luoghi di accoglienza per il trattamento delle dipendenze patologiche 
                sia con strutture residenziali che per il reinserimento socio-lavorativo 
                e a bassa intensità terapeutica.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Accoglienza Migranti
              </h3>
              <p className="text-white/80 leading-relaxed">
                Luoghi di accoglienza per migranti richiedenti asilo e percorsi di integrazione: 
                progetto CAS in collaborazione con la Prefettura di Parma e sistema SAI 
                con titolarità del Comune di Parma.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Servizi di Prossimità
              </h3>
              <p className="text-white/80 leading-relaxed">
                Casa protetta per sieropositivi - malati di AIDS, sede per accoglienza 
                notturna temporanea, appartamenti dedicati per il reinserimento.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Rapporto col Carcere
              </h3>
              <p className="text-white/80 leading-relaxed">
                La Comunità accoglie da sempre detenuti con i benefici di legge previsti 
                dall'Ordinamento Penitenziario. Attiva interventi permanenti individuali 
                e di gruppo attraverso i volontari.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
