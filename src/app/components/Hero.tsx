import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSelector = () => {
    document.getElementById('channel-selector')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Premium beef cuts"
          className="w-full h-full object-cover scale-105"
        />
        {/* Sophisticated multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Premium badge accent */}
        <div className="inline-block mb-8 px-6 py-2 backdrop-blur-sm" style={{ border: '1px solid rgba(212,169,58,0.3)', backgroundColor: 'rgba(212,169,58,0.12)' }}>
          <span className="text-sm font-medium tracking-wider uppercase" style={{ color: '#D4A93A' }}>CALIDAD PREMIUM DESDE 1960</span>
        </div>

        <h1 className="text-[40px] md:text-[56px] lg:text-[72px] text-white mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '-0.5px' }}>
          ¿Dónde comprar Carnes San Martín?
        </h1>
        <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '150%', color: 'rgba(255,255,255,0.82)' }}>
          Desde supermercados locales hasta abastecimiento comercial internacional,
          encuentre el canal adecuado según su necesidad.
        </p>

        <button
          onClick={scrollToSelector}
          className="group inline-flex items-center gap-3 px-6 bg-white hover:bg-brand-gold transition-all duration-500 shadow-2xl text-[16px] lg:text-[18px]"
          style={{ height: '56px', fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '100%', letterSpacing: '0.5px', color: '#111111', borderRadius: '0px', border: 'none' }}
        >
          <span>EXPLORAR OPCIONES</span>
          <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-500" style={{ strokeWidth: '1.75px' }} />
        </button>
      </div>
    </section>
  );
}
