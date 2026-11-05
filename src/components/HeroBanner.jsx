import React, { useState } from 'react';

export default function HeroBanner({ featuredMovies, onSelectMovie }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!featuredMovies || featuredMovies.length === 0) return null;

  const currentMovie = featuredMovies[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredMovies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredMovies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[430px] sm:h-[480px] rounded-2xl overflow-hidden mb-10 shadow-2xl border border-zinc-800 bg-zinc-950 group">
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <img
          src={currentMovie.poster}
          alt={currentMovie.title}
          className="w-full h-full object-cover opacity-45 blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent"></div>
      </div>

      {/* Navigation Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all opacity-80 group-hover:opacity-100 border border-zinc-700"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all opacity-80 group-hover:opacity-100 border border-zinc-700"
      >
        ❯
      </button>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 p-6 sm:p-10 max-w-2xl z-10">
        <div className="flex items-center space-x-2 mb-2 flex-wrap gap-y-1">
          <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase">
            🍿 FEATURED TRAILER ({currentIndex + 1}/{featuredMovies.length})
          </span>
          <span className="bg-zinc-800/90 text-zinc-300 text-[10px] px-2 py-0.5 rounded border border-zinc-700 font-semibold">
            {currentMovie.genre}
          </span>
          <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] px-2 py-0.5 rounded font-bold">
            ⭐ {currentMovie.rating.toFixed(1)} / 10
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-md">
          {currentMovie.title}
        </h1>

        <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
          {currentMovie.synopsis}
        </p>

        {/* Streaming Info */}
        <div className="mb-5 flex items-center space-x-2">
          <span className="text-xs text-zinc-400 font-semibold">Tersedia Resmi Di:</span>
          <div className="flex space-x-1.5 flex-wrap gap-y-1">
            {currentMovie.streamingPlatforms.map((platform, idx) => (
              <span key={idx} className="bg-zinc-800 border border-zinc-700 text-zinc-200 text-[11px] px-2 py-0.5 rounded-full font-bold">
                📺 {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onSelectMovie(currentMovie)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm flex items-center space-x-2 shadow-lg transition-transform hover:scale-105"
          >
            <span>Detail</span>
          </button>
        </div>
      </div>

      {/* Pagination Indicators Dots */}
      <div className="absolute bottom-4 right-6 z-20 flex space-x-2">
        {featuredMovies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? 'w-6 bg-red-600' : 'w-2 bg-zinc-600 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
