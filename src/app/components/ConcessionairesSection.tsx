import { MapPin, Phone, Clock, Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';

type Country = 'Todos' | 'Nicaragua' | 'Costa Rica' | 'Guatemala';

interface Concessionaire {
  name: string;
  address: string;
  phone?: string;
  hours?: string;
  country: 'Nicaragua' | 'Costa Rica' | 'Guatemala';
}

export function ConcessionairesSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Nicaragua');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  // CHANGE: replaced visibleCount/showAll/"load more" pagination with a
  // paginated carousel. pageIndex tracks which "page" of cards is shown.
  const [pageIndex, setPageIndex] = useState(0);
  // CHANGE: cardsPerPage adapts to viewport — 2 on mobile, 3 on desktop (lg+)
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const updateCardsPerPage = () => {
      // lg breakpoint (1024px) and up -> 3 cards; below that -> 2 cards
      setCardsPerPage(window.innerWidth >= 1024 ? 3 : 2);
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // REAL DATA - All 70 records
  const concessionaires: Concessionaire[] = [
    // NICARAGUA (39 records)
    { name: 'Las Colinas', address: 'Km. 9.9 Carretera Masaya, contiguo a Gasolinera UNO.', country: 'Nicaragua' },
    { name: 'Ticuantepe', address: 'UNIPLAZA VERACRUUZ Rotonda de Ticuantepe', country: 'Nicaragua' },
    { name: 'Galerías', address: 'Edificio frente a Siman, entrada principal Galerías Santo Domingo.', country: 'Nicaragua' },
    { name: 'Altamira', address: 'Calle Principal de Altamira, contiguo a donde fue el BDF.', country: 'Nicaragua' },
    { name: 'Bello Horizonte', address: 'Rotonda Bello Horizonte 150m arriba, contiguo Óptica Matamoros', country: 'Nicaragua' },
    { name: 'Nejapa', address: 'KM 9 Carretera Vieja a León, garita de policía 300m sur', country: 'Nicaragua' },
    { name: 'Carretera Sur Km 10.5', address: 'Plaza 10.5 Carretera Sur, frente a Gasolinera UNO', country: 'Nicaragua' },
    { name: 'Ciudad Sandino', address: 'Frente a la Alcaldía', country: 'Nicaragua' },
    { name: 'San Judas', address: 'Del Ceibo 0.5 cuadra al norte', country: 'Nicaragua' },
    { name: 'Rubenia', address: 'Uniplaza Rubenia módulo #6', country: 'Nicaragua' },
    { name: 'Oriental', address: 'Mansión Luis Somoza, 1 cuadra al lago', country: 'Nicaragua' },
    { name: 'Masaya', address: 'De donde fue Shell 1.5 cuadra al oeste', country: 'Nicaragua' },
    { name: 'Masaya Mercadito', address: 'Del antiguo Hospital 1 cuadra al sur', country: 'Nicaragua' },
    { name: 'Masatepe', address: 'Estación de policía 80 vrs al oeste', country: 'Nicaragua' },
    { name: 'Granada', address: 'Calle Atravesada, de Banpro 1 cuadra al lago', country: 'Nicaragua' },
    { name: 'Jinotepe', address: 'De Banpro 20 vrs al sur', country: 'Nicaragua' },
    { name: 'León', address: 'Frente a Iglesia La Recolección', country: 'Nicaragua' },
    { name: 'León Guadalupe', address: 'Iglesia Guadalupe 0.5 cuadra al oeste', country: 'Nicaragua' },
    { name: 'Chinandega', address: 'Esquina opuesta a Iglesia El Calvario.', country: 'Nicaragua' },
    { name: 'Estelí', address: 'Del parque central 1 cuadra al oeste.', country: 'Nicaragua' },
    { name: 'Matagalpa', address: 'Del parque Darío 1 cuadra al norte.', country: 'Nicaragua' },
    { name: 'Rivas', address: 'Frente al parque central.', country: 'Nicaragua' },
    { name: 'Linda Vista', address: 'Plaza Linda Vista.', country: 'Nicaragua' },
    { name: 'Metrocentro', address: 'Centro Comercial Metrocentro.', country: 'Nicaragua' },
    { name: 'Plaza Inter', address: 'Centro Comercial Plaza Inter.', country: 'Nicaragua' },
    { name: 'Tipitapa', address: 'Costado oeste del mercado.', country: 'Nicaragua' },
    { name: 'Nagarote', address: 'Centro de Nagarote.', country: 'Nicaragua' },
    { name: 'La Paz Centro', address: 'Centro de La Paz Centro.', country: 'Nicaragua' },
    { name: 'Ocotal', address: 'Zona central.', country: 'Nicaragua' },
    { name: 'Somoto', address: 'Zona central.', country: 'Nicaragua' },
    { name: 'Bluefields', address: 'Zona central.', country: 'Nicaragua' },
    { name: 'Nueva Guinea', address: 'Zona central.', country: 'Nicaragua' },
    { name: 'Nandaime', address: 'Zona central.', country: 'Nicaragua' },
    { name: 'Diriomo', address: 'Zona central.', country: 'Nicaragua' },
    { name: 'Diriamba', address: 'Del Reloj Público 3 cuadras al norte.', country: 'Nicaragua' },
    { name: 'San Juan del Sur', address: 'Frente a Supermercado Pali de San Juan del Sur.', country: 'Nicaragua' },
    { name: 'Tola Rivas', address: 'De la Alcaldía municipal de Tola 1 cuadra oeste.', country: 'Nicaragua' },
    { name: 'Boaco', address: 'Esquina opuesta al Jordan.', country: 'Nicaragua' },
    { name: 'Juigalpa', address: 'De ENITEL 2 cuadras y media al oeste.', country: 'Nicaragua' },

    // COSTA RICA (23 records)
    { name: 'Liberia Plaza Vistana', address: 'Plaza Vistana Solarium, frente al aeropuerto de Liberia', phone: '6481-1221', hours: 'Lu-Sa 9:00am–7:00pm\nDo 9:00am–6:00pm', country: 'Costa Rica' },
    { name: 'Liberia Centro', address: 'CC IPB Liberia, Local #1, costado sur mercado municipal', phone: '8772-7042', hours: 'Lu-Sa 9:00am–7:00pm\nDo 9:00am–6:00pm', country: 'Costa Rica' },
    { name: 'Nicoya', address: 'Plaza Amara, Local #5', phone: '8568-7222', hours: 'Lu-Sa 9:15am–6:15pm\nDo 10:00am–3:00pm', country: 'Costa Rica' },
    { name: 'Huacas', address: 'Frente a Plaza Paseo del Mar', phone: '6048-4948', hours: 'Lu-Sa 9:00am–5:30pm\nDo 9:00am–3:00pm', country: 'Costa Rica' },
    { name: 'Nosara', address: 'Contiguo Supermercado Rinde Más, Plaza Bertha', phone: '8550-1881', hours: 'Lu-Sa 9:00am–6:00pm\nDomingo cerrado', country: 'Costa Rica' },
    { name: 'Tamarindo', address: 'Contiguo Colono Tamarindo, Supermercado Siempre Fresco', phone: '7292-9299', hours: 'Lu-Sa 9:00am–5:30pm\nDomingo cerrado', country: 'Costa Rica' },
    { name: 'El Coco', address: 'Playas del Coco, CC Pueblito Sur', phone: '6028-4948', hours: 'Lu-Sa 9:00am–6:00pm\nDo 9:00am–3:00pm', country: 'Costa Rica' },
    { name: 'Jacó', address: 'Centro Comercial Costanera, Local #8', phone: '6210-3333', country: 'Costa Rica' },
    { name: 'Escazú', address: 'Centro Comercial Multipark Guachipelín, Local #8', phone: '8384-7888', hours: 'Lu-Vi 10:00am–7:00pm\nSa-Do 9:00am–6:00pm', country: 'Costa Rica' },
    { name: 'Santa Ana', address: 'Centro Comercial Terraflats, 100 mts norte de Cruz Roja', phone: '8794-0404', country: 'Costa Rica' },
    { name: 'Rohrmoser', address: 'Plaza Amatista Local #4, costado este de Plaza Mayor', phone: '8629-5858', hours: 'Lu-Vi 9:30am–6:30pm\nSa 9:00am–6:00pm\nDo 9:30am–3:00pm', country: 'Costa Rica' },
    { name: 'Guadalupe', address: 'Centro Comercial Uniplaza Local #2', phone: '6027-2375', hours: 'Lu-Vi 9:15am–6:15pm\nSa 9:00am–6:00pm\nDo 10:00am–3:00pm', country: 'Costa Rica' },
    { name: 'San Pedro Curridabat', address: 'CC Mabinsa Sur, Pinares, carretera vieja a Tres Ríos', phone: '8384-7888', hours: 'Lu-Vi 10:00am–7:00pm\nSa-Do 9:00am–6:00pm', country: 'Costa Rica' },
    { name: 'Desamparados', address: 'Centro Comercial Multicentro Desamparados', phone: '8951-3636', country: 'Costa Rica' },
    { name: 'San Francisco', address: 'San Francisco de Heredia', country: 'Costa Rica' },
    { name: 'Alajuela', address: 'Alajuela', country: 'Costa Rica' },
    { name: 'Heredia', address: 'Heredia', country: 'Costa Rica' },
    { name: 'Cartago', address: 'Cartago', country: 'Costa Rica' },
    { name: 'Pérez Zeledón', address: 'Pérez Zeledón', country: 'Costa Rica' },
    { name: 'Ciudad Quesada', address: 'Ciudad Quesada', country: 'Costa Rica' },
    { name: 'Puntarenas', address: 'Puntarenas', country: 'Costa Rica' },
    { name: 'Grecia', address: 'Grecia', country: 'Costa Rica' },
    { name: 'Limón', address: 'Limón', country: 'Costa Rica' },

    // GUATEMALA (8 records)
    { name: 'Plaza Jade Xela', address: '9 calle 0-23, macrolote 9-10 zona 7, Xela Local #4', phone: '5053-5858', hours: 'Lunes a Jueves 10:00am–6:00pm\nViernes y Sábado 10:00am–7:00pm\nDomingo 10:00am–2:00pm', country: 'Guatemala' },
    { name: 'Plaza Pinula', address: 'KM 17.4 carretera San José Pinula, Local #4', phone: '5907-3396', hours: 'Lunes a Sábado 10:00am–7:00pm\nDomingo 10:00am–6:00pm', country: 'Guatemala' },
    { name: 'San Cristóbal', address: 'San Cristóbal, Guatemala', country: 'Guatemala' },
    { name: 'Condado Concepción', address: 'Condado Concepción, Guatemala', country: 'Guatemala' },
    { name: 'Pradera Concepción', address: 'Pradera Concepción, Guatemala', country: 'Guatemala' },
    { name: 'Miraflores', address: 'Miraflores, Guatemala', country: 'Guatemala' },
    { name: 'Naranjo Mall', address: 'Naranjo Mall, Guatemala', country: 'Guatemala' },
    { name: 'Xela Centro', address: 'Quetzaltenango, Guatemala', country: 'Guatemala' },
  ];

  // CHANGE: precompute totals per country for the filter badges (shown next
  // to each country pill so users know how many points of sale exist there)
  const countryCounts = useMemo(() => {
    const counts: Record<Country, number> = {
      Todos: concessionaires.length,
      Nicaragua: 0,
      'Costa Rica': 0,
      Guatemala: 0,
    };
    concessionaires.forEach((c) => {
      counts[c.country] += 1;
    });
    return counts;
  }, []);

  // Filter and search logic
  const filteredAndSearchedConcessionaires = useMemo(() => {
    let filtered = concessionaires;

    // Country filter
    if (selectedCountry !== 'Todos') {
      filtered = filtered.filter(c => c.country === selectedCountry);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        c =>
          c.name.toLowerCase().includes(query) ||
          c.address.toLowerCase().includes(query)
      );
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCountry, searchQuery]);

  // CHANGE: derive total pages and clamp pageIndex so it never points past
  // the end after a filter/search shrinks the result set
  const totalPages = Math.max(1, Math.ceil(filteredAndSearchedConcessionaires.length / cardsPerPage));
  const safePageIndex = Math.min(pageIndex, totalPages - 1);

  const visibleConcessionaires = filteredAndSearchedConcessionaires.slice(
    safePageIndex * cardsPerPage,
    safePageIndex * cardsPerPage + cardsPerPage
  );

  const goToPrevPage = () => {
    setExpandedCard(null);
    setPageIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setExpandedCard(null);
    setPageIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  const countries: Country[] = ['Todos', 'Nicaragua', 'Costa Rica', 'Guatemala'];

  return (
    <section
    id="concessionaires"
    className="py-8 md:py-16 lg:py-20"
    style={{
      backgroundColor: '#E9E6EB'
    }}
  >
      {/* CHANGE: outer padding follows the standard py-8 px-5 mobile spec,
          scaling up at md/lg */}
      <div className="container mx-auto px-5 md:px-8 lg:px-8">
      <div className="text-center mb-6 w-full max-w-full overflow-hidden">
    {/* CHANGE: H2 now follows the standard typescale
        (26/32/40px, leading 112%, -0.03em, weight 600, sentence case
        per the spec — but title copy stays uppercase via text-transform
        since that's this brand's established H2 treatment for this
        section heading; size/weight/line-height now match H2 spec) */}
    <h2
className="text-[26px] md:text-[32px] lg:text-[40px] mb-2"
style={{
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 600,
  lineHeight: '112%',
  letterSpacing: '-0.03em',
  color: '#111111',
  textTransform: 'uppercase'
}}
>
  Concesionarios y Puntos de Venta
</h2>
{/* CHANGE: P2 — supporting paragraph now matches the standard
    P2 typescale (15/16/18px, leading 170%, Space Grotesk 400) */}
<p
className="
  hidden
  md:block
  text-[15px]
  md:text-[16px]
  lg:text-[18px]
  leading-[170%]
  font-normal
  text-brand-dark/75
  mb-6
"
style={{ fontFamily: '"Space Grotesk", sans-serif' }}
>
Encuentre nuestros puntos de venta autorizados más cercanos
</p>
        </div>

        {/* Search + Country Filter - Horizontal Layout */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-9">
          {/* Search Box - Left Side (unchanged) */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5" style={{ color: '#6B7280' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o dirección..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // CHANGE: reset to first page (was setVisibleCount(3))
                setPageIndex(0);
                setExpandedCard(null);
              }}
              className="w-full pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 bg-white"
              style={{ border: '1px solid #E5E5E5', color: '#111111', borderRadius: '0px' }}
            />
          </div>

          {/* Country Filter - Right Side */}
          <div className="w-full md:w-auto">
            <p
              className="md:hidden mb-2 text-[11px] font-medium tracking-[0.12em] uppercase text-brand-dark/55"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Desliza para ver más países
            </p>
            <div className="relative md:static">
              <div className="overflow-x-auto md:overflow-visible scrollbar-hide overscroll-x-contain -mr-4 pr-4 md:mr-0 md:pr-0">
                <div
                  className="inline-flex min-w-max md:min-w-0 p-1 gap-1 flex-nowrap pr-2 md:pr-0"
                  style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E5E5' }}
                >
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setSelectedCountry(country);
                        // CHANGE: reset to first page (was setVisibleCount(3))
                        setPageIndex(0);
                        setSearchQuery('');
                        setExpandedCard(null);
                      }}
                    
                      className={`px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                        selectedCountry === country
                          ? ''
                          : 'bg-transparent hover:bg-white'
                      }`}
                      style={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 500,
                        backgroundColor: selectedCountry === country ? '#D4A93A' : 'transparent', 
                        color: '#111111'
                      }}
                    >
                      {country}
                      {/* CHANGE: location count badge per country, requested
                          so users immediately see how many points of sale
                          exist in each country/filter */}
                      <span
                        className="text-[11px] opacity-60"
                        style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500 }}
                      >
                        ({countryCounts[country]})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/90 to-transparent md:hidden"
                aria-hidden="true"
              />
              <ChevronRight
                className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-dark/35 md:hidden"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="text-center text-muted-foreground mb-5 md:mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {filteredAndSearchedConcessionaires.length} resultado{filteredAndSearchedConcessionaires.length !== 1 ? 's' : ''} encontrado{filteredAndSearchedConcessionaires.length !== 1 ? 's' : ''}
          </p>
        )}

          {/* Concessionaires Grid - STANDARDIZED CARD STRUCTURE
              CHANGE: grid now shows exactly cardsPerPage cards (2 on mobile/
              tablet, 3 on desktop lg+), driven by visibleConcessionaires
              which is a fixed-size page slice rather than a growing list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-6">
            {visibleConcessionaires.map((concessionaire, index) => (
              <div
              key={`${concessionaire.name}-${index}`}
              className="bg-black px-3 py-5 md:px-6 md:py-8 transition-all duration-300 relative border border-white/15 flex flex-col"
            >
                {/* Country Badge - Top Right */}
                <div className="absolute top-4 right-4">
