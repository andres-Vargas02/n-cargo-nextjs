export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="font-bebas text-2xl">N-CARGO</h3>
        <p className="text-sm mt-2">
          Envíos internacionales rápidos y seguros
        </p>

        <p className="text-xs mt-6 opacity-70">
          © {new Date().getFullYear()} N-Cargo
        </p>
      </div>
    </footer>
  )
}