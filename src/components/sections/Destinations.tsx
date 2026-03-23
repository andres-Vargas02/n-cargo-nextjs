"use client";
import { useState } from 'react';
import { Destination } from '@/types';
import CityChip from '../common/CityChip';

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState<'co' | 'mx'>('co');

  const destinations: { [key: string]: Destination } = {
    co: {
      flag: '🇨🇴',
      city: 'Bogotá',
      country: 'Colombia',
      cities: ['🏙️ Bogotá', '🌺 Medellín', '🌿 Cali', '🌊 Barranquilla', '🏰 Cartagena', '⚙️ Bucaramanga', '☕ Pereira', '🌄 Manizales', '🌻 Armenia']
    },
    mx: {
      flag: '🇲🇽',
      city: 'Ciudad de México',
      country: 'México',
      cities: ['🌆 CDMX', '🌵 Guadalajara', '⛰️ Monterrey', '🏛️ Puebla', '🌴 Cancún', '🏺 Mérida', '🌅 Tijuana', '🔮 León', '🌊 Veracruz']
    }
  };

  const currentDest = destinations[selectedCountry];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entregamos en toda Colombia y México
          </h2>
          <p className="text-xl text-gray-600">
            Cobertura nacional con tiempos de entrega competitivos
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            <button
              onClick={() => setSelectedCountry('co')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedCountry === 'co'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🇨🇴 Colombia
            </button>
            <button
              onClick={() => setSelectedCountry('mx')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedCountry === 'mx'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🇲🇽 México
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{currentDest.flag}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentDest.city}
            </h3>
            <p className="text-gray-600">{currentDest.country}</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {currentDest.cities.map((city, index) => (
              <CityChip key={index} text={city} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Entrega 3-5 días</h4>
            <p className="text-gray-600">Tiempo promedio de puerta a puerta</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Seguro incluido</h4>
            <p className="text-gray-600">Protección básica para tu paquete</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Seguimiento en vivo</h4>
            <p className="text-gray-600">Sabes dónde está tu paquete siempre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;