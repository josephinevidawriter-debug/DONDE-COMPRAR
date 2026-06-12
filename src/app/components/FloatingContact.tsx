import { MessageCircle } from 'lucide-react';

export function FloatingContact() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className="
        fixed z-50
        top-20 right-3
        px-4 py-2
        sm:top-24 sm:right-4 sm:px-5 sm:py-2.5
        md:top-28 md:right-8 md:px-6 md:py-3
        flex items-center gap-2
        bg-white text-brand-dark border border-brand-dark/90
        hover:bg-brand-gold hover:border-brand-gold
        transition-all duration-300
        shadow-[0_14px_34px_rgba(0,0,0,0.18)]
        hover:shadow-[0_16px_36px_rgba(212,169,58,0.24)]
        hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2
      "
    >
      <MessageCircle className="h-4 w-4 flex-shrink-0" />
      <span className="text-xs sm:text-sm font-semibold tracking-[0.02em] whitespace-nowrap">
        Equipo comercial
      </span>
    </button>
  );
}