import { MapPin, Mail, Phone, Building, ChevronRight, ChevronDown, Globe, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import mapImage from '../../imports/Mapa_Exortacion_CSM.png';
import superSelectosLogo from '../../imports/image.png';
import slide1 from '../../imports/1781119023978_image.jpeg';
import slide2 from '../../imports/1781119772075_image.jpeg';
import slide3 from '../../imports/1781119812966_image.jpeg';
import careersImg from '../../imports/Careers.jpg';

/* ============================================================
  TYPESCALE ESTÁNDAR — referencia global del proyecto

  Fuente única: Space Grotesk (todos los pesos: 400/500/600/700/800)

  H2:  text-[26px] md:text-[32px] lg:text-[40px]  leading-[112%]  letter-spacing -0.03em
       Space Grotesk 600, formato oración (sin uppercase)
  P2:  text-[15px] md:text-[16px] lg:text-[18px]  leading-[170%]  Space Grotesk 400
  H3:  text-[28px] md:text-[32px] lg:text-[36px]  leading-[1.2]   Space Grotesk 700
  P3:  text-[15px] md:text-base lg:text-lg         leading-relaxed Space Grotesk 400

  ESPACIADO VERTICAL ESTÁNDAR EN MOBILE:
  • Slider → texto de sección        → el slider tiene h fija (38vh);
    el bloque RIGHT no usa min-h-screen en mobile, por lo que el
    texto "Exportación y ventas…" arranca inmediatamente debajo.
  • Padding interno de sección       → py-8 px-5 (32/20 px) mobile
  • Entre heading-block y cards      → mb-6 (24 px) mobile
  • Gap entre las dos cards gemelas  → gap-2 (8 px) mobile / gap-4 desktop
  • Padding interno de cada card     → px-3 py-5 mobile / px-6 py-8 desktop
  • Padding inferior del bloque bg   → py-8 mobile → el contenedor
    negro de "Distribuidores" se cierra limpio sin exceso.

  CARDS GEMELAS (Ventas Nacionales / Internacionales):
  • grid-cols-2 siempre (misma fila desde mobile)
  • "Managua, Nicaragua" → solo "Nicaragua" en mobile
    (md:hidden / hidden md:inline)
  • Badge text-[9px] mobile → una sola línea en ambas cards
  • Título: "Ventas / Nacionales" y "Ventas / Internacionales"
    ambos en 2 líneas con <br /> para simetría exacta
  • Teléfono y email en el mismo orden y posición en las dos cards
  • Email: .office-email → nowrap + text-overflow ellipsis,
    nunca rompe en segunda línea

  SECCIÓN 2 — EXPORT DESTINATIONS:
  • Mobile: h3, párrafo, filtros región, mapa (apilados).
    Stats "16 Países / 5 Regiones" → hidden en mobile (hidden lg:flex).
  • Al tocar un filtro → mapa se reemplaza por banderas del país
    (orden alfabético) con X para cerrar y volver al mapa.
  • Filtros y países siempre en orden alfabético en todos los devices.

  SECCIÓN 3 — DISTRIBUIDORES:
  • Mobile: eyebrow → H2 → párrafo → banderas/card → CTA
    CTA se mueve debajo de las banderas en mobile.
  • Desktop: split 50/50 sin cambios.
  ============================================================ */

const GLOBAL_STYLES = `
  .cta-dark {
    background-color: #000000;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 28px;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }
  .cta-dark:hover {
    background-color: #FFFFFF !important;
    border-color: #111111 !important;
    color: #111111 !important;
  }

  .region-filter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 16px;
    min-height: 64px;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s;
    text-align: center;
    width: 100%;
  }
  .region-filter-btn:hover {
    border-color: rgba(212,169,58,0.5) !important;
    background-color: #1a1a1a !important;
  }
  .region-filter-btn:hover .region-filter-label { color: #D4A93A !important; }
  .region-filter-btn:hover .region-filter-chevron { color: #D4A93A !important; }
  .region-filter-label {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.3;
    transition: color 0.2s;
  }

  .dist-card {
    background-color: #111111;
    border-radius: 10px;
    border: 1px solid rgba(212,169,58,0.35);
    box-shadow: 0 1px 2px rgba(0,0,0,0.20), 0 12px 32px rgba(0,0,0,0.55);
    overflow: hidden;
    position: relative;
  }
  .dist-link-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 22px;
    background-color: #D4A93A;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .dist-link-row:hover { background-color: #e0bb55; }
  .dist-link-row:hover .dist-link-arrow { transform: translateX(3px); }
  .dist-link-label {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #111111;
  }
  .dist-link-arrow { transition: transform 0.2s; color: #111111; }

  .dist-close-btn { transition: background-color 0.2s, transform 0.2s; }
  .dist-close-btn:hover {
    background-color: rgba(255,255,255,0.16) !important;
    transform: scale(1.06);
  }
  .dist-close-btn:hover svg { color: #D4A93A !important; }

  .flag-select-btn { background: none; border: none; cursor: pointer; padding: 0; }
  .flag-circle {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid rgba(212,169,58,0.30);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  }
  .flag-select-btn:hover .flag-circle,
  .flag-select-btn:focus-visible .flag-circle {
    border-color: #D4A93A;
    box-shadow: 0 10px 32px rgba(212,169,58,0.35);
    transform: scale(1.05) translateY(-2px);
  }
  .flag-select-label {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #FFFFFF;
    transition: color 0.25s ease;
  }
  .flag-select-btn:hover .flag-select-label,
  .flag-select-btn:focus-visible .flag-select-label { color: #D4A93A; }

  @keyframes dist-fade-in {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .dist-fade-in { animation: dist-fade-in 0.35s ease both; }

  @keyframes region-fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .region-fade-in { animation: region-fade-in 0.30s ease both; }

  /* Email en cards gemelas: nunca rompe línea */
  .office-email {
    color: #D4A93A;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(9px, 2.2vw, 13px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: block;
    text-align: center;
    text-decoration: none;
  }
  .office-email:hover { text-decoration: underline; }
`;

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

function InfoRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="flex-shrink-0 mt-[2px]">{icon}</span>
      <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '13.5px', lineHeight: '150%', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 450 }}>
        {children}
      </span>
    </div>
  );
}

