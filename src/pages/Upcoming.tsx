import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { UpcomingRelease } from '../types/database';
import UpcomingCard from '../components/UpcomingCard';

export default function Upcoming() {
  const [releases, setReleases] = useState<UpcomingRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReleases() {
      const { data } = await supabase
        .from('upcoming_releases')
        .select('*')
        .order('release_date', { ascending: true });

      if (data) setReleases(data);
      setLoading(false);
    }

    fetchReleases();
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
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6966173/pexels-photo-6966173.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Upcoming Releases
          </h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest anime movies and series announcements
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {releases.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No upcoming releases at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map((release) => (
              <UpcomingCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
