import { MessageCircle } from 'lucide-react';

export function FloatingContact() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop */}
      <button
        onClick={scrollToContact}
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2 px-6 py-3 bg-white text-brand-dark border border-brand-dark hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 shadow-lg"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm font-medium">Contactar equipo comercial</span>
      </button>

      {/* Mobile */}
      <button
        onClick={scrollToContact}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full px-6 py-4 bg-white text-brand-dark border-t border-brand-dark hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm font-medium">Contactar equipo comercial</span>
      </button>
    </>
  );
}
