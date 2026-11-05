import React from 'react';

export default function MovieCard({ movie, rank, onSelectMovie }) {
  return (
    <div 
      onClick={() => onSelectMovie(movie)}
      className="group relative cursor-pointer flex-shrink-0 w-44 sm:w-52 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-md hover:-translate-y-1.5"
    >
      {/* Poster Image */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-950">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop';
          }}
        />
        
        {/* Ranking Big Number */}
        {rank && (
          <div className="absolute bottom-2 left-2 text-6xl sm:text-7xl font-black text-black/80 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] select-none pointer-events-none font-mono">
            {rank}
          </div>
        )}

        {/* Rating Star Badge Top Right */}
        <div className="absolute top-2 right-2 bg-zinc-900/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-amber-400 border border-amber-500/30 flex items-center space-x-1">
          <span>⭐</span>
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Info Card */}
      <div className="p-3 bg-zinc-900">
        <h3 className="font-bold text-xs sm:text-sm text-zinc-100 truncate group-hover:text-amber-400 transition-colors">
          {movie.title}
        </h3>
        
        {/* Platform Nonton Singkat */}
        <p className="text-[10px] text-zinc-400 mt-1 truncate">
          Platform: <span className="text-zinc-200 font-semibold">{movie.streamingPlatforms.join(', ')}</span>
        </p>

        <div className="flex justify-between items-center mt-2 pt-2 border-t border-zinc-800/80">
          <span className="text-[11px] text-zinc-400">{movie.releaseYear}</span>
          <span className="text-[11px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            {movie.genre}
          </span>
        </div>
      </div>
    </div>
  );
}
