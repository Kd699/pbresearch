import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Trophy } from "lucide-react";
import { CharacterImage } from "./CharacterImage";
import { CharacterInfo } from "./CharacterInfo";
import type { Character } from "@/types/character";

interface CharacterHeaderProps {
  character: Character;
  isTestMode: boolean;
  onToggleTest: () => void;
}

export function CharacterHeader({ character, isTestMode, onToggleTest }: CharacterHeaderProps) {
  return (
    <div className="flex items-start gap-6">
      <CharacterImage 
        imageUrl={character.imageUrl} 
        name={character.name} 
      />
      <CharacterInfo 
        character={character}
        isTestMode={isTestMode}
        onToggleTest={onToggleTest}
      />
    </div>
  );
}