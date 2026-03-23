export default function Features() {
  const features = [
    'Entrega rápida',
    'Precios competitivos',
    'Seguimiento en tiempo real',
    'Soporte personalizado',
  ]

  return (
    <section id="beneficios" className="py-16 bg-dark-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bebas mb-10">Beneficios</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}