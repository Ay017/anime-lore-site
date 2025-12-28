import { Link } from 'react-router-dom';
import { AnimeSeries } from '../types/database';

interface AnimeCardProps {
  anime: AnimeSeries;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link
      to={`/anime/${anime.slug}`}
      className="group relative bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-red-500 transition-all duration-300"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={anime.image_url}
          alt={anime.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-500/80 text-white rounded mb-2">
          {anime.category}
        </span>
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-red-500 transition-colors">
          {anime.title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2">
          {anime.description}
        </p>
      </div>
    </Link>
  );
}
