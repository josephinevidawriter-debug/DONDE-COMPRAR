import { useState } from 'react';
import walmartLogo from '../../imports/image-1.png';
import laUnionLogo from '../../imports/image-2.png';
import maxiPaliLogo from '../../imports/image-3.png';
import masXMenosLogo from '../../imports/image-4.png';
import walmartCostaRicaLogo from '../../imports/image-5.png';
import walmartGuatemalaLogo from '../../imports/image-9.png';
import paizLogo from '../../imports/image-7.png';
import maxiDespensaLogo from '../../imports/image-8.png';
import superSelectosLogo from '../../imports/Screenshot_2026-05-25_at_7.19.12_PM.png';
import textureBackground from '../../imports/Screenshot_2026-05-25_at_5.27.53_PM.png';

type Country = 'Nicaragua' | 'Costa Rica' | 'Guatemala' | 'El Salvador';

interface Supermarket {
  name: string;
  logo: string;
  website: string;
  country: Country;
}

export function SupermarketsSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Nicaragua');

  const supermarkets: Supermarket[] = [
    // NICARAGUA
    { name: 'Walmart', logo: walmartLogo, website: 'walmart.com.ni', country: 'Nicaragua' },
    { name: 'La Unión', logo: laUnionLogo, website: 'launion.com.ni', country: 'Nicaragua' },

    // COSTA RICA
    { name: 'Walmart', logo: walmartCostaRicaLogo, website: 'walmart.co.cr', country: 'Costa Rica' },
    { name: 'Más x Menos', logo: masXMenosLogo, website: 'masxmenos.cr', country: 'Costa Rica' },
    { name: 'Maxi Pali', logo: maxiPaliLogo, website: 'maxipali.co.cr', country: 'Costa Rica' },

    // GUATEMALA
    { name: 'Walmart', logo: walmartGuatemalaLogo, website: 'walmart.com.gt', country: 'Guatemala' },
    { name: 'Paiz', logo: paizLogo, website: 'paiz.com.gt', country: 'Guatemala' },
    { name: 'Maxi Despensa', logo: maxiDespensaLogo, website: 'maxidespensa.com.gt', country: 'Guatemala' },

    // EL SALVADOR
    { name: 'Super Selectos', logo: superSelectosLogo, website: 'https://www.superselectos.com/Contactenos', country: 'El Salvador' },
  ];

  const filteredSupermarkets = supermarkets.filter(s => s.country === selectedCountry);
  const countries: Country[] = ['Nicaragua', 'Costa Rica', 'Guatemala', 'El Salvador'];

  return (
    <section id="supermarkets" className="py-16 bg-[#F5F3EE] relative overflow-hidden">
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `url(${textureBackground})`,
          backgroundSize: '200px 200px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '0px', color: '#111111' }}>
            Disponible en Supermercados
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '150%', color: '#3A3A3A' }}>
            Encuentre nuestros productos en las principales cadenas de supermercados de la región
          </p>
        </div>

        {/* Country Tabs */}
        <div className="flex justify-center mb-7">
          <div className="inline-flex p-1 gap-1 flex-wrap justify-center" style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E5E5' }}>
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className="px-6 py-4 transition-all duration-300 whitespace-nowrap"
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

        {/* Premium Logo Grid - Evenly distributed with consistent sizing */}
        <div className="flex justify-evenly items-center flex-wrap max-w-7xl mx-auto px-8">
          {filteredSupermarkets.map((supermarket, index) => (
            <a
              key={index}
              href={supermarket.website.startsWith('http') ? supermarket.website : `https://${supermarket.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center transition-all duration-300"
              style={{
                opacity: 0.85,
                cursor: 'pointer',
                margin: '32px',
                width: '220px',
                height: '120px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={supermarket.logo}
                alt={supermarket.name}
                className="object-contain"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
