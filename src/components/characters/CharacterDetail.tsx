import { X } from "lucide-react";
import { CharacterTree } from "./CharacterTree";
import type { Character, TestResult } from "@/types/character";

interface CharacterDetailProps {
  character: Character;
  onClose: () => void;
  isTestMode: boolean;
}

export function CharacterDetail({ character, onClose, isTestMode }: CharacterDetailProps) {
  const handleTestSubmit = (results: TestResult[]) => {
    // Handle test results (could be expanded to track progress, show celebrations, etc.)
    console.log('Test results:', results);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-3xl z-10">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <CharacterTree 
            character={character}
            isTestMode={isTestMode}
            onToggleTest={() => {}} // Add toggle handler if needed
          />
        </div>
      </div>
    </div>
  );
}