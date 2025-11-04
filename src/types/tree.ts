export type NavMapID = string;

export interface TreeNode {
  navMapId: NavMapID;
  id: string;
  title: string;
  children?: TreeNode[];
  keyTerms?: string[];
}