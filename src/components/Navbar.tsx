'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 transition-all duration-300 top-6 px-4">
      <div className="max-w-[1400px] mx-auto flex justify-center w-full">
        <div
          className="navbar_container flex items-center justify-between w-full lg:w-auto bg-white border-2 border-black min-h-[3.8rem] lg:min-h-[4.5rem]"
          style={{
            borderRadius: '12px',
            paddingLeft: '1.25rem',
            paddingRight: '1rem',
            gap: '2.5rem',
          }}
        >

          {/* Logo */}
          <Link href="/" aria-current="page" className="navbar_logo-link w-nav-brand w--current shrink-0" aria-label="home">
            <img
              src="/logos/thumbstop.png"
              loading="lazy"
              alt="Thumbstop logo"
              className="navbar_logo h-6 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav role="navigation" className="navbar_menu w-nav-menu hidden lg:flex items-center flex-1">
            <div
              className="navbar_menu-link-wrapper flex items-center bg-[#F3F4F6] p-1.5"
              style={{ borderRadius: '10px' }}
            >
              <Link
                href="/"
                aria-current="page"
                className="navbar_link w-nav-link w--current px-6 py-2.5 bg-white shadow-sm transition-all text-sm font-bold text-black border border-black"
                style={{ borderRadius: '8px' }}
              >
                Ad Creatives
              </Link>
              <Link
                href="/gen-ai"
                className="navbar_link w-nav-link px-6 py-2.5 hover:bg-white/50 transition-all text-sm font-bold text-gray-600"
                style={{ borderRadius: '8px' }}
              >
                Gen AI
              </Link>
            </div>

          </nav>

          {/* Right Actions */}
          <div className="navbar_button-wrapper flex items-center gap-4 shrink-0">
            <a
              href="#book"
              className="button is-small hide-mobile-portrait w-button px-6 py-3 font-bold text-xs text-white bg-[#ff09b8] border-2 border-black hover:opacity-90 transition-opacity hidden sm:block uppercase tracking-wider"
              style={{
                borderRadius: '10px',
                boxShadow: '4px 4px 0px 0px #000000',
                color: '#FFFFFF'
              }}
            >
              BOOK A CALL
            </a>

            {/* Hamburger */}
            <div
              className="navbar_menu-button w-nav-button p-2 cursor-pointer lg:hidden"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 mx-auto max-w-[400px]">
          <div
            className="bg-white border-2 border-black p-4 space-y-4"
            style={{ borderRadius: '12px', boxShadow: '4px 4px 0px 0px #000000' }}
          >
            <Link href="/" className="block px-4 py-3 font-bold text-black bg-gray-100 border border-black" style={{ borderRadius: '8px' }}>
              Ad Creatives
            </Link>
            <Link href="/gen-ai" className="block px-4 py-3 font-bold text-gray-600 hover:bg-gray-50" style={{ borderRadius: '8px' }}>
              Gen AI
            </Link>
            <a
              href="#book"
              className="block px-4 py-3 font-bold text-center text-white bg-[#ff09b8] border-2 border-black uppercase"
              style={{ borderRadius: '10px', boxShadow: '4px 4px 0px 0px #000000' }}
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
