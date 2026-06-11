import { MapPin, Mail, Phone, Building, ChevronDown, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import mapImage from '../../imports/Mapa_Exortacion_CSM.png';
import superSelectosLogo from '../../imports/image.png';
import slide1 from '../../imports/1781119023978_image.jpeg';
import slide2 from '../../imports/1781119772075_image.jpeg';
import slide3 from '../../imports/1781119812966_image.jpeg';

/* ============================================================
   TYPESCALE ESTÁNDAR — referencia global del proyecto
   (establecido en base a la sección "Ventas al Por Mayor")

   H2:  text-[36px] md:text-[42px] lg:text-[48px]  leading-[1.2]
   P2:  text-base md:text-lg lg:text-xl             leading-relaxed
   H3:  text-[28px] md:text-[32px] lg:text-[36px]  leading-[1.2]
   P3:  text-[15px] md:text-base lg:text-lg         leading-relaxed

   ESPACIADO ESTÁNDAR entre elementos:
   - Entre H y su párrafo:            mb-3  (12px)
   - Entre párrafo y siguiente bloque: mb-10 (40px)  en desktop / mb-6 (24px) mobile
   - Entre bloques/elementos:          gap-6 (24px)  ó  mb-6
   ============================================================ */

// ─── SLIDER ITEMS ─────────────────────────────────────────────────────────────
type SlideItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; youtubeId: string; alt: string };

const OFFICE_SLIDES: SlideItem[] = [
  { type: 'image', src: slide1, alt: 'Instalaciones CSM – vista aérea' },
  { type: 'image', src: slide2, alt: 'Planta de producción CSM' },
  { type: 'image', src: slide3, alt: 'Equipo Carnes San Martín' },
  { type: 'video', youtubeId: 'jSUrjPrTuPI', alt: 'Video Carnes San Martín' },
];

const IMAGE_INTERVAL_MS = 2000;
const VIDEO_DURATION_MS = 149000;

function OfficeSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const currentSlide = OFFICE_SLIDES[current];
    const delay = currentSlide.type === 'video' ? VIDEO_DURATION_MS : IMAGE_INTERVAL_MS;
    const timer = setTimeout(() => {
      goTo((current + 1) % OFFICE_SLIDES.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [current]);

  const slide = OFFICE_SLIDES[current];

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        {slide.type === 'image' ? (
          <img key={current} src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
        ) : (
          <iframe
            key={current}
            src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
            title={slide.alt}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        )}
      </div>
      <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(17,17,17,0.55) 100%)' }} />
      <div className="absolute inset-0 md:hidden pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(17,17,17,0.80) 100%)' }} />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {OFFICE_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Diapositiva ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? '20px' : '8px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: i === current ? '#D4A93A' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Costa Rica Distributor with Accordion
function CostaRicaDistributor() {
  const [showSecondary, setShowSecondary] = useState(false);
  return (
    <div className="backdrop-blur-sm p-8 transition-all duration-300 flex flex-col h-full" style={{ backgroundColor: 'rgba(17,17,17,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}>
      <div className="flex items-center gap-4 mb-3">
        <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        <h4 className="font-bold" style={{ color: '#FFFFFF', fontSize: '28px', lineHeight: '115%', fontFamily: 'var(--font-serif)' }}>Costa Rica</h4>
      </div>
      <div className="mb-3">
        <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>Carnes San Martín Costa Rica</p>
        <div className="space-y-3.5">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Liberia, Business Park Solarium Bodega #21, frente aeropuerto</p>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <a href="tel:+50626681360" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>2668-1360</a>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <a href="mailto:guanaventas@carnessanmartincr.com" className="hover:underline" style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>guanaventas@carnessanmartincr.com</a>
          </div>
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Lunes a Viernes 7:00 AM–4:30 PM</p>
          </div>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${showSecondary ? 'max-h-[600px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
          <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>Centro de Distribución Heredia</p>
          <div className="space-y-3.5">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Heredia, Ofibodegas Barreal 2da Etapa Local #12</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <a href="tel:+50640100304" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>4010-0304</a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <a href="mailto:ventas@carnessanmartincr.com" className="hover:underline" style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>ventas@carnessanmartincr.com</a>
            </div>
            <div className="flex items-start gap-4">
              <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Lunes a Viernes 7:00 AM–4:30 PM</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setShowSecondary(!showSecondary)} className="mt-3 flex items-center justify-between w-full px-4 py-2.5 transition-all duration-300 group" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.18)' }}>
        <span className="text-sm font-medium transition-colors uppercase" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.5px', color: '#FFFFFF' }}>
          {showSecondary ? 'OCULTAR OTRO CENTRO' : 'VER OTRO CENTRO'}
        </span>
        <ChevronDown className={`h-4 w-4 text-brand-gold transition-transform duration-300 ${showSecondary ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}

// Guatemala Distributor with Accordion
function GuatemalaDistributor() {
  const [showSecondary, setShowSecondary] = useState(false);
  return (
    <div className="backdrop-blur-sm p-8 transition-all duration-300 flex flex-col h-full" style={{ backgroundColor: 'rgba(17,17,17,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}>
      <div className="flex items-center gap-4 mb-3">
        <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        <h4 className="font-bold" style={{ color: '#FFFFFF', fontSize: '28px', lineHeight: '115%', fontFamily: 'var(--font-serif)' }}>Guatemala</h4>
      </div>
      <div className="mb-3">
        <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>CSM CENTRAL</p>
        <div className="space-y-3.5">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Calzada Atanasio Tzul 22-00 Zona 12<br />El Cortijo Empresarial II, Ofibodega 215</p>
          </div>
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4A93A', marginTop: '2px' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <a href="https://wa.me/50235116105" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>3511 6105</a>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <a href="mailto:sac@carnessanmartinsa.com" className="hover:underline" style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>sac@carnessanmartinsa.com</a>
          </div>
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Lunes a Viernes 8:00 AM–5:00 PM<br />Sábado 8:00 AM–12:00 PM</p>
          </div>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${showSecondary ? 'max-h-[600px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
        <div className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
          <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>CSM XELA</p>
          <div className="space-y-3.5">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Carretera Interamericana Labor Casa Blanca KM 190, Bodega 18<br />Puerta de Occidente<br />Salcajá, Quetzaltenango</p>
            </div>
            <div className="flex items-start gap-4">
              <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4A93A', marginTop: '2px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <a href="https://wa.me/50277688259" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>7768-8259</a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <a href="mailto:sac@carnessanmartinsa.com" className="hover:underline" style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>sac@carnessanmartinsa.com</a>
            </div>
            <div className="flex items-start gap-4">
              <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Lunes a Viernes 8:00 AM–5:00 PM<br />Sábado 8:00 AM–12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setShowSecondary(!showSecondary)} className="mt-3 flex items-center justify-between w-full px-4 py-3 transition-all duration-300 group" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.18)' }}>
        <span className="text-sm font-medium transition-colors uppercase" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.5px', color: '#FFFFFF' }}>
          {showSecondary ? 'OCULTAR OTRO CENTRO' : 'VER OTRO CENTRO'}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showSecondary ? 'rotate-180' : ''}`} style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
      </button>
    </div>
  );
}

/* ==========================================
   AQUI EMPIEZA_MAP_LOVABLE_CHANGES
========================================== */
export function ExportSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [expandedDistributor, setExpandedDistributor] = useState<string | null>(null);

  /* ── REGIONS DATA
     Honduras eliminado de Centroamérica (era hn).
     Total: 16 países, 5 regiones.
  ── */
  const regions = [
    {
      id: 'centroamerica',
      name: 'Centroamérica y Caribe',
      color: '#E8D9A8',
      countries: [
        { name: 'Guatemala',           code: 'gt' },
        { name: 'El Salvador',         code: 'sv' },
        // Honduras eliminado según instrucción
        { name: 'Costa Rica',          code: 'cr' },
        { name: 'República Dominicana',code: 'do' },
        { name: 'Puerto Rico',         code: 'pr' },
      ],
    },
    {
      id: 'norteamerica',
      name: 'América del Norte',
      color: '#D97757',
      countries: [
        { name: 'Estados Unidos', code: 'us' },
        { name: 'México',         code: 'mx' },
      ],
    },
    {
      id: 'europa',
      name: 'Europa',
      color: '#C9885A',
      countries: [
        { name: 'España', code: 'es' },
        { name: 'Italia', code: 'it' },
        { name: 'Rusia',  code: 'ru' },
      ],
    },
    {
      id: 'asia',
      name: 'Asia',
      color: '#E8B860',
      countries: [
        { name: 'Japón',     code: 'jp' },
        { name: 'Taiwan',    code: 'tw' },
        { name: 'Tailandia', code: 'th' },
      ],
    },
    {
      id: 'africa',
      name: 'África',
      color: '#D97757',
      countries: [
        { name: 'Angola (Luanda)',          code: 'ao' },
        { name: 'Congo (Pointe Noire)',     code: 'cg' },
        { name: 'Costa de Marfil',          code: 'ci' },
      ],
    },
  ];

  const activeRegion = regions.find((r) => r.id === selectedRegion);

  /* ── FLAG SIZE — fixed so all regions fit within the left 40% panel.
     Reference: Centroamérica y Caribe has 5 countries (most).
     Flag: 56×36px (w-14 h-9). Grid always 1 column for clean alignment.
  ── */
  const FLAG_W = 'w-14';   // 56px
  const FLAG_H = 'h-9';    // 36px

  /* ==========================================
   AQUI TERMINA_MAP_LOVABLE_CHANGES
========================================== */

  return (
    <section
      id="export"
      className="bg-brand-dark relative"
      style={{ backgroundColor: '#111111' }}
    >

      {/* ============================================================
          1. SPLIT FRAME — 85vh max, slider stretches to match right column
          ============================================================ */}
      <div
        className="relative z-10 w-full flex flex-col md:flex-row overflow-hidden"
        style={{ maxHeight: '85vh', minHeight: '666px' }}
      >
        {/* LEFT — Slider fills full height of the row */}
        <div className="w-full md:w-3/5 h-[38vh] md:h-auto md:self-stretch relative overflow-hidden flex-shrink-0">
          <OfficeSlider />
        </div>

        {/* RIGHT — single vertically-centered block: heading + cards */}
        <div
          className="w-full md:w-2/5 flex flex-col items-center justify-center px-7 py-8"
          style={{ backgroundColor: '#111111' }}
        >
          {/* ── heading + paragraph ── */}
          {/* SPACING STD: mb-3 between H and P, mb-10 between P and next block */}
          <div className="w-full mb-10">
            <h2
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.9vw, 28px)',
                lineHeight: '1.08',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '10px', /* STD: mb-3 (12px) H→P */
              }}
            >
              Exportación y Ventas al Por Mayor
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: 'clamp(11.5px, 0.95vw, 14px)',
                lineHeight: '1.65',
                color: 'rgba(255,255,255,0.68)',
                margin: 0,
              }}
            >
              Calidad internacional, trazabilidad completa y confianza garantizada.
              Abastecemos compradores institucionales, distribuidores y exportadores
              en más de 15 países.
            </p>
          </div>

          {/* ── TWO CONTACT CARDS side by side, no visible divider ── */}
          <div className="w-full flex">
            {/* VENTAS NACIONALES */}
            <div className="flex-1 flex flex-col items-center text-center px-4 py-5">
              <span
                className="inline-block px-2 py-0.5 mb-3 text-[9px] font-bold tracking-widest uppercase"
                style={{ backgroundColor: '#D4A93A', color: '#111111', fontFamily: 'var(--font-sans)', letterSpacing: '0.10em' }}
              >
                Oficina Principal
              </span>
              <h4
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(16px, 1.5vw, 21px)', lineHeight: '1.15', color: '#FFFFFF', marginBottom: '14px' }}
              >
                Ventas Nacionales
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', width: '100%' }}>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: 'clamp(11.5px, 0.9vw, 13.5px)', lineHeight: '1.4', fontFamily: 'var(--font-sans)' }}>Managua, Nicaragua</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <a href="tel:+50522484356" style={{ color: '#FFFFFF', fontSize: 'clamp(11.5px, 0.9vw, 13.5px)', fontFamily: 'var(--font-sans)' }} className="hover:text-brand-gold transition-colors">(505) 2248-4356</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <a href="mailto:ventasnic@san-martin.com.ni" style={{ color: '#D4A93A', fontSize: 'clamp(10px, 0.82vw, 12.5px)', wordBreak: 'break-word', fontFamily: 'var(--font-sans)' }} className="hover:underline">ventasnic@san-martin.com.ni</a>
                </div>
              </div>
            </div>

            {/* invisible structural divider — same color as bg */}
            <div style={{ width: '1px', backgroundColor: '#111111', flexShrink: 0 }} />

            {/* VENTAS INTERNACIONALES */}
            <div className="flex-1 flex flex-col items-center text-center px-4 py-5">
              <span
                className="inline-block px-2 py-0.5 mb-3 text-[9px] font-bold tracking-widest uppercase"
                style={{ backgroundColor: 'transparent', color: '#D4A93A', border: '1px solid #D4A93A', fontFamily: 'var(--font-sans)', letterSpacing: '0.10em' }}
              >
                Oficina Principal
              </span>
              <h4
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'clamp(16px, 1.5vw, 21px)', lineHeight: '1.15', color: '#FFFFFF', marginBottom: '14px' }}
              >
                Ventas Internacionales
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', width: '100%' }}>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: 'clamp(11.5px, 0.9vw, 13.5px)', lineHeight: '1.4', fontFamily: 'var(--font-sans)' }}>Managua, Nicaragua</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <a href="tel:+50522545011" style={{ color: '#FFFFFF', fontSize: 'clamp(11.5px, 0.9vw, 13.5px)', fontFamily: 'var(--font-sans)' }} className="hover:text-brand-gold transition-colors">(505) 2254-5011</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <a href="mailto:exportsales@san-martin.com.ni" style={{ color: '#D4A93A', fontSize: 'clamp(10px, 0.82vw, 12.5px)', wordBreak: 'break-word', fontFamily: 'var(--font-sans)' }} className="hover:underline">exportsales@san-martin.com.ni</a>
                </div>
              </div>
            </div>
          </div>{/* end side-by-side cards */}
        </div>{/* end RIGHT */}
      </div>{/* end SPLIT FRAME */}


      {/* ============================================================
          2. EXPORT DESTINATIONS — WHITE BACKGROUND
             Layout: 40% LEFT (h3 + párrafo + contador 16/5)
                     60% RIGHT (filtros de región arriba + mapa abajo)
             Fondo blanco. Banderas tamaño fijo (ref: 5 países Centroamérica).
          ============================================================ */}
      <div
        className="w-full"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* inner padded row — full width, two columns */}
        <div className="flex flex-col lg:flex-row w-full min-h-[600px]">

          {/* ── LEFT 40% — H3 + párrafo + contador, centrado vertical ── */}
          <div
            className="w-full lg:w-2/5 flex flex-col justify-center px-10 md:px-14 lg:px-16 py-16 lg:py-20"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            {/* H3 + párrafo — SPACING STD: mb-3 H→P, mb-10 P→next block */}
            <h3
              className="text-[28px] md:text-[32px] lg:text-[36px]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                lineHeight: '1.2',          /* STD H3 leading */
                letterSpacing: '-0.02em',
                color: '#111111',
                marginBottom: '12px',        /* STD: mb-3 between H and P */
              }}
            >
              Estamos Certificados Para Exportar
            </h3>
            <p
              className="text-[15px] md:text-base lg:text-lg"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                lineHeight: '1.65',          /* STD P3 leading-relaxed */
                color: '#444444',
                marginBottom: '40px',        /* STD: mb-10 between P and next block */
              }}
            >
              Nuestra presencia internacional respaldada por certificaciones y trazabilidad de clase mundial.
            </p>

            {/* ── CONTADOR / FLAGS PANEL ──
                Default: muestra 16 países / 5 regiones.
                Cuando hay región activa: muestra las banderas de esa región.
                Tamaño de bandera fijo: w-14 h-9 (ref: 5 países de Centroamérica).
            ── */}
            <div className="w-full">
              {!activeRegion ? (
                /* default state — seamless on white */
                <div className="flex items-center gap-10">
                  {/* 16 países */}
                  <div style={{ borderLeft: '2px solid #D4A93A', paddingLeft: '20px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 1.1vw, 17px)',
                        color: '#D4A93A',
                        marginBottom: '4px',
                      }}
                    >
                      Hacia
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 700,
                        fontSize: 'clamp(40px, 4vw, 56px)',
                        lineHeight: '1',
                        color: '#D4A93A',
                        marginBottom: '4px',
                      }}
                    >
                      16
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#888888',
                      }}
                    >
                      Países
                    </p>
                  </div>
                  {/* 5 regiones */}
                  <div style={{ borderLeft: '2px solid rgba(212,169,58,0.35)', paddingLeft: '20px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 700,
                        fontSize: 'clamp(40px, 4vw, 56px)',
                        lineHeight: '1',
                        color: '#111111',
                        marginBottom: '4px',
                      }}
                    >
                      5
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#888888',
                        lineHeight: '1.4',
                      }}
                    >
                      Regiones<br />Globales
                    </p>
                  </div>
                </div>
              ) : (
                /* active region — flags grid, fixed size, all visible */
                <div>
                  {/* region label + close */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: activeRegion.color }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontWeight: 600,
                          fontSize: '13px',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#D4A93A',
                        }}
                      >
                        {activeRegion.name}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="transition-colors"
                      aria-label="Cerrar"
                      style={{ color: '#888888', fontSize: '13px', lineHeight: '1' }}
                    >
                      ✕
                    </button>
                  </div>

                  {/* flags list — fixed size w-14 h-9, 1 column, gap-4 between items
                      Reference sizing: fits 5 países (Centroamérica) comfortably */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {activeRegion.countries.map((c) => (
                      <li key={c.code} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <img
                          src={`https://flagcdn.com/${c.code}.svg`}
                          alt={c.name}
                          loading="lazy"
                          /* STD flag size: w-14 h-9 — sized for 5-country regions */
                          className={`${FLAG_W} ${FLAG_H} object-cover flex-shrink-0`}
                          style={{ borderRadius: '3px', boxShadow: '0 1px 4px rgba(0,0,0,0.18)', outline: '1px solid rgba(0,0,0,0.08)' }}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 500,
                            fontSize: '15px',
                            color: '#111111',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {c.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>{/* end LEFT 40% */}

          {/* ── RIGHT 60% — region filter buttons (top) + map (bottom) ── */}
          <div
            className="w-full lg:w-3/5 flex flex-col px-8 md:px-10 lg:px-12 py-16 lg:py-20"
            style={{ backgroundColor: '#FFFFFF' }}
          >

            {/* REGION FILTER BUTTONS — dark pills matching existing style */}
            {/* SPACING STD: mb-6 (24px) between filter row and map */}
            <div className="flex flex-wrap gap-3 mb-6">
              {regions.map((region) => {
                const isActive = selectedRegion === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(isActive ? null : region.id)}
                    aria-pressed={isActive}
                    className="flex items-center gap-2 px-4 py-2.5 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? '#1a1a1a' : '#111111',
                      border: isActive ? '1px solid #D4A93A' : '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '2px',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: region.color }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                        fontSize: '13px',
                        color: isActive ? '#D4A93A' : '#FFFFFF',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.2s',
                      }}
                    >
                      {region.name}
                    </span>
                    <span style={{ color: '#D4A93A', fontSize: '12px' }}>→</span>
                  </button>
                );
              })}
            </div>

            {/* MAP — takes remaining space, grows with available height */}
            <div className="flex-1 relative overflow-hidden" style={{ minHeight: '320px' }}>
              <div
                className="w-full h-full flex items-center justify-center p-4 overflow-hidden group"
                style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={mapImage}
                  alt="Mapa de exportación Carnes San Martín"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))' }}
                />
              </div>
            </div>

          </div>{/* end RIGHT 60% */}
        </div>{/* end two-column row */}
      </div>{/* end section 2 white bg */}


      {/* ── Remaining sections — padded container, dark bg ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 relative z-10 pt-14 md:pt-16 pb-16 md:pb-16">

        {/* 3. REGIONAL DISTRIBUTION HUBS */}
        <div>
          {/* SPACING STD: mb-10 between section title and distributor cards */}
          <div className="min-h-[12vh] md:min-h-0 mb-12 md:mb-10 text-center">
            <h3
              className="text-[22px] md:text-[28px] lg:text-[34px] mb-1"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: '1.15', letterSpacing: '-0.02em', color: '#FFFFFF' }}
            >
              Distribuidores Regionales
            </h3>
            <p
              className="md:hidden text-[15px]"
              style={{ color: 'rgba(255,255,255,0.70)', fontWeight: 400, lineHeight: '1.6' }}
            >
              Seleccione su país para contactar al distribuidor autorizado de Carnes San Martín. Nuestra red comercial regional brinda atención local a supermercados, distribuidores, restaurantes y empresas que buscan productos cárnicos de calidad internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-5 max-w-5xl mx-auto items-start">

            {/* COSTA RICA */}
            <div className="backdrop-blur-sm flex flex-col p-1 md:px-6 md:py-5 h-fit" style={{ backgroundColor: 'rgba(17,17,17,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <button onClick={() => setExpandedDistributor(expandedDistributor === 'costa-rica' ? null : 'costa-rica')} className="md:hidden w-full flex items-center justify-between px-4 py-4">
                <span style={{ color: '#FFFFFF', fontSize: '22px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Costa Rica</span>
                <span style={{ color: '#D4A93A', fontSize: '28px', lineHeight: '1', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                  {expandedDistributor === 'costa-rica' ? '−' : '+'}
                </span>
              </button>
              <div className={`${expandedDistributor === 'costa-rica' ? 'block' : 'hidden'} md:block`}>
                <div className="hidden md:flex items-center gap-3 mb-1">
                  <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <h4 style={{ color: '#FFFFFF', fontSize: '28px', lineHeight: '115%', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Costa Rica</h4>
                </div>
                <p className="mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '12px', fontWeight: 600 }}>Carnes San Martín Costa Rica</p>
                <div className="space-y-0 flex-none">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <p style={{ color: '#FFFFFF', fontSize: '14px', lineHeight: '135%' }}>Liberia, Business Park Solarium Bodega #21, frente aeropuerto</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <a href="tel:26681360" style={{ color: '#FFFFFF', fontSize: '14px' }}>2668-1360</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <a href="mailto:guanaventas@carnessanmartincr.com" style={{ color: '#D4A93A', fontSize: '14px', wordBreak: 'break-word' }}>guanaventas@carnessanmartincr.com</a>
                  </div>
                  <div className="flex items-start gap-3 min-h-[44px]">
                    <Clock className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <p style={{ color: '#FFFFFF', fontSize: '12px', lineHeight: '135%' }}>Lunes a Viernes 7:00 AM–4:30 PM</p>
                  </div>
                  <div className="pt-1">
                    <button className="w-full px-4 py-2 border border-white/20 text-white uppercase flex items-center">
                      <span>VER OTRO CENTRO</span>
                      <ChevronDown className="h- w-5" style={{ color: '#D4A93A' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GUATEMALA */}
            <div className="backdrop-blur-sm flex flex-col p-0 md:px-6 md:py-5 h-fit" style={{ backgroundColor: 'rgba(17,17,17,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <button onClick={() => setExpandedDistributor(expandedDistributor === 'guatemala' ? null : 'guatemala')} className="md:hidden w-full flex items-center justify-between px-4 py-4">
                <span style={{ color: '#FFFFFF', fontSize: '22px', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Guatemala</span>
                <span style={{ color: '#D4A93A', fontSize: '28px', lineHeight: '1', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                  {expandedDistributor === 'guatemala' ? '−' : '+'}
                </span>
              </button>
              <div className={`${expandedDistributor === 'guatemala' ? 'block' : 'hidden'} md:block`}>
                <div className="hidden md:flex items-center gap-3 mb-1">
                  <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <h4 style={{ color: '#FFFFFF', fontSize: '28px', lineHeight: '115%', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>Guatemala</h4>
                </div>
                <p className="mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '12px', fontWeight: 600 }}>Carnes San Martín Central</p>
                <div className="space-y-0 flex-none">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <p style={{ color: '#FFFFFF', fontSize: '14px', lineHeight: '135%' }}>Calzada Atanasio Tzul 22-00 Zona 12 El Cortijo Empresarial II</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <a href="tel:35116105" style={{ color: '#FFFFFF', fontSize: '14px' }}>3511-6105</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <a href="mailto:sac@carnessanmartinsa.com" style={{ color: '#D4A93A', fontSize: '14px', wordBreak: 'break-word' }}>sac@carnessanmartinsa.com</a>
                  </div>
                  <div className="flex items-start gap-3 min-h-[44px]">
                    <Clock className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
                    <p style={{ color: '#FFFFFF', fontSize: '12px', lineHeight: '135%' }}>Lunes a Viernes 7:00 AM–4:30 PM<br />Sábado 7:00 AM–12:00 PM</p>
                  </div>
                  <div className="pt-1">
                    <button className="w-full px-4 py-2 border border-white/20 text-white uppercase flex items-center">
                      <span>VER OTRO CENTRO</span>
                      <ChevronDown className="h- w-5" style={{ color: '#D4A93A' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>{/* end padded container */}

    </section>
  );
}