const GoldMapPin   = () => <MapPin    className="h-[15px] w-[15px]" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />;
const GoldPhone    = () => <Phone     className="h-[15px] w-[15px]" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />;
const GoldMail     = () => <Mail      className="h-[15px] w-[15px]" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />;
const GoldClock    = () => (
  <svg className="h-[15px] w-[15px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const GoldWhatsApp = () => (
  <svg className="h-[15px] w-[15px] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4A93A' }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function CardFace({
  countryName, centerName, rows, onFlip, onClose, bgImg,
}: {
  countryName: string; centerName: string; rows: React.ReactNode;
  onFlip: () => void; onClose: () => void; bgImg: string;
}) {
  return (
    <div className="dist-card absolute inset-0 flex flex-col">
      <div className="relative flex items-center gap-3 px-5 pt-5 pb-3"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.55)), url(${bgImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        }}>
        <div className="flex items-center justify-center flex-shrink-0"
          style={{ width: '38px', height: '38px', borderRadius: '8px',
            backgroundColor: 'rgba(212,169,58,0.16)', border: '1px solid rgba(212,169,58,0.45)' }}>
          <Building className="h-[18px] w-[18px]" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        </div>
        <div className="flex flex-col min-w-0 pr-8">
          <h4 style={{ color: '#FFFFFF', fontSize: 'clamp(17px, 1.6vw, 22px)', lineHeight: '1.15',
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '2px' }}>
            {countryName}
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.10em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif",
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {centerName}
          </p>
        </div>
        <button onClick={onClose} aria-label="Cerrar y volver a selección de país"
          className="dist-close-btn flex items-center justify-center flex-shrink-0"
          style={{ position: 'absolute', top: '12px', right: '12px', width: '26px', height: '26px',
            borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.10)', border: 'none', cursor: 'pointer' }}>
          <X className="h-3.5 w-3.5" style={{ color: '#FFFFFF' }} />
        </button>
      </div>
      <div className="flex flex-col gap-2.5 px-5 pt-3 pb-3 flex-1 justify-center" style={{ backgroundColor: '#111111' }}>
        {rows}
      </div>
      <div className="dist-link-row" onClick={onFlip} role="button" tabIndex={0}>
        <span className="dist-link-label">Ver otro centro</span>
        <ChevronRight className="dist-link-arrow h-4 w-4 flex-shrink-0" style={{ strokeWidth: '2.5px' }} />
      </div>
    </div>
  );
}

