// src/components/Navbar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    // Implement your language change logic here
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-[#F8420B] font-semibold' : 'text-gray-700 hover:text-[#F8420B]';

  return (
    <nav className="bg-white shadow-md z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-[#83E213]">
              Troya Dispensary
            </NavLink>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={linkClasses} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-[#F8420B] focus:outline-none"
            >
              Language
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('th')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  ภาษาไทย
                </button>
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Français
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
