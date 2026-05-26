import { MapPin, Phone, Clock, Search } from 'lucide-react';
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
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');

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
    <section id="concessionaires" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '0px', color: '#111111' }}>
            Concesionarios y Puntos de Venta
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '150%', color: '#3A3A3A' }}>
            Encuentre nuestros puntos de venta autorizados más cercanos
          </p>
        </div>

        {/* Search + Country Filter - Horizontal Layout */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {/* Search Box - Left Side */}
          <div className="relative w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5" style={{ color: '#6B7280' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o dirección..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              className="w-full pl-12 pr-4 py-4 focus:outline-none focus:ring-2 bg-white"
              style={{ border: '1px solid #E5E5E5', color: '#111111', borderRadius: '0px' }}
            />
          </div>

          {/* Country Filter - Right Side */}
          <div className="inline-flex p-1 gap-1" style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E5E5' }}>
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => {
                  setSelectedCountry(country);
                  setVisibleCount(6);
                  setSearchQuery('');
                }}
                className={`px-8 py-4 transition-all duration-300 ${
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

        {/* Results count */}
        {searchQuery && (
          <p className="text-center text-muted-foreground mb-8">
            {filteredAndSearchedConcessionaires.length} resultado{filteredAndSearchedConcessionaires.length !== 1 ? 's' : ''} encontrado{filteredAndSearchedConcessionaires.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Concessionaires Grid - STANDARDIZED CARD STRUCTURE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleConcessionaires.map((concessionaire, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-xl transition-all duration-300 relative"
              style={{ border: '1px solid #E5E5E5' }}
            >
              {/* Country Badge - Top Right */}
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide" style={{ backgroundColor: 'rgba(212,169,58,0.12)', border: '1px solid rgba(212,169,58,0.3)', color: '#111111' }}>
                  {concessionaire.country}
                </span>
              </div>

              {/* Title with fixed height for alignment */}
              <div style={{ minHeight: '88px', marginBottom: '10px' }}>
                <h3 className="pr-16" style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, lineHeight: '115%', color: '#111111', fontSize: '28px' }}>
                  {concessionaire.name}
                </h3>
              </div>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
                  <div className="flex-grow">
                    <p className="mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.3px', color: '#111111', fontSize: '13px' }}>Dirección</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '135%', color: '#3A3A3A', fontSize: '15px' }}>{concessionaire.address}</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
                  <div className="flex-grow">
                    <p className="mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.3px', color: '#111111', fontSize: '13px' }}>Teléfono</p>
                    {concessionaire.phone ? (
                      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '135%', color: '#3A3A3A', fontSize: '15px' }}>{concessionaire.phone}</p>
                    ) : (
                      <p className="italic" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '135%', color: '#6B7280', fontSize: '15px' }}>Próximamente disponible</p>
                    )}
                  </div>
                </div>

                {/* Horario - Multi-line format */}
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
                  <div className="flex-grow">
                    <p className="mb-2" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.3px', color: '#111111', fontSize: '13px' }}>Horario</p>
                    {concessionaire.hours ? (
                      <p className="whitespace-pre-line" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '135%', color: '#3A3A3A', fontSize: '15px' }}>{concessionaire.hours}</p>
                    ) : (
                      <p className="italic" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '135%', color: '#6B7280', fontSize: '15px' }}>Próximamente disponible</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredAndSearchedConcessionaires.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No se encontraron resultados</p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="px-6 bg-transparent hover:bg-brand-gold transition-all duration-300 text-[16px] lg:text-[18px]"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '100%', letterSpacing: '0.5px', color: '#111111', height: '56px', border: '1px solid #111111', borderRadius: '0px' }}
            >
              VER MÁS UBICACIONES
            </button>
          </div>
        )}

        {/* Total Count */}
        <p className="text-center text-muted-foreground mt-8">
          Mostrando {visibleConcessionaires.length} de {filteredAndSearchedConcessionaires.length} ubicaciones
          {selectedCountry !== 'Todos' && ` en ${selectedCountry}`}
        </p>
      </div>
    </section>
  );
}
