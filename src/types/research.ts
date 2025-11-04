import { NavMapID } from './tree';

export interface Author {
  name: string;
  affiliation?: string;
}

export type UserType = 'Users' | 'Managers' | 'Admins';

export interface ResearchItem {
  navMapId: NavMapID;
  title: string;
  authors: Array<{
    name: string;
    affiliation: string;
  }>;
  date: string;
  url?: string;
  userType: UserType;
  problem: string;
  solution: string;
  bubble: string[];
  keyTerms: string[];
  abstract: string;
  methods: string;
  results: string;
}