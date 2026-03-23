'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

interface QuoteData {
  origin: string
  destination: string
  weight: number
}

export default function QuoteCalculator() {
  const [formData, setFormData] = useState<QuoteData>({
    origin: 'Los Ángeles, CA',
    destination: '',
    weight: 0,
  })
  
  const [quote, setQuote] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'weight' ? parseFloat(value) || 0 : value
    }))
  }

  const calculateQuote = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular API call
    setTimeout(() => {
      const baseRate = 2.80
      const total = formData.weight * baseRate
      setQuote(total)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="bg-dark-900 text-primary-500 font-bebas text-xl tracking-wider text-center py-3 -mx-6 -mt-6 mb-6 rounded-t-2xl">
        COTIZADOR
      </div>
      
      <form onSubmit={calculateQuote} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Origen
          </label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            readOnly
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50"
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Destino
          </label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          >
            <option value="">Selecciona un destino</option>
            <option>Bogotá, Colombia</option>
            <option>Medellín, Colombia</option>
            <option>Cali, Colombia</option>
            <option>Barranquilla, Colombia</option>
            <option>Ciudad de México, México</option>
            <option>Guadalajara, México</option>
          </select>
        </div>
        
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Peso (lb)
          </label>
          <input
            type="number"
            name="weight"
            value={formData.weight || ''}
            onChange={handleInputChange}
            placeholder="Ej. 10"
            min="1"
            step="0.1"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        
        {quote && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Tu cotización:</p>
            <p className="text-2xl font-bold text-dark-900">
              ${quote.toFixed(2)} USD
            </p>
          </div>
        )}
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'CALCULANDO...' : 'CALCULAR MI ENVÍO'}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full"
        >
          💬 O CHATEA CON NOSOTROS
        </Button>
      </form>
    </div>
  )
}