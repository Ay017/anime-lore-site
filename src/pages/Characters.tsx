import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Character } from '../types/database';
import CharacterCard from '../components/CharacterCard';

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      const { data } = await supabase
        .from('characters')
        .select('*')
        .order('name', { ascending: true });

      if (data) setCharacters(data);
      setLoading(false);
    }

    fetchCharacters();
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
            backgroundImage: 'url(https://images.pexels.com/photos/5699478/pexels-photo-5699478.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Characters
          </h1>
          <p className="text-xl text-gray-300">
            Meet the heroes and villains who shape these epic stories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {characters.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No characters found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
