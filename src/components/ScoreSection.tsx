import { Star, TrendingUp, Users } from 'lucide-react';
import { AnimeSeries } from '../types/database';

interface ScoreSectionProps {
  anime: AnimeSeries;
}

export default function ScoreSection({ anime }: ScoreSectionProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gradient-to-r from-gray-800/50 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        </div>
        <p className="text-3xl font-black text-white">{anime.score.toFixed(1)}</p>
        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Score</p>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-red-500" />
        </div>
        <p className="text-3xl font-black text-white">#{anime.rank || 'N/A'}</p>
        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Rank</p>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Users className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-3xl font-black text-white">{(anime.members / 1000).toFixed(0)}K</p>
        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Members</p>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
        </div>
        <p className="text-3xl font-black text-white">{(anime.favorites / 1000).toFixed(0)}K</p>
        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Favorites</p>
      </div>
    </div>
  );
}
