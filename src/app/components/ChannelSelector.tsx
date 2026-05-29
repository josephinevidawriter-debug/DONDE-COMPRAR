import { Globe, Store, ShoppingCart } from 'lucide-react';




export function ChannelSelector() {
const channels = [
  {
    icon: Globe,
    title: ['Exportación /', 'Ventas al Por Mayor'],
    description: 'Abastecimiento comercial internacional, exportación y ventas mayoristas para distribuidores y compradores institucionales.',
    target: 'export',
    image: 'https://images.unsplash.com/photo-1690983321750-ad6f6d59a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Store,
    title: ['Concesionarios /', 'Puntos de Venta'],
    description: 'Encuentre nuestros concesionarios y puntos de venta autorizados más cercanos en Nicaragua, Costa Rica y Guatemala.',
    target: 'concessionaires',
    image: 'https://images.unsplash.com/photo-1592686092916-672fa9e86866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: ShoppingCart,
    title:['Supermercados /', 'Puntos de Venta'],
    description: 'Disponibilidad en cadenas de supermercados y tiendas retail en toda la región centroamericana.',
    target: 'supermarkets',
    image: 'https://images.unsplash.com/photo-1690983322840-3bde693e178d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];




const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
   const offset = 140; // espacio arriba
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
   window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth',
  });
};
 return (
   <section id="channel-selector" className="pt-14 md:pt-16 pb-16 md:pb-16 bg-white relative">
     <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
     <div className="text-center mb-6 w-full max-w-full overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12">


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
     color: '#111111',
     textTransform: 'uppercase'
   }}
 >
 Seleccione su canal de compra
 </h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {channels.map((channel, index) => (
   <div
     key={channel.target}
     className="
       min-w-0
       group
       bg-white
       border border-black/5
       rounded-xl
       overflow-hidden
       hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
       transition-all
       duration-700
       cursor-pointer
       flex
       flex-col
     "
     onClick={() => scrollToSection(channel.target)}
     style={{
       animationDelay: `${index * 100}ms`,
       animation: 'fadeInUp 0.8s ease-out forwards',
       opacity: 0
     }}
   >
             {/* Image with sophisticated overlay */}
             <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
               <img
                 src={channel.image}
                 alt={channel.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               {/* Multi-layer gradient overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
               <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>




               {/* Icon with premium treatment */}
               <div className="absolute bottom-6 left-6">
                 <div className="inline-flex p-3 bg-brand-gold rounded-lg shadow-md group-hover:shadow-brand-gold/50 transition-all duration-500 group-hover:scale-110">
                   <channel.icon className="h-8 w-8 text-brand-dark" />
                 </div>
               </div>
             </div>




             {/* Content with refined spacing */}
             <div className="p-6 flex flex-col flex-grow">
             <h3
 className="
   text-[20px]
   md:text-[24px]
   lg:text-[28px]
   mb-1
   leading-[1.2]
   min-h-[72px]
   md:min-h-[88px]
 "
 style={{
   fontFamily: '"Space Grotesk", sans-serif',
   fontWeight: 400,
   color: '#111111'
 }}
 >
 {Array.isArray(channel.title)
 ? channel.title.map((line, i) => (
     <span key={i}>
       {line}
       <br />
     </span>
   ))
 : channel.title}
 </h3>
 <p
 className="text-[16px] lg:text-[18px] mb-6 flex-grow leading-[1.7]"
 style={{
   color: '#3A3A3A',
   fontWeight: 400
 }}
 >
 {channel.description}
 </p>
               {/* CTA with enhanced interaction */}
               <button
 className="
   self-start
   h-12
   px-6
   bg-white
   text-brand-dark
   border border-brand-dark
   text-[16px]
   font-semibold
   transition-all
   duration-300
   hover:bg-brand-gold
   hover:border-brand-gold
 "
 >
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
