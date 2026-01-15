import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Character } from '../types/database';
import CharacterInfobox from '../components/CharacterInfobox';
import CharacterBiography from '../components/CharacterBiography';
import CharacterAbilities from '../components/CharacterAbilities';
import CharacterJutsu from '../components/CharacterJutsu';
import CharacterTools from '../components/CharacterTools';
import CharacterFamily from '../components/CharacterFamily';
import CharacterAppearances from '../components/CharacterAppearances';
import { ArrowLeft } from 'lucide-react';

export default function CharacterDetail() {
  const { slug } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter() {
      const { data } = await supabase
        .from('characters')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      setCharacter(data);
      setLoading(false);
    }

    fetchCharacter();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading character profile...</p>
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-xl mb-4">Character not found</p>
          <Link to="/characters" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Characters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {character.banner_image_url && (
        <div className="h-64 bg-gray-300 overflow-hidden">
          <img
            src={character.banner_image_url}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/characters"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Characters
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-12">
            <CharacterBiography character={character} />
            <CharacterAbilities character={character} />
            <CharacterFamily character={character} />
            <CharacterJutsu character={character} />
            <CharacterTools character={character} />
            <CharacterAppearances character={character} />
          </div>

          <div className="lg:col-span-1">
            <CharacterInfobox character={character} />
          </div>
        </div>
      </div>
    </div>
  );
}
