'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo1 from '../../public/logo1.png'
import logo2 from '../../public/logo2.png'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)

    setActiveHash(window.location.hash)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Customer', href: '/#third' },
    { name: 'Captain', href: '/#fourth' },
    { name: 'Benefits', href: '/#fivth' },
    { name: 'Safety', href: '/#six' },
    { name: 'Services', href: '/#second' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 animate-slide-in-top transition-colors duration-500 ${
        scrolled ? 'bg-[#411B66] shadow-lg' : 'bg-[#411B66]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-18">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <Image src={logo1} alt="Frecfast logo" width={40} height={40} />
            <Image src={logo2} alt="Frecfast logo" width={40} height={40} />
          </Link>

          {/* Center: Navigation (hidden on lg-) */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-[#F6ED87]'
                    : 'text-white hover:text-purple-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button (hidden on lg-) */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className={`font-semibold py-2 px-6 rounded-full border-2 border-[#9F712C] transition-all duration-300 ${
                pathname == '/contact'
                  ? 'text-[#F6ED87] bg-[#7544A6] hover:bg-[#9e5ddf]'
                  : 'bg-[#7544A6] hover:bg-[#af71ed] text-white'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button (visible below lg) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white bg-purple-700 hover:bg-purple-800 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full bg-[#411B66] z-50 shadow-lg animate-slide-in-top">
          <div className="flex justify-between items-center px-4 py-4">
            <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={toggleMenu} className="text-white text-2xl">
              &times;
            </button>
          </div>
          <div className="flex flex-col px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-[#F6ED87]'
                    : 'text-white hover:text-purple-400'
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              // href="/contact"
              className={`font-semibold py-3 px-6 rounded-full border-2 border-[#9F712C] ${
                pathname === '/contact'
                  ? 'text-[#F6ED87] bg-[#7544A6] hover:bg-[#9e5ddf]'
                  : 'bg-[#7544A6] hover:bg-[#af71ed] text-white'
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
