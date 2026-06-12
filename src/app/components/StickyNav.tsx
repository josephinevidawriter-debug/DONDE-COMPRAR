import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('channel-selector');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 800);

      // Detect active section
      const sections = ['channel-selector', 'export', 'certifications', 'concessionaires', 'supermarkets', 'contact'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is considered active if it's in the viewport (top is within window)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'channel-selector', label: 'Canales' },
    { id: 'export', label: 'Exportación' },
    { id: 'certifications', label: 'Certificaciones' },
    { id: 'concessionaires', label: 'Concesionarios' },
    { id: 'supermarkets', label: 'Supermercados' },
    { id: 'contact', label: 'Contacto' },
  ];

  // ─────────────────────────────────────────────────────────────
  // DESACTIVADO: este nav secundario ("Canales / Exportación /
  // Certificaciones / Concesionarios / Supermercados / Contacto /
  // Volver a canales") ya no debe mostrarse.
  // Para reactivarlo, elimina la siguiente línea
  // (`return null;`) y descomenta el bloque "if (!isVisible)
  // return null;" más abajo si quieres recuperar el comportamiento
  // original basado en scroll.
  // ─────────────────────────────────────────────────────────────
  return null;

  // if (!isVisible) return null;

  return (
    <nav className="sticky top-20 z-40 bg-[#FDFBF7]/95 border-b border-brand-gold/25 shadow-[0_6px_18px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-0.5">
          <div className="flex items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-3.5 whitespace-nowrap transition-colors duration-300 text-sm ${
                  activeSection === item.id
                    ? 'text-brand-dark font-medium'
                    : 'text-brand-dark/60 hover:text-brand-gold font-normal'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.label}

                {/* Active indicator - Gold underline */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"></span>
                )}
              </button>
            ))}
          </div>

          {/* Return to channels */}
          <button
            onClick={() => scrollToSection('channel-selector')}
            className="hidden lg:flex items-center gap-1.5 px-4 py-3.5 text-brand-dark/60 hover:text-brand-gold transition-colors duration-300 whitespace-nowrap font-normal text-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Volver a canales
          </button>
        </div>
      </div>
    </nav>
  );
}