// src/components/Navbar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const navLinkStyle =
    'block px-3 py-2 rounded-md text-gray-700 hover:text-[#F8420B] hover:bg-gray-100';

  return (
    <nav className="bg-white shadow-md z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-[#83E213]">
            Troya Dispensary
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-[#F8420B] focus:outline-none"
              >
                Language
                <svg
                  className="ml-1 h-4 w-4 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  {['en', 'th', 'fr'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {lang === 'en' ? 'English' : lang === 'th' ? 'ภาษาไทย' : 'Français'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#F8420B] focus:outline-none"
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
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12' // X icon
                      : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-20 md:hidden px-4 py-4 space-y-3">
          <NavLink to="/about" className={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>

          {/* Language Selector in Mobile Menu */}
          <div className="border-t border-gray-200 pt-2">
            <span className="block text-sm text-gray-500 mb-1">Language</span>
            <div className="space-y-1">
              {['en', 'th', 'fr'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleLanguageChange(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {lang === 'en' ? 'English' : lang === 'th' ? 'ภาษาไทย' : 'Français'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
