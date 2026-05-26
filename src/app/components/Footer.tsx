import meatImage from '../../imports/Screenshot_2026-05-25_at_6.22.10_PM.png';

export function Footer() {
  return (
    <>
      {/* Decorative Product Image Transition */}
      <div className="bg-white relative pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center">
            <img
              src={meatImage}
              alt="Carnes San Martín"
              className="max-w-full h-auto"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>
      </div>

      {/* Scope Note - Client Presentation Only */}
      <footer className="bg-black text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-brand-gold/60 text-xs uppercase tracking-widest font-medium">
                Nota de alcance
              </span>
            </div>
            <div className="h-px w-16 bg-brand-gold/30 mx-auto mb-8"></div>
            <p
              className="text-white/70 leading-relaxed text-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Se conservarán el header (encabezado) y footer (pie de página) actualmente implementados en el sitio web.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
