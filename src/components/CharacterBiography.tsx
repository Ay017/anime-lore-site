import { Character } from '../types/database';

interface CharacterBiographyProps {
  character: Character;
}

export default function CharacterBiography({ character }: CharacterBiographyProps) {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-5xl font-bold text-gray-900 mb-3">{character.name}</h1>
        {character.introduction && (
          <p className="text-lg text-gray-600 italic leading-relaxed">
            {character.introduction}
          </p>
        )}
      </div>

      {character.biography && (
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 pb-3">
            Biography
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
            {character.biography}
          </div>
        </section>
      )}

      {character.origin_story && (
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 pb-3">
            Background
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {character.origin_story}
          </p>
        </section>
      )}

      {character.description && (
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 pb-3">
            Role in the Story
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {character.description}
          </p>
        </section>
      )}
    </div>
  );
}
