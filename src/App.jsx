import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MovieCard from './components/MovieCard';
import MovieDetailModal from './components/MovieDetailModal';
import p1 from './img/p1.jfif';
import p2 from './img/p2.jfif';
import p3 from './img/p3.jfif';
import p4 from './img/p4.jfif';
import p5 from './img/p5.jfif';
import p6 from './img/p6.jfif';
import i1 from './img/i1.jfif';
import i2 from './img/i2.jfif';
import i3 from './img/i3.jfif';
import i4 from './img/i4.jfif';
import i5 from './img/i5.jfif';
import i6 from './img/i6.jpg';
import l1 from './img/l1.jfif';
import l2 from './img/l2.jpg';
import p7 from './img/p7.jfif';
import p8 from './img/p8.jpg';


// List Film Bentuknya make array of object
const INITIAL_MOVIES = [
  // --- 1. FILM TRENDING GLOBAL ---
  {
    id: 101,
    title: 'You Can See Everything (2026)',
    category: 'imdb',
    director: 'Denis Villeneuve',
    genre: 'Drama / Thriller',
    releaseYear: 2026,
    rating: 9.2,
    poster: p1,
    trailerUrl: 'https://www.youtube.com/embed/HvW_N5p1q44',
    streamingPlatforms: ['Bioskop XXI', 'IMAX', 'Apple TV'],
    synopsis: 'Film drama/thriller misteri psikologis mendalam yang mengungkap konspirasi pengawasan global skala besar.',
    cast: ['Cillian Murphy', 'Florence Pugh'],
    reviews: [{ id: 1, name: 'Siswa', comment: 'Alur cerita luar biasa cerdas!', rating: 9.5, date: '31/10/2026' }]
  },
  {
    id: 102,
    title: 'Clayface (2026)',
    category: 'imdb',
    director: 'Mike Flanagan',
    genre: 'Aksi / Horor / Thriller',
    releaseYear: 2026,
    rating: 7.5,
    poster: p2,
    trailerUrl: 'https://www.youtube.com/embed/OGO4Mqvo3jI',
    streamingPlatforms: ['Bioskop XXI', 'HBO Max'],
    synopsis: 'Transformasi horor mengerikan seorang aktor panggung yang menjadi monster tanah liat berbahaya di Gotham City.',
    cast: ['Tom Hiddleston', 'Willem Dafoe'],
    reviews: []
  },
  {
    id: 103,
    title: 'Wildwood (2026)',
    category: 'imdb',
    director: 'Travis Knight',
    genre: 'Animasi / Fantasi',
    releaseYear: 2026,
    rating: 8.7,
    poster: p3,
    synopsis: 'Petualangan animasi stop-motion seorang gadis muda yang masuk ke dalam hutan ajaib terlarang untuk menyelamatkan adiknya.',
    trailerUrl: 'https://www.youtube.com/embed/dtr5JL1zkiM',
    streamingPlatforms: ['Bioskop XXI', 'Netflix'],
    cast: ['Peyton Elizabeth Lee', 'Jacob Tremblay'],
    reviews: []
  },
  {
    id: 104,
    title: 'Street Fighter (2026)',
    category: 'imdb',
    director: 'Kitao Sakurai',
    genre: 'Aksi',
    releaseYear: 2026,
    rating: 6.2,
    poster: p4,
    trailerUrl: 'https://www.youtube.com/embed/U6sbm1OaJb8',
    streamingPlatforms: ['Bioskop XXI', 'Prime Video'],
    synopsis: 'Pertarungan turnamen bela diri dunia dalam adaptasi game bertarung legendaris penuh aksi memukau.',
    cast: ['Lewis Tan', 'Simu Liu'],
    reviews: []
  },
  {
    id: 105,
    title: 'Animals (2026)',
    category: 'imdb',
    director: 'Ben Affleck',
    genre: 'Thriller',
    releaseYear: 2026,
    rating: 5.7,
    poster: p5,
    trailerUrl: 'https://www.youtube.com/embed/mlBfQJ8oxB0',
    streamingPlatforms: ['Netflix'],
    synopsis: 'Seorang kandidat wali kota dan istrinya harus berpacu dengan waktu ketika putra mereka diculik oleh geng berbahaya.',
    cast: ['Matt Damon', 'Gillian Anderson'],
    reviews: []
  },
  {
    id: 106,
    title: 'Resident Evil (2026)',
    category: 'imdb',
    director: 'Zach Cregger',
    genre: 'Aksi / Horor',
    releaseYear: 2026,
    rating: 7.5,
    poster: p6,
    trailerUrl: 'https://www.youtube.com/embed/mNd1gb19A-c',
    streamingPlatforms: ['Bioskop XXI', 'Netflix'],
    synopsis: 'Misteri wabah T-Virus baru yang mencekam di fasilitas rahasia Umbrella Corporation.',
    cast: ['Kaya Scodelario', 'Robbie Amell'],
    reviews: []
  },

  // --- 2. FILM POPULER DI NETFLIX INDONESIA ---
  {
    id: 201,
    title: 'Napoleon Bonaparte',
    category: 'netflix',
    director: 'Ridley Scott',
    genre: 'Romance / War / Story',
    releaseYear: 2026,
    rating: 8.8,
    poster: i1,
    trailerUrl: 'https://www.youtube.com/embed/OAZWXUkrjPc',
    streamingPlatforms: ['Netflix Indonesia'],
    synopsis: 'mengisahkan perjalanan hidup naik-turun kaisar Prancis, Napoleon Bonaparte yang disorot melalui ambisi militernya yang besar serta hubungan asmaranya yang bergejolak dengan permaisurinya.',
    cast: ['Joaquin Phoenix,Vanessa Kirby,', 'Tahar Rahim'],
    reviews: []
  },
  {
    id: 202,
    title: 'Cerita Lila',
    category: 'netflix',
    director: 'Yandy Laurens',
    genre: 'Drama / Romantis',
    releaseYear: 2026,
    rating: 8.5,
    poster: i2,
    trailerUrl: 'https://www.youtube.com/embed/kY2XUULjXPo',
    streamingPlatforms: ['Netflix Indonesia'],
    synopsis: 'Peringkat #2 Film di Netflix Indonesia. Perjalanan emosional Lila menemukan jati diri dan arti cinta sejati.',
    cast: ['Sheila Dara', 'Reza Rahadian'],
    reviews: []
  },
  {
    id: 203,
    title: 'Kuyank',
    category: 'netflix',
    director: 'Rizal Mantovani',
    genre: 'Horor',
    releaseYear: 2026,
    rating: 7.9,
    poster: i3,
    trailerUrl: 'https://www.youtube.com/embed/z3ElDl-IWmc',
    streamingPlatforms: ['Netflix Indonesia'],
    synopsis: 'Peringkat #3 Film di Netflix Indonesia. Teror ilmu hitam pesugihan mahluk Kuyang di desa pedalaman.',
    cast: ['Putri Marino', 'Dimec Triyono'],
    reviews: []
  },
  {
    id: 204,
    title: 'Lembayung',
    category: 'netflix',
    director: 'Baim Wong',
    genre: 'Horor / Misteri',
    releaseYear: 2025,
    rating: 8.2,
    poster: i4,
    trailerUrl: 'https://www.youtube.com/embed/kTcW8zqnRFI',
    streamingPlatforms: ['Netflix Indonesia'],
    synopsis: 'Peringkat #4 Film di Netflix Indonesia. Kejadian supranatural mengerikan di poli gigi rumah sakit tua.',
    cast: ['Taskya Namya', 'Yasamin Jasem'],
    reviews: []
  },
  {
    id: 205,
    title: 'Khadam',
    category: 'netflix',
    director: 'Joko Anwar',
    genre: 'Horor / Misteri',
    releaseYear: 2026,
    rating: 8.0,
    poster: i5,
    trailerUrl: 'https://www.youtube.com/embed/OBRD0cZkx4s',
    streamingPlatforms: ['Netflix Indonesia'],
    synopsis: 'Peringkat #5 Film di Netflix Indonesia. Seseorang yang mewarisi khadam penjaga justru mendatangkan bencana keluarga.',
    cast: ['Tara Basro', 'Asmara Abigail'],
    reviews: []
  },

  // --- 3. FILM SEDANG TAYANG DI CINEMA XXI INDONESIA ---
  {
    id: 301,
    title: 'Laut Bercerita',
    category: 'xxi',
    director: 'Pritagita Arianegara',
    genre: 'Drama Emosional',
    releaseYear: 2026,
    rating: 9.1,
    poster: l1,
    trailerUrl: 'https://www.youtube.com/embed/pZmY6gOVeJU',
    streamingPlatforms: ['Cinema XXI', 'CGV', 'Cinepolis'],
    synopsis: 'Drama emosional adaptasi novel populer karya Leila S. Chudori tentang perjuangan dan kehilangan aktivis mahasiswa.',
    cast: ['Reza Rahadian', 'Dian Sastrowardoyo'],
    reviews: []
  },
  {
    id: 302,
    title: 'The Doll Ghawiah',
    category: 'xxi',
    director: 'Rocky Soraya',
    genre: 'Horor',
    releaseYear: 2026,
    rating: 7.8,
    poster: l2,
    trailerUrl: 'https://www.youtube.com/embed/pg_mxMQ7NJE',
    streamingPlatforms: ['Cinema XXI', 'CGV'],
    synopsis: 'Film horor terbaru teror boneka terkutuk Ghawiah yang mengincar jiwa keluarga tak berdosa.',
    cast: ['Luna Maya', 'Christian Sugiono'],
    reviews: []
  },
  {
    id: 303,
    title: 'BAPAK PALING JUJUR',
    category: 'xxi',
    director: 'Fajar Nugros',
    genre: 'Comedy',
    releaseYear: 2026,
    rating: 9.4,
    poster: i6,
    trailerUrl: 'https://www.youtube.com/embed/LKxD8HFbqEQ',
    streamingPlatforms: ['Cinema XXI', 'CGV'],
    synopsis: 'Pencitraan udah disiapin. Jonas Prakoso (Andovi Da Lopez) dan Sambodo (Soleh Solihun) udah siap banget jadi calon gubernur dan wakil gubernur idaman. Tapi kutukan nenek bikin Jonas GAK BISA BOHONG SAMA SEKALI!',
    cast: ['Andovi da Lopez', 'Nayla Purnama'],
    reviews: []
  },
  {
    id: 304,
    title: 'Kuasa Gelap: Perjanjian Darah',
    category: 'xxi',
    director: 'Bobby Prasetyo',
    genre: 'Horor Religi / Eksorsisme',
    releaseYear: 2026,
    rating: 8.4,
    poster: p7,
    trailerUrl: 'https://www.youtube.com/embed/sMkUS1wqr8Q',
    streamingPlatforms: ['Cinema XXI', 'CGV'],
    synopsis: 'Film horor eksorsisme ritual penyembuhan iblis jahat berdasarkan kisah nyata kasus eksorsisme di Indonesia.',
    cast: ['Jerome Kurnia', 'Lukman Sardi'],
    reviews: []
  },
  {
    id: 304,
    title: 'GODZILLA MINUS ZERO',
    category: 'xxi',
    director: 'Takashi Yamazaki',
    genre: 'Sci-Fi, Action',
    releaseYear: 2026,
    rating: 8.4,
    poster: p8,
    trailerUrl: 'https://www.youtube.com/embed/Pu0pH5BuCPM',
    streamingPlatforms: ['Cinema XXI', 'CGV'],
    synopsis: 'Perang telah menghancurkan Jepang sangat parah, dan Godzilla menambah bencana tersebut ke dalam jurang yang lebih dalam. Dua tahun telah berlalu sejak itu, dan negara telah menghadapi perjuangan yang menyakitkan untuk mencapai pemulihan dan akhirnya mendapatkan kembali kehidupan sehari-harinya. Saat umat manusia berhasil mempertahankan perdamaian yang diraih dengan susah payah, ancaman baru muncul, menghancurkan harapan dalam sekejap.',
    cast: ['Ryunosuke Kamiki', 'Minami Hamabe'],
    reviews: []
  }
];

