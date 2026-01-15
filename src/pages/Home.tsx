import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { AnimeSeries, Article, UpcomingRelease } from '../types/database';
import AnimeCard from '../components/AnimeCard';
import ArticleCard from '../components/ArticleCard';
import UpcomingCard from '../components/UpcomingCard';
import { Sparkles, BookOpen, Calendar } from 'lucide-react';

export default function Home() {
  const [featuredAnime, setFeaturedAnime] = useState<AnimeSeries[]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [upcomingReleases, setUpcomingReleases] = useState<UpcomingRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: anime } = await supabase
        .from('anime_series')
        .select('*')
        .eq('featured', true)
        .limit(3);

      const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      const { data: upcoming } = await supabase
        .from('upcoming_releases')
        .select('*')
        .order('release_date', { ascending: true })
        .limit(3);

      if (anime) setFeaturedAnime(anime);
      if (articles) setLatestArticles(articles);
      if (upcoming) setUpcomingReleases(upcoming);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            Explore the OG
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Dive deep into anime universes, uncover origin stories, master complex timelines, and stay updated with the latest releases.
          </p>
          <Link
            to="/anime"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Universes
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold text-white">Featured Anime Universes</h2>
          </div>
          <Link to="/anime" className="text-red-500 hover:text-red-400 font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Calendar className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold text-white">Upcoming Releases</h2>
          </div>
          <Link to="/upcoming" className="text-purple-500 hover:text-purple-400 font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingReleases.map((release) => (
            <UpcomingCard key={release.id} release={release} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-cyan-500" />
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
          </div>
          <Link to="/articles" className="text-cyan-500 hover:text-cyan-400 font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
