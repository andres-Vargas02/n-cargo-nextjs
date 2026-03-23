export default function Testimonials() {
  const data = [
    {
      name: 'Carlos',
      text: 'Excelente servicio, llegó rápido.',
    },
    {
      name: 'Ana',
      text: 'Muy confiable y económico.',
    },
  ]

  return (
    <section id="testimonios" className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bebas mb-10">Testimonios</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((t, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <p>{t.text}</p>
              <span className="block mt-4 font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}