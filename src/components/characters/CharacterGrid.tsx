import { CharacterCard } from "./CharacterCard";
import type { Character } from "@/types/character";

interface CharacterGridProps {
  characters: Character[];
  onCharacterSelect: (character: Character) => void;
  onImageChange: (id: string, newImageUrl: string) => void;
  isTestMode: boolean;
}

export function CharacterGrid({ characters, onCharacterSelect, onImageChange, isTestMode }: CharacterGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={onCharacterSelect}
          onImageChange={onImageChange}
          isTestMode={isTestMode}
        />
      ))}
    </div>
  );
}