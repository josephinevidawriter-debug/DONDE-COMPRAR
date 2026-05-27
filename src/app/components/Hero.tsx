import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSelector = () => {
    document.getElementById('channel-selector')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[620px] md:min-h-[650px] lg:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Premium beef cuts"
          className="w-full h-full object-cover scale-105"
        />
        {/* Sophisticated multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/68 to-black/52"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/45"></div>
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(0,0,0,0.4)_100%)]"></div>
        {/* Warm premium tint */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,169,58,0.12)_0%,transparent_42%,rgba(212,169,58,0.08)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center py-10 md:py-12 lg:py-0">
        {/* Premium badge accent */}
        <div className="inline-block mb-7 md:mb-9 px-6 py-2.5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.22)]" style={{ border: '1px solid rgba(212,169,58,0.35)', backgroundColor: 'rgba(212,169,58,0.14)' }}>
          <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: '#D4A93A' }}>CALIDAD PREMIUM DESDE 1960</span>
        </div>

        <h1 className="text-[40px] md:text-[56px] lg:text-[72px] text-white mb-6 md:mb-7 max-w-5xl mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '106%', letterSpacing: '-0.4px' }}>
          ¿Dónde comprar Carnes San Martín?
        </h1>
        <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-10 md:mb-12 max-w-[52rem] mx-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '152%', letterSpacing: '0.005em', color: 'rgba(255,255,255,0.87)' }}>
          Desde supermercados locales hasta abastecimiento comercial internacional,
          encuentre el canal adecuado según su necesidad.
        </p>

        <button
          onClick={scrollToSelector}
          className="group inline-flex items-center gap-3 px-7 bg-white hover:bg-brand-gold transition-all duration-500 shadow-[0_14px_40px_rgba(0,0,0,0.34)] hover:shadow-[0_16px_44px_rgba(196,30,58,0.22)] text-[16px] lg:text-[18px] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          style={{ height: '56px', fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '100%', letterSpacing: '0.04em', color: '#111111', borderRadius: '0px', border: '1px solid rgba(255,255,255,0.28)' }}
        >
          <span>EXPLORAR OPCIONES</span>
          <ChevronDown className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-500" style={{ strokeWidth: '1.75px' }} />
        </button>
      </div>
    </section>
  );
}
