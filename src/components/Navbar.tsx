'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#E8524A] to-[#4DB8C8] flex items-center justify-center text-xl shadow-[0_4px_12px_rgba(232,82,74,0.3)]">
            🧠
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-xl font-extrabold tracking-tight">
              <span className="text-[#E8524A]">A</span>
              <span className="text-[#4DB8C8]">V</span>
              <span className="text-[#E8524A]">a</span>
              <span className="text-[#4DB8C8]">n</span>
              <span className="text-[#E8524A]">C</span>
              <span className="text-[#4DB8C8]">e</span>
            </div>
            <div className="text-[10px] text-gray-400 font-normal tracking-wide">Sis à Auxerre</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-[#1B3A5C] px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#34A0B0] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/adhesion"
            className="ml-2 bg-[#E8524A] hover:bg-[#C93E37] text-white text-[13.5px] font-semibold px-5 py-2 rounded-lg shadow-[0_2px_8px_rgba(232,82,74,0.35)] hover:shadow-[0_4px_16px_rgba(232,82,74,0.45)] hover:-translate-y-0.5 transition-all"
          >
            Adhérer →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[14px] font-medium text-[#1B3A5C] py-2 hover:text-[#34A0B0] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/adhesion"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#E8524A] text-white text-[14px] font-semibold px-4 py-3 rounded-lg text-center"
          >
            Adhérer →
          </Link>
        </div>
      )}
    </nav>
  )
}
