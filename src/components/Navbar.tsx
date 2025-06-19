'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 animate-slide-in-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center animate-bounce-in">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Frec</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 hover-lift animate-fade-in-up animate-delay-100">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 hover-lift animate-fade-in-up animate-delay-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 hover-lift animate-fade-in-up animate-delay-300">
              Contact
            </Link>
            <Link href="/download" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-lift animate-fade-in-up animate-delay-400">
              Download App
            </Link>
          </div>

          {/* Mobile menu button - simplified */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-all duration-300 hover-scale animate-fade-in-up animate-delay-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-20 z-40"
            onClick={toggleMenu}
          />
          {/* Dropdown menu from top */}
          <div className="fixed top-0 left-0 w-full bg-gradient-to-br from-purple-600/90 to-pink-400/90 bg-white/30 backdrop-blur-md rounded-b-2xl shadow-xl z-50 animate-slide-in-top">
            <div className="flex justify-between items-center px-4 pt-4 pb-2">
              <span className="text-xl font-bold text-white drop-shadow">Menu</span>
              <button onClick={toggleMenu} aria-label="Close menu" className="text-gray-700 hover:text-purple-600 text-2xl p-2">
                &times;
              </button>
            </div>
            <div className="flex flex-col px-4 pb-4 space-y-2">
              <Link href="/" className="block text-white hover:text-purple-200 transition-colors duration-500 py-3 px-4 rounded text-lg font-medium" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="block text-white hover:text-purple-200 transition-colors duration-500 py-3 px-4 rounded text-lg font-medium" onClick={toggleMenu}>About</Link>
              <Link href="/contact" className="block text-white hover:text-purple-200 transition-colors duration-500 py-3 px-4 rounded text-lg font-medium" onClick={toggleMenu}>Contact</Link>
              <Link href="/download" className="block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-500 text-lg" onClick={toggleMenu}>Download App</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  )
} 