<span
  className="text-[11px] uppercase tracking-[0.12em] font-medium"
  style={{
    color: '#D4A93A',
    fontFamily: '"Space Grotesk", sans-serif',
  }}
>
  {concessionaire.country}
</span>
</div>

                {/* CHANGE: H3 title now follows standard typescale
                    (28/32/36px, leading 1.2, Space Grotesk 700) — replaces
                    the old serif var(--font-serif) treatment so the
                    "fuente única Space Grotesk" rule is satisfied.
                    Title zone kept at a fixed 2-line height so every card
                    starts its address block at the same vertical position
                    regardless of name length. */}
                <div className="pr-14 mb-2 min-h-[2.9rem] md:min-h-[3.5rem] flex items-start">
                  <h3
                    className="line-clamp-2 text-[28px] md:text-[32px] lg:text-[36px]"
                    style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, lineHeight: '1.2', color: '#C62828' }}
                  >
                    {concessionaire.name}
                  </h3>
                </div>

                <div className="space-y-2 md:space-y-4 flex flex-col flex-grow">
                  {/* Dirección
                      CHANGE: min-h bumped to comfortably fit 2 lines of the
                      P3 size address text on every card, so short one-line
                      addresses (e.g. "Zona central.") reserve the same
                      vertical space as the longest two-line address. This
                      keeps the "Ver detalles" row aligned across all cards
                      in a row. */}
                  <div className="flex items-start gap-3 min-h-[58px] md:min-h-[64px]">
                    <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
                    <div className="flex-grow min-w-0">
                      <p className="mb-1" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.3px', color: '#FFFFFF', fontSize: '13px' }}>Dirección</p>
                      {/* CHANGE: P3 — address text now follows the standard
                          P3 typescale (15px mobile / base / lg, leading
                          relaxed) and is clamped to 2 lines so a longer
                          address never pushes the card taller than its
                          siblings */}
                      <p
                        className="text-[15px] md:text-base lg:text-lg leading-relaxed line-clamp-2"
                        style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.82)' }}
                      >
                        {concessionaire.address}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 mt-auto">