function FlipCard({ front, back }: { front: React.ReactNode; back: React.ReactNode }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: '1200px', width: '100%' }}>
      <div style={{
        position: 'relative', width: '100%', height: '280px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.55s cubic-bezier(0.45, 0, 0.55, 1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
          {typeof front === 'function' ? (front as (f: () => void) => React.ReactNode)(() => setFlipped(true)) : front}
        </div>
        <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {typeof back === 'function' ? (back as (f: () => void) => React.ReactNode)(() => setFlipped(false)) : back}
        </div>
      </div>
    </div>
  );
}

function CostaRicaFlipCard({ bgImg, onClose }: { bgImg: string; onClose: () => void }) {
  return (
    <FlipCard
      front={(flip) => (
        <CardFace countryName="Costa Rica" centerName="CSM — Liberia" onFlip={flip} onClose={onClose} bgImg={bgImg}
          rows={<>
            <InfoRow icon={<GoldMapPin />}>Liberia, Business Park Solarium<br />Bodega #21, frente aeropuerto</InfoRow>
            <InfoRow icon={<GoldPhone />}><a href="tel:+50626681360" style={{ color: 'rgba(255,255,255,0.92)' }}>2668-1360</a></InfoRow>
            <InfoRow icon={<GoldMail />}><a href="mailto:guanaventas@carnessanmartincr.com" style={{ color: '#D4A93A', wordBreak: 'break-word' }}>guanaventas@carnessanmartincr.com</a></InfoRow>
            <InfoRow icon={<GoldClock />}>Lunes a Viernes 7:00 AM–4:30 PM</InfoRow>
          </>}
        />
      )}
      back={(flip) => (
        <CardFace countryName="Costa Rica" centerName="CSM — Heredia" onFlip={flip} onClose={onClose} bgImg={bgImg}
          rows={<>
            <InfoRow icon={<GoldMapPin />}>Heredia, Ofibodegas Barreal<br />2da Etapa Local #12</InfoRow>
            <InfoRow icon={<GoldPhone />}><a href="tel:+50640100304" style={{ color: 'rgba(255,255,255,0.92)' }}>4010-0304</a></InfoRow>
            <InfoRow icon={<GoldMail />}><a href="mailto:ventas@carnessanmartincr.com" style={{ color: '#D4A93A', wordBreak: 'break-word' }}>ventas@carnessanmartincr.com</a></InfoRow>
            <InfoRow icon={<GoldClock />}>Lunes a Viernes 7:00 AM–4:30 PM</InfoRow>
          </>}
        />
      )}
    />
  );
}

