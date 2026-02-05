import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, ExternalLink } from 'lucide-react';

const quickLinks = [
  { path: '/chi-siamo', label: 'Chi Siamo' },
  { path: '/programma-terapeutico', label: 'Programma Terapeutico' },
  { path: '/accoglienza-migranti', label: 'Accoglienza Migranti' },
  { path: '/casa-francesco', label: 'Casa Francesco' },
  { path: '/altri-servizi', label: 'Altri Servizi' },
  { path: '/laboratori', label: 'Laboratori' },
  { path: '/contatti', label: 'Contatti' },
];

export function Footer() {
  return (
    <footer className="bg-betania-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Comunità Betania" 
                className="h-24 w-auto object-contain"
              />
              <div>
                <h3 className="font-display font-bold text-lg">Comunità Betania</h3>
                <p className="text-white/70 text-sm">"La chiamiamo Betania"</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Associazione di Promozione Sociale dal 1984. 
              Membro del CNCA dal 1986.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Heart className="w-4 h-4" />
              <span>Accoglienza, condivisione, integrazione</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">I Nostri Servizi</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Programma Terapeutico</li>
              <li>Accoglienza Migranti</li>
              <li>Casa Francesco</li>
              <li>Casa Protetta AIDS</li>
              <li>Accoglienza Notturna</li>
              <li>Vallerano - Vacanze</li>
              <li>Laboratori</li>
              <li>Centro Studi</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contatti</h4>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sede Principale</p>
                  <p>Strada del Lazzaretto, 26 - Marore (PR)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0521 481771</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>betania.associazione@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
            <p>© 2025 Comunità Betania. Tutti i diritti riservati.</p>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
