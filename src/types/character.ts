export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  level: number;
  progress: number;
}

export interface TestResult {
  questionId: string;
  correct: boolean;
  timestamp: Date;
}