export default function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle Review Submission with Dynamic Average Rating Calculation
  const handleAddReview = (movieId, newReview) => {
    const updatedMovies = movies.map((m) => {
      if (m.id === movieId) {
        const updatedReviews = [newReview, ...m.reviews];
        // Calculate new average rating based on all reviews
        const totalRatingSum = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
        const newAvgRating = totalRatingSum / updatedReviews.length;

        return {
          ...m,
          reviews: updatedReviews,
          rating: Number(newAvgRating.toFixed(1))
        };
      }
      return m;
    });

    setMovies(updatedMovies);

    // Update state active modal
    if (selectedMovie && selectedMovie.id === movieId) {
      const updatedReviews = [newReview, ...selectedMovie.reviews];
      const totalRatingSum = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
      const newAvgRating = totalRatingSum / updatedReviews.length;

      setSelectedMovie({
        ...selectedMovie,
        reviews: updatedReviews,
        rating: Number(newAvgRating.toFixed(1))
      });
    }
  };

  // Filter Search
  const filterList = (list) => {
    return list.filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const imdbMovies = filterList(movies.filter(m => m.category === 'imdb'));
  const netflixMovies = filterList(movies.filter(m => m.category === 'netflix'));
  const xxiMovies = filterList(movies.filter(m => m.category === 'xxi'));

  // 4 Featured Movies for Sliders (Hero Banner)
  const heroMovies = [movies[0], movies[6], movies[11], movies[2]];

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 flex flex-col font-sans">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Banner Sliders (4 Featured Movies with Navigation Arrows) */}
        <HeroBanner featuredMovies={heroMovies} onSelectMovie={setSelectedMovie} />

        {/* 1. SECTION FILM TRENDING IMDB GLOBAL */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-black text-white tracking-wide border-l-4 border-amber-500 pl-3 flex items-center space-x-2">
              <span>Film Trending Global</span>
            </h2>
            <span className="text-xs text-zinc-400">Peringkat Global IMDb</span>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 pt-1">
            {imdbMovies.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                rank={index + 1} 
                onSelectMovie={setSelectedMovie} 
              />
            ))}
          </div>
        </div>

        {/* 2. SECTION FILM POPULER DI NETFLIX INDONESIA */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-black text-white tracking-wide border-l-4 border-red-600 pl-3 flex items-center space-x-2">
              <span>Film Populer di Netflix Indonesia</span>
            </h2>
            <span className="text-xs text-zinc-400">Top 5 Minggu Ini</span>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 pt-1">
            {netflixMovies.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                rank={index + 1} 
                onSelectMovie={setSelectedMovie} 
              />
            ))}
          </div>
        </div>

        {/* 3. SECTION FILM SEDANG TAYANG DI CINEMA XXI INDONESIA */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-black text-white tracking-wide border-l-4 border-amber-400 pl-3 flex items-center space-x-2">
              <span>Film Sedang Tayang di Bioskop</span>
            </h2>
            <span className="text-xs text-zinc-400">Sedang Tayang XXI</span>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 pt-1">
            {xxiMovies.map((movie, index) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                rank={index + 1} 
                onSelectMovie={setSelectedMovie} 
              />
            ))}
          </div>
        </div>
      </main>

      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onAddReview={handleAddReview}
        />
      )}

      <footer className="bg-black border-t border-zinc-900 text-center py-6 text-xs text-zinc-500">
        <p>© 2026 Smart Rating — Portal Informasi Rating & Trailer Film Terpercaya.</p>
      </footer>
    </div>
  );
}
