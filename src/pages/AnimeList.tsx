import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { AnimeSeries } from '../types/database';
import AnimeCard from '../components/AnimeCard';
import { Search } from 'lucide-react';

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<AnimeSeries[]>([]);
  const [filteredAnime, setFilteredAnime] = useState<AnimeSeries[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Action','Adult Cast','Adventure','Anthropomorphic','Avant Garde','Award Winning','Boys Love','CGDCT','Childcare','Combat Sports','Comedy','Crossdressing','Delinquents','Detective','Drama','Educational','Fantasy', 'Gag Humor','Girls Love','Gore','Gourment','Harem','High Stakes Game','Historical','Horror','Idols (Female)','Idols (Male)','Isekai','Iyashikei','Love Polygon','Love Status Quo','Magical Sex Shift','Mahou Shoujo','Martial Arts','Mecha','Medical','Military','Music','Mystery','Mythology','Organized Crime','Otaku Culture','Parody','Performing Arts','Pets','Psychological','Racing','Reincarnation','Reverse Harem','Romance','Samurai','School','Sci-Fi','Seinen','Shonen','Shoujo','Showbiz','Slice of Life','Space','Sports','Strategy Game','Super Power','Supernatural','Survival','Suspense','Team Sports','Time Travel','Urban Fantasy','Vampire','Video Game','Villainess','Visual Arts','Workplace'];

  useEffect(() => {
    async function fetchAnime() {
      const { data } = await supabase
        .from('anime_series')
        .select('*')
        .order('title', { ascending: true });

      if (data) {
        setAnimeList(data);
        setFilteredAnime(data);
      }
      setLoading(false);
    }

    fetchAnime();
  }, []);

  useEffect(() => {
    let filtered = animeList;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((anime) => anime.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((anime) =>
        anime.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredAnime(filtered);
  }, [searchQuery, selectedCategory, animeList]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Anime Universes
          </h1>
          <p className="text-xl text-gray-300">
            Explore origin stories and lore across multiple anime worlds
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredAnime.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No anime found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
