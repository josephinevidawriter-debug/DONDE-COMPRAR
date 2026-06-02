import { Globe, ShoppingCart, Store } from 'lucide-react';

export function ChannelSelector() {
  const channels = [
    {
      icon: Globe,
      title: ['Exportación /', 'Ventas al Por Mayor'],
      description:
        'Abastecimiento comercial internacional, exportación y ventas mayoristas para distribuidores y compradores institucionales.',
      target: 'export',
      image:
        'https://images.unsplash.com/photo-1690983321750-ad6f6d59a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      icon: Store,
      title: ['Concesionarios /', 'Puntos de Venta'],
      description:
        'Encuentre nuestros concesionarios y puntos de venta autorizados más cercanos en Nicaragua, Costa Rica y Guatemala.',
      target: 'concessionaires',
      image:
        'https://images.unsplash.com/photo-1592686092916-672fa9e86866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      icon: ShoppingCart,
      title: ['Supermercados /', 'Puntos de Venta'],
      description:
        'Disponibilidad en cadenas de supermercados y tiendas retail en toda la región centroamericana.',
      target: 'supermarkets',
      image:
        'https://images.unsplash.com/photo-1690983322840-3bde693e178d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 140;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="channel-selector"
      className="
        relative
        min-h-[calc(100svh-80px)]
        bg-white
        pt-12
        pb-14
        md:min-h-0
        md:pt-16
        md:pb-16
      "
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-8 text-center md:mb-10">
          <h2
            className="text-[18px] uppercase md:text-[32px] lg:text-[42px]"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 600,
              lineHeight: '112%',
              letterSpacing: '-0.03em',
              color: '#111111',
            }}
          >
            Seleccione su canal de compra
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {channels.map((channel, index) => (
            <div
              key={channel.target}
              onClick={() => scrollToSection(channel.target)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-xl
                border
                border-black/5
                bg-white
                transition-all
                duration-700
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                md:flex
                md:flex-col
              "
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* MOBILE V3.7 */}
              <div className="flex items-center gap-4 p-5 md:hidden">
                <div className="relative h-[132px] w-[132px] shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={channel.image}
                    alt={channel.title.join(' ')}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute bottom-3 left-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold">
                      <channel.icon className="h-6 w-6 text-brand-dark" />
                    </div>
                  </div>
                </div>

                <div className="flex h-[132px] min-w-0 flex-1 flex-col items-start justify-center pr-2">
                  <h3
                    className="mb-2 text-[20px] leading-[112%]"
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 400,
                      color: '#111111',
                    }}
                  >
                    {channel.title[0].replace(' /', '')}
                  </h3>

                  <p
                    className="mb-3 text-[14px] leading-[160%]"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 400,
                      color: '#111111',
                    }}
                  >
                    {channel.title[1]}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(channel.target);
                    }}
                    className="
                      h-12
                      self-start
                      border
                      border-brand-dark
                      bg-white
                      px-5
                      text-[16px]
                      font-semibold
                      text-brand-dark
                      transition-all
                      duration-300
                      hover:border-brand-gold
                      hover:bg-brand-gold
                    "
                  >
                    Explorar
                  </button>
                </div>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:flex md:flex-1 md:flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                  <img
                    src={channel.image}
                    alt={channel.title.join(' ')}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex rounded-lg bg-brand-gold p-3 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-brand-gold/50">
                      <channel.icon className="h-8 w-8 text-brand-dark" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div
                    className="mb-4 flex items-start"
                    style={{ minHeight: '2.4em' }}
                  >
                    <h3
                      className="
                        text-[20px]
                        leading-[1.2]
                        md:text-[24px]
                        lg:text-[28px]
                      "
                      style={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 400,
                        color: '#111111',
                      }}
                    >
                      {channel.title.map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                  </div>

                  <div className="flex flex-1">
                    <p
                      className="text-[16px] leading-[1.7] lg:text-[18px]"
                      style={{
                        color: '#3A3A3A',
                        fontWeight: 400,
                      }}
                    >
                      {channel.description}
                    </p>
                  </div>

                  <button
                    className="
                      mt-4
                      h-12
                      self-start
                      border
                      border-brand-dark
                      bg-white
                      px-6
                      text-[16px]
                      font-semibold
                      text-brand-dark
                      transition-all
                      duration-300
                      hover:border-brand-gold
                      hover:bg-brand-gold
                    "
                  >
                    Explorar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}