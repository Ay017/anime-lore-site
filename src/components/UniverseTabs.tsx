import { useState } from 'react';
import { AnimeSeries, Character } from '../types/database';
import CharacterCard from './CharacterCard';
import { BookOpen, Users, Video, BarChart3, MessageCircle, Lightbulb, Newspaper } from 'lucide-react';

interface UniverseTabsProps {
  anime: AnimeSeries;
  characters: Character[];
}

type TabType = 'details' | 'characters' | 'videos' | 'stats' | 'reviews' | 'recommendations' | 'news';

const tabs: Array<{ id: TabType; label: string; icon: React.ReactNode }> = [
  { id: 'details', label: 'Details', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'characters', label: 'Characters & Staff', icon: <Users className="w-4 h-4" /> },
  { id: 'videos', label: 'Videos', icon: <Video className="w-4 h-4" /> },
  { id: 'stats', label: 'Stats', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'reviews', label: 'Reviews', icon: <MessageCircle className="w-4 h-4" /> },
  { id: 'recommendations', label: 'Recommendations', icon: <Lightbulb className="w-4 h-4" /> },
  { id: 'news', label: 'News', icon: <Newspaper className="w-4 h-4" /> },
];

export default function UniverseTabs({ anime, characters }: UniverseTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('details');

  return (
    <div className="space-y-8">
      <div className="flex overflow-x-auto border-b border-gray-700/50 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex space-x-2 min-w-min">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-semibold text-sm md:text-base flex items-center space-x-2 whitespace-nowrap border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'details' && (
          <div className="space-y-8">
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {anime.description}
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4">Background & Lore</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Origin Story</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {anime.origin_story}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Timeline</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {anime.timeline}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Power System</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {anime.power_system}
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Main Characters</h2>
            {characters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-800/40 rounded-xl p-8 text-center border border-gray-700/50">
                <p className="text-gray-400">No characters added yet.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Trailers & Videos</h2>
            {anime.trailer_url ? (
              <div className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <p className="text-gray-400">
                      <a href={anime.trailer_url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
                        Watch Trailer
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-800/40 rounded-xl p-8 text-center border border-gray-700/50">
                <p className="text-gray-400">No trailer available.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Score</p>
                <p className="text-4xl font-black text-yellow-400">{anime.score.toFixed(1)}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Rank</p>
                <p className="text-4xl font-black text-red-400">#{anime.rank || 'N/A'}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Members</p>
                <p className="text-4xl font-black text-blue-400">{anime.members.toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-800/20 backdrop-blur rounded-xl p-6 border border-gray-700/50">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Favorites</p>
                <p className="text-4xl font-black text-pink-400">{anime.favorites.toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="bg-gray-800/40 rounded-xl p-8 text-center border border-gray-700/50">
            <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Reviews coming soon.</p>
          </div>
        )}

        {activeTab === 'recommendations' && (
          <div className="bg-gray-800/40 rounded-xl p-8 text-center border border-gray-700/50">
            <Lightbulb className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Recommendations coming soon.</p>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-gray-800/40 rounded-xl p-8 text-center border border-gray-700/50">
            <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">News coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
