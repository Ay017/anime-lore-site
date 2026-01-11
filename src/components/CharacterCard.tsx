import { Link } from 'react-router-dom';
import { Character } from '../types/database';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link to={`/characters/${character.slug}`} className="group block">
      <div className="group bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all duration-300">
        <div className="aspect-square overflow-hidden">
          <img
            src={character.image_url}
            alt={character.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-4">
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-500/80 text-white rounded mb-2">
            {character.role}
          </span>
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-500 transition-colors">
            {character.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3">
            {character.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
