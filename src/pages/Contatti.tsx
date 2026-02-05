import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const sedi = [
  {
    name: 'Sede Principale',
    address: 'Strada del Lazzaretto, 26 - Marore (PR)',
    type: 'Comunità Betania',
  },
  {
    name: 'Accoglienza',
    address: 'Roccalanzona, Parma (PR)',
    type: 'La Rocca',
  },
  {
    name: 'Periodo Comunitario',
    address: 'Ghiara di Fontanellato, Parma (PR)',
    type: 'Cascina Ghiara',
  },
  {
    name: 'Bassa Intensità',
    address: 'Coloreto, Parma (PR)',
    type: 'Il Francobollo',
  },
  {
    name: 'Vacanze e Formazione',
    address: 'Vallerano di Calestano, Parma (PR)',
    type: 'Borgo San Giacomo',
  },
];

export function Contatti() {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ nome: '', email: '', telefono: '', messaggio: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-betania-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contattaci
          </h1>
          <div className="section-divider mx-auto bg-white/50" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Siamo qui per aiutarti. Scrivici o vieni a trovarci.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="reveal h-full">
              <h2 className="text-2xl font-display font-bold text-betania-primary mb-6">
                Informazioni di Contatto
              </h2>
              <div className="section-divider mb-8" />

              <div className="space-y-4">
                <Card className="h-[72px]">
                  <CardContent className="flex items-center gap-4 p-4 h-full">
                    <div className="w-10 h-10 rounded-full bg-betania-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-betania-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-betania-primary text-sm">
                        Sede Principale
                      </h3>
                      <p className="text-betania-secondary text-sm">
                        Strada del Lazzaretto, 26 - Marore (PR)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-[72px]">
                  <CardContent className="flex items-center gap-4 p-4 h-full">
                    <div className="w-10 h-10 rounded-full bg-betania-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-betania-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-betania-primary text-sm">
                        Telefono
                      </h3>
                      <p className="text-betania-secondary text-sm">
                        0521 481771
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-[72px]">
                  <CardContent className="flex items-center gap-4 p-4 h-full">
                    <div className="w-10 h-10 rounded-full bg-betania-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-betania-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-betania-primary text-sm">
                        Email
                      </h3>
                      <p className="text-betania-secondary text-sm">
                        betania.associazione@gmail.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-[72px]">
                  <CardContent className="flex items-center gap-4 p-4 h-full">
                    <div className="w-10 h-10 rounded-full bg-betania-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-betania-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-betania-primary text-sm">
                        Orari
                      </h3>
                      <p className="text-betania-secondary text-sm">
                        La comunità è sempre operativa
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal h-full">
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-display font-bold text-betania-primary">
                    Invia un Messaggio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-betania-primary mb-2">
                        Messaggio Inviato!
                      </h3>
                      <p className="text-betania-secondary">
                        Ti risponderemo al più presto.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome e Cognome *</Label>
                          <Input
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleChange}
                            placeholder="Il tuo nome"
                            required
                            className="border-betania-border focus:border-betania-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="La tua email"
                            required
                            className="border-betania-border focus:border-betania-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Telefono</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formState.telefono}
                          onChange={handleChange}
                          placeholder="Il tuo numero di telefono"
                          className="border-betania-border focus:border-betania-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="messaggio">Messaggio *</Label>
                        <Textarea
                          id="messaggio"
                          name="messaggio"
                          value={formState.messaggio}
                          onChange={handleChange}
                          placeholder="Scrivi il tuo messaggio..."
                          required
                          rows={5}
                          className="border-betania-border focus:border-betania-primary resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-betania-primary text-white hover:bg-betania-dark py-4"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Invia Messaggio
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Le Nostre Sedi */}
      <section className="py-16 bg-betania-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Le Nostre Sedi
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-betania-secondary max-w-2xl mx-auto">
              Siamo presenti in diverse località della provincia di Parma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sedi.map((sede, index) => (
              <Card
                key={sede.name}
                className="reveal card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-betania-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-betania-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-betania-light mb-1">{sede.type}</p>
                      <h3 className="font-display font-bold text-betania-primary mb-1">
                        {sede.name}
                      </h3>
                      <p className="text-betania-secondary text-sm">
                        {sede.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-display font-bold text-betania-primary mb-4">
              Dove Trovarci
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="reveal bg-betania-cream rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-betania-primary mx-auto mb-4" />
              <p className="text-betania-secondary">
                Mappa interattiva in fase di implementazione
              </p>
              <p className="text-betania-light text-sm mt-2">
                Sede principale: Strada del Lazzaretto, 26 - Marore (PR)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
