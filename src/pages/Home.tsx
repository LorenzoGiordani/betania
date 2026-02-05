import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Home as HomeIcon, BookOpen, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Heart,
    title: 'Programma Terapeutico',
    description: 'Percorsi di recupero per persone con dipendenze patologiche attraverso strutture residenziali e semi-residenziali.',
    path: '/programma-terapeutico',
    image: '/images/MARORE3.jpg',
  },
  {
    icon: HandHeart,
    title: 'Accoglienza Migranti',
    description: 'Progetti CAS e SAI per richiedenti asilo e profughi in collaborazione con Prefettura e Comune di Parma.',
    path: '/accoglienza-migranti',
    image: '/images/FORNOVO.jpg',
  },
  {
    icon: HomeIcon,
    title: 'Casa Francesco',
    description: 'Sede protetta per sieropositivi e malati di AIDS situata a Marore. 12 posti letto.',
    path: '/casa-francesco',
    image: '/images/casa francesco.JPG',
  },
  {
    icon: BookOpen,
    title: 'Laboratori',
    description: 'Laboratori artigianali e Centro Studi per la formazione professionale, l\'artigianato e la ricerca.',
    path: '/laboratori',
    image: '/images/lab elettrico.jpg',
  },
];

const stats = [
  { value: '40+', label: 'Anni di attività' },
  { value: '10+', label: 'Strutture' },
  { value: '100+', label: 'Posti letto' },
  { value: '1000+', label: 'Persone accolte' },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/MARORE3.jpg"
            alt="Sede principale Marore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="animate-fade-in-up">
            <p className="text-white/80 text-lg md:text-xl mb-4 font-display italic">
              "La chiamiamo Betania"
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Comunità Betania
            </h1>
            <div className="section-divider mx-auto bg-white/50" />
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Associazione di Promozione Sociale dal 1984. 
              Accoglienza, condivisione e integrazione per chi vive situazioni di disagio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chi-siamo">
                <Button
                  size="lg"
                  className="bg-white text-betania-primary hover:bg-white/90 px-8 py-6 text-lg font-medium"
                >
                  Scopri Chi Siamo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contatti">
                <Button
                  size="lg"
                  className="bg-white text-betania-primary hover:bg-white/90 px-8 py-6 text-lg font-medium"
                >
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center reveal">
            <img 
              src="/images/logo.png" 
              alt="Comunità Betania - Logo" 
              className="h-32 md:h-40 w-auto object-contain mb-6"
            />
            <p className="text-betania-light text-lg italic font-display">
              "La chiamiamo Betania"
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="quote-mark font-display">"</div>
            <blockquote className="text-xl md:text-2xl text-betania-dark italic leading-relaxed -mt-8 mb-6">
              Innanzitutto bisogna decidere di ripartire dagli ultimi, 
              che sono il segno drammatico della crisi attuale... 
              perché crescere ancora la folla dei 'nuovi poveri'?
            </blockquote>
            <cite className="text-betania-light not-italic">
              — CEI, 1981
            </cite>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-betania-primary mb-4">
              I Nostri Servizi
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary text-lg max-w-2xl mx-auto">
              Una rete di strutture e servizi per l'accoglienza, 
              il recupero e l'integrazione sociale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.path}
                  className={`reveal card-hover bg-white rounded-xl overflow-hidden shadow-lg border border-betania-beige`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-betania-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-betania-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-betania-secondary mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={service.path}
                      className="inline-flex items-center text-betania-primary font-medium hover:underline"
                    >
                      Scopri di più
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-betania-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-betania-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-betania-primary mb-4">
              Vuoi Saperne di Più?
            </h2>
            <p className="text-betania-secondary text-lg mb-8">
              Contattaci per maggiori informazioni sui nostri servizi 
              e su come possiamo aiutarti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contatti">
                <Button
                  size="lg"
                  className="bg-betania-primary text-white hover:bg-betania-dark px-8 py-6 text-lg"
                >
                  Contattaci
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/chi-siamo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-betania-primary text-betania-primary hover:bg-betania-primary hover:text-white px-8 py-6 text-lg"
                >
                  La Nostra Storia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
