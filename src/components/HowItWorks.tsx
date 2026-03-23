export default function HowItWorks() {
  const steps = [
    'Compra en USA',
    'Recibimos tu paquete',
    'Lo enviamos',
    'Recíbelo en tu país',
  ]

  return (
    <section id="como-funciona" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bebas mb-10">Cómo funciona</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <span className="text-2xl font-bold text-primary-500">
                {i + 1}
              </span>
              <p className="mt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}