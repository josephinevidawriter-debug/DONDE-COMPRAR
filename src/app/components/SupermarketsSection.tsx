import { useState } from 'react';

type Country = 'Nicaragua' | 'Costa Rica' | 'Guatemala' | 'El Salvador';

interface Supermarket {
  name: string;
  logo: string;      // URL online (sin assets locales)
  website: string;   // enlace externo al supermercado
  country: Country;
}

const COUNTRIES: { name: Country; flag: string }[] = [
  { name: 'Nicaragua',   flag: '🇳🇮' },
  { name: 'Costa Rica',  flag: '🇨🇷' },
  { name: 'Guatemala',   flag: '🇬🇹' },
  { name: 'El Salvador', flag: '🇸🇻' },
];

// Logos servidos desde URLs online (Wikipedia / Clearbit).
// Si algún logo no carga en producción, sustituir por la URL oficial del supermercado.
const SUPERMARKETS: Supermarket[] = [
  // NICARAGUA
  {
    name: 'Walmart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
    website: 'https://www.walmart.com.ni',
    country: 'Nicaragua',
  },
  {
    name: 'La Unión',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_Uni%C3%B3n_logo.png/200px-La_Uni%C3%B3n_logo.png',
    website: 'https://launion.com.ni',
    country: 'Nicaragua',
  },
  
  // COSTA RICA
  {
    name: 'Walmart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
    website: 'https://www.walmart.co.cr',
    country: 'Costa Rica',
  },
  {
    name: 'Más x Menos',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/M%C3%A1s_x_Menos_logo.png/200px-M%C3%A1s_x_Menos_logo.png',
    website: 'https://www.masxmenos.cr',
    country: 'Costa Rica',
  },
  {
    name: 'Maxi Palí',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Maxi_Pal%C3%AD_logo.png/200px-Maxi_Pal%C3%AD_logo.png',
    website: 'https://www.maxipali.co.cr',
    country: 'Costa Rica',
  },
  
  // GUATEMALA
  {
    name: 'Walmart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
    website: 'https://www.walmart.com.gt',
    country: 'Guatemala',
  },
  {
    name: 'Paiz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Paiz_logo.png/200px-Paiz_logo.png',
    website: 'https://www.paiz.com.gt',
    country: 'Guatemala',
  },
  {
    name: 'Maxi Despensa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Maxi_Despensa_logo.png/200px-Maxi_Despensa_logo.png',
    website: 'https://www.maxidespensa.com.gt',
    country: 'Guatemala',
  },
  
  // EL SALVADOR
  {
    name: 'Super Selectos',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Super_Selectos_logo.png/200px-Super_Selectos_logo.png',
    website: 'https://www.superselectos.com/Contactenos',
    country: 'El Salvador',
  }
];

export function SupermarketsSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Nicaragua');
  const filteredSupermarkets = SUPERMARKETS.filter(s => s.country === selectedCountry);

  return (
    <section
      id="supermarkets"
      className="py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2
            className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[44px] mb-4"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            Disponible en Supermercados
          </h2>
          <p
            className="text-[15px] md:text-[17px] lg:text-[18px] leading-[170%] font-normal"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            Encuentre nuestros productos en las principales cadenas de supermercados de la región
          </p>
        </div>

        {/* Layout: mobile-first, en lg+ → 40% filtros / 60% logos */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 xl:gap-24 max-w-7xl mx-auto items-center">
          {/* FILTROS VERTICALES — 40% (2/5 cols) */}
          <aside className="lg:col-span-2">
            <h3
              className="hidden lg:block text-sm uppercase tracking-[0.18em] mb-5"
              style={{ color: '#D4A849', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              País
            </h3>

            {/* En mobile se ven en fila scrollable; en lg en columna */}
            <div
              className="
                flex lg:flex-col gap-3
                overflow-x-auto lg:overflow-visible
                -mx-4 px-4 lg:mx-0 lg:px-0
                snap-x snap-mandatory lg:snap-none
              "
            >
              {COUNTRIES.map(({ name, flag }) => {
                const isActive = selectedCountry === name;
                return (
                  <button
                    key={name}
                    onClick={() => setSelectedCountry(name)}
                    className="
                      group flex items-center gap-3
                      px-5 py-4 rounded-xl
                      whitespace-nowrap snap-start
                      transition-all duration-300
                      lg:w-full lg:justify-start
                    "
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: '15px',
                      backgroundColor: isActive ? '#D4A849' : 'rgba(255,255,255,0.05)',
                      color: isActive ? '#111111' : 'rgba(255,255,255,0.85)',
                      border: `1px solid ${isActive ? '#D4A849' : 'rgba(255,255,255,0.10)'}`,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'rgba(212,168,73,0.40)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                      }
                    }}
                  >
                    <span className="text-xl leading-none" aria-hidden="true">{flag}</span>
                    <span>{name}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* LOGOS — 60% (3/5 cols) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
              {filteredSupermarkets.map((supermarket) => (
                <a
                  key={`${supermarket.country}-${supermarket.name}`}
                  href={supermarket.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${supermarket.name}`}
                  className="
                    group flex items-center justify-center
                    rounded-2xl
                    h-[140px] sm:h-[160px] lg:h-[180px]
                    p-6 sm:p-8
                    transition-all duration-300
                  "
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.10)',
                    opacity: 0.85,
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(212,168,73,0.40)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                  }}
                >
                    <img
                    src={supermarket.logo}
                    alt={supermarket.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain mx-auto my-auto"
                    style={{ maxHeight: '90px' }}
                  />
                </a>
              ))}
              <p
  className="text-center mt-8 mb-8"
  style={{
    fontFamily: 'var(--font-sans)',
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0.02em',
    color: 'rgba(255,255,255,0.55)'
  }}
>
  Haga click sobre un logo para explorar una visita virtual al supermercado.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
