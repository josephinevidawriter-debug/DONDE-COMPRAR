import { ChevronDown } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// TIPOGRAFÍA — ESTÁNDAR GLOBAL DEL PROYECTO
//
// Fuente única: Space Grotesk (400 / 500 / 600 / 700)
//
// H1  text-[32px] md:text-[52px] lg:text-[72px]  leading-[106%]  tracking-[-0.03em]  SG 700
// H2  text-[26px] md:text-[32px] lg:text-[40px]  leading-[112%]  tracking-[-0.03em]  SG 600  (oración, sin uppercase)
// H3  text-[28px] md:text-[32px] lg:text-[36px]  leading-[1.2]   SG 700
// P2  text-[15px] md:text-[16px] lg:text-[18px]  leading-[170%]  SG 400
// P3  text-[15px] md:text-base   lg:text-lg       leading-relaxed SG 400
//
// ESPACIADO VERTICAL ESTÁNDAR EN MOBILE (comentado en los puntos de uso):
//   • Entre label/badge y H1/H2     → mb-4  (16 px)
//   • Entre H2 y párrafo de apoyo   → mb-4  (16 px)
//   • Entre párrafo y siguiente bloque dentro de la misma sección
//                                   → mb-6  (24 px)
//   • Entre secciones distintas (padding interno de cada bloque)
//                                   → py-8  (32 px) mobile  →  py-12 desktop
//   • Entre el último elemento de un bloque y el borde inferior
//     del contenedor (ej: bg negro) → pb-8  (32 px) mobile  →  pb-12 desktop
// ─────────────────────────────────────────────────────────────────────────────

interface HeroProps {
  onSelectJourney: (journey: 'sell' | 'buy') => void;
}

