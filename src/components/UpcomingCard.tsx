import { UpcomingRelease } from '../types/database';
import { Calendar } from 'lucide-react';

interface UpcomingCardProps {
  release: UpcomingRelease;
}

export default function UpcomingCard({ release }: UpcomingCardProps) {
  const getRemainingDays = (releaseDate: string) => {
    const today = new Date();
    const release = new Date(releaseDate);
    const diffTime = release.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getRemainingDays(release.release_date);

  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-red-500 transition-all duration-300">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={release.image_url}
          alt={release.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {daysRemaining > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {daysRemaining} days
          </div>
        )}
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-500/80 text-white rounded mb-3 uppercase">
          {release.release_type}
        </span>
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">
          {release.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {release.description}
        </p>
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(release.release_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
}
