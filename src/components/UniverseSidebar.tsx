import { BookmarkPlus, Heart, Share2, Check } from 'lucide-react';
import { AnimeSeries } from '../types/database';
import { useState } from 'react';

interface UniverseSidebarProps {
  anime: AnimeSeries;
}

export default function UniverseSidebar({ anime }: UniverseSidebarProps) {
  const [addedToList, setAddedToList] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToList = () => {
    setAddedToList(!addedToList);
  };

  const handleAddToFavorites = () => {
    setIsFavorited(!isFavorited);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="sticky top-24 space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
          <img
            src={anime.image_url}
            alt={anime.title}
            className="relative w-full aspect-[2/3] object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="space-y-3">
          <button
            onClick={handleAddToList}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              addedToList
                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/50'
                : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-500'
            }`}
          >
            {addedToList ? (
              <>
                <Check className="w-5 h-5" />
                <span>Added to My List</span>
              </>
            ) : (
              <>
                <BookmarkPlus className="w-5 h-5" />
                <span>Add to My List</span>
              </>
            )}
          </button>

          <button
            onClick={handleAddToFavorites}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              isFavorited
                ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/50'
                : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-pink-500 hover:text-pink-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
            <span>Add to Favorites</span>
          </button>

          <button className="w-full py-3 px-4 rounded-lg font-semibold bg-gray-800 border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center justify-center space-x-2">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 space-y-5">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Information</h3>

          <div className="space-y-4">
            {anime.category && (
              <div className="border-b border-gray-700/50 pb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Type</p>
                <p className="text-white font-semibold">{anime.category}</p>
              </div>
            )}

            {anime.episodes > 0 && (
              <div className="border-b border-gray-700/50 pb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Episodes</p>
                <p className="text-white font-semibold">{anime.episodes}</p>
              </div>
            )}

            <div className="border-b border-gray-700/50 pb-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Status</p>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  anime.status === 'Ongoing' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
                }`} />
                <p className={`font-semibold ${anime.status === 'Ongoing' ? 'text-green-400' : 'text-gray-400'}`}>
                  {anime.status}
                </p>
              </div>
            </div>

            {anime.release_date && (
              <div className="border-b border-gray-700/50 pb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Aired</p>
                <p className="text-white font-semibold">{formatDate(anime.release_date)}</p>
              </div>
            )}

            {anime.studio && (
              <div className="border-b border-gray-700/50 pb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Studio</p>
                <p className="text-white font-semibold">{anime.studio}</p>
              </div>
            )}

            {anime.genres && anime.genres.length > 0 && (
              <div className="border-b border-gray-700/50 pb-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Genres</p>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 text-xs font-semibold bg-gray-700/50 text-gray-300 rounded-full hover:bg-red-500/30 hover:text-red-300 transition-colors"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {anime.rating && (
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Rating</p>
                <p className="text-white font-semibold">{anime.rating}</p>
              </div>
            )}
          </div>
        </div>

        {anime.platforms && anime.platforms.length > 0 && (
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 backdrop-blur rounded-xl p-6 border border-blue-500/30">
            <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">Where to Watch</h4>
            <div className="space-y-2">
              {anime.platforms.map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="block px-3 py-2 text-sm text-blue-300 hover:text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 rounded transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
