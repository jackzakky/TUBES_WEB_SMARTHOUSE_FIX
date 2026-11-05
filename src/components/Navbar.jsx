import React from 'react';

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="bg-[#18181b] border-b border-zinc-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Smart Rating */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl">🍿</span>
            <span className="text-red-600 font-black text-2xl tracking-wider uppercase font-sans">
              SMART <span className="text-amber-400">RATING</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari film, trailer, platform..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5 text-xs text-white focus:outline-none focus:border-red-600 w-52 sm:w-80 placeholder-zinc-500"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
