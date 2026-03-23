"use client";
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { NavbarProps } from '@/types';

const Header = (props: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/98 backdrop-blur-sm' : 'bg-gray-900/95'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <Navbar {...props} />
      </div>
    </header>
  );
};

export default Header;