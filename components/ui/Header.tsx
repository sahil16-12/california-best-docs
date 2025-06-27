'use client';

import Link from 'next/link';
import { CircleUserRound, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-blue-600">
            <Image src="/xyz.png" alt="California Best Docs" width={45} height={45} className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-blue-600 leading-tight">
              California Best
              <span className="block -mt-1">Docs</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="px-4 py-2 text-gray-600 border border-gray-200 rounded-md shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow font-medium transition-all"
          >
            DocWatch
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 flex items-center space-x-2 text-gray-600 border border-gray-200 rounded-md shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow font-medium transition-all"
          >
            <CircleUserRound className="w-5 h-5" />
            <span className="font-medium">Sign in/up</span>
          </Link>
        </nav>

        {/* Mobile menu button - Only visible on mobile */}
        <button 
          className="md:hidden flex items-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Only shown when menu is open */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white">
          <Link
            href="/docwatch"
            className="block w-full px-4 py-2 text-center text-gray-600 border border-gray-200 rounded-md shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow font-medium transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            DocWatch
          </Link>

          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full px-4 py-2 flex items-center justify-center space-x-2 text-gray-600 border border-gray-200 rounded-md shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow font-medium transition-all"
          >
            <CircleUserRound className="w-5 h-5" />
            <span className="font-medium">Sign in/up</span>
          </Link>
        </div>
      )}
    </header>
  );
}