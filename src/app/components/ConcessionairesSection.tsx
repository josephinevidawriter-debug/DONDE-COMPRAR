  import { MapPin, Phone, Clock, Search, ChevronRight } from 'lucide-react';
  import { useState, useMemo } from 'react';

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
const [visibleCount, setVisibleCount] = useState(3);
const [searchQuery, setSearchQuery] = useState('');
const [expandedCard, setExpandedCard] = useState<string | null>(null);
const [showAll, setShowAll] = useState(false);

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

    const visibleConcessionaires = filteredAndSearchedConcessionaires.slice(0, visibleCount);
    const hasMore = visibleCount < filteredAndSearchedConcessionaires.length;

    const countries: Country[] = ['Todos', 'Nicaragua', 'Costa Rica', 'Guatemala'];

    return (
      <section id="concessionaires" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-6 w-full max-w-full overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12">
      <h2
  className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[42px] mb-2 px-3 sm:px-6 md:px-8 lg:px-12"
  style={{
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: 600,
    lineHeight: '1.12',
    letterSpacing: '-0.03em',
    color: '#111111',
    textTransform: 'uppercase'
  }}
  >
    Concesionarios y Puntos de Venta
  </h2>
  <p
  className="
    hidden
    md:block
    text-[16px]
    md:text-[18px]
    lg:text-[20px]
    leading-[170%]
    font-normal
    text-brand-dark/75
    mb-6
  "
>
  Encuentre nuestros puntos de venta autorizados más cercanos
</p>
          </div>

          {/* Search + Country Filter - Horizontal Layout */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-9">
            {/* Search Box - Left Side */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5" style={{ color: '#6B7280' }} />
              <input
                type="text"
                placeholder="Buscar por nombre o dirección..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(3);
                }}
                className="w-full pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 bg-white"
                style={{ border: '1px solid #E5E5E5', color: '#111111', borderRadius: '0px' }}
              />
            </div>

            {/* Country Filter - Right Side */}
            <div className="w-full md:w-auto">
              <p
                className="md:hidden mb-2 text-[11px] font-medium tracking-[0.12em] uppercase text-brand-dark/55"
                style={{ fontFamily: 'var(--font-sans)' }}
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
                          setVisibleCount(3);
                          setSearchQuery('');
                        }}
                      
                        className={`px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 whitespace-nowrap ${
                          selectedCountry === country
                            ? ''
                            : 'bg-transparent hover:bg-white'
                        }`}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 500,
                          backgroundColor: selectedCountry === country ? '#D4A93A' : 'transparent', 
                          color: '#111111'
                        }}
                      >
                        {country}
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
            <p className="text-center text-muted-foreground mb-5 md:mb-6">
              {filteredAndSearchedConcessionaires.length} resultado{filteredAndSearchedConcessionaires.length !== 1 ? 's' : ''} encontrado{filteredAndSearchedConcessionaires.length !== 1 ? 's' : ''}
            </p>
          )}

            {/* Concessionaires Grid - STANDARDIZED CARD STRUCTURE */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
              {visibleConcessionaires.map((concessionaire, index) => (
                <div
                key={index}
                className="bg-black p-2.5 md:p-5 transition-all duration-300 relative border border-white/15"
              >
                  {/* Country Badge - Top Right */}
                  <div className="absolute top-4 right-4">
  <span
    className="text-[11px] uppercase tracking-[0.12em] font-medium"
    style={{
      color: '#D4A93A',
    }}
  >
    {concessionaire.country}
  </span>
</div>

                  {/* Title zone: fixed 2-line height, top-aligned */}
                  <div className="pr-14 mb-2 min-h-[2.8rem] md:min-h-[3.9rem]">
                    <h3
                      className="line-clamp-2 text-[26px] md:text-[28px]"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, lineHeight: '114%', color: '#C62828' }}
                    >
                      {concessionaire.name}
                    </h3>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    {/* Dirección */}
                   
                    <div className="flex items-start gap-3 min-h-[48px] md:min-h-[88px]">
                      <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
                      <div className="flex-grow min-w-0">
                        <p className="mb-1" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.3px', color: '#FFFFFF', fontSize: '13px' }}>Dirección</p>
                        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '135%', color: 'rgba(255,255,255,0.82)', fontSize: '15px' }}>{concessionaire.address}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
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
            fontFamily: 'var(--font-sans)',
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
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              lineHeight: '135%',
              color: 'rgba(255,255,255,0.82)',
              fontSize: '15px',
            }}
          >
            {concessionaire.phone}
          </p>
        ) : (
          <p
            className="italic"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              lineHeight: '135%',
              color: '#6B7280',
              fontSize: '15px',
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
            fontFamily: 'var(--font-sans)',
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
            className="whitespace-pre-line"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              lineHeight: '135%',
              color: 'rgba(255,255,255,0.82)',
              fontSize: '15px',
            }}
          >
            {concessionaire.hours}
          </p>
        ) : (
          <p
            className="italic"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              lineHeight: '135%',
              color: '#6B7280',
              fontSize: '15px',
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
                  <p className="text-muted-foreground text-lg">No se encontraron resultados</p>
                </div>
              )}

              {/* Load More */}
              {hasMore && (
                <div className="text-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 9)}
                    className="px-7 bg-transparent hover:bg-brand-gold transition-all duration-500 text-[16px] lg:text-[18px] shadow-[0_8px_20px_rgba(17,17,17,0.08)] hover:shadow-[0_12px_28px_rgba(17,17,17,0.16)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
                    style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '100%', letterSpacing: '0.04em', color: '#111111', height: '56px', border: '1px solid #111111', borderRadius: '0px' }}
                  >
                    VER MÁS UBICACIONES
                  </button>
                </div>
              )}

              {/* Total Count */}
              <p className="text-center text-muted-foreground mt-6 md:mt-7">
                Mostrando {visibleConcessionaires.length} de {filteredAndSearchedConcessionaires.length} ubicaciones
                {selectedCountry !== 'Todos' && ` en ${selectedCountry}`}
              </p>
            </div>
          </section>
        );
      }
