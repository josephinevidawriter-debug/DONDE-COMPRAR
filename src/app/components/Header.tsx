import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import logo from '../../imports/Screenshot_2026-05-25_at_6.16.46_PM.png';
import facebookIcon from '../../imports/ChatGPT_Image_May_25__2026__06_46_35_PM.png';
import instagramIcon from '../../imports/ChatGPT_Image_May_25__2026__06_40_11_PM.png';
import youtubeIcon from '../../imports/ChatGPT_Image_May_25__2026__06_42_04_PM.png';

export function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setShowSubmenu(false);
    setIsMobileMenuOpen(false);
  };

  const mobileMenu = (
    <div className={`lg:hidden fixed inset-0 z-[140] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button
        className="fixed inset-0 z-[141] bg-black/55 backdrop-blur-[2px]"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Cerrar menú"
      />

      <aside
        className={`fixed top-0 right-0 z-[142] h-full w-[82%] max-w-[340px] bg-white shadow-2xl border-l border-border/40 transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Menú móvil"
      >
        <div className="flex items-center justify-between px-5 h-20 border-b border-border/40">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-brand-dark/70">Menú</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-brand-dark hover:text-brand-gold transition-colors"
            aria-label="Cerrar menú de navegación"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-5 py-4 flex flex-col">
          <a href="#" className="py-3 border-b border-border/30 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors tracking-wide uppercase">
            Quiénes Somos
          </a>
          <a href="#" className="py-3 border-b border-border/30 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors tracking-wide uppercase">
            Sostenibilidad
          </a>
          <a href="#" className="py-3 border-b border-border/30 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors tracking-wide uppercase">
            Productos
          </a>

          <div className="py-3 border-b border-border/30">
            <p className="text-xs font-semibold text-brand-dark/70 tracking-wider uppercase mb-3">
              Dónde Comprar
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('channel-selector')} className="text-left text-sm text-brand-dark hover:text-brand-gold transition-colors">
                Canales
              </button>
              <button onClick={() => scrollToSection('export')} className="text-left text-sm text-brand-dark hover:text-brand-gold transition-colors">
                Exportación
              </button>
              <button onClick={() => scrollToSection('certifications')} className="text-left text-sm text-brand-dark hover:text-brand-gold transition-colors">
                Certificaciones
              </button>
              <button onClick={() => scrollToSection('concessionaires')} className="text-left text-sm text-brand-dark hover:text-brand-gold transition-colors">
                Concesionarios
              </button>
              <button onClick={() => scrollToSection('supermarkets')} className="text-left text-sm text-brand-dark hover:text-brand-gold transition-colors">
                Supermercados
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-sm text-brand-dark hover:text-brand-gold transition-colors">
                Contacto
              </button>
            </div>
          </div>

          <a href="#" className="py-3 border-b border-border/30 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors tracking-wide uppercase">
            Recetario
          </a>
          <a href="#" className="py-3 border-b border-border/30 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors tracking-wide uppercase">
            Nueva Etapa
          </a>
          <a href="#" className="py-3 border-b border-border/30 text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors tracking-wide uppercase">
            Blog
          </a>
        </nav>
      </aside>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/50 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Carnes San Martín"
              className="h-[67px] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 flex-grow justify-center">
            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
              Quiénes Somos
            </a>
            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
              Sostenibilidad
            </a>
            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
              Productos
            </a>

            {/* Donde Comprar with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
            >
              <button className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
                Donde Comprar
              </button>

              {/* Dropdown Submenu */}
              {showSubmenu && (
                <div className="absolute top-full left-0 mt-0 bg-[#F5F3EE] shadow-lg min-w-[240px] z-50">
                  <button
                    onClick={() => scrollToSection('channel-selector')}
                    className="block w-full text-left px-6 py-4 text-brand-dark hover:bg-brand-gold/10 transition-colors text-base"
                  >
                    Canales
                  </button>
                  <button
                    onClick={() => scrollToSection('export')}
                    className="block w-full text-left px-6 py-4 text-brand-dark hover:bg-brand-gold/10 transition-colors text-base"
                  >
                    Exportación
                  </button>
                  <button
                    onClick={() => scrollToSection('certifications')}
                    className="block w-full text-left px-6 py-4 text-brand-dark hover:bg-brand-gold/10 transition-colors text-base"
                  >
                    Certificaciones
                  </button>
                  <button
                    onClick={() => scrollToSection('concessionaires')}
                    className="block w-full text-left px-6 py-4 text-brand-dark hover:bg-brand-gold/10 transition-colors text-base"
                  >
                    Concesionarios
                  </button>
                  <button
                    onClick={() => scrollToSection('supermarkets')}
                    className="block w-full text-left px-6 py-4 text-brand-dark hover:bg-brand-gold/10 transition-colors text-base"
                  >
                    Supermercados
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left px-6 py-4 text-brand-dark hover:bg-brand-gold/10 transition-colors text-base"
                  >
                    Contacto
                  </button>
                </div>
              )}
            </div>

            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
              Recetario
            </a>
            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
              Nueva Etapa
            </a>
            <a href="#" className="text-xs font-medium text-brand-dark hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
              Blog
            </a>
          </nav>

          {/* Right Side: Language + Social */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Language Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-lg">🇪🇸</span>
              <span className="text-xs font-medium text-brand-dark uppercase tracking-wide">Español</span>
            </div>

            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/carnesanmartin/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300 flex items-center -ml-1"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="h-[70px] w-[70px] object-contain" />
            </a>
            <a
              href="https://www.youtube.com/@carnessanmartin6132"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300 flex items-center -ml-2"
              aria-label="YouTube"
            >
              <img src={youtubeIcon} alt="YouTube" className="h-[70px] w-[70px] object-contain" />
            </a>
            <a
              href="https://www.instagram.com/carnesanmartin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300 flex items-center -ml-2"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="h-[70px] w-[70px] object-contain" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-dark"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
          </div>
        </div>
      </header>
      {typeof document !== 'undefined' ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
