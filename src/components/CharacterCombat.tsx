import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Character } from '../types/database';

interface CharacterCombatProps {
  character: Character;
}

export default function CharacterCombat({ character }: CharacterCombatProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!character.combat_techniques || character.combat_techniques.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4 max-w-4xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 transition-colors p-6 rounded-lg border-2 border-gray-300"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          combat & Techniques
        </h2>
        <ChevronDown
          className={`w-6 h-6 text-gray-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="space-y-4">
          {character.combat_techniques.map((combat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 border border-gray-300 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900">{combat.name}</h3>
              {jutsu.type && (
                <p className="text-sm text-gray-600 mt-1 font-semibold">
                  Type: {combat.type}
                </p>
              )}
              {jutsu.description && (
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {combat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
