import { Mail, MapPin, Phone } from 'lucide-react';

export function ExportIntroBlock() {
  return (
    <>
      {/* ==========================================================
          EXPORT INTRO
      ========================================================== */}

      <div className="mb-6 text-center">
        <h2
          className="
            mb-6
            text-[24px]
            md:text-[32px]
            lg:text-[42px]
          "
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            lineHeight: '1.12',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
          }}
        >
          Exportación y Ventas al Por Mayor
        </h2>

        <p
          className="
            mx-auto
            mb-11
            max-w-4xl
            text-[16px]
            md:text-[18px]
            lg:text-[20px]
          "
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            lineHeight: '1.7',
            color: 'rgba(255,255,255,0.78)',
          }}
        >
          Calidad internacional, trazabilidad completa y confianza garantizada.
          Abastecemos compradores institucionales, distribuidores y exportadores
          en más de 15 países.
        </p>
      </div>

      {/* ==========================================================
          SALES INFORMATION
      ========================================================== */}

      <div className="mb-20">
        <div className="mb-10 text-center">
          <h3
            className="
              mb-3
              text-[22px]
              md:text-[28px]
              lg:text-[34px]
            "
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Información de Ventas
          </h3>

          <p
            className="
              text-[15px]
              md:text-[17px]
              lg:text-[18px]
            "
            style={{
              color: 'rgba(255,255,255,0.70)',
              fontWeight: 400,
              lineHeight: '1.6',
            }}
          >
            Oficina principal - Managua, Nicaragua
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
          {/* ==========================================================
              NATIONAL SALES
          ========================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              overflow-hidden
              bg-brand-gold
              p-8
            "
          >
            <div className="mb-6">
              <span
                className="
                  mb-4
                  inline-block
                  bg-brand-dark
                  px-4
                  py-2
                  text-xs
                  font-bold
                  tracking-wide
                  text-brand-gold
                "
              >
                OFICINA PRINCIPAL
              </span>

              <h4
                className="text-3xl font-bold text-brand-dark"
                style={{
                  fontFamily: 'var(--font-serif)',
                  lineHeight: '1.2',
                }}
              >
                Ventas Nacionales
              </h4>
            </div>

            <div className="flex-grow space-y-2.5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-dark" />

                <p className="text-lg font-medium text-brand-dark">
                  Managua, Nicaragua
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-dark" />

                <a
                  href="tel:+50522484356"
                  className="text-lg font-medium text-brand-dark hover:underline"
                >
                  (505) 2248-4356
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-dark" />

                <a
                  href="mailto:ventasnic@san-martin.com.ni"
                  className="break-words text-lg font-medium text-brand-dark hover:underline"
                >
                  ventasnic@san-martin.com.ni
                </a>
              </div>
            </div>
          </div>

          {/* ==========================================================
              INTERNATIONAL SALES
          ========================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              overflow-hidden
              p-8
            "
            style={{
              backgroundImage:
                "url('https://sanmartin.com.ni/wp-content/uploads/2025/02/Careers.jpg')",
              backgroundSize: '50px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <div className="mb-6">
              <span
                className="
                  mb-4
                  inline-block
                  bg-brand-dark
                  px-4
                  py-2
                  text-xs
                  font-bold
                  tracking-wide
                  text-brand-gold
                "
              >
                OFICINA PRINCIPAL
              </span>

              <h4
                className="text-3xl font-bold text-brand-dark"
                style={{
                  fontFamily: 'var(--font-serif)',
                  lineHeight: '1.2',
                }}
              >
                Ventas Internacionales
              </h4>
            </div>

            <div className="flex-grow space-y-2.5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-gold" />

                <p className="text-lg font-medium text-brand-dark">
                  Managua, Nicaragua
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-gold" />

                <a
                  href="tel:+50522545011"
                  className="
                    text-lg
                    font-medium
                    text-brand-dark
                    transition-colors
                    hover:text-brand-gold
                  "
                >
                  (505) 2254-5011
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-gold" />

                <a
                  href="mailto:exportsales@san-martin.com.ni"
                  className="
                    break-words
                    text-lg
                    font-medium
                    text-brand-gold
                    hover:underline
                  "
                >
                  exportsales@san-martin.com.ni
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import { useState } from 'react';
import mapImage from '../../imports/Mapa_Exortacion_CSM.png';
interface Country {
name: string;
code: string;
}
interface Region {
id: string;
name: string;
color: string;
countries: Country[];
}
const REGIONS: Region[] = [
{
id: 'centroamerica',
name: 'Centroamérica y Caribe',
color: '#E8D9A8',
countries: [
{ name: 'Guatemala', code: 'gt' },
{ name: 'El Salvador', code: 'sv' },
{ name: 'Honduras', code: 'hn' },
{ name: 'Costa Rica', code: 'cr' },
{ name: 'República Dominicana', code: 'do' },
{ name: 'Puerto Rico', code: 'pr' },
],
},
{
id: 'norteamerica',
name: 'América del Norte',
color: '#D97757',
countries: [
{ name: 'Estados Unidos', code: 'us' },
{ name: 'México', code: 'mx' },
],
},
{
id: 'europa',
name: 'Europa',
color: '#F5E6C8',
countries: [
{ name: 'España', code: 'es' },
{ name: 'Italia', code: 'it' },
{ name: 'Rusia', code: 'ru' },
],
},
{
id: 'asia',
name: 'Asia',
color: '#E8B860',
countries: [
{ name: 'Japón', code: 'jp' },
{ name: 'Taiwan', code: 'tw' },
{ name: 'Tailandia', code: 'th' },
],
},
{
id: 'africa',
name: 'África',
color: '#C9885A',
countries: [
{ name: 'Luanda', code: 'ao' },
{ name: 'Pointe Noire', code: 'cg' },
{ name: 'Costa de Marfil', code: 'ci' },
],
},
];
const getFlagSizing = (countryCount: number) => {
if (countryCount <= 2) {
return {
flag: 'w-20 h-14',
text: 'text-lg',
cols: 'grid-cols-1',
gap: 'gap-6',
};
}
if (countryCount === 3) {
return {
flag: 'w-16 h-11',
text: 'text-base',
cols: 'grid-cols-1',
gap: 'gap-5',
};
}
if (countryCount === 4) {
return {
flag: 'w-14 h-10',
text: 'text-sm',
cols: 'grid-cols-2',
gap: 'gap-4',
};
}
return {
flag: 'w-12 h-8',
text: 'text-sm',
cols: 'grid-cols-2',
gap: 'gap-3',
};
};
export function ExportWorldMapBlock() {
const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
const activeRegion = REGIONS.find(
(region) => region.id === selectedRegion
);
const sizing = activeRegion
? getFlagSizing(activeRegion.countries.length)
: null;
return (
  <>
    {/* ==========================================================
    SECTION HEADER
    ========================================================== */}

    <div className="mx-auto mb-10 max-w-4xl px-4 text-center">
    <h3
      className="
        mb-3
        text-[22px]
        md:text-[28px]
        lg:text-[34px]
      "
      style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 700,
        lineHeight: '1.15',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
      }}
    >
      Estamos Certificados Para Exportar:
    </h3>

    <p
      className="
        text-[14px]
        md:text-[16px]
        lg:text-[18px]
      "
      style={{
        color: 'rgba(255,255,255,0.70)',
        fontWeight: 400,
        lineHeight: '1.6',
      }}
    >
      Nuestra presencia internacional respaldada por certificaciones y
      trazabilidad de clase mundial.
    </p>
  </div>

  {/* ==========================================================
      MAP + DETAIL PANEL
  ========================================================== */}

  <div
    className="
      grid
      grid-cols-1
      items-stretch
      gap-6
      px-4
      lg:grid-cols-5
      lg:gap-8
      lg:px-8
    "
  >
    {/* MAP PANEL */}

    <div className="lg:col-span-3">
      <div
        className="
          group
          relative
          flex
          h-full
          items-center
          overflow-hidden
          border
          border-white/10
          bg-white/5
          p-3
          backdrop-blur-sm
        "
      >
        <img
          src={mapImage}
          alt="Mapa de exportación Carnes San Martín"
          className="
            h-auto
            w-full
            transition-transform
            duration-700
            group-hover:scale-105
          "
          style={{
            filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.4))',
          }}
        />
      </div>
    </div>

    {/* DETAIL PANEL */}

    <div className="min-h-[280px] lg:col-span-2 lg:min-h-0">
      <div
        key={selectedRegion ?? 'default'}
        className="
          h-full
          animate-in
          fade-in
          duration-500
          border
          border-white/10
          bg-white/5
          px-6
          py-6
          backdrop-blur-sm
          flex
          flex-col
        "
      >
        {!activeRegion ? (
          <>
            <div className="flex-[0.2]" />

            <div className="flex-[0.6] flex items-center justify-center">
              <div className="flex gap-8 sm:gap-12">
                <div className="border-l-2 border-brand-gold pl-5 sm:pl-6">
                  <div
                    className="
                      mb-2
                      text-xl
                      font-bold
                      text-brand-gold
                      sm:text-2xl
                    "
                    style={{
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    Hacia
                  </div>

                  <div
                    className="
                      mb-1
                      text-4xl
                      font-bold
                      leading-none
                      text-brand-gold
                      sm:text-5xl
                    "
                    style={{
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    17
                  </div>

                  <div
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-white/70
                      sm:text-xs
                    "
                  >
                    PAÍSES
                  </div>
                </div>

                <div className="self-end border-l-2 border-brand-gold/50 pl-5 sm:pl-6">
                  <div
                    className="
                      mb-1
                      text-4xl
                      font-bold
                      leading-none
                      text-white
                      sm:text-5xl
                    "
                    style={{
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    5
                  </div>

                  <div
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      leading-tight
                      tracking-wider
                      text-white/70
                      sm:text-xs
                    "
                  >
                    REGIONES
                    <br />
                    GLOBALES
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[0.2]" />
          </>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="
                    inline-block
                    h-2.5
                    w-2.5
                    rounded-full
                  "
                  style={{
                    backgroundColor: activeRegion.color,
                  }}
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-brand-gold
                    sm:text-sm
                  "
                  style={{
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {activeRegion.name}
                </span>
              </div>

              <button
                onClick={() => setSelectedRegion(null)}
                className="
                  cursor-pointer
                  text-xs
                  text-white/50
                  transition-colors
                  hover:text-brand-gold
                "
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="flex-[0.15]" />

            <div className="flex-[0.7] flex items-center justify-center w-full">
              <ul
                className={`
                  grid
                  ${sizing?.cols}
                  ${sizing?.gap}
                  mx-auto
                  w-full
                  max-w-md
                `}
              >
                {activeRegion.countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <img
                      src={`https://flagcdn.com/${country.code}.svg`}
                      alt={country.name}
                      loading="lazy"
                      className={`
                        ${sizing?.flag}
                        rounded-sm
                        object-cover
                        shadow-md
                        ring-1
                        ring-white/10
                        flex-shrink-0
                      `}
                    />

                    <span
                      className={`
                        ${sizing?.text}
                        truncate
                        font-medium
                        tracking-wide
                        text-white
                      `}
                    >
                      {country.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-[0.15]" />
          </>
        )}
      </div>
    </div>
  </div>

  {/* ==========================================================
      REGION FILTERS
  ========================================================== */}

  <div className="mt-6 px-4 lg:px-8">
    <div
      className="
        grid
        grid-cols-2
        gap-3
        sm:grid-cols-3
        lg:grid-cols-5
      "
    >
      {REGIONS.map((region) => {
        const isActive = selectedRegion === region.id;

        return (
          <button
            key={region.id}
            onClick={() =>
              setSelectedRegion(isActive ? null : region.id)
            }
            aria-pressed={isActive}
            className={`
              group
              relative
              flex
              min-h-[60px]
              cursor-pointer
              items-center
              justify-center
              gap-2
              border
              bg-white/5
              px-4
              py-3
              backdrop-blur-sm
              transition-all
              duration-300
              ${
                isActive
                  ? 'border-brand-gold bg-white/10 scale-[1.02] shadow-lg'
                  : 'border-white/10 hover:border-brand-gold/60 hover:bg-white/8'
              }
            `}
          >
            <span
              className="
                h-2.5
                w-2.5
                flex-shrink-0
                rounded-full
              "
              style={{
                backgroundColor: region.color,
              }}
            />

            <span
              className={`
                text-center
                text-xs
                font-medium
                transition-colors
                sm:text-sm
                ${
                  isActive
                    ? 'text-brand-gold'
                    : 'text-white group-hover:text-brand-gold'
                }
              `}
            >
              {region.name}
            </span>
          </button>
        );
      })}
    </div>
  </div>
</>
);
}
import {
Building,
ChevronDown,
Clock,
Mail,
MapPin,
Phone,
} from 'lucide-react';
import superSelectosLogo from '../../imports/image.png';
export function RegionalDistributorsBlock() {
return (
  <>
{/* ==========================================================
SECTION HEADER
========================================================== */}
 <div className="mb-10 text-center">
    <h3
      className="
        mb-1
        text-[22px]
        md:text-[28px]
        lg:text-[34px]
      "
      style={{
        fontFamily: 'var(--font-serif)',
        fontWeight: 400,
        lineHeight: '1.15',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
      }}
    >
      Distribuidores Regionales
    </h3>

    <p
      className="
        text-[15px]
        md:text-[17px]
        lg:text-[18px]
      "
      style={{
        color: 'rgba(255,255,255,0.70)',
        fontWeight: 400,
        lineHeight: '1.6',
      }}
    >
      Red comercial en Centroamérica
    </p>
  </div>

  {/* ==========================================================
      DISTRIBUTORS GRID
  ========================================================== */}

  <div
    className="
      mx-auto
      grid
      max-w-6xl
      gap-5
      md:grid-cols-2
      md:gap-6
    "
  >
    {/* ==========================================================
        COSTA RICA
    ========================================================== */}

    <div
      className="
        flex
        h-fit
        flex-col
        p-1
        backdrop-blur-sm
        md:p-8
      "
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '100px',
      }}
    >
      <div className="mb-1 flex items-center gap-3">
        <Building
          className="h-6 w-6"
          style={{
            color: '#D4A93A',
            strokeWidth: '1.75px',
          }}
        />

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
        className="mb-2"
        style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: '12px',
          fontWeight: 600,
        }}
      >
        Carnes San Martín Costa Rica
      </p>

      <div className="flex-none space-y-0">
        <div className="flex items-start gap-3">
          <MapPin
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <p
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              lineHeight: '135%',
            }}
          >
            Liberia, Business Park Solarium Bodega #21, frente aeropuerto
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Phone
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <a
            href="tel:26681360"
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
            }}
          >
            2668-1360
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Mail
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <a
            href="mailto:guanaventas@carnessanmartincr.com"
            style={{
              color: '#D4A93A',
              fontSize: '14px',
              wordBreak: 'break-word',
            }}
          >
            guanaventas@carnessanmartincr.com
          </a>
        </div>

        <div className="flex min-h-[44px] items-start gap-3">
          <Clock
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <div>
            <p
              style={{
                color: '#FFFFFF',
                fontSize: '14px',
                lineHeight: '135%',
              }}
            >
              Lunes a Viernes 7:00 AM–4:30 PM
            </p>
          </div>
        </div>

        <div className="pt-1">
          <button
            className="
              flex
              w-full
              items-center
              border
              border-white/20
              px-4
              py-2
              uppercase
              text-white
            "
          >
            <span>VER OTRO CENTRO</span>

            <ChevronDown
              className="w-5"
              style={{ color: '#D4A93A' }}
            />
          </button>
        </div>
      </div>
    </div>

    {/* ==========================================================
        EL SALVADOR
    ========================================================== */}

    <div
      className="
        flex
        h-fit
        flex-col
        p-1
        backdrop-blur-sm
        md:p-8
      "
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '290px',
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <Building
          className="h-6 w-6"
          style={{
            color: '#D4A93A',
            strokeWidth: '1.75px',
          }}
        />

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

      <div className="flex flex-1 flex-col">
        <div className="mt-6 flex items-center justify-center">
          <a
            href="https://www.superselectos.com/Contactenos"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              justify-center
              transition-opacity
              hover:opacity-80
            "
          >
            <img
              src={superSelectosLogo}
              alt="Super Selectos"
              className="
                h-auto
                w-full
                max-w-[120px]
                object-contain
              "
            />
          </a>
        </div>
      </div>
    </div>

    {/* ==========================================================
        GUATEMALA
    ========================================================== */}

    <div
      className="
        flex
        h-fit
        flex-col
        p-1
        backdrop-blur-sm
        md:p-8
      "
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '100px',
      }}
    >
      <div className="mb-1 flex items-center gap-3">
        <Building
          className="h-6 w-6"
          style={{
            color: '#D4A93A',
            strokeWidth: '1.75px',
          }}
        />

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
        className="mb-2"
        style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: '12px',
          fontWeight: 600,
        }}
      >
        Carnes San Martín Central
      </p>

      <div className="flex-none space-y-0">
        <div className="flex items-start gap-3">
          <MapPin
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <p
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              lineHeight: '135%',
            }}
          >
            Calzada Atanasio Tzul 22-00 Zona 12 El Cortijo Empresarial II
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Phone
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <a
            href="tel:26681360"
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
            }}
          >
            3511-6105
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Mail
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <a
            href="mailto:guanaventas@carnessanmartincr.com"
            style={{
              color: '#D4A93A',
              fontSize: '14px',
              wordBreak: 'break-word',
            }}
          >
            sac@carnessanmartinsa.com
          </a>
        </div>

        <div className="flex min-h-[44px] items-start gap-3">
          <Clock
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <div>
            <p
              style={{
                color: '#FFFFFF',
                fontSize: '14px',
                lineHeight: '135%',
              }}
            >
              Lunes a Viernes 08:00am A 17:00pm sabado 08:00am A 12:00 medio dia
            </p>
          </div>
        </div>

        <div className="pt-1">
          <button
            className="
              flex
              w-full
              items-center
              border
              border-white/20
              px-4
              py-2
              uppercase
              text-white
            "
          >
            <span>VER OTRO CENTRO</span>

            <ChevronDown
              className="w-5"
              style={{ color: '#D4A93A' }}
            />
          </button>
        </div>
      </div>
    </div>

    {/* ==========================================================
        HONDURAS
    ========================================================== */}

    <div
      className="
        flex
        h-fit
        flex-col
        p-1
        backdrop-blur-sm
        md:p-8
      "
      style={{
        backgroundColor: 'rgba(17,17,17,0.72)',
        border: '1px solid rgba(255,255,255,0.14)',
        minHeight: '100px',
      }}
    >
      <div className="mb-1 flex items-center gap-3">
        <Building
          className="h-6 w-6"
          style={{
            color: '#D4A93A',
            strokeWidth: '1.75px',
          }}
        />

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
        className="mb-2"
        style={{
          color: 'rgba(255,255,255,0.82)',
          fontSize: '12px',
          fontWeight: 600,
        }}
      >
        Carnes San Marin Honduras
      </p>

      <div className="flex-none space-y-0">
        <div className="flex items-start gap-3">
          <MapPin
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <p
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
              lineHeight: '135%',
            }}
          >
            Calzada Atanasio Tzul 22-00 Zona 12 El Cortijo Empresarial II
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Phone
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <a
            href="tel:26681360"
            style={{
              color: '#FFFFFF',
              fontSize: '14px',
            }}
          >
            (504) 228-2530
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Mail
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <a
            href="mailto:guanaventas@carnessanmartincr.com"
            style={{
              color: '#D4A93A',
              fontSize: '14px',
              wordBreak: 'break-word',
            }}
          >
            ventassanmartin@md.hn
          </a>
        </div>

        <div className="flex min-h-[44px] items-start gap-3">
          <Clock
            className="mt-1 h-5 w-5 flex-shrink-0"
            style={{ color: '#D4A93A' }}
          />

          <div>
            <p
              style={{
                color: '#FFFFFF',
                fontSize: '14px',
                lineHeight: '135%',
              }}
            >
              Lunes a Viernes 08:00am A 17:00pm sabado 08:00am A 12:00 medio dia
            </p>
          </div>
        </div>

        <div className="pt-1">
          <button
            className="
              flex
              w-full
              items-center
              border
              border-white/20
              px-4
              py-2
              uppercase
              text-white
            "
          >
            <span>VER OTRO CENTRO</span>

            <ChevronDown
              className="w-5"
              style={{ color: '#D4A93A' }}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</>
);
}

export function ExportSection() {
  return (
    <>
      <ExportIntroBlock />
      <ExportWorldMapBlock />
      <RegionalDistributorsBlock />
    </>
  );
}