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
    <section id="certifications" className="py-16 md:py-20 bg-[#F5F3EE] relative overflow-hidden">
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
            Certificaciones Internacionales
          </h2>
          <p
    className="
      text-[16px]
      md:text-[18px]
      lg:text-[20px]
      leading-[170%]
      font-normal
      text-brand-dark/75
      mb-11
    "
  >
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
