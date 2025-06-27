'use client';

import Link from 'next/link';
import { CircleUserRound } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isSigningIn, setIsSigningIn] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-blue-600">
            <Image src="/logo.png" alt="California Best Doc" width={50} height={50} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-blue-600 leading-tight">
              California Best
              <span className="block -mt-1">Doc</span>
            </h1>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <Link
            href="/docwatch"
            className="px-4 py-2 text-gray-600 border border-gray-200 rounded-md shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow font-medium transition-all"
          >
            DocWatch
          </Link>

          <button
            onClick={() => setIsSigningIn(!isSigningIn)}
            className="px-4 py-2 flex items-center space-x-2 text-gray-600 border border-gray-200 rounded-md shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow font-medium transition-all"
          >
            <CircleUserRound className="w-5 h-5" />
            <span className="font-medium">Sign in/up</span>
          </button>
        </nav>
      </div>
    </header>
 );
}
