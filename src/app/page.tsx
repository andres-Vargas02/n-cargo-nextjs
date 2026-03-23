import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Calculator from '@/components/sections/Calculator';
import Destinations from '@/components/sections/Destinations';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import { navLinks, steps, testimonials, footerSections } from '@/data/content';

const cities = [
  { value: 'BOG', label: 'Bogotá, Colombia' },
  { value: 'MDE', label: 'Medellín, Colombia' },
  { value: 'CLO', label: 'Cali, Colombia' },
  { value: 'BAQ', label: 'Barranquilla, Colombia' },
  { value: 'CTG', label: 'Cartagena, Colombia' },
  { value: 'BUC', label: 'Bucaramanga, Colombia' },
  { value: 'PEI', label: 'Pereira, Colombia' },
  { value: 'MAN', label: 'Manizales, Colombia' },
  { value: 'MEX', label: 'Ciudad de México, México' },
  { value: 'GDL', label: 'Guadalajara, México' },
  { value: 'MTY', label: 'Monterrey, México' },
  { value: 'PUE', label: 'Puebla, México' },
  { value: 'TIJ', label: 'Tijuana, México' },
  { value: 'CUN', label: 'Cancún, México' },
  { value: 'MER', label: 'Mérida, México' },
  { value: 'LEO', label: 'León, México' },
];

export default function Home() {
  return (
    <>
      <Header links={navLinks} />
      <main>
        <Hero
          title="Tu Casillero Internacional en Miami"
          subtitle="Recibe paquetes de tiendas de EE.UU. en Colombia y México. Rápido, seguro y al mejor precio."
          features={['Casillero GRATIS', 'Sin membresía', 'Entrega 3-5 días']}
          ctaText="Crear mi casillero gratis"
          trustText="Únete a más de 10,000 clientes que confían en nosotros"
        />
        <Calculator cities={cities} />
        <Destinations />
        <HowItWorks steps={steps} />
        <Testimonials testimonials={testimonials} />
        <CTA />
      </main>
      <Footer sections={footerSections} />
    </>
  );
}