'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100'
      : 'bg-transparent'
      }`}>
      <nav className="flex justify-between items-center py-2 lg:py-2 max-w-7xl mx-auto px-6">
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Empowered Nutrition - Return to homepage"
            className="group"
          >
            <Image
              src="/Empowered_SQ_logo.png"
              width={120}
              height={40}
              alt="Empowered Nutrition"
              priority
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
          <li>
            <a href="#services" className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-800 hover:text-[#41ab5d]' : 'text-gray-800 hover:text-[#41ab5d]'
              }`}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-800 hover:text-[#41ab5d]' : 'text-gray-800 hover:text-[#41ab5d]'
              }`}>
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-800 hover:text-[#41ab5d]' : 'text-gray-800 hover:text-[#41ab5d]'
              }`}>
              Success Stories
            </a>
          </li>
          <li>
            <a href="#resources" className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-800 hover:text-[#41ab5d]' : 'text-gray-800 hover:text-[#41ab5d]'
              }`}>
              Resources
            </a>
          </li>
          <li>
            <a href="#faq" className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-800 hover:text-[#41ab5d]' : 'text-gray-800 hover:text-[#41ab5d]'
              }`}>
              FAQ
            </a>
          </li>
          <li>
            <button className="group relative gradient-bg text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:from-emerald-400 hover:to-teal-400 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Started
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </li>
        </ul>

        <button
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          aria-label="Toggle mobile menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <ul className="space-y-6">
            <li>
              <a
                href="#services"
                className="block text-lg font-medium text-gray-800 hover:text-[#41ab5d] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-lg font-medium text-gray-800 hover:text-[#41ab5d] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block text-lg font-medium text-gray-800 hover:text-[#41ab5d] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="block text-lg font-medium text-gray-800 hover:text-[#41ab5d] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block text-lg font-medium text-gray-800 hover:text-[#41ab5d] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li className="pt-4">
              <button
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
