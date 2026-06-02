import { ChevronDown } from 'lucide-react';


export function Hero() {
 const scrollToSelector = () => {
   document
     .getElementById('channel-selector')
     ?.scrollIntoView({ behavior: 'smooth' });
 };


 return (
   <section className="relative flex w-full items-center justify-center overflow-hidden min-h-[calc(100svh-80px)] md:min-h-[620px] lg:min-h-[760px]">
     {/* Background */}
     <div className="absolute inset-0 z-0">
       <img
         src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
         alt="Premium beef cuts"
         className="h-full w-full object-cover md:scale-105"
       />


       {/* Overlay */}
       <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/68 to-black/52" />
       <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/45" />
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(0,0,0,0.4)_100%)]" />
       <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,169,58,0.12)_0%,transparent_42%,rgba(212,169,58,0.08)_100%)]" />
     </div>


     {/* Content */}
     <div className="relative z-10 container mx-auto px-6 pt-8 pb-10 text-center md:px-8 md:py-12 lg:px-12 lg:py-0">
       {/* Premium Badge */}
       <div className="mb-5 inline-flex items-center justify-center border border-[#D4A93A]/35 bg-[#D4A93A]/14 px-3 py-1.5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.22)] md:mb-6 md:px-5 md:py-2">
         <span
           className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] md:text-xs"
           style={{ color: '#D4A93A' }}
         >
           CALIDAD PREMIUM DESDE 1975
         </span>
       </div>


       {/* H1 */}
       <h1
         className="mx-auto mb-5 max-w-[360px] text-[32px] font-bold text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] md:mb-7 md:max-w-5xl md:text-[52px] lg:text-[72px]"
         style={{
           fontFamily: 'var(--font-serif)',
           lineHeight: '106%',
           letterSpacing: '-0.03em',
         }}
       >
         ¿Dónde comprar Carnes San Martín?
       </h1>


       {/* Paragraph */}
       <p
         className="mx-auto mb-8 max-w-[340px] text-[16px] text-white md:mb-8 md:max-w-2xl md:text-[18px] lg:text-[24px]"
         style={{
           fontFamily: 'var(--font-sans)',
           fontWeight: 400,
           lineHeight: '170%',
         }}
       >
         Desde supermercados{' '}
         <span style={{ color: '#D4A93A' }}>locales</span> hasta
         abastecimiento comercial{' '}
         <span style={{ color: '#D4A93A' }}>internacional</span>,
         encuentre el canal adecuado según su necesidad.
       </p>


       {/* CTA */}
       <button
         onClick={scrollToSelector}
         className="group inline-flex h-8 items-center justify-center gap-1.5 border border-white/30 bg-white px-3 text-[13px] font-medium tracking-[0.04em] text-[#111111] transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-[0_16px_44px_rgba(196,30,58,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 md:h-14 md:px-7 md:text-[16px] md:font-semibold lg:text-[18px]"
         style={{
           fontFamily: 'var(--font-sans)',
           lineHeight: '100%',
           borderRadius: '0px',
           boxShadow: '0 14px 40px rgba(0,0,0,0.34)',
         }}
       >
         <span>EXPLORAR OPCIONES</span>


         <ChevronDown
           className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5 md:h-5 md:w-5"
           style={{ strokeWidth: '1.75px' }}
         />
       </button>
     </div>
   </section>
 );
}
