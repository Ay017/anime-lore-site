import { Character } from '../types/database';

interface CharacterAbilitiesProps {
  character: Character;
}

export default function CharacterAbilities({ character }: CharacterAbilitiesProps) {
  const hasAbilities =
    character.kekkei_genkai ||
    character.nature_types?.length > 0 ||
    character.special_skills?.length > 0;

  if (!hasAbilities) return null;

  return (
    <section className="space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 pb-3">
        Abilities & Powers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {character.kekkei_genkai && (
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Kekkei Genkai</h3>
            <p className="text-blue-800">{character.kekkei_genkai}</p>
          </div>
        )}

        {character.nature_types && character.nature_types.length > 0 && (
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <h3 className="text-lg font-bold text-orange-900 mb-3">Nature Types</h3>
            <div className="flex flex-wrap gap-2">
              {character.nature_types.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 bg-orange-200 text-orange-900 font-semibold rounded-full text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {character.special_skills && character.special_skills.length > 0 && (
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-bold text-purple-900 mb-4">Special Skills</h3>
          <ul className="space-y-2">
            {character.special_skills.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span className="text-purple-800">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
