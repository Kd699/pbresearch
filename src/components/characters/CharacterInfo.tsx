import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Trophy } from "lucide-react";
import type { Character } from "@/types/character";

interface CharacterInfoProps {
  character: Character;
  isTestMode: boolean;
  onToggleTest: () => void;
}

export function CharacterInfo({ character, isTestMode, onToggleTest }: CharacterInfoProps) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <p className="text-muted-foreground">Level {character.level} Character</p>
        </div>
        <Button
          variant={isTestMode ? "destructive" : "secondary"}
          onClick={onToggleTest}
        >
          {isTestMode ? (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Exit Test Mode
            </>
          ) : (
            <>
              <Trophy className="mr-2 h-4 w-4" />
              Enter Test Mode
            </>
          )}
        </Button>
      </div>
      
      <p className="text-muted-foreground">{character.description}</p>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-medium">Overall Progress</span>
          <span>{character.progress}%</span>
        </div>
        <Progress value={character.progress} className="h-3" />
      </div>
    </div>
  );
}