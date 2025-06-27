'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-sm text-gray-500 space-y-2">
          <p>© 2025 California Best Doc. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/privacy" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link 
              href="/terms" 
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}