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
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2 px-6 py-3 bg-white text-brand-dark border border-brand-dark/90 hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 shadow-[0_14px_34px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_36px_rgba(212,169,58,0.24)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm font-semibold tracking-[0.02em]">Contactar equipo comercial</span>
      </button>

      {/* Mobile */}
      <button
        onClick={scrollToContact}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full px-6 py-4 bg-white text-brand-dark border-t border-brand-dark/90 hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-0 flex items-center justify-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm font-semibold tracking-[0.02em]">Contactar equipo comercial</span>
      </button>
    </>
  );
}