export function Hero({ onSelectJourney }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Offset para compensar la navbar fija
    const offset = 140;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  const handleSell = () => {
    onSelectJourney('sell');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSection('export'));
    });
  };

  const handleBuy = () => {
    onSelectJourney('buy');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSection('concessionaires'));
    });
  };

  return (
    <section className="relative flex w-full flex-col min-h-[calc(100svh-80px)]">

      {/* ============================================================
          TOP — Background image + H1
          ============================================================ */}
      <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Premium beef cuts"
            className="h-full w-full object-cover"
          />

          {/* Capas de overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/68 to-black/52" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(0,0,0,0.4)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,169,58,0.12)_0%,transparent_42%,rgba(212,169,58,0.08)_100%)]" />
        </div>

        <div className="relative z-10 px-6 text-center md:px-8 lg:px-12">
          {/* Badge premium */}
          {/* mb-4 → espacio estándar badge → H1 en mobile (16 px) */}
          <div className="mb-4 inline-flex items-center justify-center border border-[#D4A93A]/35 bg-[#D4A93A]/14 px-3 py-1.5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.22)] md:mb-6 md:px-5 md:py-2">
            <span
              className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] md:text-xs"
              style={{ color: '#D4A93A', fontFamily: '"Space Grotesk", sans-serif' }}
            >
              CALIDAD PREMIUM DESDE 1975
            </span>
          </div>

          {/* H1 — Space Grotesk 700 */}
          <h1
            className="mx-auto max-w-[360px] text-[32px] font-bold text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] md:max-w-5xl md:text-[52px] lg:text-[72px]"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              lineHeight: '106%',
              letterSpacing: '-0.03em',
            }}
          >
            ¿Dónde comprar Carnes San Martín?
          </h1>
        </div>
      </div>

      {/* ============================================================
          BOTTOM — Blanco, split izquierda / derecha
          ============================================================ */}
      <div className="flex w-full flex-col bg-white md:flex-row">

        {/* LEFT — H2 + párrafo
            pt-8 pb-0 mobile: quitamos pb para evitar doble gap al apilar con bloque derecho
            py-12 desktop: ambos bloques van side-by-side, se restaura padding completo
            Estándar mobile apilado: bloque superior → pt-8 pb-0 / bloque inferior → pt-6 pb-8 */}
        <div className="flex w-full flex-col items-start justify-center px-6 pt-8 pb-0 md:w-1/2 md:px-10 md:py-12 lg:px-16">
          {/* H2 — Space Grotesk 600, tracking -0.03em */}
          <h2
            className="mb-4 max-w-xl text-[26px] md:text-[32px] lg:text-[40px]"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 600,
              lineHeight: '112%',
              letterSpacing: '-0.03em',
              color: '#111111',
            }}
          >
            La calidad que abastece empresas y lleva el sabor a cada ocasión
          </h2>
          {/* P2 — Space Grotesk 400 */}
          <p
            className="max-w-xl text-[15px] md:text-[16px] lg:text-[18px]"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 400,
              lineHeight: '170%',
              color: '#3A3A3A',
            }}
          >
            Con más de 50 años de experiencia, Carnes San Martín conecta la
            producción bovina de clase mundial con distribuidores,
            importadores, cadenas comerciales y consumidores en toda la
            región. Hoy exportamos a 16 países en 5 regiones del mundo y
            contamos con una sólida red de 70 concesionarios y 9 cadenas de
            supermercados en Centroamérica.
          </p>
        </div>

        {/* RIGHT — Intro + dos cards CTA
            pt-6 pb-8 mobile: pt-6 (24px) es el gap estándar entre secciones apiladas
            py-12 desktop: bloques side-by-side, padding completo                      */}
        <div className="flex w-full flex-col justify-center px-6 pt-6 pb-8 md:w-1/2 md:px-10 md:py-12 lg:px-16">

          {/* "¿Cómo podemos ayudarle hoy?"
              mb-4 → espacio estándar label → cards (16 px mobile)
              ANTES tenía mb-8 que generaba el whitespace excesivo reportado   */}
          <p
            className="mb-4 text-[15px] md:text-[16px] lg:text-[18px]"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 400,
              lineHeight: '170%',
              color: '#3A3A3A',
            }}
          >
            ¿Cómo podemos ayudarle hoy?
          </p>

          {/* Grid de cards CTA */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">

            {/* Card — Exportadores / distribuidores */}
            <div className="flex flex-col">
              <div className="mb-2.5 aspect-[4/3] w-full overflow-hidden md:mb-3">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Exportación y distribución de carne"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <button
                onClick={handleSell}
                className="group flex min-h-[44px] w-full items-center justify-center gap-1 border border-[#111111]/20 bg-white px-2 text-center text-[11px] font-semibold leading-tight tracking-[0.04em] text-[#111111] transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:border-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 md:min-h-[56px] md:px-3 md:text-[15px] lg:text-[16px]"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  borderRadius: '0px',
                }}
              >
                <span>DISTRIBUIR CSM</span>
                <ChevronDown
                  className="h-3 w-3 shrink-0 transition-transform duration-500 group-hover:translate-y-0.5 md:h-5 md:w-5"
                  style={{ strokeWidth: '1.75px' }}
                />
              </button>
            </div>

            {/* Card — Asados en casa */}
            <div className="flex flex-col">
              <div className="mb-2.5 aspect-[4/3] w-full overflow-hidden md:mb-3">
                <img
                  src="https://images.unsplash.com/photo-1558030006-450675393462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Asado en casa con carne premium"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <button
                onClick={handleBuy}
                className="group flex min-h-[44px] w-full items-center justify-center gap-1 border border-[#111111]/20 bg-white px-2 text-center text-[11px] font-semibold leading-tight tracking-[0.04em] text-[#111111] transition-all duration-500 hover:-translate-y-0.5 hover:bg-brand-gold hover:border-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 md:min-h-[56px] md:px-3 md:text-[15px] lg:text-[16px]"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  borderRadius: '0px',
                }}
              >
                <span>CARNE PARA ASADO</span>
                <ChevronDown
                  className="h-3 w-3 shrink-0 transition-transform duration-500 group-hover:translate-y-0.5 md:h-5 md:w-5"
                  style={{ strokeWidth: '1.75px' }}
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}