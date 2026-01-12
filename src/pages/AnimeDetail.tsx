import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { AnimeSeries, Character } from '../types/database';
import UniverseSidebar from '../components/UniverseSidebar';
import ScoreSection from '../components/ScoreSection';
import UniverseTabs from '../components/UniverseTabs';
import UniverseRightSidebar from '../components/UniverseRightSidebar';
import { ArrowLeft } from 'lucide-react';

export default function AnimeDetail() {
  const { slug } = useParams();
  const [anime, setAnime] = useState<AnimeSeries | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnimeDetail() {
      const { data: animeData } = await supabase
        .from('anime_series')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (animeData) {
        setAnime(animeData);

        const { data: charactersData } = await supabase
          .from('characters')
          .select('*')
          .eq('anime_id', animeData.id);

        if (charactersData) setCharacters(charactersData);
      }

      setLoading(false);
    }

    fetchAnimeDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading universe...</p>
        </div>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-4">Universe not found</p>
          <Link to="/anime" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Universes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${anime.banner_url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-gray-950/50 to-gray-950" />
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15), transparent 50%)'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-6 md:pb-8">
          <Link
            to="/anime"
            className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Universes
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <UniverseSidebar anime={anime} />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
                  {anime.title}
                </h1>

                {(anime.alternative_title_en || anime.alternative_title_jp) && (
                  <div className="space-y-1 mb-6">
                    {anime.alternative_title_en && (
                      <p className="text-gray-400 text-sm">
                        <span className="text-gray-500">English:</span> {anime.alternative_title_en}
                      </p>
                    )}
                    {anime.alternative_title_jp && (
                      <p className="text-gray-400 text-sm">
                        <span className="text-gray-500">Japanese:</span> {anime.alternative_title_jp}
                      </p>
                    )}
                  </div>
                )}

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-6">
                  {anime.description}
                </p>
              </div>

              <ScoreSection anime={anime} />

              <UniverseTabs anime={anime} characters={characters} />
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1">
            <UniverseRightSidebar anime={anime} />
          </div>
        </div>
      </div>
    </div>
  );
}