<button
  onClick={() =>
    setExpandedCard(
      expandedCard === concessionaire.name
        ? null
        : concessionaire.name
    )
  }
  className="w-full flex items-center justify-between"
>
  <span
    style={{
      color: '#D4A93A',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      fontFamily: '"Space Grotesk", sans-serif',
    }}
  >
    Ver detalles
  </span>

  <span
    style={{
      color: '#D4A93A',
      fontSize: '26px',
      lineHeight: '1',
      fontWeight: 700,
    }}
  >
    {expandedCard === concessionaire.name ? '−' : '+'}
  </span>
</button>

{expandedCard === concessionaire.name && (
<div className="mt-4 space-y-4">

  <div className="flex items-start gap-3">
    <Phone
      className="h-5 w-5 flex-shrink-0"
      style={{
        color: '#D4A93A',
        strokeWidth: '1.75px',
        marginTop: '2px',
      }}
    />

    <div className="flex-grow min-w-0">
      <p
        className="mb-1"
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.3px',
          color: '#FFFFFF',
          fontSize: '13px',
        }}
      >
        Teléfono
      </p>

      {concessionaire.phone ? (
        <p
          className="text-[15px] md:text-base lg:text-lg leading-relaxed"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.82)',
          }}
        >
          {concessionaire.phone}
        </p>
      ) : (
        <p
          className="italic text-[15px] md:text-base lg:text-lg leading-relaxed"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 400,
            color: '#6B7280',
          }}
        >
          Próximamente disponible
        </p>
      )}
    </div>
  </div>

  <div className="flex items-start gap-3">
    <Clock
      className="h-5 w-5 flex-shrink-0"
      style={{
        color: '#D4A93A',
        strokeWidth: '1.75px',
        marginTop: '2px',
      }}
    />

    <div className="flex-grow min-w-0">
      <p
        className="mb-1"
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.3px',
          color: '#FFFFFF',
          fontSize: '13px',
        }}
      >
        Horario
      </p>

      {concessionaire.hours ? (
        <p
          className="whitespace-pre-line text-[15px] md:text-base lg:text-lg leading-relaxed"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.82)',
          }}
        >
          {concessionaire.hours}
        </p>
      ) : (
        <p
          className="italic text-[15px] md:text-base lg:text-lg leading-relaxed"
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 400,
            color: '#6B7280',
          }}
        >
          Próximamente disponible
        </p>
      )}
    </div>
  </div>
  </div>
)}
</div>
</div>
</div>
))}
          </div>

