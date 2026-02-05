import { useEffect } from 'react';
import { Building2, Home, Heart, ArrowRight, Moon, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';



export function ServiziProssimita() {
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
            <Building2 className="w-8 h-8 text-white/80" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Servizi di Prossimità
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Servizi dedicati a specifiche necessità di accoglienza e supporto
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-betania-secondary text-lg leading-relaxed">
              Oltre ai programmi terapeutici e all'accoglienza migranti, 
              la Comunità Betania offre una serie di servizi di prossimità 
              dedicati a specifiche necessità di persone in situazioni di fragilità.
            </p>
          </div>
        </div>
      </section>

      {/* Casa Francesco */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-betania-primary text-white px-4 py-2 rounded-full mb-4">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Casa Protetta</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-betania-primary mb-2">
                Casa Francesco
              </h2>
              <p className="text-betania-light mb-4">
                Sede protetta per sieropositivi e malati di AIDS
              </p>
              <div className="flex items-center gap-2 text-betania-light mb-6">
                <Home className="w-4 h-4" />
                <span className="text-sm">Marore (PR)</span>
              </div>
              <p className="text-betania-secondary leading-relaxed mb-6">
                Casa Francesco sorge in un terreno adiacente alla sede principale della Comunità a Marore. 
                L'edificio a pianta rettangolare si sviluppa intorno ad una corte ad archi ornata ai lati 
                da aiuole con piante di ulivo, di palma e di oleandro.
              </p>
              <p className="text-betania-secondary leading-relaxed mb-6">
                Sul lato nord il primo piano accoglie una piccola comunità di religiose che prestano 
                il loro servizio a Betania. Al piano terra un corridoio interno collega stanze e vetrate 
                che affacciano sul cortile, consentendo a tutti di muoversi senza alcuna barriera.
              </p>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-display font-bold text-betania-primary mb-3">
                  Finalità
                </h3>
                <p className="text-betania-secondary text-sm leading-relaxed">
                  L'obiettivo primario è l'accoglienza di persone sieropositive che necessitano 
                  di una casa ospitale ed adeguata al loro tipo di malattia e disagio. 
                  Trattandosi di una casa protetta e non di struttura ospedaliera, vengono tenuti 
                  per ogni utente contatti costanti con le strutture invianti, i reparti ospedalieri 
                  di riferimento e con il servizio "A.D.M.A." dell'Ausl di Parma.
                </p>
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

      {/* La Sosta */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 lg:order-1">
              <img
                src="/images/LA SOSTA.JPG"
                alt="La Sosta"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="reveal order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-betania-secondary text-white px-4 py-2 rounded-full mb-4">
                <Moon className="w-4 h-4" />
                <span className="text-sm font-medium">Accoglienza Notturna</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-betania-primary mb-2">
                La Sosta
              </h2>
              <p className="text-betania-light mb-4">
                Casa di accoglienza notturna temporanea
              </p>
              <div className="flex items-center gap-2 text-betania-light mb-6">
                <Home className="w-4 h-4" />
                <span className="text-sm">Coloreto (PR)</span>
              </div>
              <p className="text-betania-secondary leading-relaxed mb-6">
                Il modesto edificio, già scuola elementare di Coloreto, dal 25/05/2013 è destinato 
                al servizio di ospitalità notturna a bassa soglia di accesso.
              </p>
              <p className="text-betania-secondary leading-relaxed mb-6">
                Il servizio è rivolto a persone provenienti dalla strada con problematiche di dipendenza attiva; 
                l'inserimento nella struttura evita il rischio di un aggravamento delle loro condizioni psicofisiche. 
                Inoltre permette di stabilire un rapporto di fiducia e di individuare il raggiungimento di nuovi obiettivi.
              </p>
              <div className="bg-betania-cream rounded-lg p-6">
                <h3 className="font-display font-bold text-betania-primary mb-3">
                  Servizi Offerti
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Servizio doccia', 'Lavanderia', 'Cena', 'Stanza per dormire', 'Prima colazione'].map((servizio) => (
                    <div key={servizio} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-betania-primary" />
                      <span className="text-sm text-betania-secondary">{servizio}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-betania-secondary text-sm mt-4">
                Il progetto è gestito da Betania insieme all'Unità di Strada dell'Ausl di Parma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casa Mia */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 bg-betania-accent text-white px-4 py-2 rounded-full mb-4">
              <Key className="w-4 h-4" />
              <span className="text-sm font-medium">Reinserimento</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-2">
              Casa Mia
            </h2>
            <p className="text-betania-light mb-6">
              Appartamenti per il reinserimento
            </p>
            <p className="text-betania-secondary leading-relaxed mb-8">
              In una parte di Casa Ninetta in località Martorano sono stati ricavati quattro appartamenti 
              destinati a persone che, concluso il programma terapeutico, abbiano necessità di una sistemazione temporanea.
            </p>
            <div className="bg-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="font-display font-bold text-betania-primary mb-3">
                    Caratteristiche
                  </h3>
                  <ul className="space-y-2">
                    {[
                      '4 appartamenti',
                      'Spazi concessi in uso dalla Comunità',
                      'Tempo determinato',
                      'Supporto continuo',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-betania-secondary">
                        <div className="w-2 h-2 rounded-full bg-betania-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-betania-primary mb-3">
                    Destinatari
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Persone con programma terapeutico concluso',
                      'Contratto di lavoro esterno',
                      'Necessità di autonomia economica',
                      'Bisogno di sostegno sociale',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-betania-secondary">
                        <div className="w-2 h-2 rounded-full bg-betania-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-betania-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Hai Bisogno di Aiuto?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contattaci per maggiori informazioni sui nostri servizi di prossimità.
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
        </div>
      </section>
    </div>
  );
}
