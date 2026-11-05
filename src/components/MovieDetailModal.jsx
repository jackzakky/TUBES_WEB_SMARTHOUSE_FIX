import React, { useState } from 'react';

export default function MovieDetailModal({ movie, onClose, onAddReview }) {
  const [reviewerName, setReviewerName] = useState('');
  const [comment, setComment] = useState('');
  const [userRating, setUserRating] = useState(10);

  if (!movie) return null;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewerName || !comment) return;

    const newRev = {
      id: Date.now(),
      name: reviewerName,
      comment,
      rating: Number(userRating),
      date: new Date().toLocaleDateString('id-ID')
    };

    onAddReview(movie.id, newRev);
    setReviewerName('');
    setComment('');
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-20"
        >
          ✕
        </button>

        {/* Header Trailer Video Section */}
        <div className="w-full bg-black h-56 sm:h-80 relative">
          <iframe
            src={movie.trailerUrl}
            title={`Trailer ${movie.title}`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content Info */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-zinc-800 pb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 flex-wrap">
                <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  {movie.genre}
                </span>
                <span className="text-zinc-400 text-xs">{movie.releaseYear}</span>
                <span className="text-zinc-400 text-xs">• Sutradara: <strong className="text-zinc-200">{movie.director}</strong></span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{movie.title}</h2>
            </div>

            {/* Dynamic Rating Box */}
            <div className="flex items-center space-x-3 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
              <div className="text-center">
                <span className="text-xs text-zinc-400 block font-semibold">Rating Pengguna</span>
                <span className="text-xl font-black text-amber-400">⭐ {movie.rating.toFixed(1)} / 10</span>
                <span className="text-[10px] text-zinc-500 block">({movie.reviews.length} Ulasan)</span>
              </div>
            </div>
          </div>

          {/* Where to Watch Platform Section */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider mb-2 flex items-center space-x-1">
              <span>📺</span>
              <span>Di mana Tempat Nonton Resmi Film Ini?</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {movie.streamingPlatforms.map((platform, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sinopsis & Cast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h4 className="font-semibold text-xs text-zinc-400 uppercase tracking-wider">Sinopsis Ringkas</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">{movie.synopsis}</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs text-zinc-400 uppercase tracking-wider mb-2">Pemeran Utama</h4>
              <div className="flex flex-wrap gap-1.5">
                {movie.cast.map((actor, idx) => (
                  <span key={idx} className="bg-zinc-800 text-zinc-200 text-xs px-2.5 py-1 rounded border border-zinc-700">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Ulasan & Dynamic Rating Input */}
          <div className="border-t border-zinc-800 pt-6">
            <h3 className="text-base font-bold text-white mb-4">💬 Ulasan & Berikan Rating Anda</h3>

            <form onSubmit={handleReviewSubmit} className="mb-6 bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3">
              <h4 className="text-xs font-semibold text-zinc-300">Isi Form Ulasan (Rating Ini Akan Mengubah Rating Film)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  required
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-600"
                />
                <select
                  value={userRating}
                  onChange={(e) => setUserRating(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-600 font-bold text-amber-400"
                >
                  <option value="10">⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ (10/10)</option>
                  <option value="9">⭐⭐⭐⭐⭐⭐⭐⭐⭐ (9/10)</option>
                  <option value="8">⭐⭐⭐⭐⭐⭐⭐⭐ (8/10)</option>
                  <option value="7">⭐⭐⭐⭐⭐⭐⭐ (7/10)</option>
                  <option value="6">⭐⭐⭐⭐⭐⭐ (6/10)</option>
                  <option value="5">⭐⭐⭐⭐⭐ (5/10)</option>
                  <option value="4">⭐⭐⭐⭐ (4/10)</option>
                  <option value="3">⭐⭐⭐ (3/10)</option>
                  <option value="2">⭐⭐ (2/10)</option>
                  <option value="1">⭐ (1/10)</option>
                </select>
              </div>
              <textarea
                placeholder="Bagaimana pendapat Anda tentang alur cerita film ini?"
                rows="2"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-600"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow transition-colors"
              >
                Kirim Ulasan & Update Rating
              </button>
            </form>

            <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
              {movie.reviews.length === 0 ? (
                <p className="text-zinc-500 text-xs italic">Belum ada ulasan penonton. Jadilah yang pertama memberikan ulasan!</p>
              ) : (
                movie.reviews.map((rev) => (
                  <div key={rev.id} className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-xs text-zinc-200">{rev.name}</span>
                      <span className="text-xs text-amber-400">⭐ {rev.rating}/10</span>
                    </div>
                    <p className="text-zinc-300 text-xs">{rev.comment}</p>
                    <span className="text-[10px] text-zinc-500 mt-1 block">{rev.date}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
