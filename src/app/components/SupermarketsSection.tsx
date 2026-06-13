import { useState } from 'react';

// ─────────────────────────────────────────────────────────────
// IMPORTS DE LOGOS
// ROOT CAUSE del problema anterior: se usaban strings de ruta
// ("/assets/Walmart.png") en lugar de imports de módulo. Con
// bundlers (Vite/Webpack/Next), las imágenes en src/imports deben
// importarse como módulos para que el bundler las resuelva y
// genere la URL final correcta. Ajusta las rutas relativas según
// la ubicación real de tu carpeta src/imports.
// ─────────────────────────────────────────────────────────────
// Ruta corregida: src/app/components/ -> src/imports/ es ../../imports/
import walmartLogo from '../../imports/Walmart.png';
import laUnionLogo from '../../imports/LaUnion.png';
import masxMenosLogo from '../../imports/MasxMenos.png';
import maxiPaliLogo from '../../imports/MaxiPali.png';
import paizLogo from '../../imports/Paiz.png';
import maxiDespensaLogo from '../../imports/Maxi Despensa.png';
import selectosLogo from '../../imports/Selectos.png';

type Country = 'Nicaragua' | 'Costa Rica' | 'Guatemala' | 'El Salvador';

interface Supermarket {
  name: string;
  logo: string;
  website: string;
  country: Country;
}

const COUNTRIES: { name: Country; flag: string }[] = [
  { name: 'Costa Rica',  flag: '🇨🇷' },
  { name: 'El Salvador', flag: '🇸🇻' },
  { name: 'Guatemala',   flag: '🇬🇹' },
  { name: 'Nicaragua',   flag: '🇳🇮' },
];

const SUPERMARKETS: Supermarket[] = [
  // NICARAGUA
  { name: 'Walmart',       logo: walmartLogo,       website: 'https://www.walmart.com.ni',                 country: 'Nicaragua' },
  { name: 'La Unión',      logo: laUnionLogo,       website: 'https://launion.com.ni',                     country: 'Nicaragua' },

  // COSTA RICA
  { name: 'Walmart',       logo: walmartLogo,       website: 'https://www.walmart.co.cr',                  country: 'Costa Rica' },
  { name: 'Más x Menos',   logo: masxMenosLogo,     website: 'https://www.masxmenos.cr',                   country: 'Costa Rica' },
  { name: 'Maxi Palí',     logo: maxiPaliLogo,      website: 'https://www.maxipali.co.cr',                 country: 'Costa Rica' },

  // GUATEMALA
  { name: 'Walmart',        logo: walmartLogo,       website: 'https://www.walmart.com.gt',                country: 'Guatemala' },
  { name: 'Paiz',           logo: paizLogo,          website: 'https://www.paiz.com.gt',                   country: 'Guatemala' },
  { name: 'Maxi Despensa',  logo: maxiDespensaLogo,  website: 'https://www.maxidespensa.com.gt',           country: 'Guatemala' },

  // EL SALVADOR
  { name: 'Super Selectos', logo: selectosLogo,      website: 'https://www.superselectos.com/Contactenos', country: 'El Salvador' },
];

