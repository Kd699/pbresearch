import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PencilIcon, Star } from "lucide-react";
import type { Character } from "@/types/character";

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
  onImageChange: (id: string, newImageUrl: string) => void;
  isTestMode: boolean;
}

export function CharacterCard({ character, onClick, onImageChange, isTestMode }: CharacterCardProps) {
  const handleImageChange = async () => {
    // In a real app, you'd implement image upload logic here
    const newImageUrl = prompt("Enter new image URL:");
    if (newImageUrl) {
      onImageChange(character.id, newImageUrl);
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden transition-all hover:shadow-lg cursor-pointer"
      onClick={() => onClick(character)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={character.imageUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"}
          alt={character.name}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleImageChange();
          }}
          className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <PencilIcon className="w-4 h-4 text-white" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{character.name}</h3>
          <Badge variant={isTestMode ? "destructive" : "secondary"}>
            Level {character.level}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {character.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{character.progress}%</span>
          </div>
          <Progress value={character.progress} className="h-2" />
        </div>
      </div>
    </Card>
  );
}