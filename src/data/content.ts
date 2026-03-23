import { NavLink, Destination, Step, Testimonial, FooterSection } from '@/types';

export const navLinks: NavLink[] = [
  { href: '#', text: 'Inicio' },
  { href: '#', text: 'Servicios' },
  { href: '#', text: 'Cómo funciona' },
  { href: '#', text: 'Tarifas' },
  { href: '#', text: 'Rastrear' },
  { href: '#', text: 'Contacto' },
];

export const destinations: Destination[] = [
  {
    flag: '🇨🇴',
    city: 'Bogotá',
    country: 'Colombia',
    cities: ['🏙️ Bogotá', '🌺 Medellín', '🌿 Cali', '🌊 Barranquilla', '🏰 Cartagena', '⚙️ Bucaramanga', '☕ Pereira', '🌄 Manizales', '🌻 Armenia']
  },
  {
    flag: '🇲🇽',
    city: 'Ciudad de México',
    country: 'México',
    cities: ['🌆 CDMX', '🌵 Guadalajara', '⛰️ Monterrey', '🏛️ Puebla', '🌴 Cancún', '🏺 Mérida', '🌅 Tijuana', '🔮 León', '🌊 Veracruz']
  }
];

export const steps: Step[] = [
  {
    number: 1,
    title: 'Regístrate gratis',
    description: 'Crea tu cuenta en menos de 2 minutos y obtén tu dirección en Miami al instante.'
  },
  {
    number: 2,
    title: 'Compra en tiendas de EE.UU.',
    description: 'Usa tu dirección N-Cargo al checkout. Aceptamos paquetes de todas las tiendas.'
  },
  {
    number: 3,
    title: 'Recibe en tu país',
    description: 'Te notificamos cuando tu paquete llegue. Lo procesamos y lo enviamos a tu puerta.'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Luisa Cardona',
    location: 'Medellín, Colombia',
    flag: '🇨🇴',
    rating: 5,
    text: 'Excelente servicio. He recibido más de 20 paquetes y siempre han llegado a tiempo. El seguimiento en tiempo real es increíble.',
    initials: 'LC',
    avatarColors: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Andrés Morales',
    location: 'Guadalajara, México',
    flag: '🇲🇽',
    rating: 5,
    text: 'Ordené ropa, zapatos y electrónica. Todo llegó bien empacado y sin ningún problema con aduana. N-Cargo se encargó de todo.',
    initials: 'AM',
    avatarColors: 'from-red-500 to-red-900'
  },
  {
    name: 'Camila Pérez',
    location: 'Cali, Colombia',
    flag: '🇨🇴',
    rating: 5,
    text: 'El servicio al cliente es excepcional. Tuve una pregunta sobre los impuestos y me respondieron en minutos con todo explicado.',
    initials: 'CP',
    avatarColors: 'from-blue-800 to-blue-600'
  },
  {
    name: 'Roberto Guzmán',
    location: 'Monterrey, México',
    flag: '🇲🇽',
    rating: 4,
    text: 'Primera vez usando el servicio y quedé muy contento. El proceso es súper sencillo: creas tu casillero, envías tus compras y listo.',
    initials: 'RG',
    avatarColors: 'from-yellow-700 to-green-600'
  }
];

export const footerSections: FooterSection[] = [
  {
    title: 'Servicios',
    links: [
      { href: '#', text: 'Envíos USA → Colombia' },
      { href: '#', text: 'Envíos USA → México' },
      { href: '#', text: 'Casillero Internacional' },
      { href: '#', text: 'Rastreo de paquetes' },
      { href: '#', text: 'Consolidación' },
      { href: '#', text: 'Seguro de carga' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { href: '#', text: 'Sobre nosotros' },
      { href: '#', text: 'Blog' },
      { href: '#', text: 'Preguntas frecuentes' },
      { href: '#', text: 'Términos y condiciones' },
      { href: '#', text: 'Política de privacidad' },
      { href: '#', text: 'Trabaja con nosotros' }
    ]
  }
];