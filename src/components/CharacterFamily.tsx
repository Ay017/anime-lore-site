import { Character } from '../types/database';

interface CharacterFamilyProps {
  character: Character;
}

export default function CharacterFamily({ character }: CharacterFamilyProps) {
  if (!character.family_members || character.family_members.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 pb-3">
        Family
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {character.family_members.map((member, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200"
          >
            <p className="text-lg font-bold text-amber-900">{member.name}</p>
            <p className="text-sm text-amber-700 mt-1 font-semibold">
              {member.relationship}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