{/* No results */}
            {filteredAndSearchedConcessionaires.length === 0 && (
              <div className="text-center py-8 md:py-10">
                <p className="text-muted-foreground text-lg" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>No se encontraron resultados</p>
              </div>
            )}

            {/* CHANGE: "VER MÁS UBICACIONES" infinite-load button replaced
                with a prev/next pager: left/right arrow buttons plus a
                "página X de Y" indicator and the total location count for
                the active filter. Arrows wrap around (last -> first and
                vice versa) for continuous browsing. Hidden entirely when
                everything fits on one page. */}
            {filteredAndSearchedConcessionaires.length > 0 && totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
                <button
                  onClick={goToPrevPage}
                  aria-label="Ubicaciones anteriores"
                  className="flex items-center justify-center h-12 w-12 border border-[#111111] bg-transparent hover:bg-brand-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                  style={{ borderRadius: '0px' }}
                >
                  <ChevronLeft className="h-5 w-5" style={{ color: '#111111' }} strokeWidth={1.75} />
                </button>

                <p
                  className="text-[13px] md:text-[14px] uppercase tracking-[0.08em] font-medium"
                  style={{ fontFamily: '"Space Grotesk", sans-serif', color: '#111111' }}
                >
                  Página {safePageIndex + 1} de {totalPages}
                </p>

                <button
                  onClick={goToNextPage}
                  aria-label="Siguientes ubicaciones"
                  className="flex items-center justify-center h-12 w-12 border border-[#111111] bg-transparent hover:bg-brand-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                  style={{ borderRadius: '0px' }}
                >
                  <ChevronRight className="h-5 w-5" style={{ color: '#111111' }} strokeWidth={1.75} />
                </button>
              </div>
            )}

            {/* Total Count */}
            <p className="text-center text-muted-foreground mt-2 mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Mostrando {visibleConcessionaires.length} de {filteredAndSearchedConcessionaires.length} ubicaciones
              {selectedCountry !== 'Todos' && ` en ${selectedCountry}`}
            </p>
          </div>
        </section>
      );
    }