export function SupermarketsSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Nicaragua');
  const filteredSupermarkets = SUPERMARKETS.filter(s => s.country === selectedCountry);

  return (
    <section
      id="supermarkets"
      className="
        flex flex-col justify-center
        min-h-screen lg:h-screen
        py-8 px-5 md:py-12 md:px-8 lg:py-0 lg:px-0
      "
      style={{ backgroundColor: '#0A0A0A', fontFamily: '"Space Grotesk", sans-serif' }}
    >
      <div className="container mx-auto px-0 md:px-0 lg:px-12 xl:px-20 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16 lg:items-center max-w-7xl w-full">

        {/* ===================== COLUMNA IZQUIERDA ===================== */}
        <div className="lg:col-span-1">
          <div className="mb-5 lg:mb-12 lg:max-w-xl">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] mb-5"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
                lineHeight: '112%',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
              }}
            >
              Disponible en supermercados
            </h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[20px] font-normal"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                lineHeight: '170%',
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              Encuentre nuestros productos en las principales cadenas de supermercados de la región
            </p>
          </div>

          {/* FILTROS */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.18em] mb-4"
              style={{ color: '#D4A849', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}
            >
              País
            </h3>

            {/* Siempre 2 columnas (2 por fila), pero botones más compactos en mobile
                (menos padding vertical) para liberar espacio para los logos. */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              {COUNTRIES.map(({ name, flag }) => {
                const isActive = selectedCountry === name;
                return (
                  <button
                    key={name}
                    onClick={() => setSelectedCountry(name)}
                    className="
                      flex items-center justify-center gap-2 lg:gap-3
                      px-3 py-2.5 lg:px-5 lg:py-5
                      rounded-xl lg:rounded-2xl
                      whitespace-nowrap
                      transition-all duration-300
                    "
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      backgroundColor: isActive ? '#D4A849' : 'rgba(255,255,255,0.05)',
                      color: isActive ? '#111111' : 'rgba(255,255,255,0.85)',
                      border: `1.5px solid ${isActive ? '#D4A849' : 'rgba(255,255,255,0.10)'}`,
                      boxShadow: isActive ? '0 4px 16px rgba(212,168,73,0.25)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = 'rgba(212,168,73,0.40)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                    }}
                  >
                    <span className="text-lg lg:text-2xl xl:text-3xl leading-none" aria-hidden="true">{flag}</span>
                    <span className="lg:text-[17px]">{name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================== COLUMNA DERECHA: Logos ===================== */}
        {/* Layout adaptativo según cantidad de logos:
            - 1 logo  -> centrado en el espacio
            - 2 logos -> fila centrada, con buen "aire" entre ellos
            - 3 logos -> 2 arriba + 1 centrado abajo (pirámide)
            Todo el bloque se alinea hacia la derecha del viewport (justify-end/items-end en lg)
            y mantiene una altura fija para que no "salte" al cambiar de país. */}
        <div className="lg:col-span-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div
            className="
              flex flex-wrap items-center justify-center lg:justify-end
              gap-x-6 sm:gap-x-10 lg:gap-x-16
              gap-y-6 sm:gap-y-8 lg:gap-y-14
              min-h-[200px] sm:min-h-[260px] lg:min-h-[360px]
              w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]
            "
          >
            {filteredSupermarkets.map((supermarket, idx) => {
              const total = filteredSupermarkets.length;
              // Cuando hay 3 logos, el tercero ocupa toda la fila para quedar centrado debajo de los dos primeros
              const isLastOfThree = total === 3 && idx === 2;

              return (
                <a
                  key={`${supermarket.country}-${supermarket.name}`}
                  href={supermarket.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${supermarket.name}`}
                  className={`
                    group relative flex items-center justify-center
                    h-[70px] sm:h-[90px] lg:h-[120px]
                    w-[120px] sm:w-[150px] lg:w-[190px]
                    transition-all duration-300
                    ${isLastOfThree ? 'basis-full justify-center' : ''}
                  `}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <img
                    src={supermarket.logo}
                    alt={supermarket.name}
                    loading="lazy"
                    className="object-contain"
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      filter: 'drop-shadow(0 2px 14px rgba(0,0,0,0.45))',
                    }}
                  />

                  {/* Indicador de clickeable: SIEMPRE visible (sutil) para invitar al hover/click,
                      y se resalta más al hacer hover */}
                  <span
                    className="
                      absolute -top-2 -right-2
                      flex items-center justify-center
                      w-7 h-7 rounded-full
                      transition-all duration-300
                      animate-pulse-soft
                      group-hover:scale-125 group-hover:animate-none
                    "
                    style={{
                      backgroundColor: '#D4A849',
                      border: '1px solid rgba(0,0,0,0.10)',
                      boxShadow: '0 2px 8px rgba(212,168,73,0.35)',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animación sutil de "respiración" para invitar al click sin ser intrusiva */}
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        .animate-pulse-soft {
          animation: pulse-soft 2.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}