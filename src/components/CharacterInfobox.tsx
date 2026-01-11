import { Character } from '../types/database';

interface CharacterInfoboxProps {
  character: Character;
}

export default function CharacterInfobox({ character }: CharacterInfoboxProps) {
  const infoSections = [
    {
      title: 'Voice Actors',
      items: [
        { label: 'Japanese', value: character.voice_actor_jp },
        { label: 'English', value: character.voice_actor_en },
      ].filter(item => item.value),
    },
    {
      title: 'Personal Information',
      items: [
        { label: 'Birthdate', value: character.birthdate },
        { label: 'Sex', value: character.sex },
        { label: 'Age', value: character.age?.['Part I'] || '' },
        { label: 'Status', value: character.status },
        { label: 'Height', value: character.height },
        { label: 'Weight', value: character.weight },
        { label: 'Blood Type', value: character.blood_type },
      ].filter(item => item.value),
    },
    {
      title: 'Classification',
      items: [
        { label: 'Rank', value: character.rank },
        { label: 'Occupation', value: character.occupation },
        { label: 'Affiliation', value: character.affiliation },
        { label: 'Team', value: character.team },
        { label: 'Partner', value: character.partner },
        { label: 'Clan / Family', value: character.clan_family },
      ].filter(item => item.value),
    },
    {
      title: 'Abilities',
      items: [
        { label: 'Kekkei Genkai', value: character.kekkei_genkai },
      ].filter(item => item.value),
    },
  ];

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <img
          src={character.image_url}
          alt={character.name}
          className="w-full aspect-[3/4] object-cover"
        />

        <div className="p-6 space-y-6">
          {character.name_english && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{character.name_english}</h2>
              {character.name_native && (
                <p className="text-sm text-gray-600 mt-1">{character.name_native}</p>
              )}
            </div>
          )}

          {infoSections.map((section) => (
            section.items.length > 0 && (
              <div key={section.title} className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex gap-2">
                      <span className="text-xs font-semibold text-gray-600 min-w-24">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-900 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
