import { Globe, Store, ShoppingCart } from 'lucide-react';

export function ChannelSelector() {
  const channels = [
    {
      icon: Globe,
      title: 'Exportación /\nVentas al Por Mayor',
      description: 'Abastecimiento comercial internacional, exportación y ventas mayoristas para distribuidores y compradores institucionales.',
      target: 'export',
      image: 'https://images.unsplash.com/photo-1690983321750-ad6f6d59a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      icon: Store,
      title: 'Concesionarios / Puntos de Venta',
      description: 'Encuentre nuestros concesionarios y puntos de venta autorizados más cercanos en Nicaragua, Costa Rica y Guatemala.',
      target: 'concessionaires',
      image: 'https://images.unsplash.com/photo-1592686092916-672fa9e86866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      icon: ShoppingCart,
      title: 'Supermercados',
      description: 'Disponibilidad en cadenas de supermercados y tiendas retail en toda la región centroamericana.',
      target: 'supermarkets',
      image: 'https://images.unsplash.com/photo-1690983322840-3bde693e178d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="channel-selector" className="py-16 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] mb-6" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: '110%', letterSpacing: '0px', color: '#111111' }}>
            Seleccione su canal de compra
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '150%', color: '#3A3A3A' }}>
            Encuentre la opción que mejor se adapte a sus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {channels.map((channel, index) => (
            <div
              key={channel.target}
              className="group bg-white border border-border overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer flex flex-col"
              onClick={() => scrollToSection(channel.target)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Image with sophisticated overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={channel.image}
                  alt={channel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Icon with premium treatment */}
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex p-4 bg-brand-gold shadow-lg group-hover:shadow-brand-gold/50 transition-all duration-500 group-hover:scale-110">
                    <channel.icon className="h-8 w-8 text-brand-dark" />
                  </div>
                </div>
              </div>

              {/* Content with refined spacing */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-gold transition-colors duration-500 whitespace-pre-line" style={{ fontFamily: 'var(--font-serif)' }}>
                  {channel.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {channel.description}
                </p>

                {/* CTA with enhanced interaction */}
                <button className="self-start px-8 py-3 bg-white text-brand-dark border border-brand-dark hover:bg-brand-gold hover:border-brand-gold transition-all duration-500 font-medium group-hover:shadow-lg">
                  Explorar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}
