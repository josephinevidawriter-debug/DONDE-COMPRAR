import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

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
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1690983323238-0b91789e1b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Premium beef"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '0px', color: '#FFFFFF' }}>
            Contáctenos
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '150%', color: 'rgba(255,255,255,0.82)' }}>
            Nuestro equipo comercial está listo para atender sus necesidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* National Sales - Featured */}
            <div className="bg-brand-gold p-10 relative overflow-hidden">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-brand-dark text-brand-gold text-xs font-bold mb-4 tracking-wide">
                  OFICINA PRINCIPAL
                </span>
                <h3 className="text-3xl font-bold text-brand-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                  Ventas Nacionales
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-dark text-lg">Managua, Nicaragua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-dark text-lg">(505) 2248-4356</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-dark mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:ventasnic@san-martin.com.ni" className="text-brand-dark hover:underline break-all font-medium text-lg">
                      ventasnic@san-martin.com.ni
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* International Sales */}
            <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
              <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                Ventas Internacionales
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-brand-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/80">Managua, Nicaragua</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-brand-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/80">(505) 2254-5011</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-brand-gold mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:exportsales@san-martin.com.ni" className="text-brand-gold hover:underline break-all">
                      exportsales@san-martin.com.ni
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              Envíenos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="salesType" className="block text-sm font-medium text-white mb-2">
                  Tipo de consulta
                </label>
                <select
                  id="salesType"
                  name="salesType"
                  value={formData.salesType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold text-white"
                >
                  <option value="national" className="bg-brand-dark">Ventas Nacionales</option>
                  <option value="international" className="bg-brand-dark">Ventas Internacionales</option>
                  <option value="distributor" className="bg-brand-dark">Ser Distribuidor</option>
                  <option value="general" className="bg-brand-dark">Consulta General</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold text-white placeholder-white/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold text-white placeholder-white/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                  País
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold text-white placeholder-white/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none text-white placeholder-white/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 bg-white hover:bg-brand-gold transition-all duration-300 text-[16px] lg:text-[18px]"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: '100%', letterSpacing: '0.5px', color: '#111111', height: '56px', border: 'none', borderRadius: '0px' }}
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
