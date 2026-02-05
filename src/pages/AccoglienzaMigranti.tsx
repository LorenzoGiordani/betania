import { useEffect } from 'react';
import { HandHeart, Users, Home, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const casSedi = [
  {
    name: 'La Locanda',
    location: "Riccò di Fornovo Taro (PR)",
    posti: 20,
    description: 'Centro Accoglienza Straordinaria in convenzione con la Prefettura di Parma.',
    image: '/images/FORNOVO.jpg',
  },
  {
    name: 'Casa Maria Luisa e Leda',
    location: 'S. Andrea di Torrile (PR)',
    posti: 20,
    description: 'Centro Accoglienza Straordinaria in convenzione con la Prefettura di Parma.',
    image: '/images/S.ANDREA2 FORNOVO.jpg',
  },
];

const saiSedi = [
  {
    name: 'Oltreconfine',
    location: 'Parma',
    posti: 19,
    description: 'Accoglienza profughi ucraini in convenzione.',
  },
  {
    name: 'Casa Ninetta',
    location: 'Martorano (PR)',
    posti: 25,
    description: 'Sistema di Accoglienza e Integrazione in convenzione con il Comune di Parma.',
    image: '/images/martorano.jpg',
  },
];

export function AccoglienzaMigranti() {
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
            <HandHeart className="w-8 h-8 text-white/80" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Accoglienza Migranti
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Percorsi di integrazione per richiedenti asilo e profughi
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
                La Nostra Storia
              </h2>
              <div className="section-divider" />
              <p className="text-betania-secondary leading-relaxed mb-4">
                La Comunità Betania dal 2011 ha iniziato ad occuparsi di accoglienza di persone immigrate. 
                I primi ospiti provenivano principalmente da paesi nord africani, in fuga da territori 
                martoriati da guerre, fame, carestie e da tutte quelle forme di ingiustizia sociale 
                in contrasto con la carta dei diritti dell'uomo.
              </p>
              <p className="text-betania-secondary leading-relaxed mb-4">
                La vera e propria strutturazione di questo nuovo progetto di integrazione è avvenuta 
                con l'apertura nel luglio 2015 della prima sede destinata a questa ospitalità.
              </p>
              <p className="text-betania-secondary leading-relaxed">
                Ad oggi sono presenti sul territorio provinciale quattro case della comunità: 
                due fanno parte del progetto CAS (Centro Accoglienza Straordinaria) in collaborazione 
                con la Prefettura di Parma e due del sistema SAI (Sistema di Accoglienza e Integrazione), 
                la cui titolarità del progetto è del Comune di Parma.
              </p>
            </div>
            <div className="reveal">
              <img
                src="/images/martorano.jpg"
                alt="Casa Ninetta"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAS Section */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-betania-primary text-white px-4 py-2 rounded-full mb-4">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Progetto CAS</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Centri Accoglienza Straordinaria
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary max-w-2xl mx-auto">
              In collaborazione con la Prefettura di Parma. 
              Nelle sedi CAS sono presenti prevalentemente migranti richiedenti asilo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {casSedi.map((sede, index) => (
              <div
                key={sede.name}
                className="reveal bg-white rounded-xl overflow-hidden shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56">
                  <img
                    src={sede.image}
                    alt={sede.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-betania-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {sede.posti} posti
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-betania-light mb-2">
                    <Home className="w-4 h-4" />
                    <span className="text-sm">{sede.location}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-betania-primary mb-2">
                    {sede.name}
                  </h3>
                  <p className="text-betania-secondary">
                    {sede.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 bg-betania-secondary text-white px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="font-medium">Progetto SAI</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Sistema di Accoglienza e Integrazione
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary max-w-2xl mx-auto">
              Titolarità del progetto da parte del Comune di Parma. 
              Nelle sedi SAI sono ospitate persone che già possono beneficiare della protezione 
              ottenuta o che hanno comunque una vulnerabilità riconosciuta; 
              prevalentemente donne e/o persone che necessitano di particolari cure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saiSedi.map((sede, index) => (
              <div
                key={sede.name}
                className="reveal bg-betania-cream rounded-xl p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-betania-light mb-1">
                      <Home className="w-4 h-4" />
                      <span className="text-sm">{sede.location}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-betania-primary">
                      {sede.name}
                    </h3>
                  </div>
                  <span className="bg-betania-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {sede.posti} posti
                  </span>
                </div>
                <p className="text-betania-secondary">
                  {sede.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reinserimento */}
      <section className="py-16 bg-betania-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="reveal flex flex-col">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Appartamento per il Reinserimento
              </h2>
              <div className="section-divider bg-white/50 mb-6" />
              <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                Per gli immigrati che hanno concluso un primo percorso di integrazione, 
                avendo ottenuto il riconoscimento necessario e che si stanno inserendo 
                nel mondo del lavoro, Betania offre ospitalità in un appartamento 
                nella prima periferia della città.
              </p>
              <div className="bg-white/10 rounded-lg p-5">
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Non Più Straniero
                </h3>
                <p className="text-white/70 text-sm mb-1">Martorano (PR)</p>
                <p className="text-white font-medium">6 posti letto</p>
              </div>
            </div>
            <div className="reveal flex flex-col">
              <div className="bg-white/10 rounded-xl p-6 h-full flex flex-col justify-center">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Gestione del Progetto
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Per la gestione del progetto di accoglienza delle persone immigrate 
                  la Comunità prevede un'equipe coordinata da un responsabile e formata 
                  da operatori che si alternano nelle varie attività previste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-betania-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Vuoi Saperne di Più?
            </h2>
            <p className="text-betania-secondary text-lg mb-8">
              Contattaci per maggiori informazioni sui nostri progetti di accoglienza.
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
