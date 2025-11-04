import type { UserType } from "./research";
import type { NavMapID } from "./tree";

export interface FeedbackItem {
  navMapId: NavMapID;
  title: string;
  problem: string;
  solution: string;
  bubble: string;  // 4-word solution phrase
  keyTerms: [string, string];  // Two key terms (max 2 words each) representing solution/problem space
  feasibility: number;
  userType: UserType;
  date: string;
  customer: string;  // Customer name for pill display
  analysis: {
    howQuestion: string;  // "But how does this happen?"
    whyQuestion: string;  // "But why does this occur?"
    whichQuestion: string;  // "But which element is involved?"
  };
} 