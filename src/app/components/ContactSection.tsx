import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

// ---------- TOKENS LIGHT (San Martín) ----------
const TOKENS = {
  bg: '#E9E6E1',
  text: '#111111',
  textSoft: 'rgba(17,17,17,0.75)',
  textMuted: 'rgba(17,17,17,0.70)',
  gold: '#D4A849',
  cardBg: '#FFFFFF',
  cardBorder: 'rgba(17,17,17,0.08)',
  cardBorderHover: 'rgba(212,168,73,0.40)',
  tabInactiveBg: 'rgba(17,17,17,0.03)',
  divider: 'rgba(17,17,17,0.08)',
  iconSoft: 'rgba(17,17,17,0.60)',
  ctaBg: '#111111',
  ctaText: '#FFFFFF',
  ctaHoverBg: '#D4A849',
};

// Activar imagen de fondo de carne: cambiar a true (queda muteada)
const SHOW_MEAT_BG = false;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
    salesType: 'national',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border focus:outline-none focus:ring-2 transition-colors';
  const inputStyle: React.CSSProperties = {
    borderColor: TOKENS.cardBorder,
    color: TOKENS.text,
    borderRadius: 0,
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-20"
      style={{ backgroundColor: TOKENS.bg, color: TOKENS.text }}
    >
      {/* Background muted meat image (toggle SHOW_MEAT_BG) */}
      {SHOW_MEAT_BG && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ opacity: 0.06 }}
        >
          <img
            src="https://images.unsplash.com/photo-1690983323238-0b91789e1b5a?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid: left block (header + cards, vertically centered) / right (form) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 lg:items-stretch">
          {/* ---------- LEFT: header + cards, centered vertically vs form ---------- */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-8 lg:gap-10">
            {/* Header */}
            <header className="text-center lg:text-left">
              <h2
                className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[42px] mb-1"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 600,
                  lineHeight: '1.12',
                  letterSpacing: '-0.03em',
                  color: TOKENS.text,
                  textTransform: 'uppercase',
                }}
              >
                Contáctenos
              </h2>
              <p
                className="text-[15px] sm:text-[16px] lg:text-[18px] max-w-2xl mx-auto lg:mx-0"
                style={{ color: TOKENS.textSoft, lineHeight: 1.55 }}
              >
                Nuestro equipo comercial está listo para atender sus necesidades
              </p>
            </header>

            {/* Cards */}
            <aside className="grid grid-cols-2 lg:flex lg:flex-col gap-3 lg:gap-8">
              {/* National Sales — Featured (gold) */}
              <article
                className="p-3 lg:p-8 transition-colors duration-300 group"
                style={{
                  backgroundColor: TOKENS.gold,
                  border: `1px solid ${TOKENS.gold}`,
                  borderRadius: 0,
                }}
              >
                <h3
                className="text-[17px] lg:text-3xl font-bold mb-2 lg:mb-5 leading-[1.1]"
                  style={{ fontFamily: 'var(--font-serif)', color: TOKENS.text }}
                >
                  Ventas Nacionales
                </h3>
                <ul className="space-y-1.5 lg:space-y-3.5">
                <li className="hidden lg:flex items-start gap-3">
                    <span style={{ color: TOKENS.text }}>Managua, Nicaragua</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <a
    href="tel:..."
    className="hover:underline text-[11px] lg:text-base whitespace-nowrap"
  >
                      (505) 2248-4356
                    </a>
                  </li>
                </ul>
              </article>

              {/* International Sales — White card */}
              <article
               className="p-3 lg:p-8 transition-colors duration-300"
                style={{
                  backgroundImage: "url('https://sanmartin.com.ni/wp-content/uploads/2025/02/Careers.jpg')",
                  backgroundSize: '50px',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(255,255,255,0.14)'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = TOKENS.cardBorderHover)
                }
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = TOKENS.cardBorder)}
              >
                <h3
                 className="text-[17px] lg:text-2xl font-bold mb-2 lg:mb-5 leading-[1.1]"
                  style={{ fontFamily: 'var(--font-serif)', color: TOKENS.text }}
                >
                  Ventas Internacionales
                </h3>
              
                <ul className="space-y-1.5 lg:space-y-3.5">
                <li className="hidden lg:flex items-start gap-3">
                    <span style={{ color: TOKENS.textSoft }}>Managua, Nicaragua</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <a
    href="tel:..."
    className="hover:underline text-[11px] lg:text-base whitespace-nowrap"
  >
                      (505) 2254-5011
                    </a>
                  </li>
                </ul>
              </article>
            </aside>
          </div>

          {/* ---------- RIGHT: form, starts at header's top line ---------- */}
          <div
            className="lg:col-span-3 p-6 sm:p-8 lg:p-10"
            style={{
              backgroundColor: TOKENS.cardBg,
              border: `1px solid ${TOKENS.cardBorder}`,
              borderRadius: 0,
            }}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-serif)', color: TOKENS.text }}
            >
              Envíenos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  htmlFor="salesType"
                  className="block text-sm font-medium mb-1"
                  style={{ color: TOKENS.text }}
                >
                  Tipo de consulta
                </label>
                <select
                  id="salesType"
                  name="salesType"
                  value={formData.salesType}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="national">Ventas Nacionales</option>
                  <option value="international">Ventas Internacionales</option>
                  <option value="distributor">Ser Distribuidor</option>
                  <option value="general">Consulta General</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: TOKENS.text }}
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: TOKENS.text }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                    style={{ color: TOKENS.text }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1"
                    style={{ color: TOKENS.text }}
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-1"
                  style={{ color: TOKENS.text }}
                >
                  País
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                  style={{ color: TOKENS.text }}
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 transition-all duration-300 text-[15px] sm:text-[16px] lg:text-[18px]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '0.5px',
                  backgroundColor: TOKENS.ctaBg,
                  color: TOKENS.ctaText,
                  border: `1px solid ${TOKENS.ctaBg}`,
                  height: '40px',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = TOKENS.ctaHoverBg;
                  e.currentTarget.style.color = TOKENS.text;
                  e.currentTarget.style.borderColor = TOKENS.ctaHoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = TOKENS.ctaBg;
                  e.currentTarget.style.color = TOKENS.ctaText;
                  e.currentTarget.style.borderColor = TOKENS.ctaBg;
                }}
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}