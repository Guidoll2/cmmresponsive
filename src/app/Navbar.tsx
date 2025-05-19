'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { href: '#alarmas', label: 'Alarmas' },
    { href: '#cctv', label: 'CCTV' },
    { href: '#industrias', label: 'Industrias' },
    { href: '/tienda', label: 'Tienda', external: true },
    { href: '#contacto', label: 'Contacto' },
    { href: '/portalclientes', label: 'Clientes', external: true, highlight: true }
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-lg">
 <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-20">
        {/* Logo */}
        <Link href="/" className="hidden md:flex items-center z-50">
          <img src="/logogrande.png" alt="CMM Logo" width={130} height={44} className="opacity-95 hover:opacity-100 transition" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? '_blank' : '_self'}
                className={`font-semibold px-4 py-2 rounded transition-colors duration-200 ${
                  link.highlight
                    ? 'bg-blue-600 text-white shadow hover:bg-blue-700'
                    : 'text-gray-800 hover:text-blue-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none z-50"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-7 h-1 bg-gray-800 rounded mb-1"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-7 h-1 bg-gray-800 rounded mb-1"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-7 h-1 bg-gray-800 rounded"
          />
        </button>

        {/* Mobile Menu */}
       <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-white shadow-2xl z-40 flex flex-col"
            >
              <div className="flex flex-col items-center justify-center px-6 py-8 border-b">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img src="/logogrande.png" alt="CMM Logo" width={120} height={40} className="opacity-95 mb-2" />
                </Link>
              
              </div>
              <ul className="flex flex-col gap-4 px-8 py-8">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      className={`block font-semibold text-lg px-4 py-3 rounded transition-colors duration-200 ${
                        link.highlight
                          ? 'bg-blue-600 text-white shadow hover:bg-blue-700'
                          : 'text-gray-800 hover:text-blue-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}