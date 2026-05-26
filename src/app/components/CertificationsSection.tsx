import haccp from '../../imports/haccp.png';
import fssc22000 from '../../imports/fssc22000.png';
import fda from '../../imports/foodandrugs-usa.png';
import usda from '../../imports/usda.png';
import ipsa from '../../imports/ipsa.png';
import ipsa6 from '../../imports/6ipsa.png';
import iso14001 from '../../imports/iso14001.png';
import ipsa4 from '../../imports/ipsa4.png';
import textureBackground from '../../imports/Screenshot_2026-05-25_at_5.27.53_PM.png';

export function CertificationsSection() {
  const certifications = [
    { name: 'USDA', label: 'USDA', logo: usda },
    { name: 'FDA', label: 'FDA', logo: fda },
    { name: 'FSSC 22000', label: 'FSSC 22000', logo: fssc22000 },
    { name: 'HACCP', label: 'HACCP', logo: haccp },
    { name: 'IPSA', label: 'IPSA', logo: ipsa },
    { name: 'IPSA Planta #4', label: 'IPSA Planta #4', logo: ipsa4 },
    { name: 'IPSA Planta #6', label: 'IPSA Planta #6', logo: ipsa6 },
    { name: 'ISO 14001', label: 'ISO 14001', logo: iso14001 },
  ];

  return (
    <section id="certifications" className="py-16 bg-[#F5F3EE] relative overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '0px', color: '#111111' }}>
            Certificaciones Internacionales
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '150%', color: '#3A3A3A' }}>
            Cumplimos con los estándares más exigentes de inocuidad, trazabilidad, calidad y sostenibilidad para exportación internacional.
          </p>
        </div>

        {/* Premium Grid - 4 columns × 2 rows - Logos even larger */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-12 gap-y-8 md:gap-y-10 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            // Reduce IPSA #4 and #6 by 10% to match proportions
            const logoScale = (cert.name === 'IPSA Planta #4' || cert.name === 'IPSA Planta #6') ? 2.05 : 2.28;

            return (
              <div
                key={cert.name}
                className="group flex items-center justify-center transition-all duration-500 hover:scale-110"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Logo - scaled proportionally */}
                <div className="h-[90px] md:h-[115px] w-full flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: `scale(${logoScale})` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
