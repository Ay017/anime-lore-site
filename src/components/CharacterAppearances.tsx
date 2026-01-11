import { Character } from '../types/database';

interface CharacterAppearancesProps {
  character: Character;
}

export default function CharacterAppearances({ character }: CharacterAppearancesProps) {
  if (
    !character.appearances ||
    Object.keys(character.appearances).length === 0
  ) {
    return null;
  }

  const appearanceTypes = [
    { key: 'anime', label: 'Anime', color: 'bg-blue-100 border-blue-300 text-blue-900' },
    { key: 'manga', label: 'Manga', color: 'bg-purple-100 border-purple-300 text-purple-900' },
    { key: 'novel', label: 'Novel', color: 'bg-green-100 border-green-300 text-green-900' },
    { key: 'game', label: 'Game', color: 'bg-red-100 border-red-300 text-red-900' },
    { key: 'movie', label: 'Movie', color: 'bg-orange-100 border-orange-300 text-orange-900' },
  ];

  const relevantAppearances = appearanceTypes.filter(
    (type) => character.appearances[type.key]
  );

  if (relevantAppearances.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 pb-3">
        Appearances
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relevantAppearances.map((type) => (
          <div
            key={type.key}
            className={`rounded-lg p-4 border-2 ${type.color}`}
          >
            <h3 className="font-bold text-lg mb-2">{type.label}</h3>
            <p className="leading-relaxed">
              {character.appearances[type.key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
