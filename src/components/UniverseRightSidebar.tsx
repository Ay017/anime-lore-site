import { Play, Eye } from 'lucide-react';
import { AnimeSeries } from '../types/database';

interface UniverseRightSidebarProps {
  anime: AnimeSeries;
}

export default function UniverseRightSidebar({ anime }: UniverseRightSidebarProps) {
  return (
    <div className="space-y-6 sticky top-24">
      {anime.trailer_url && (
        <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-red-500/30 transition-all group">
          <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            <button className="relative flex flex-col items-center space-y-3 group/btn">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover/btn:bg-red-500 transition-all group-hover/btn:scale-110">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover/btn:text-white">Watch Trailer</span>
            </button>
          </div>
          <a
            href={anime.trailer_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 text-center text-red-500 hover:text-red-400 font-semibold transition-colors"
          >
            View on YouTube
          </a>
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 space-y-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Quick Stats</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-gray-700/50">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Members Viewing</span>
            <span className="font-bold text-white flex items-center space-x-1">
              <Eye className="w-4 h-4 text-blue-500" />
              <span>{anime.members > 0 ? Math.floor(anime.members / 100) : 0}</span>
            </span>
          </div>

          <div className="flex items-center justify-between pb-4 border-b border-gray-700/50">
            <span className="text-sm text-gray-400 uppercase tracking-wider">All Time Favorites</span>
            <span className="font-bold text-pink-400">{(anime.favorites / 1000).toFixed(1)}K</span>
          </div>

          <div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Last Updated</span>
            <p className="font-semibold text-white mt-1">
              {new Date(anime.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {anime.platforms && anime.platforms.length > 0 && (
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 backdrop-blur rounded-xl p-6 border border-blue-500/30">
          <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-4">Available On</h4>
          <div className="space-y-2">
            {anime.platforms.map((platform) => (
              <a
                key={platform}
                href="#"
                className="block px-3 py-2 text-sm font-semibold text-blue-300 hover:text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all text-center"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50">
        <p className="text-sm text-gray-400 leading-relaxed">
          Join thousands of anime fans. Discover, discuss, and rate universes on Anilore.
        </p>
      </div>
    </div>
  );
}
