"use client";
import { useState } from 'react';
import { NavLink } from '@/types';
import Button from '../ui/Button';

interface NavbarProps {
  links: NavLink[];
}

const Navbar = ({ links }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="flex items-center space-x-2 group">
        <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
          <span className="text-white font-bold text-xl">N</span>
        </div>
        <span className="text-xl font-bold text-white">
          N-<span className="text-blue-400">CARGO</span>
        </span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button variant="outline" size="sm">
          Mi Casillero
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 md:hidden">
          <ul className="py-4">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <Button variant="outline" size="sm" className="w-full">
                Mi Casillero
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;