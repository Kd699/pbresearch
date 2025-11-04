import { ResearchItem } from '@/types/research';

export const researchData: ResearchItem[] = [
  {
    navMapId: '1.2',
    title: 'Perks Platform User Awareness and Feature Utilization Study',
    authors: [
      {
        name: 'Miriam Khenissi',
        affiliation: 'Research Team'
      },
      {
        name: 'Adarsh Raja',
        affiliation: 'Research Team'
      }
    ],
    date: '01/01/2024',
    url: 'https://docs.google.com/presentation/d/1sV69_tCeF2pCfbefwJ1Tb_9Bz48nydi0wzZcTapCFBU/edit#slide=id.ge94975c0e7_0_62',
    userType: 'Users',
    
    // Table View (15 words max each)
    problem: 'Even power users unaware of key features, repeatedly using same perks, missing savings opportunities.',
    solution: 'Create savings calculator, redesign search, add guided tour for feature discovery.',
    bubble: [
      'Create New Savings Calculator',
      'Redesign Platform Search Interface',
      'Add Guided Feature Tour'
    ],
    keyTerms: ['Feature Discovery', 'User Education'],
    
    // Detail View (compressed)
    abstract: 'Investigation reveals significant feature awareness gaps among users. Mobile app adoption and savings tracking show potential for increased engagement.',
    methods: 'Interviewed nine users, including power users. Analyzed platform usage, feature awareness, and collected feedback on savings behavior.',
    results: 'Implement savings calculator and tracker. Add guided platform tour. Highlight mobile features and gift card options. Improve search bar visibility and redesign for better feature discovery.'
  },
  {
    navMapId: '1.1',
    title: 'Homepage Navigation and Points Accessibility Study',
    authors: [
      {
        name: 'Research Team',
        affiliation: 'UX Research'
      }
    ],
    date: '07/01/2024',
    url: 'https://docs.google.com/presentation/d/1SLGtI3av0zSY-WSnDfGbMuICsv96q5ZrJRhMRAlUpsQ/edit#slide=id.g2ef2e242032_0_37',
    userType: 'Users',
    
    // Table View (15 words max each)
    problem: 'Points balance requires multiple clicks, terminology confusion, and small text causes accessibility issues.',
    solution: 'Add points badge to navigation, simplify terminology, improve text readability and tile placement.',
    bubble: [
      'Add Points Navigation Badge',
      'Simplify Platform Terminology Usage',
      'Improve Text Readability Design'
    ],
    keyTerms: ['Points System', 'Navigation'],
    
    // Detail View
    abstract: 'Analysis of homepage navigation patterns and points system accessibility, based on user feedback and testing results.',
    methods: 'Collected 65 user responses, analyzed navigation paths, and gathered qualitative feedback on homepage interactions.',
    results: 'Users prefer search functionality and large tiles but struggle with points access. Recommend adding points badge to navigation, simplifying terminology, and improving text contrast. Consider quick actions for frequent tasks.'
  },
  {
    navMapId: '4.2',
    title: 'Booking.com User Authentication and Redemption Experience',
    authors: [
      {
        name: 'Research Team',
        affiliation: 'Booking.com Connect Day'
      }
    ],
    date: '02/01/2024',
    url: 'https://docs.google.com/presentation/d/1CTg7_r0ShaGtlyQIiGc_ZEWel0gxjObBSkebDIyd1MQ/edit#slide=id.ge94975c0e7_0_68',
    userType: 'Users',
    
    // Table View (15 words max each)
    problem: 'Login friction and complex redemption process causing user dropoff despite high app adoption.',
    solution: 'Streamline authentication, simplify redemption steps, add gift card balance tracking and preferences.',
    bubble: [
      'Streamline Authentication Flow Process',
      'Simplify Redemption Step Flow',
      'Add Gift Card Tracking'
    ],
    keyTerms: ['Authentication', 'Gift Cards'],
    
    // Detail View
    abstract: 'Assessment of Booking.com employee engagement with Perkbox, focusing on authentication challenges and redemption experience.',
    methods: 'Conducted in-person observations and surveys with Booking.com employees, achieving 96% app adoption rate.',
    results: 'High satisfaction scores (8.3/10) but login and redemption friction exists. Users want streamlined authentication, simplified redemption process, gift card balance tracking, and personalized preferences. Email notifications preferred over app.'
  },
  {
    navMapId: '2.1',
    title: 'Celebration Hub User Engagement Study',
    authors: [
      {
        name: 'Vahan Hovhannisyan',
        affiliation: 'Research Team'
      },
      {
        name: 'Adarsh Raja',
        affiliation: 'Research Team'
      }
    ],
    date: '07/01/2023',
    url: 'https://drive.google.com/file/d/1jMBMr_GEznzZqDc2DblymdJXajmZlbPM/view',
    userType: 'Users',
    
    // Table View (15 words max each)
    problem: 'Users prefer private recognition, lack incentives, find platform access and content creation difficult.',
    solution: 'Integrate with communication tools, add multi-channel visibility and incentives for public recognition.',
    bubble: [
      'Integrate Communication Tool Recognition',
      'Add Multi Channel Visibility',
      'Create Public Recognition Incentives'
    ],
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    
    // Detail View (compressed)
    abstract: 'Study of monthly active Celebration Hub users to understand engagement patterns, motivations, and barriers to increased platform usage.',
    methods: 'Conducted seven interviews with active users (1-3 times monthly usage). Combined Q&A with platform usage observation.',
    results: 'Integrate with Slack/Teams for easier access. Enable recognition across multiple channels. Add personal incentives. Maintain popular features like emojis and celebration feed.'
  }
];