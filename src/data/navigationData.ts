import type { TreeNode } from '@/types/tree';

/**
 * Navigation data structure using NavMapID for mapping between different parts of the application.
 * NavMapID Format: 'section.item' (e.g., '2.1') or 'section' (e.g., 'home')
 * - First number: Section identifier (1: Home, 2: Wellbeing, 3: Rewards, 4: Nav)
 * - Second number: Item identifier within the section
 * 
 * Special NavMapIDs:
 * - 'home': Home section
 * - 'wellbeing': Wellbeing section
 * - 'rewards': Rewards section
 * - 'nav': Navigation section
 */
export const navigationData: TreeNode[] = [
  {
    id: 'home',
    navMapId: 'home',
    title: 'Home',
    children: [
      { 
        id: '1.1',
        navMapId: '1.1', 
        title: 'Reward Points',
        keyTerms: [
          'Points System',
          'Navigation'
        ]
      },
      { 
        id: '1.2',
        navMapId: '1.2', 
        title: 'Browse Perks',
        keyTerms: [
          'Feature Discovery',
          'User Education',
          'Flexi Perks',
          'Market Expansion'
        ]
      },
      { 
        id: '1.3',
        navMapId: '1.3', 
        title: 'Flexi Points',
        keyTerms: [
          'Points Management',
          'Rewards System'
        ]
      },
      { 
        id: '1.4',
        navMapId: '1.4', 
        title: 'Deals',
        keyTerms: [
          'Offers',
          'Discounts'
        ]
      },
      { 
        id: '1.5',
        navMapId: '1.5', 
        title: 'Recognise',
        keyTerms: [
          'Recognition Hub',
          'Platform Integration'
        ]
      }
    ]
  },
  {
    id: 'wellbeing',
    navMapId: 'wellbeing',
    title: 'Wellbeing',
    children: [
      { 
        id: '2.1',
        navMapId: '2.1', 
        title: 'Culture Hub',
        keyTerms: ['Recognition', 'Dashboard']
      },
      { 
        id: '2.2',
        navMapId: '2.2', 
        title: 'Wellness',
        keyTerms: ['Wellness Hub', 'Analytics']
      },
      { 
        id: '2.3',
        navMapId: '2.3', 
        title: 'Medical',
        keyTerms: ['Healthcare', 'Benefits']
      }
    ]
  },
  {
    id: 'rewards',
    navMapId: 'rewards',
    title: 'Rewards',
    children: [
      { 
        id: '3.1',
        navMapId: '3.1', 
        title: 'Total Rewards',
        keyTerms: ['Recognition', 'Automation']
      },
      { 
        id: '3.2',
        navMapId: '3.2', 
        title: 'Main Categories',
        keyTerms: ['Gift Cards', 'Authentication']
      }
    ]
  },
  {
    id: 'nav',
    navMapId: 'nav',
    title: 'Nav',
    children: [
      { 
        id: '4.1',
        navMapId: '4.1', 
        title: 'Savings Dashboard',
        keyTerms: ['Analytics', 'Reporting']
      },
      { 
        id: '4.2',
        navMapId: '4.2', 
        title: 'Account Settings',
        keyTerms: ['Authentication', 'User Management']
      },
      { 
        id: '4.3',
        navMapId: '4.3', 
        title: 'Nav',
        keyTerms: ['Navigation', 'User Interface']
      }
    ]
  }
];