"use client";
import { useState } from 'react';
import { CalculatorProps } from '@/types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

const Calculator = ({ cities }: CalculatorProps) => {
  const [formData, setFormData] = useState({
    city: '',
    weight: '',
    height: '',
    width: '',
    length: '',
    value: ''
  });
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateShipping = () => {
    if (!formData.city || !formData.weight) {
      alert('Por favor selecciona un destino e ingresa el peso del paquete.');
      return;
    }

    setIsCalculating(true);
    
    setTimeout(() => {
      const weight = parseFloat(formData.weight) || 0;
      const height = parseFloat(formData.height) || 0;
      const width = parseFloat(formData.width) || 0;
      const length = parseFloat(formData.length) || 0;
      const value = parseFloat(formData.value) || 0;

      const rates: { [key: string]: number } = {
        'BOG': 4.5, 'MDE': 4.7, 'CLO': 4.8, 'BAQ': 5.0, 'CTG': 5.0,
        'BUC': 5.2, 'PEI': 5.3, 'MAN': 5.3,
        'MEX': 5.0, 'GDL': 5.2, 'MTY': 5.3, 'PUE': 5.5, 'TIJ': 5.8,
        'CUN': 5.7, 'MER': 5.9, 'LEO': 5.6
      };

      const ratePerLb = rates[formData.city] || 5.0;
      const volWeight = (height * width * length) / 166;
      const billableWeight = Math.max(weight, volWeight);
      let total = billableWeight * ratePerLb + 15;

      if (value > 200) total += value * 0.019;

      setResult(total);
      setIsCalculating(false);
    }, 900);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calcula tu envío en segundos
            </h2>
            <p className="text-xl text-gray-600">
              Obtén una estimación precisa del costo de tu paquete
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Select
                label="Ciudad de destino"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                options={cities}
              />
              <Input
                label="Peso (libras)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Ej: 5.5"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Input
                label="Alto (pulgadas)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Altura"
              />
              <Input
                label="Ancho (pulgadas)"
                name="width"
                type="number"
                value={formData.width}
                onChange={handleInputChange}
                placeholder="Ancho"
              />
              <Input
                label="Largo (pulgadas)"
                name="length"
                type="number"
                value={formData.length}
                onChange={handleInputChange}
                placeholder="Largo"
              />
            </div>

            <div className="mb-8">
              <Input
                label="Valor del paquete (USD) - opcional"
                name="value"
                type="number"
                value={formData.value}
                onChange={handleInputChange}
                placeholder="Para seguro"
              />
            </div>

            <Button 
              variant="primary" 
              size="lg" 
              onClick={calculateShipping}
              disabled={isCalculating}
              className="w-full"
            >
              {isCalculating ? 'Calculando...' : 'Calcular Envío'}
            </Button>

            {result !== null && (
              <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-2">Costo estimado del envío:</p>
                <p className="text-4xl font-bold text-blue-600">
                  ${result.toFixed(2)} USD
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Incluye manejo y seguro básico
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;