'use client';

import { useState } from 'react';
import { SearchIcon } from '../icons';

export default function SearchForm() {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Specialty, condition, or doctor"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
          />
        </div>
        
        <div className="hidden md:block w-px bg-gray-200"></div>
        
        <div className="flex-1">
          <input
            type="text"
            placeholder="City or Zip Code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSearching}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
        >
          {isSearching ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <SearchIcon className="w-5 h-5" />
              <span>Search Doctor</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}