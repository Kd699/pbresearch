import { CharacterTree } from './CharacterTree';
import type { Character } from '@/types/character';

interface CharacterViewProps {
  character: Character;
  isTestMode: boolean;
  onToggleTest: () => void;
}

export function CharacterView({ character, isTestMode, onToggleTest }: CharacterViewProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <CharacterTree 
          character={character}
          isTestMode={isTestMode}
          onToggleTest={onToggleTest}
        />
      </div>
    </div>
  );
}