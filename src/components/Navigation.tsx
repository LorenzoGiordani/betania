import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, Home, Users, Heart, HandHeart, HomeIcon, Briefcase, BookOpen, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/chi-siamo', label: 'Chi Siamo', icon: Users },
  { path: '/programma-terapeutico', label: 'Programma Terapeutico', icon: Heart },
  { path: '/accoglienza-migranti', label: 'Accoglienza Migranti', icon: HandHeart },
  { path: '/casa-francesco', label: 'Casa Francesco', icon: HomeIcon },
  { path: '/altri-servizi', label: 'Altri Servizi', icon: Briefcase },
  { path: '/laboratori', label: 'Laboratori', icon: BookOpen },
  { path: '/contatti', label: 'Contatti', icon: Phone },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="hidden lg:flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-4 py-2.5 text-base font-medium rounded-lg transition-all ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'bg-betania-primary text-white shadow-md'
                      : 'bg-white text-betania-primary shadow-md'
                    : isScrolled
                    ? 'text-betania-dark hover:text-betania-primary hover:bg-betania-beige/50'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
              <button
                className={`p-2 rounded-md transition-colors ${
                  isScrolled
                    ? 'text-betania-primary hover:bg-betania-beige'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-betania-cream">
              <div className="flex flex-col gap-2 mt-8">
                <div className="flex items-center gap-3 mb-6 px-2">
                  <img 
                    src="/images/logo.png" 
                    alt="Comunità Betania" 
                    className="h-10 w-auto object-contain"
                  />
                  <span className="font-display font-bold text-betania-primary">
                    Comunità Betania
                  </span>
                </div>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-betania-primary text-white shadow-md'
                          : 'text-betania-dark hover:bg-betania-beige'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
      </nav>
    </header>
  );
}
