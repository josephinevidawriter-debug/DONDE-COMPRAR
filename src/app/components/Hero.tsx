import { ChevronDown } from 'lucide-react';


export function Hero() {
 const scrollToSelector = () => {
   document.getElementById('channel-selector')?.scrollIntoView({ behavior: 'smooth' });
 };


 return (
   <section className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[760px] flex items-center justify-center overflow-hidden">
     {/* Background Image with Premium Overlay */}
     <div className="absolute inset-0 z-0">
       <img
         src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
         alt="Premium beef cuts"
         className="w-full h-full object-cover md:scale-105"
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
     <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 text-center py-10 md:py-12 lg:py-0 overflow-hidden">
       {/* Premium badge accent */}
       <div className="inline-flex max-w-full overflow-hidden mb-6 px-4 md:px-5 py-2 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.22)]"
 style={{
   border: '1px solid rgba(212,169,58,0.35)',
   backgroundColor: 'rgba(212,169,58,0.14)'
 }}
>
<span className="text-[11px] md:text-xs font-semibold tracking-[0.12em] uppercase text-center" style={{ color: '#D4A93A' }}>CALIDAD PREMIUM DESDE 1975</span>
       </div>


       <h1
 className="text-[32px] sm:text-[36px] md:text-[52px] lg:text-[72px] text-white mb-6 md:mb-7 max-w-[92vw] md:max-w-5xl mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] break-words overflow-hidden"
 style={{
   fontFamily: 'var(--font-serif)',
   fontWeight: 700,
   lineHeight: '1.08',
   letterSpacing: '-0.03em'
 }}
>
 ¿Dónde comprar Carnes San Martín?
</h1>
<p
 className="text-[16px] md:text-[18px] lg:text-[24px] max-w-[90vw] md:max-w-2xl mx-auto mb-6 md:mb-8 overflow-hidden"
 style={{
   fontFamily: 'var(--font-sans)',
   fontWeight: 400,
   lineHeight: '152%',
   color: '#FFFFFF'
 }}
>
         Desde supermercados locales hasta abastecimiento comercial internacional,
         encuentre el canal adecuado según su necesidad.
       </p>


       <button
 onClick={scrollToSelector}
 className="group inline-flex items-center gap-3 px-5 md:px-7 py-2 text-[15px] md:text-[16px] lg:text-[18px] bg-white hover:bg-brand-gold transition-all duration-500 shadow-[0_14px_40px_rgba(0,0,0,0.34)] hover:shadow-[0_16px_44px_rgba(196,30,58,0.22)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
 style={{
   height: '56px',
   fontFamily: 'var(--font-sans)',
   fontWeight: 600,
   lineHeight: '100%',
   letterSpacing: '0.04em',
   color: '#111111',
   borderRadius: '0px',
   border: '1px solid rgba(255,255,255,0.28)'
 }}
>
 <span>EXPLORAR OPCIONES</span>


 <ChevronDown
   className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-500"
   style={{ strokeWidth: '1.75px' }}
 />
</button>
     </div>
   </section>
 );
}
