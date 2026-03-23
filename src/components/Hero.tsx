'use client'

import { useState } from 'react'

export default function Hero() {
  const [weight, setWeight] = useState(1)
  const [destination, setDestination] = useState<'col' | 'mex'>('col')

  const pricePerLb = destination === 'col' ? 4.5 : 5.5
  const total = weight * pricePerLb

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h1 className="text-5xl font-bebas leading-tight">
            Envíos rápidos desde USA a LATAM
          </h1>

          <p className="mt-4 text-dark-500">
            Recibe tus compras en Colombia o México en tiempo récord.
          </p>

          <a
            href="#cotizar"
            className="inline-block mt-6 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600"
          >
            Cotizar envío
          </a>
        </div>

        {/* Calculadora */}
        <div
          id="cotizar"
          className="bg-white p-6 rounded-2xl shadow-lg border"
        >
          <h3 className="font-semibold mb-4">Calculadora rápida</h3>

          <div className="mb-4">
            <label className="text-sm">Peso (lb)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setDestination('col')}
              className={`flex-1 py-2 rounded-lg ${
                destination === 'col'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              Colombia
            </button>

            <button
              onClick={() => setDestination('mex')}
              className={`flex-1 py-2 rounded-lg ${
                destination === 'mex'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              México
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-dark-500">Total estimado</p>
            <p className="text-3xl font-bold text-primary-600">
              ${total.toFixed(2)} USD
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}