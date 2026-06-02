import { MapPin, Mail, Phone, Building, ChevronDown, Clock } from 'lucide-react';
import { useState } from 'react';
import mapImage from '../../imports/Mapa_Exortacion_CSM.png';
import superSelectosLogo from '../../imports/image.png';

interface Region {
  id: string;
  name: string;
  color: string;
  countries: string[];
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

      {/* PRIMARY HUB */}
      <div className="mb-3">
        <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>Carnes San Martín Costa Rica</p>
        <div className="space-y-3.5">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
              Liberia, Business Park Solarium Bodega #21, frente aeropuerto
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <a href="tel:+50626681360" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
              2668-1360
            </a>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <a
              href="mailto:guanaventas@carnessanmartincr.com"
              className="hover:underline"
              style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}
            >
              guanaventas@carnessanmartincr.com
            </a>
          </div>
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>Lunes a Viernes 7:00 AM–4:30 PM</p>
          </div>
        </div>
      </div>

      {/* SECONDARY HUB - ACCORDION */}
      <div className={`overflow-hidden transition-all duration-500 ${showSecondary ? 'max-h-[600px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
          <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>Centro de Distribución Heredia</p>
          <div className="space-y-3.5">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
                Heredia, Ofibodegas Barreal 2da Etapa Local #12
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <a href="tel:+50640100304" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
                4010-0304
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <a
                href="mailto:ventas@carnessanmartincr.com"
                className="hover:underline"
                style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}
              >
                ventas@carnessanmartincr.com
              </a>
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

      {/* EXPAND CTA */}
      <button
        onClick={() => setShowSecondary(!showSecondary)}
        className="mt-3 flex items-center justify-between w-full px-4 py-2.5 transition-all duration-300 group"
        style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.18)' }}
      >
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

      {/* PRIMARY HUB */}
      <div className="mb-3">
        <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>CSM CENTRAL</p>
        <div className="space-y-3.5">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
              Calzada Atanasio Tzul 22-00 Zona 12<br />
              El Cortijo Empresarial II, Ofibodega 215
            </p>
          </div>
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4A93A', marginTop: '2px' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <a href="https://wa.me/50235116105" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
              3511 6105
            </a>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
            <a
              href="mailto:sac@carnessanmartinsa.com"
              className="hover:underline"
              style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}
            >
              sac@carnessanmartinsa.com
            </a>
          </div>
          <div className="flex items-start gap-4">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
              Lunes a Viernes 8:00 AM–5:00 PM<br />
              Sábado 8:00 AM–12:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* SECONDARY HUB - ACCORDION */}
      <div className={`overflow-hidden transition-all duration-500 ${showSecondary ? 'max-h-[600px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
        <div className="pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
          <p className="font-medium mb-2" style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>CSM XELA</p>
          <div className="space-y-3.5">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
                Carretera Interamericana Labor Casa Blanca KM 190, Bodega 18<br />
                Puerta de Occidente<br />
                Salcajá, Quetzaltenango
              </p>
            </div>
            <div className="flex items-start gap-4">
              <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#D4A93A', marginTop: '2px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <a href="https://wa.me/50277688259" className="hover:text-brand-gold transition-colors" style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
                7768-8259
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#D4A93A', strokeWidth: '1.75px', marginTop: '2px' }} />
              <a
                href="mailto:sac@carnessanmartinsa.com"
                className="hover:underline"
                style={{ wordBreak: 'break-word', color: '#D4A93A', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}
              >
                sac@carnessanmartinsa.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#D4A93A', marginTop: '2px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '15px', lineHeight: '135%', fontFamily: 'var(--font-sans)' }}>
                Lunes a Viernes 8:00 AM–5:00 PM<br />
                Sábado 8:00 AM–12:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPAND CTA */}
      <button
        onClick={() => setShowSecondary(!showSecondary)}
        className="mt-3 flex items-center justify-between w-full px-4 py-3 transition-all duration-300 group"
        style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.18)' }}
      >
        <span className="text-sm font-medium transition-colors uppercase" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.5px', color: '#FFFFFF' }}>
          {showSecondary ? 'OCULTAR OTRO CENTRO' : 'VER OTRO CENTRO'}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showSecondary ? 'rotate-180' : ''}`} style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
      </button>
    </div>
  );
}

export function ExportSection() {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      id: 'centralAmerica',
      name: 'Centroamérica y Caribe',
      color: '#D4A849',
      countries: [
        'Costa Rica',
        'El Salvador',
        'Guatemala',
        'Honduras',
        'Nicaragua',
        'Puerto Rico',
        'República Dominicana',
      ],
    },
    {
      id: 'northAmerica',
      name: 'América del Norte',
      color: '#C45250',
      countries: ['Estados Unidos', 'México'],
    },
    {
      id: 'europe',
      name: 'Europa',
      color: '#E8D4B8',
      countries: ['España', 'Italia', 'Rusia'],
    },
    {
      id: 'asia',
      name: 'Asia',
      color: '#E8CFA0',
      countries: ['Japón', 'Tailandia', 'Taiwán'],
    },
    {
      id: 'africa',
      name: 'África',
      color: '#B8856A',
      countries: [
        'Costa de Marfil',
        'Luanda (Angola)',
        'Pointe-Noire (República del Congo)',
      ],
    },
  ];

  const toggleRegion = (regionId: string) => {
    setExpandedRegion(expandedRegion === regionId ? null : regionId);
  };

  return (
    <section id="export" className="py-16 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1700478934617-75d2d4f01a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Premium meat preparation"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Intro */}
        <div className="pt-16 text-center">

  <h2
    className="
      text-[24px]
      md:text-[32px]
      lg:text-[42px]
      mb-6
    "
    style={{
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      lineHeight: '1.12',
      letterSpacing: '-0.03em',
      color: '#FFFFFF',
      textTransform: 'uppercase'
    }}
  >
            Exportación y Ventas al Por Mayor
          </h2>
          <p
    className="
      text-[16px]
      md:text-[18px]
      lg:text-[20px]
      mb-11
    "
    style={{
      color: 'rgba(255,255,255,0.78)',
      fontWeight: 400,
      lineHeight: '1.7'
    }}
  >
            Calidad internacional, trazabilidad completa y confianza garantizada.
            Abastecemos compradores institucionales, distribuidores y exportadores en más de 15 países.
          </p>
        </div>

        {/* 1. EXPORT SALES HQ - NICARAGUA */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
              Información de Ventas
            </h3>
            <p className="text-white/70 text-lg">Oficina principal - Managua, Nicaragua</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {/* Ventas Nacionales - PREMIUM FEATURED */}
            <div className="bg-brand-gold p-8 relative overflow-hidden flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-brand-dark text-brand-gold text-xs font-bold mb-4 tracking-wide">
                  OFICINA PRINCIPAL
                </span>
                <h4 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>
                  Ventas Nacionales
                </h4>
              </div>

              <div className="space-y-2.5 flex-grow">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-dark text-lg">Managua, Nicaragua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+50522484356" className="font-medium text-brand-dark text-lg hover:underline">(505) 2248-4356</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="mailto:ventasnic@san-martin.com.ni" className="text-brand-dark hover:underline font-medium text-lg" style={{ wordBreak: 'break-word' }}>
                      ventasnic@san-martin.com.ni
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventas Internacionales - PERFECTLY BALANCED */}
            <div className="backdrop-blur-sm p-8 flex flex-col" 
            style={{ backgroundColor: 'rgba(17,17,17,0.72)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-transparent text-transparent text-xs font-bold mb-4 tracking-wide select-none">
                  SPACING MATCH
                </span>
                <h4 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>
                  Ventas Internacionales
                </h4>
              </div>

              <div className="space-y-2.5 flex-grow">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white/90 text-lg">Managua, Nicaragua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+50522545011" className="font-medium text-white/90 text-lg hover:text-brand-gold transition-colors">(505) 2254-5011</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="mailto:exportsales@san-martin.com.ni" className="text-brand-gold hover:underline font-medium text-lg" style={{ wordBreak: 'break-word' }}>
                      exportsales@san-martin.com.ni
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. EXPORT DESTINATIONS MAP */}
        <div className="mb-20">
          {/* Centered Title */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2
              className="text-[32px] md:text-[44px] lg:text-[56px] mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '0px', color: '#FFFFFF' }}
            >
              Certificados para exportar hacia:
            </h2>

            <p
    className="
      text-[16px]
      md:text-[18px]
      lg:text-[20px]
      leading-[170%]
      font-normal
      text-white/78
      mb-11
      max-w-4xl
      mx-auto
    "
  >
              Nuestra presencia internacional respaldada por certificaciones y trazabilidad de clase mundial.
            </p>
          </div>

          {/* 40% / 60% Layout - Map Dominant */}
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* LEFT - 40% (2 columns) - Metrics + Accordion */}
            <div className="lg:col-span-2">
              {/* Regional Stats - Reformatted */}
              <div className="flex gap-12 mb-8">
                <div className="border-l-2 border-brand-gold pl-6">
                  <div
                    className="text-5xl font-bold text-brand-gold mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    16
                  </div>
                  <div className="text-white/70 text-xs uppercase tracking-wider font-medium">
                    PAÍSES
                  </div>
                </div>
                <div className="border-l-2 border-brand-gold/50 pl-6">
                  <div
                    className="text-5xl font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    5
                  </div>
                  <div className="text-white/70 text-xs uppercase tracking-wider font-medium leading-tight">
                    REGIONES<br />GLOBALES
                  </div>
                </div>
              </div>

              {/* Regional Expandable Cards - Narrower */}
              <div className="hidden md:block space-y-3 max-w-sm">
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:border-brand-gold/40"
                  >
                    <button
                      onClick={() => toggleRegion(region.id)}
                      className="w-full px-5 py-3.5 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-sm flex-shrink-0"
                          style={{ backgroundColor: region.color }}
                        ></div>
                        <span className="font-medium text-white text-sm group-hover:text-brand-gold transition-colors">
                          {region.name}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-brand-gold transition-transform duration-300 ${
                          expandedRegion === region.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Expanded Country List */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedRegion === region.id ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-5 pb-4 pt-2 border-t border-white/10">
                        <ul className="grid grid-cols-1 gap-2">
                          {region.countries.map((country) => (
                            <li
                              key={country}
                              className="text-white/70 text-sm flex items-start gap-2"
                            >
                              <span className="text-brand-gold mt-1">•</span>
                              <span>{country}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - 60% (3 columns) - Map Hero */}
            <div className="lg:col-span-3">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-3 overflow-hidden group cursor-zoom-in">
                <img
                  src={mapImage}
                  alt="Mapa de exportación Carnes San Martín"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.4))',
                  }}
                />
              </div>

              {/* Map caption */}
              <p className="text-center text-white/50 text-xs mt-3 italic">
                Mapa de destinos de exportación certificados
              </p>
            </div>
          </div>
        </div>

{/* 3. REGIONAL DISTRIBUTION HUBS (NO NICARAGUA) */}
<div>
  <div className="text-center mb-10">
    <h3
      className="text-3xl font-bold mb-3"
      style={{ fontFamily: 'var(--font-serif)' }}
    >
      Distribuidores Regionales
    </h3>
    <p className="text-white/70">Red comercial en Centroamérica</p>
  </div>

  <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">

    {/* COSTA RICA */}
    <div
      className="backdrop-blur-sm p-5 md:p-5 flex flex-col"
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '360px',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        <h4
          style={{
            color: '#FFFFFF',
            fontSize: '28px',
            lineHeight: '115%',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
          }}
        >
          Costa Rica
        </h4>
      </div>

      <p
        className="mb-3"
        style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: '16px',
          fontWeight: 600,
        }}
      >
        Carnes San Martín Costa Rica
      </p>

      <div className="space-y-2.5 flex-1">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <p style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%' }}>
            Liberia, Business Park Solarium Bodega #21, frente aeropuerto
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <a href="tel:26681360" style={{ color: '#FFFFFF', fontSize: '15px' }}>
            2668-1360
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <a
            href="mailto:guanaventas@carnessanmartincr.com"
            style={{ color: '#D4A93A', fontSize: '15px', wordBreak: 'break-word' }}
          >
            guanaventas@carnessanmartincr.com
          </a>
        </div>

        <div className="flex items-start gap-3 min-h-[44px]">
          <Clock className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <div>
            <p style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%' }}>
              Lunes a Viernes 7:00 AM–4:30 PM
            </p>
            <p style={{ visibility: 'hidden', fontSize: '15px' }}>
              placeholder
            </p>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <button className="w-full px-4 py-3 border border-white/20 text-white uppercase flex items-center justify-between">
            <span>VER OTRO CENTRO</span>
            <ChevronDown className="h-5 w-5" style={{ color: '#D4A93A' }} />
          </button>
        </div>
      </div>
    </div>

    {/* EL SALVADOR */}
    <div
      className="backdrop-blur-sm p-5 md:p-5 flex flex-col"
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '360px',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        <h4
          style={{
            color: '#FFFFFF',
            fontSize: '28px',
            lineHeight: '115%',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
          }}
        >
          El Salvador
        </h4>
      </div>

      <div className="flex flex-col flex-1">
      <div className="flex items-center justify-center mt-10 mb-2">
          <img
            src={superSelectosLogo}
            alt="Super Selectos"
            className="w-full max-w-[88px] h-auto object-contain"
          />
        </div>

        <div className="min-h-[49px] flex items-start justify-center pt-5">
          <p
            className="text-center"
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: '15px',
              lineHeight: '135%',
              maxWidth: '420px',
            }}
          >
            Disponible a través de nuestro socio retail autorizado
          </p>
        </div>

        <div className="mt-auto pt-2">
          <a
            href="https://www.superselectos.com/Contactenos"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 border border-white/20 text-white uppercase flex items-center justify-center gap-2"
          >
            <span>VISITAR SUPER SELECTOS</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: '#D4A93A', strokeWidth: '1.75px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* GUATEMALA */}
    <div
      className="backdrop-blur-sm p-5 md:p-5 flex flex-col"
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '360px',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        <h4
          style={{
            color: '#FFFFFF',
            fontSize: '28px',
            lineHeight: '115%',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
          }}
        >
          Guatemala
        </h4>
      </div>

      <p
        className="mb-3"
        style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: '16px',
          fontWeight: 600,
        }}
      >
        CSM CENTRAL
      </p>

      <div className="space-y-2.5 flex-1">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <p style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '135%' }}>
            Calzada Atanasio Tzul 22-00 Zona 12 El Cortijo Empresarial II, Ofibodega 215
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <a href="tel:35116105" style={{ color: '#FFFFFF', fontSize: '15px' }}>
            3511 6105
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <a href="mailto:sac@carnessanmartinsa.com" style={{ color: '#D4A93A', fontSize: '15px' }}>
            sac@carnessanmartinsa.com
          </a>
        </div>

        <div className="flex items-start gap-3 min-h-[44px]">
          <Clock className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <div>
            <p style={{ color: '#FFFFFF', fontSize: '15px' }}>
              Lunes a Viernes 8:00 AM–5:00 PM
            </p>
            <p style={{ color: '#FFFFFF', fontSize: '15px' }}>
              Sábado 8:00 AM–12:00 PM
            </p>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <button className="w-full px-4 py-3 border border-white/20 text-white uppercase flex items-center justify-between">
            <span>VER OTRO CENTRO</span>
            <ChevronDown className="h-5 w-5" style={{ color: '#D4A93A' }} />
          </button>
        </div>
      </div>
    </div>

    {/* HONDURAS */}
    <div
      className="backdrop-blur-sm p-5 md:p-5 flex flex-col"
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '360px',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Building className="h-6 w-6" style={{ color: '#D4A93A', strokeWidth: '1.75px' }} />
        <h4
          style={{
            color: '#FFFFFF',
            fontSize: '28px',
            lineHeight: '115%',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
          }}
        >
          Honduras
        </h4>
      </div>

      <p
        className="mb-3"
        style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: '16px',
          fontWeight: 600,
        }}
      >
        Carnes San Martín Honduras
      </p>

      <div className="space-y-2.5 flex-1">
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <a href="tel:+5042282530" style={{ color: '#FFFFFF', fontSize: '15px' }}>
            (504) 228-2530
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: '#D4A93A' }} />
          <a href="mailto:ventassanmartin@md.hn" style={{ color: '#D4A93A', fontSize: '15px' }}>
            ventassanmartin@md.hn
          </a>
        </div>
      </div>
    </div>

  </div>
</div>
        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 bg-white hover:bg-brand-gold transition-all duration-500 text-[16px] lg:text-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.28)] hover:shadow-[0_16px_34px_rgba(212,169,58,0.26)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            style={{ height: '56px', fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '100%', letterSpacing: '0.04em', color: '#111111', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0px' }}
          >
            CONTACTAR EQUIPO COMERCIAL
          </button>
        </div>
      </div>
    </section>
  );
}
