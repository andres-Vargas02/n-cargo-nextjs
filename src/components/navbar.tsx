'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bebas text-2xl text-primary-500">N-CARGO</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#testimonios">Testimonios</a>
        </nav>

        <a
          href="#cotizar"
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Cotizar
        </a>
      </div>
    </header>
  )
}