function GuatemalaFlipCard({ bgImg, onClose }: { bgImg: string; onClose: () => void }) {
  return (
    <FlipCard
      front={(flip) => (
        <CardFace countryName="Guatemala" centerName="CSM Central — Guatemala" onFlip={flip} onClose={onClose} bgImg={bgImg}
          rows={<>
            <InfoRow icon={<GoldMapPin />}>Calzada Atanasio Tzul 22-00 Zona 12<br />El Cortijo Empresarial II, Ofibodega 215</InfoRow>
            <InfoRow icon={<GoldWhatsApp />}><a href="https://wa.me/50235116105" style={{ color: 'rgba(255,255,255,0.92)' }}>3511-6105</a></InfoRow>
            <InfoRow icon={<GoldMail />}><a href="mailto:sac@carnessanmartinsa.com" style={{ color: '#D4A93A', wordBreak: 'break-word' }}>sac@carnessanmartinsa.com</a></InfoRow>
            <InfoRow icon={<GoldClock />}>Lunes a Viernes 8:00 AM–5:00 PM<br />Sábado 8:00 AM–12:00 PM</InfoRow>
          </>}
        />
      )}
      back={(flip) => (
        <CardFace countryName="Guatemala" centerName="CSM Xela — Quetzaltenango" onFlip={flip} onClose={onClose} bgImg={bgImg}
          rows={<>
            <InfoRow icon={<GoldMapPin />}>Carretera Interamericana KM 190<br />Bodega 18, Puerta de Occidente<br />Salcajá, Quetzaltenango</InfoRow>
            <InfoRow icon={<GoldWhatsApp />}><a href="https://wa.me/50277688259" style={{ color: 'rgba(255,255,255,0.92)' }}>7768-8259</a></InfoRow>
            <InfoRow icon={<GoldMail />}><a href="mailto:sac@carnessanmartinsa.com" style={{ color: '#D4A93A', wordBreak: 'break-word' }}>sac@carnessanmartinsa.com</a></InfoRow>
            <InfoRow icon={<GoldClock />}>Lunes a Viernes — TBD</InfoRow>
          </>}
        />
      )}
    />
  );
}

function FlagButton({ code, label, onClick }: { code: string; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flag-select-btn flex flex-col items-center gap-3 sm:gap-4"
      aria-label={`Ver información de ${label}`}>
      <span className="flag-circle" style={{ width: 'clamp(84px, 22vw, 120px)', height: 'clamp(84px, 22vw, 120px)' }}>
        <img src={`https://flagcdn.com/${code}.svg`} alt={label} loading="lazy" className="w-full h-full object-cover" />
      </span>
      <span className="flag-select-label">{label}</span>
    </button>
  );
}

function FlagSelector({ onSelect }: { onSelect: (country: 'cr' | 'gt') => void }) {
  return (
    <div className="dist-fade-in w-full flex flex-col items-center justify-center gap-8 sm:gap-10">
      <div className="flex items-center gap-2 text-center">
        <Globe className="h-4 w-4 flex-shrink-0" style={{ color: '#D4A93A' }} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '11px',
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.60)', textAlign: 'center' }}>
          Selecciona tu país para ver la información
        </span>
      </div>
      <div className="flex items-center justify-center gap-10 sm:gap-12 md:gap-16">
        <FlagButton code="cr" label="Costa Rica" onClick={() => onSelect('cr')} />
        <FlagButton code="gt" label="Guatemala" onClick={() => onSelect('gt')} />
      </div>
    </div>
  );
}

function OfficeSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setIsTransitioning(true);
    setTimeout(() => { setCurrent(idx); setIsTransitioning(false); }, 300);
  };

  useEffect(() => {
    const s = OFFICE_SLIDES[current];
    const delay = s.type === 'video' ? VIDEO_DURATION_MS : IMAGE_INTERVAL_MS;
    const t = setTimeout(() => goTo((current + 1) % OFFICE_SLIDES.length), delay);
    return () => clearTimeout(t);
  }, [current]);

  const slide = OFFICE_SLIDES[current];

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: isTransitioning ? 0 : 1 }}>
        {slide.type === 'image' ? (
          <img key={current} src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
        ) : (
          <iframe key={current}
            src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
            title={slide.alt} allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen className="w-full h-full" style={{ border: 'none' }}
          />
        )}
      </div>
      <div className="absolute inset-0 hidden md:block pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent 60%, rgba(17,17,17,0.55) 100%)' }} />
      <div className="absolute inset-0 md:hidden pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(17,17,17,0.80) 100%)' }} />
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {OFFICE_SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Diapositiva ${i + 1}`}
            className="transition-all duration-300"
            style={{ width: i === current ? '20px' : '8px', height: '6px', borderRadius: '3px',
              backgroundColor: i === current ? '#D4A93A' : 'rgba(255,255,255,0.45)',
              border: 'none', cursor: 'pointer', padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export function ExportSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedDistCountry, setSelectedDistCountry] = useState<'cr' | 'gt' | null>(null);

  /* ── Regiones — orden alfabético estricto ──────────────────────────────── */
  const regions = [
    {
      id: 'africa', name: 'África', color: '#D97757',
      countries: [
        { name: 'Angola (Luanda)', code: 'ao' },
        { name: 'Congo (Pointe Noire)', code: 'cg' },
        { name: 'Costa de Marfil', code: 'ci' },
      ],
    },
    {
      id: 'norteamerica', name: 'América del Norte', color: '#D97757',
      countries: [
        { name: 'Estados Unidos', code: 'us' },
        { name: 'México', code: 'mx' },
      ],
    },
    {
      id: 'asia', name: 'Asia', color: '#E8B860',
      countries: [
        { name: 'Japón', code: 'jp' },
        { name: 'Tailandia', code: 'th' },
        { name: 'Taiwan', code: 'tw' },
      ],
    },
    {
      id: 'centroamerica', name: 'Centroamérica y Caribe', color: '#E8D9A8',
      countries: [
        { name: 'Costa Rica', code: 'cr' },
        { name: 'El Salvador', code: 'sv' },
        { name: 'Guatemala', code: 'gt' },
        { name: 'Puerto Rico', code: 'pr' },
        { name: 'República Dominicana', code: 'do' },
      ],
    },
    {
      id: 'europa', name: 'Europa', color: '#C9885A',
      countries: [
        { name: 'España', code: 'es' },
        { name: 'Italia', code: 'it' },
        { name: 'Rusia', code: 'ru' },
      ],
    },
  ];

  const activeRegion = regions.find((r) => r.id === selectedRegion);

  return (
    <section id="export" className="bg-brand-dark relative" style={{ backgroundColor: '#111111', fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{GLOBAL_STYLES}</style>

      {/* ============================================================
          1. SPLIT FRAME — Slider | Encabezado + Cards gemelas
          ─────────────────────────────────────────────────────────────
          MOBILE: columnas apiladas.
            • Slider: h-[38vh] fija.
            • RIGHT: py-8 px-5 sin min-h-screen en mobile.
          DESKTOP (md:): flex-row. RIGHT recupera md:min-h-screen.
          ============================================================ */}
      <div className="relative z-10 w-full flex flex-col md:flex-row overflow-hidden">

        {/* LEFT — Slider */}
        <div className="w-full md:w-3/5 h-[38vh] md:h-auto md:self-stretch relative overflow-hidden flex-shrink-0">
          <OfficeSlider />
        </div>

        {/* RIGHT — Encabezado + cards gemelas */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center px-5 py-8 md:px-7 md:py-12 md:min-h-screen"
          style={{ backgroundColor: '#0a0a0a' }}>

          <div className="w-full max-w-md mb-6 md:mb-10 text-left">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px]" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
              lineHeight: '112%', letterSpacing: '-0.03em',
              color: '#FFFFFF', marginBottom: '12px',
            }}>
              Exportación y ventas al por mayor
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[18px]" style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, lineHeight: '170%',
              color: 'rgba(255,255,255,0.68)', margin: 0,
            }}>
              Calidad internacional, trazabilidad completa y confianza garantizada.
              Abastecemos compradores institucionales, distribuidores y exportadores en más de 15 países.
            </p>
          </div>

          <div className="w-full flex flex-row gap-2 md:gap-4">

            {/* VENTAS NACIONALES */}
            <div className="flex-1 flex flex-col items-center text-center px-3 py-5 md:px-6 md:py-8"
              style={{ justifyContent: 'center' }}>
              <span className="inline-block px-2 py-1 mb-3 md:mb-4 text-[9px] md:text-[10px] font-bold uppercase"
                style={{ backgroundColor: '#D4A93A', color: '#111111',
                  fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                Oficina Principal
              </span>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 'clamp(14px, 3.2vw, 22px)', lineHeight: '1.15',
                color: '#FFFFFF', marginBottom: '14px' }}>
                Ventas<br />Nacionales
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
                <div className="flex items-center justify-center gap-1.5 md:gap-2">
                  <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0"
                    style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <span className="md:hidden" style={{ color: 'rgba(255,255,255,0.80)',
                    fontSize: 'clamp(11px, 2.5vw, 13px)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    Nicaragua
                  </span>
                  <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.80)',
                    fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif" }}>
                    Managua, Nicaragua
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 md:gap-2">
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0"
                    style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <a href="tel:+50522484356" style={{ color: '#FFFFFF',
                    fontSize: 'clamp(11px, 2.5vw, 14px)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    (505) 2248-4356
                  </a>
                </div>
                <a href="mailto:ventasnic@san-martin.com.ni" className="office-email">
                  ventasnic@san-martin.com.ni
                </a>
              </div>
            </div>

            <div style={{ width: '1px', backgroundColor: '#2a2a2a', flexShrink: 0, alignSelf: 'stretch' }} />

            {/* VENTAS INTERNACIONALES */}
            <div className="flex-1 flex flex-col items-center text-center px-3 py-5 md:px-6 md:py-8"
              style={{ justifyContent: 'center' }}>
              <span className="inline-block px-2 py-1 mb-3 md:mb-4 text-[9px] md:text-[10px] font-bold uppercase"
                style={{ backgroundColor: 'transparent', color: '#D4A93A', border: '1px solid #D4A93A',
                  fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                Oficina Principal
              </span>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 'clamp(14px, 3.2vw, 22px)', lineHeight: '1.15',
                color: '#FFFFFF', marginBottom: '14px' }}>
                Ventas<br />Internacionales
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
                <div className="flex items-center justify-center gap-1.5 md:gap-2">
                  <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0"
                    style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <span className="md:hidden" style={{ color: 'rgba(255,255,255,0.80)',
                    fontSize: 'clamp(11px, 2.5vw, 13px)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    Nicaragua
                  </span>
                  <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.80)',
                    fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif" }}>
                    Managua, Nicaragua
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 md:gap-2">
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0"
                    style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
                  <a href="tel:+50522545011" style={{ color: '#FFFFFF',
                    fontSize: 'clamp(11px, 2.5vw, 14px)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    (505) 2254-5011
                  </a>
                </div>
                <a href="mailto:exportsales@san-martin.com.ni" className="office-email">
                  exportsales@san-martin.com.ni
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ============================================================
          2. EXPORT DESTINATIONS — FONDO BLANCO
          ─────────────────────────────────────────────────────────────
          MOBILE (flex-col): h3 → párrafo → filtros → (mapa | banderas)
            Stats "16 Países / 5 Regiones": hidden en mobile (hidden lg:flex).
          DESKTOP (lg:flex-row): split 2/5 | 3/5.
            LEFT: h3, párrafo, stats.
            RIGHT: filtros + mapa (o banderas si región activa).
          Al tocar un filtro → mapa se reemplaza por banderas (alfa-
          bético) con X para cerrar y volver al mapa.
          ============================================================ */}
      <div className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex flex-col lg:flex-row w-full lg:min-h-screen">

          {/* LEFT — heading + párrafo + stats (stats hidden en mobile) */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-start px-5 pt-10 pb-4 lg:px-16 lg:py-20"
            style={{ backgroundColor: '#FFFFFF' }}>
            <div className="w-full lg:max-w-md">
              <h3 className="text-[28px] md:text-[32px] lg:text-[36px]" style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: '1.2',
                letterSpacing: '-0.02em', color: '#111111', marginBottom: '12px',
              }}>
                Estamos Certificados Para Exportar
              </h3>
              <p className="text-[15px] md:text-base lg:text-lg" style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, lineHeight: '1.65',
                color: '#444444', marginBottom: '0',
              }}>
                Nuestra presencia internacional respaldada por certificaciones y trazabilidad de clase mundial.
              </p>

              {/* Stats: HIDDEN en mobile, visible solo en lg+ */}
              <div className="hidden lg:flex items-center gap-10 mt-10">
                <div style={{ borderLeft: '2px solid #D4A93A', paddingLeft: '20px' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(14px, 1.1vw, 17px)', color: '#D4A93A', marginBottom: '4px' }}>Hacia</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: '1', color: '#D4A93A', marginBottom: '4px' }}>16</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888888' }}>Países</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(212,169,58,0.35)', paddingLeft: '20px' }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 4vw, 56px)', lineHeight: '1', color: '#111111', marginBottom: '4px' }}>5</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888888', lineHeight: '1.4' }}>Regiones<br />Globales</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — filtros + mapa/banderas
              Mobile: pt-4 (gap visual entre heading y filtros), pb-10.
              Desktop: lg:py-20. */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center px-5 pt-4 pb-10 lg:px-12 lg:py-20"
            style={{ backgroundColor: '#FFFFFF' }}>

            {/* Region filter grid — 2-col mobile, 3-col sm, 5-col lg
                Siempre en orden alfabético (definido en el array). */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6 lg:mb-8">
              {regions.map((region) => {
                const isActive = selectedRegion === region.id;
                return (
                  <button key={region.id}
                    onClick={() => setSelectedRegion(isActive ? null : region.id)}
                    aria-pressed={isActive} aria-expanded={isActive}
                    className="region-filter-btn"
                    style={{
                      backgroundColor: isActive ? '#1a1a1a' : '#111111',
                      border: isActive ? '1px solid #D4A93A' : '1px solid rgba(255,255,255,0.16)',
                      boxShadow: isActive ? '0 4px 16px rgba(212,169,58,0.18)' : 'none',
                    }}>
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: region.color }} />
                    <span className="region-filter-label" style={{ color: isActive ? '#D4A93A' : '#FFFFFF', flex: 1, textAlign: 'left' }}>
                      {region.name}
                    </span>
                    <ChevronDown className="h-4 w-4 flex-shrink-0 region-filter-chevron"
                      style={{ color: isActive ? '#D4A93A' : 'rgba(255,255,255,0.55)',
                        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease, color 0.2s' }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mapa (estado inicial) o Banderas por país (región activa) */}
            {!activeRegion ? (
              <div className="w-full flex items-center justify-center">
                <img src={mapImage} alt="Mapa de exportación Carnes San Martín"
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                  style={{ maxHeight: '60vh' }}
                />
              </div>
            ) : (
              <div className="region-fade-in w-full">
                {/* Encabezado de región + botón X para cerrar y volver al mapa */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: activeRegion.color }} />
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                      fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4A93A' }}>
                      {activeRegion.name}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedRegion(null)}
                    aria-label="Cerrar región y volver al mapa"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '28px', height: '28px', borderRadius: '50%',
                      backgroundColor: '#111111', border: 'none', cursor: 'pointer',
                      transition: 'background-color 0.2s' }}>
                    <X style={{ width: '13px', height: '13px', color: '#FFFFFF' }} />
                  </button>
                </div>

                {/* Lista de países — orden alfabético (definido en el array) */}
                <div className="flex flex-col gap-2">
                  {activeRegion.countries.map((c) => (
                    <div key={c.code}
                      className="flex items-center gap-3 px-3 py-2.5 rounded"
                      style={{ backgroundColor: 'rgba(17,17,17,0.04)', border: '1px solid rgba(17,17,17,0.06)' }}>
                      <img
                        src={`https://flagcdn.com/${c.code}.svg`}
                        alt={c.name}
                        loading="lazy"
                        style={{ width: '48px', height: '32px', objectFit: 'cover', borderRadius: '3px',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.18)', outline: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }}
                      />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '15px', color: '#111111' }}>
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* ============================================================
          3. DISTRIBUIDORES REGIONALES — FONDO NEGRO
          ─────────────────────────────────────────────────────────────
          MOBILE (flex-col): eyebrow → H2 → párrafo → banderas/card → CTA
            • CTA desktop: hidden en mobile (hidden lg:block en left col).
            • CTA mobile: lg:hidden, último elemento del flex-col,
              aparece debajo del bloque de banderas/cards.
          DESKTOP (lg:flex-row): split 50/50 sin cambios.
          ============================================================ */}
      <div className="w-full flex flex-col lg:flex-row" style={{ backgroundColor: '#000000' }}>

        {/* LEFT / TOP mobile: eyebrow + H2 + párrafo + CTA (desktop only) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 pt-10 pb-6 lg:px-16 lg:py-24"
          style={{ backgroundColor: '#000000' }}>

          <span className="inline-block mb-4 lg:mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600, fontSize: '11px', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#D4A93A' }}>
            Red Comercial Regional
          </span>

          <h2 className="text-[36px] md:text-[42px] lg:text-[48px]" style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: '1.2',
            letterSpacing: '-0.025em', color: '#FFFFFF', marginBottom: '12px',
          }}>
            Distribuidores Regionales
          </h2>

          <p className="text-base md:text-lg lg:text-xl" style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, lineHeight: '1.65',
            color: 'rgba(255,255,255,0.70)', marginBottom: '0', maxWidth: '520px',
          }}>
            ¿Buscas distribución de carnes premium en Costa Rica o Guatemala?
            Nuestra red de distribuidores autorizados te conecta directamente con
            productos de exportación certificados, respaldados por décadas de
            experiencia en la cadena de frío y atención comercial de primer nivel.
            Si te encuentras en cualquier otro país de la región, la Oficina
            Central en Nicaragua está lista para atenderte.
          </p>

          {/* CTA — DESKTOP ONLY: hidden en mobile */}
          <div className="hidden lg:block mt-10">
            <a href="#export" className="cta-dark">
              Oficina Central — Nicaragua
              <span style={{ display: 'inline-block' }}>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT / MIDDLE mobile: banderas / cards
            py-8 px-5 mobile (32/20 px). Sin minHeight forzado. */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-8 px-5 lg:py-16 lg:px-16"
          style={{ backgroundColor: '#000000' }}>
          <div className="w-full flex items-center justify-center mx-auto" style={{ maxWidth: '380px' }}>
            {selectedDistCountry === null && (
              <FlagSelector onSelect={setSelectedDistCountry} />
            )}
            {selectedDistCountry === 'cr' && (
              <div className="dist-fade-in w-full">
                <CostaRicaFlipCard bgImg={careersImg} onClose={() => setSelectedDistCountry(null)} />
              </div>
            )}
            {selectedDistCountry === 'gt' && (
              <div className="dist-fade-in w-full">
                <GuatemalaFlipCard bgImg={careersImg} onClose={() => setSelectedDistCountry(null)} />
              </div>
            )}
          </div>
        </div>

        {/* CTA — MOBILE ONLY: aparece después de las banderas/cards */}
        <div className="lg:hidden w-full px-5 pb-10" style={{ backgroundColor: '#000000' }}>
          <a href="#export" className="cta-dark">
            Oficina Central — Nicaragua
            <span style={{ display: 'inline-block' }}>→</span>
          </a>
        </div>

      </div>

    </section>
  );
}