import { FeedbackItem } from '../types/feedback';

export const feedbackData: FeedbackItem[] = [
  {
    navMapId: '1.2',
    title: 'Romania Flexi Perks expansion, customer feedback driven, admin requested',
    problem: 'Limited attractive Flexi Perk options for Romanian users leading to accumulated unused balances, impacting engagement and value perception',
    solution: 'Add popular Romanian retailers: Sephora, Fashion Days, Ikea, eMag, Kaufland, Carrefour, Tazz, Elefant.ro as Flexi Perk options',
    bubble: 'Market Expansion',
    keyTerms: ['Market Expansion', 'Flexi Perks'],
    feasibility: 3,
    userType: 'Admins',
    date: '01/07/24',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin feedback indicates limited spending options',
      whyQuestion: 'Users accumulating points without attractive redemption options',
      whichQuestion: 'Perks catalog needs expansion in Romanian market'
    }
  },
  {
    navMapId: '4.2',
    title: 'Bulk team management improvement needed for large organizations',
    problem: 'Manual removal required when bulk moving employees between teams, creating inefficient process for large-scale team changes',
    solution: 'Implement bulk remove functionality to streamline team management process',
    bubble: 'Team Scale Management',
    keyTerms: ['Team Management', 'Admin Tools'],
    feasibility: 4,
    userType: 'Admins',
    date: '14/07/2024',
    customer: 'Starling Bank',
    analysis: {
      howQuestion: 'CSM feedback from multiple enterprise clients',
      whyQuestion: 'Current process inefficient for large team changes',
      whichQuestion: 'Team management system needs bulk removal capability'
    }
  },
  {
    navMapId: '1.3',
    title: 'Automated monthly Flexi Points distribution needed for quarterly allocations',
    problem: 'Manual monthly reward point distribution required despite quarterly/semi-annual Flexi Points system',
    solution: 'Implement monthly automation feature for reward points distribution',
    bubble: 'Points Automation',
    keyTerms: ['Points Management', 'Rewards System'],
    feasibility: 3,
    userType: 'Admins',
    date: '01/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Internal feedback on manual distribution process',
      whyQuestion: 'Current system requires manual monthly intervention',
      whichQuestion: 'Points distribution system needs automation capability'
    }
  },
  {
    navMapId: '2.2',
    title: 'Webinar registration statistics showing zero affecting wellness engagement metrics',
    problem: 'Discontinued webinar registration feature showing as zero in reports, misrepresenting wellness hub engagement',
    solution: 'Remove webinar registration statistic from reporting section',
    bubble: 'Analytics Update',
    keyTerms: ['Wellness Hub', 'Analytics'],
    feasibility: 5,
    userType: 'Admins',
    date: '01/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Customer Success feedback on misleading metrics',
      whyQuestion: 'Discontinued feature affecting engagement perception',
      whichQuestion: 'Reporting system needs update to remove obsolete metric'
    }
  },
  {
    navMapId: '3.1',
    title: 'Anniversary recognition automation enhancement for specific milestones requested',
    problem: 'Limited control over anniversary recognition automation, cannot select specific milestone years',
    solution: 'Add milestone year selection and personalized message variables to automation system',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '04/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin feedback on automation limitations',
      whyQuestion: 'Current system lacks milestone customization',
      whichQuestion: 'Recognition automation system needs enhanced controls'
    }
  },
  {
    navMapId: '1.5',
    title: 'Live TV dashboard needed for office recognition display',
    problem: 'Manual process of creating PowerPoint presentations for office TV displays of recognitions is time-consuming and inefficient',
    solution: 'Create real-time TV dashboard functionality to stream recognitions and greeting cards live',
    bubble: 'Recognition Display',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 2,
    userType: 'Admins',
    date: '05/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Manual screenshot collection and PowerPoint creation process is burdensome',
      whyQuestion: 'Current system lacks real-time display capabilities for office environments',
      whichQuestion: 'Recognition system needs streaming integration with display systems'
    }
  },
  {
    navMapId: '1.5',
    title: 'Image sharing capability needed for Celebration Hub engagement',
    problem: 'Customer not using Celebration Hub due to lack of image sharing functionality available in competitor platform',
    solution: 'Enable image sharing functionality in Celebration Hub to match competitor features',
    bubble: 'Feature Enhancement',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '05/07/2024',
    customer: 'Punch Pubs',
    analysis: {
      howQuestion: 'Customer feedback comparing to competitor platform Mo',
      whyQuestion: 'Image sharing is crucial for company culture engagement',
      whichQuestion: 'Celebration Hub needs media handling capabilities'
    }
  },
  {
    navMapId: '4.1',
    title: 'Perk incidents tracking enhancement needed with timestamps',
    problem: 'Incident tracking lacks timestamp information for troubleshooting payment failures and offline status',
    solution: 'Add timestamp field to incidents data on Perk deal pages',
    bubble: 'Analytics Enhancement',
    keyTerms: ['Analytics', 'Reporting'],
    feasibility: 4,
    userType: 'Admins',
    date: '08/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Customer service needs temporal context for incident investigation',
      whyQuestion: 'Current system lacks time-based tracking of incidents',
      whichQuestion: 'Incident tracking system needs timestamp functionality'
    }
  },
  {
    navMapId: '4.2',
    title: 'Perkbox membership verification needed for in-person redemptions',
    problem: 'Users unable to prove Perkbox membership for in-person discounts when company branding overwrites Perkbox branding',
    solution: 'Add permanent Perkbox branding element to my account page that persists with company customization',
    bubble: 'User Verification',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 4,
    userType: 'Users',
    date: '11/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Users struggle to verify membership at physical locations',
      whyQuestion: 'Company branding overwrites Perkbox identification elements',
      whichQuestion: 'Account page UI needs persistent Perkbox branding'
    }
  },
  {
    navMapId: '1.2',
    title: 'Perk suggestion feature needs better platform integration',
    problem: 'Users unaware of perk suggestion capability, leading to decreased engagement when desired perks unavailable',
    solution: 'Integrate perk suggestion form directly into platform interface for improved visibility',
    bubble: 'Feature Enhancement',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 3,
    userType: 'Users',
    date: '11/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Current Nolt form link not easily discoverable',
      whyQuestion: 'Low visibility leads to missed engagement opportunities',
      whichQuestion: 'Platform interface needs integrated suggestion functionality'
    }
  },
  {
    navMapId: '1.2',
    title: 'Perk filtering needed for online and in-store vouchers',
    problem: 'Users cannot efficiently filter perks by redemption method, causing time-consuming manual checking',
    solution: 'Add filtering options for online-only and in-store-only vouchers',
    bubble: 'Search Enhancement',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 3,
    userType: 'Users',
    date: '11/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Users must check each perk individually for redemption method',
      whyQuestion: 'Lack of filtering creates inefficient user experience',
      whichQuestion: 'Catalog system needs enhanced filter capabilities'
    }
  },
  {
    navMapId: '4.2',
    title: '2FA alternatives needed for work platform access',
    problem: 'Admins required to use personal devices for two-factor authentication in work platform',
    solution: 'Implement alternative 2FA options that don\'t require personal mobile devices',
    bubble: 'Authentication',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 5,
    userType: 'Admins',
    date: '11/07/2024',
    customer: 'Bellevue Education',
    analysis: {
      howQuestion: 'Admins forced to use personal devices for work authentication',
      whyQuestion: 'Current 2FA system lacks workplace-appropriate alternatives',
      whichQuestion: 'Authentication system needs business-friendly options'
    }
  },
  {
    navMapId: '4.3',
    title: 'Homepage customization needed for content priority control',
    problem: 'Limited ability to adjust homepage content order and visibility of culture hub',
    solution: 'Add customization options for homepage content order and display preferences',
    bubble: 'UI Customization',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 3,
    userType: 'Admins',
    date: '12/07/2024',
    customer: 'Kingsbridge Risk Solution',
    analysis: {
      howQuestion: 'Admins cannot control content visibility priorities',
      whyQuestion: 'Fixed homepage layout limits content strategy effectiveness',
      whichQuestion: 'Homepage system needs customization capabilities'
    }
  },
  {
    navMapId: '1.5',
    title: 'Recognition tagline update needed for broader recognition scope',
    problem: 'Current "Who has gone the extra mile" tagline suggests only time/effort-based recognition',
    solution: 'Update recognition prompt to be more inclusive of different recognition types',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '12/07/2024',
    customer: 'Kingsbridge Risk Solution',
    analysis: {
      howQuestion: 'Current tagline limits recognition perception',
      whyQuestion: 'Language suggests only specific types of achievements',
      whichQuestion: 'Recognition system needs more inclusive prompting'
    }
  },
  {
    navMapId: '3.1',
    title: 'Team-specific values needed for recognition system',
    problem: 'Organization needs ability to differentiate between group and team values in recognition system',
    solution: 'Add functionality to create and manage separate value sets for different organizational units',
    bubble: 'Value Management',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 2,
    userType: 'Admins',
    date: '12/07/2024',
    customer: 'Kingsbridge Risk Solution',
    analysis: {
      howQuestion: 'Users see values not relevant to their team',
      whyQuestion: 'Different parts of organization have distinct value sets',
      whichQuestion: 'Recognition system needs team-specific value configuration'
    }
  },
  {
    navMapId: '1.2',
    title: 'Voucher status integration needed for platform visibility',
    problem: 'Users cannot view voucher status, expiry and balance information within platform',
    solution: 'Integrate voucher status tracking directly into platform interface',
    bubble: 'Feature Integration',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 2,
    userType: 'Users',
    date: '15/07/2024',
    customer: 'DHL',
    analysis: {
      howQuestion: 'Users must contact support for balance queries',
      whyQuestion: 'Platform lacks integrated voucher status tracking',
      whichQuestion: 'Voucher system needs status display functionality'
    }
  },
  {
    navMapId: '1.5',
    title: 'Custom greeting card reasons needed for celebration options',
    problem: 'Admins limited to preset celebration reasons in greeting cards system',
    solution: 'Enable manual entry of custom celebration reasons in greeting cards',
    bubble: 'Customization',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '15/07/2024',
    customer: 'Coutts Lawyers',
    analysis: {
      howQuestion: 'Admins restricted to "others" option for custom celebrations',
      whyQuestion: 'Preset options don\'t cover all celebration scenarios',
      whichQuestion: 'Greeting card system needs custom reason input'
    }
  },
  {
    navMapId: '1.3',
    title: 'Flexi points expiry tracking needed, user feedback, visibility request',
    problem: 'Users unable to check expiry dates of earliest unused points, limited visibility beyond one-month warning, impacts point utilization',
    solution: 'Implement expiry date tracking system, display earliest points expiration, enhance wallet visibility features',
    bubble: 'Points Management',
    keyTerms: ['Points Management', 'Rewards System'],
    feasibility: 3,
    userType: 'Users',
    date: '15/07/2024',
    customer: 'Icon Health and Fitness',
    analysis: {
      howQuestion: 'Users can only see points expiring within next month',
      whyQuestion: 'Limited visibility affects points management decisions',
      whichQuestion: 'Wallet system needs enhanced expiry tracking'
    }
  },
  {
    navMapId: '1.2',
    title: 'Vue Cinema location tracking needed, CH support, admin request',
    problem: 'Customer support cannot see specific location selections from dropdown fields during redemption process, limiting support capabilities',
    solution: 'Add selected location visibility to order history details for customer support reference',
    bubble: 'Support Enhancement',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 3,
    userType: 'Admins',
    date: '15/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Support team lacks visibility into user location selections',
      whyQuestion: 'Limited data access hampers support effectiveness',
      whichQuestion: 'Order history system needs enhanced location tracking'
    }
  },
  {
    navMapId: '4.3',
    title: 'Language barrier Netherlands, HRD feedback, platform accessibility concern',
    problem: 'Global platform only available in English, creating accessibility barrier for Netherlands employees',
    solution: 'Evaluate multilingual platform support, prioritizing Netherlands localization',
    bubble: 'Localization',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 2,
    userType: 'Admins',
    date: '16/07/2024',
    customer: 'PFM Intelligence',
    analysis: {
      howQuestion: 'HRD feedback highlights language barrier',
      whyQuestion: 'English-only platform limits global accessibility',
      whichQuestion: 'Platform interface needs localization capabilities'
    }
  },
  {
    navMapId: '3.1',
    title: 'Scheduled recognition confusion, admin feedback, automation display issue',
    problem: 'Add a Reward button misleading on scheduled celebrations, existing reward not visible without additional clicks',
    solution: 'Update UI to show reward total on scheduled recognition preview, improve visibility of attached rewards',
    bubble: 'UI Enhancement',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '17/07/2024',
    customer: 'Build & Design',
    analysis: {
      howQuestion: 'Admin reports confusion about reward status on scheduled items',
      whyQuestion: 'Current UI hides reward information behind extra clicks',
      whichQuestion: 'Recognition preview needs clearer reward display'
    }
  },
  {
    navMapId: '3.1',
    title: 'Recognition reports need email data, admin request, bulk rewards',
    problem: 'Email addresses missing from recognition reports, preventing efficient bulk reward distribution',
    solution: 'Add email address field to recognition reports to enable bulk reward processing',
    bubble: 'Reporting Enhancement',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '19/07/2024',
    customer: 'McLaren Automotive',
    analysis: {
      howQuestion: 'Admin unable to efficiently process bulk rewards',
      whyQuestion: 'Missing email data creates manual work',
      whichQuestion: 'Recognition reporting system needs additional fields'
    }
  },
  {
    navMapId: '4.2',
    title: 'Invoice billing period clarity needed, admin feedback, processing delays',
    problem: 'Billing period on invoices lacks clear quarterly specification, causing processing delays',
    solution: 'Enhance invoice detail to explicitly specify three-month/quarterly billing periods',
    bubble: 'Billing Enhancement',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 3,
    userType: 'Admins',
    date: '22/07/2024',
    customer: 'Ethos Farm',
    analysis: {
      howQuestion: 'Admin reports invoice processing delays',
      whyQuestion: 'Unclear billing period specification causes confusion',
      whichQuestion: 'Invoice system needs clearer period labeling'
    }
  },
  {
    navMapId: '1.5',
    title: 'Anniversary recognition filtering needed, admin feedback, visibility concerns',
    problem: 'Auto-anniversary recognitions dominate celebration page, obscuring other recognition types',
    solution: 'Add filtering options to separate automated anniversaries from other celebrations',
    bubble: 'Recognition Filter',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '23/07/2024',
    customer: 'Veris Australia',
    analysis: {
      howQuestion: 'Admin reports other recognitions getting buried',
      whyQuestion: 'High volume of anniversaries impacts visibility',
      whichQuestion: 'Celebration feed needs enhanced filtering'
    }
  },
  {
    navMapId: '1.3',
    title: 'Leftover points donation feature requested, admin suggestion, charitable giving',
    problem: 'Unused Flexi-Points and Reward Points lost when users leave or company churns',
    solution: 'Enable donation of remaining points to charitable causes upon deactivation',
    bubble: 'Points Management',
    keyTerms: ['Points Management', 'Rewards System'],
    feasibility: 2,
    userType: 'Admins',
    date: '24/07/2024',
    customer: 'A Plan Insurance',
    analysis: {
      howQuestion: 'Admin suggests charitable use for unused points',
      whyQuestion: 'Points currently lost on user departure',
      whichQuestion: 'Points system needs donation capability'
    }
  },
  {
    navMapId: '4.3',
    title: 'Culture hub drag-and-drop reordering needed, admin feedback, UX',
    problem: 'Culture Hub and Custom Benefits require deletion/edit for reordering, creating inefficient workflow',
    solution: 'Implement drag-and-drop functionality for reordering Culture Hub and Custom Benefits content',
    bubble: 'UI Enhancement',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 3,
    userType: 'Admins',
    date: '24/07/2024',
    customer: 'Dog\'s Trust',
    analysis: {
      howQuestion: 'Admin reports inefficient content management process',
      whyQuestion: 'Current reordering requires delete/recreate workflow',
      whichQuestion: 'Content management system needs drag-drop capability'
    }
  },
  {
    navMapId: '1.3',
    title: 'Reward points reclamation needed, admin request, unused points',
    problem: 'Admins unable to reclaim unspent reward points from user wallets',
    solution: 'Add functionality for admins to reclaim unused reward points',
    bubble: 'Points Management',
    keyTerms: ['Points Management', 'Rewards System'],
    feasibility: 2,
    userType: 'Admins',
    date: '24/07/2024',
    customer: 'BC Services UK',
    analysis: {
      howQuestion: 'Admin cannot recover unused points',
      whyQuestion: 'Points remain locked in inactive user wallets',
      whichQuestion: 'Points system needs reclamation functionality'
    }
  },
  {
    navMapId: '4.3',
    title: 'Culture hub positioning control needed, admin feedback, visibility',
    problem: 'Culture hub appearing lower on page as more lanes added, reducing visibility',
    solution: 'Create moveable widgets to allow admins to control culture hub position',
    bubble: 'UI Customization',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 4,
    userType: 'Admins',
    date: '27/07/2024',
    customer: 'Army Benevolent Fund',
    analysis: {
      howQuestion: 'Admin reports decreasing culture hub visibility',
      whyQuestion: 'New features push culture content down page',
      whichQuestion: 'Layout system needs position customization'
    }
  },
  {
    navMapId: '4.2',
    title: 'Billing comms targeting needed, admin feedback, CEO receiving invoices',
    problem: 'All admins receive billing communications, forcing removal of executives to avoid invoice spam',
    solution: 'Implement targeted billing communications to specific admin roles, separate from general admin permissions',
    bubble: 'Admin Controls',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 3,
    userType: 'Admins',
    date: '25/07/2024',
    customer: 'Veris Australia',
    analysis: {
      howQuestion: 'Admin forced to remove CEO role to avoid billing emails',
      whyQuestion: 'Billing communications lack role-based targeting',
      whichQuestion: 'Admin system needs granular communication controls'
    }
  },
  {
    navMapId: '4.2',
    title: 'Advance deactivation scheduling needed, admin request, efficiency improvement',
    problem: 'Manual reactive deprovisioning process, unspent points at deactivation, inefficient admin workflow',
    solution: 'Enable scheduled deactivations, automated reminder emails for point spending before last day',
    bubble: 'Automate User Deactivation',
    keyTerms: ['User Management', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '15/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin spends time reactively deprovisioning users',
      whyQuestion: 'No advance scheduling capability for known departures',
      whichQuestion: 'User management system needs scheduling functionality'
    }
  },
  {
    navMapId: '3.1',
    title: 'Birthday automation timing issue, admin feedback, same-day setup',
    problem: 'Birthday automations created on birthdays don\'t trigger until following year, causing confusion',
    solution: 'Add clear explanation about automation timing, warn about same-day birthday exclusions',
    bubble: 'User Guide System',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '16/08/2024',
    customer: 'Pilgrim\'s Friend Society',
    analysis: {
      howQuestion: 'Admin expected immediate triggers for same-day setups',
      whyQuestion: 'System behavior not clearly communicated',
      whichQuestion: 'Automation system needs clearer timing explanations'
    }
  },
  {
    navMapId: '1.5',
    title: 'Custom rewards templates needed, admin feedback, brand personalization',
    problem: 'Reward templates lack custom imagery options, preventing use of company mascot and branding elements',
    solution: 'Enable custom image upload functionality for reward templates, similar to company values trophy system',
    bubble: 'Customization',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '27/09/2024',
    customer: 'Funko UK Limited',
    analysis: {
      howQuestion: 'Admin unable to incorporate company branding in rewards',
      whyQuestion: 'Current templates lack customization options',
      whichQuestion: 'Reward system needs custom image support'
    }
  },
  {
    navMapId: '1.5',
    title: 'Recognition likes visibility needed, user feedback, engagement tracking',
    problem: 'Users cannot see who has liked recognitions on Celebration Hub, limiting engagement visibility',
    solution: 'Add hover functionality to display list of users who liked each recognition',
    bubble: 'Social Enhancement',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 4,
    userType: 'Users',
    date: '27/09/2024',
    customer: 'YHA',
    analysis: {
      howQuestion: 'Users cannot track engagement with recognitions',
      whyQuestion: 'Like information not accessible to users',
      whichQuestion: 'Recognition system needs like details visibility'
    }
  },
  {
    navMapId: '3.1',
    title: 'Recognition approval flow needed, prospect feedback, management oversight',
    problem: 'No approval process for reward point distribution, managers need oversight of team recognition',
    solution: 'Implement manager approval workflow for reward point distribution with justification requirement',
    bubble: 'Recognition Control',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '30/09/2024',
    customer: 'Lufthansa Technik',
    analysis: {
      howQuestion: 'Prospect requires management oversight of rewards',
      whyQuestion: 'Current system lacks approval mechanisms',
      whichQuestion: 'Recognition system needs approval workflow'
    }
  },
  {
    navMapId: '3.1',
    title: 'Wellbeing greeting cards needed, prospect feedback, feature expansion',
    problem: 'No get-well-soon option in greeting cards, limiting support for employee wellbeing',
    solution: 'Add wellbeing-focused greeting card templates including get-well-soon options',
    bubble: 'Feature Enhancement',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '30/09/2024',
    customer: 'Lufthansa Technik',
    analysis: {
      howQuestion: 'Prospect identifies missing wellbeing support options',
      whyQuestion: 'Current greeting cards limited to congratulatory messages',
      whichQuestion: 'Greeting card system needs expanded template options'
    }
  },
  {
    navMapId: '1.2',
    title: 'UAE reward catalog expansion needed, user feedback, engagement',
    problem: 'Limited reward options in UAE region affecting user engagement and satisfaction',
    solution: 'Expand UAE reward catalog with locally relevant retailers and options',
    bubble: 'Market Expansion',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 2,
    userType: 'Users',
    date: '21/08/2024',
    customer: 'Ebury',
    analysis: {
      howQuestion: 'Users report limited regional redemption options',
      whyQuestion: 'Current catalog lacks UAE-specific offerings',
      whichQuestion: 'Rewards system needs regional expansion'
    }
  },
  {
    navMapId: '4.2',
    title: 'Marketing email control needed, admin feedback, communication management',
    problem: 'Admins cannot manage marketing email settings for employees, including weekly celebration summaries',
    solution: 'Add admin controls for managing tenant-wide marketing email preferences',
    bubble: 'Communication Control',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 3,
    userType: 'Admins',
    date: '10/09/2024',
    customer: 'JB Corrie and Co Ltd',
    analysis: {
      howQuestion: 'Admin cannot control marketing communications',
      whyQuestion: 'No tenant-level email preference management',
      whichQuestion: 'Platform needs email management features'
    }
  },
  {
    navMapId: '4.2',
    title: 'Phone authentication UX issues, admin feedback, country selection',
    problem: 'Authentication UI lacks clear country code selection, phone number input field visibility issues, verification spinner problems',
    solution: 'Improve phone number authentication UI with clear country selection and input fields',
    bubble: 'Login Security System',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 4,
    userType: 'Admins',
    date: '05/09/2024',
    customer: 'C.EX Group',
    analysis: {
      howQuestion: 'Users struggle with phone number authentication interface',
      whyQuestion: 'UI elements not clearly visible or functional',
      whichQuestion: 'Authentication system needs improved UX design'
    }
  },
  {
    navMapId: '3.1',
    title: 'Manager notification system needed, admin feedback, recognition visibility',
    problem: 'Managers lack visibility of team recognition activity, missing engagement opportunities',
    solution: 'Implement manager notifications for team recognitions, weekly summary emails',
    bubble: 'Manager Tools',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '07/08/2024',
    customer: 'Wood Mackenzie',
    analysis: {
      howQuestion: 'Managers miss team recognition activities',
      whyQuestion: 'No automated notification system for managers',
      whichQuestion: 'Recognition system needs manager notification features'
    }
  },
  {
    navMapId: '1.2',
    title: 'Cinema and gym discounts needed, admin feedback, market expansion',
    problem: 'Limited cinema and gym discount options in ROI and NI markets affecting utilization',
    solution: 'Expand perks catalog to include cinema and gym discounts for ROI/NI markets',
    bubble: 'Market Expansion',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 3,
    userType: 'Admins',
    date: '03/09/2024',
    customer: 'SF',
    analysis: {
      howQuestion: 'Low utilization in ROI/NI markets',
      whyQuestion: 'Popular perk categories unavailable in these regions',
      whichQuestion: 'Perks catalog needs regional expansion'
    }
  },
  {
    navMapId: '4.2',
    title: 'SSO login page priority needed, admin feedback, user confusion',
    problem: 'Users miss SSO login option due to email/code login prominence, creating account duplicates',
    solution: 'Redesign login page to prioritize SSO option, remove irrelevant help text',
    bubble: 'Login Security System',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 4,
    userType: 'Admins',
    date: '27/08/2024',
    customer: 'Corporate Travel Management',
    analysis: {
      howQuestion: 'Users creating duplicate accounts through email login',
      whyQuestion: 'SSO option not prominent enough in login flow',
      whichQuestion: 'Login interface needs hierarchy adjustment'
    }
  },
  {
    navMapId: '1.3',
    title: 'Next allocation date visibility needed, admin feedback, support queries',
    problem: 'Users and admins cannot see next Flexi point allocation date, generating support queries',
    solution: 'Add next allocation date indicator to Flexi point wallet interface',
    bubble: 'Points Visibility',
    keyTerms: ['Points Management', 'Rewards System'],
    feasibility: 4,
    userType: 'Admins',
    date: '27/08/2024',
    customer: 'Empowered SMS Limited',
    analysis: {
      howQuestion: 'Support team handling repeated allocation date queries',
      whyQuestion: 'No visible allocation schedule in platform',
      whichQuestion: 'Wallet interface needs allocation date display'
    }
  },
  {
    navMapId: '4.2',
    title: 'Activation email tracking needed, CS team feedback, efficiency',
    problem: 'CS team cannot see when admins last used resend activation email function',
    solution: 'Add tracking field in SF showing last activation email resend timestamp',
    bubble: 'Support Tools',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 3,
    userType: 'Admins',
    date: '27/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'CS team duplicating admin conversations',
      whyQuestion: 'No visibility of admin activation email actions',
      whichQuestion: 'Support system needs activation tracking'
    }
  },
  {
    navMapId: '2.1',
    title: 'Platform customization, user feedback, personalization needs, engagement impact',
    problem: 'Limited platform customization, inability to opt out of hubs, reduced engagement, inefficient user experience, impacts utilization',
    solution: 'Enable hub opt-out functionality, personalize user experience, improve navigation efficiency, enhance platform customization options',
    bubble: 'User Customization',
    keyTerms: ['Recognition', 'Dashboard'],
    feasibility: 2,
    userType: 'Users',
    date: '26/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'User feedback indicates lack of personalization options',
      whyQuestion: 'Fixed platform structure reduces engagement',
      whichQuestion: 'Platform needs customizable user preferences'
    }
  },
  {
    navMapId: '4.2',
    title: 'Credit card cash fee warning, admin feedback, purchase impact',
    problem: 'Users hit with 20% cash fees from credit providers, lack of warning about gift card purchase implications',
    solution: 'Add warning message about potential credit card fees before gift card purchases',
    bubble: 'User Education',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 4,
    userType: 'Admins',
    date: '23/08/2024',
    customer: 'C.EX Group',
    analysis: {
      howQuestion: 'Users reporting unexpected credit card fees',
      whyQuestion: 'No warning about gift card purchase implications',
      whichQuestion: 'Purchase flow needs fee warning implementation'
    }
  },
  {
    navMapId: '1.5',
    title: 'Scheduled greeting card cleanup, admin feedback, deactivated users',
    problem: 'Scheduled greeting cards not automatically deleted for deactivated users, causing unnecessary reminders',
    solution: 'Implement automatic deletion of scheduled greeting cards when recipient is deactivated',
    bubble: 'System Cleanup',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '01/08/2024',
    customer: 'Australian Payments Network',
    analysis: {
      howQuestion: 'Active reminders sent for deactivated users',
      whyQuestion: 'System lacks automated cleanup process',
      whichQuestion: 'Greeting card system needs deactivation handling'
    }
  },
  {
    navMapId: '1.5',
    title: 'Language support needed, prospect feedback, Netherlands accessibility barrier',
    problem: 'Platform only available in English, limiting accessibility for global users, particularly in Netherlands',
    solution: 'Implement multi-language support, prioritize Netherlands localization, enhance global accessibility',
    bubble: 'Localization',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 2,
    userType: 'Users',
    date: '16/07/24',
    customer: 'PFM Intelligence',
    analysis: {
      howQuestion: 'Prospect feedback indicates language barrier',
      whyQuestion: 'English-only platform limits global adoption',
      whichQuestion: 'Platform needs multi-language support system'
    }
  },
  {
    navMapId: '3.1',
    title: 'Recognition profanity filter needed, admin feedback, culture control',
    problem: 'No filter preventing inappropriate language in recognitions, compromising company culture',
    solution: 'Implement profanity filter system for recognition messages, align with company values',
    bubble: 'Content Control',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '14/08/24',
    customer: 'Patsnap',
    analysis: {
      howQuestion: 'Admin reports inappropriate language use',
      whyQuestion: 'No content filtering system in place',
      whichQuestion: 'Recognition system needs content moderation'
    }
  },
  {
    navMapId: '3.1',
    title: 'Team recognition feature needed, user feedback, group appreciation',
    problem: 'Users cannot recognize entire teams, limiting group appreciation capabilities',
    solution: 'Add functionality to recognize teams as whole units, enable group celebrations',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Users',
    date: '15/08/24',
    customer: 'One Manchester',
    analysis: {
      howQuestion: 'Users unable to acknowledge team achievements',
      whyQuestion: 'Current system limited to individual recognition',
      whichQuestion: 'Recognition system needs team-level functionality'
    }
  },
  {
    navMapId: '2.2',
    title: 'Wellness hub reporting accuracy, admin feedback, engagement metrics',
    problem: 'Webinar registration statistics showing zero after feature discontinuation, misrepresenting engagement levels',
    solution: 'Remove obsolete webinar registration metrics from reporting dashboard',
    bubble: 'Analytics Update',
    keyTerms: ['Wellness Hub', 'Analytics'],
    feasibility: 4,
    userType: 'Admins',
    date: '01/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin reports misleading engagement metrics',
      whyQuestion: 'Discontinued feature affecting reporting accuracy',
      whichQuestion: 'Reporting system needs metric cleanup'
    }
  },
  {
    navMapId: '4.2',
    title: 'Salary-based benefit visibility needed, prospect feedback, technical requirement',
    problem: 'Unable to restrict benefit visibility based on salary bands or tenure, limiting benefit strategy implementation',
    solution: 'Implement conditional benefit visibility system based on employee attributes like salary and tenure',
    bubble: 'Access Control',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 2,
    userType: 'Users',
    date: '31/08/2024',
    customer: 'Thredd',
    analysis: {
      howQuestion: 'Prospect comparing to existing RG functionality',
      whyQuestion: 'Benefits strategy requires selective visibility',
      whichQuestion: 'Platform needs conditional access controls'
    }
  },
  {
    navMapId: '3.1',
    title: 'Work anniversary years display needed, admin feedback, clarity',
    problem: 'Work anniversary automations lack year count, creating confusion with multiple celebrations',
    solution: 'Add years of service display to work anniversary automations and feeds',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '01/08/2024',
    customer: 'CCL Forensics Ltd',
    analysis: {
      howQuestion: 'Admin reports confusion with multiple anniversaries',
      whyQuestion: 'Year count not visible in automation feed',
      whichQuestion: 'Anniversary system needs year display'
    }
  },
  {
    navMapId: '1.5',
    title: 'Bulk greeting card sharing needed, admin feedback, efficiency',
    problem: 'Cannot share greeting cards with entire teams or company simultaneously',
    solution: 'Enable bulk sharing options for greeting cards to teams and company-wide',
    bubble: 'Feature Enhancement',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '28/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin requests more efficient sharing process',
      whyQuestion: 'Individual sharing creates unnecessary steps',
      whichQuestion: 'Greeting card system needs bulk operations'
    }
  },
  {
    navMapId: '3.1',
    title: 'Manager recognition roundups needed, admin feedback, engagement tracking',
    problem: 'Managers lack consolidated view of team recognition activity, missing engagement insights',
    solution: 'Implement weekly email summaries of team recognition activity for managers',
    bubble: 'Manager Tools',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '29/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Managers request consolidated recognition insights',
      whyQuestion: 'No automated summary of team activity',
      whichQuestion: 'Recognition system needs manager reporting'
    }
  },
  {
    navMapId: '1.5',
    title: 'Slack integration needed, admin feedback, recognition visibility',
    problem: 'Recognition notifications limited to platform, reducing visibility and engagement',
    solution: 'Integrate recognition system with Slack for real-time notification delivery',
    bubble: 'Platform Integration',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 2,
    userType: 'Admins',
    date: '30/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin requests external platform integration',
      whyQuestion: 'Platform-only notifications limit reach',
      whichQuestion: 'Recognition system needs Slack integration'
    }
  },
  {
    navMapId: '4.2',
    title: 'Bulk team cleanup needed, admin feedback, team management',
    problem: 'Inactive teams accumulating in system without efficient cleanup method',
    solution: 'Create bulk team cleanup functionality for system maintenance',
    bubble: 'Team Cleanup System',
    keyTerms: ['Team Management', 'Admin Tools'],
    feasibility: 3,
    userType: 'Admins',
    date: '13/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Manual cleanup of inactive teams',
      whyQuestion: 'No automated cleanup process',
      whichQuestion: 'Team management needs cleanup automation'
    }
  },
  {
    navMapId: '3.1',
    title: 'Selective anniversary automation needed, admin feedback, milestone control',
    problem: 'Cannot configure recognition automation to trigger only on specific anniversary years',
    solution: 'Add year selection controls for anniversary recognition automation',
    bubble: 'Recognition Control',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '04/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Admin needs selective anniversary recognition',
      whyQuestion: 'Current system recognizes all anniversaries',
      whichQuestion: 'Automation system needs milestone selection'
    }
  },
  {
    navMapId: '1.5',
    title: 'Real-time recognition display needed, admin feedback, office engagement',
    problem: 'Manual PowerPoint creation required for office TV displays, inefficient recognition sharing',
    solution: 'Create live dashboard for office TV displays showing real-time recognitions',
    bubble: 'Recognition Display',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 2,
    userType: 'Admins',
    date: '05/07/2024',
    customer: 'Punch Pubs',
    analysis: {
      howQuestion: 'Admin creating manual recognition presentations',
      whyQuestion: 'No real-time display capability available',
      whichQuestion: 'Platform needs live display functionality'
    }
  },
  {
    navMapId: '4.2',
    title: 'Bulk team management needed, admin feedback, Bosch efficiency',
    problem: 'Large organization needs efficient way to manage multiple teams at once',
    solution: 'Implement bulk team management features for administrative efficiency',
    bubble: 'Team Bulk Management',
    keyTerms: ['Team Management', 'Admin Tools'],
    feasibility: 4,
    userType: 'Admins',
    date: '12/07/2024',
    customer: 'Bosch',
    analysis: {
      howQuestion: 'Admins managing teams individually, time-consuming process',
      whyQuestion: 'No bulk management capabilities available',
      whichQuestion: 'Team management system needs bulk operations'
    }
  },
  {
    navMapId: '4.3',
    title: 'Language support APAC region, admin feedback, accessibility barrier',
    problem: 'English-only platform creates accessibility barriers for APAC users, limiting engagement',
    solution: 'Expand platform language support to include key APAC region languages',
    bubble: 'Localization',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 2,
    userType: 'Admins',
    date: '18/07/2024',
    customer: 'DHL APAC',
    analysis: {
      howQuestion: 'APAC users struggling with English-only interface',
      whyQuestion: 'Language barrier reduces platform adoption',
      whichQuestion: 'Platform needs APAC language support'
    }
  },
  {
    navMapId: '1.5',
    title: 'Recognition display customization needed, admin feedback, branding focus',
    problem: 'Limited customization options for office recognition displays, brand identity not reflected',
    solution: 'Enable branded display themes and custom layouts for office recognition screens',
    bubble: 'Display Customization',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '06/07/2024',
    customer: 'Virgin Experience Days',
    analysis: {
      howQuestion: 'Admin requests brand-aligned display options',
      whyQuestion: 'Current displays lack brand customization',
      whichQuestion: 'Display system needs theming capabilities'
    }
  },
  {
    navMapId: '1.2',
    title: 'APAC market perks expansion needed, user feedback, engagement',
    problem: 'Limited perk options in APAC region affecting user satisfaction and platform value',
    solution: 'Expand perk catalog with region-specific retailers and services for APAC market',
    bubble: 'Market Expansion',
    keyTerms: ['Feature Discovery', 'User Education'],
    feasibility: 2,
    userType: 'Users',
    date: '25/07/2024',
    customer: 'DHL APAC',
    analysis: {
      howQuestion: 'Users report limited regional options',
      whyQuestion: 'Current catalog lacks APAC-specific perks',
      whichQuestion: 'Perks system needs regional expansion'
    }
  },
  {
    navMapId: '1.3',
    title: 'Team-specific points automation needed, admin feedback, distribution control',
    problem: 'Cannot automate points distribution for specific teams or departments, manual allocation required',
    solution: 'Implement team-based automation rules for points distribution with customizable schedules',
    bubble: 'Points Automation',
    keyTerms: ['Points Management', 'Rewards System'],
    feasibility: 3,
    userType: 'Admins',
    date: '02/08/2024',
    customer: 'Belron UK',
    analysis: {
      howQuestion: 'Admin reports manual team point distribution burden',
      whyQuestion: 'Current automation lacks team-level controls',
      whichQuestion: 'Points system needs team-specific automation'
    }
  },
  {
    navMapId: '4.3',
    title: 'German language support needed, admin feedback, accessibility requirement',
    problem: 'Platform inaccessible to German-speaking employees, limiting engagement and adoption',
    solution: 'Add German language support with localized content and interface elements',
    bubble: 'Localization',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 2,
    userType: 'Admins',
    date: '08/08/2024',
    customer: 'Lufthansa Technik',
    analysis: {
      howQuestion: 'German users struggling with English interface',
      whyQuestion: 'Language barrier affects platform adoption',
      whichQuestion: 'Platform needs German localization'
    }
  },
  {
    navMapId: '1.2',
    title: 'Australia market perks needed, admin feedback, regional expansion',
    problem: 'Limited perk options for Australian market affecting employee satisfaction',
    solution: 'Expand perks catalog with Australian retailers and service providers',
    bubble: 'Market Expansion',
    keyTerms: ['Feature Discovery', 'Market Expansion'],
    feasibility: 3,
    userType: 'Admins',
    date: '15/08/2024',
    customer: 'Veris Australia',
    analysis: {
      howQuestion: 'Australian users report limited local options',
      whyQuestion: 'Current catalog lacks Australian perks',
      whichQuestion: 'Perks system needs Australian market coverage'
    }
  },
  {
    navMapId: '1.5',
    title: 'Recognition workflow simplification needed, user feedback, engagement drop',
    problem: 'Complex recognition process causing low engagement, users abandoning recognition attempts',
    solution: 'Streamline recognition workflow, reduce required steps, simplify user interface',
    bubble: 'User Experience',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 4,
    userType: 'Users',
    date: '17/08/2024',
    customer: 'Punch Pubs',
    analysis: {
      howQuestion: 'User analytics show high abandonment rate',
      whyQuestion: 'Current process too complex for quick recognition',
      whichQuestion: 'Recognition system needs streamlined workflow'
    }
  },
  {
    navMapId: '4.2',
    title: 'Department-based access control needed, admin feedback, permissions management',
    problem: 'Cannot restrict admin permissions by department, creating security concerns',
    solution: 'Implement department-level permission controls for admin access management',
    bubble: 'Access Control',
    keyTerms: ['Authentication', 'User Management'],
    feasibility: 3,
    userType: 'Admins',
    date: '20/08/2024',
    customer: 'McLaren Automotive',
    analysis: {
      howQuestion: 'Admin reports cross-department access issues',
      whyQuestion: 'Current permissions lack departmental granularity',
      whichQuestion: 'Admin system needs department-level controls'
    }
  },
  {
    navMapId: '4.3',
    title: 'Spanish language support needed, admin feedback, LATAM expansion',
    problem: 'Platform inaccessible to Spanish-speaking employees, limiting LATAM market growth',
    solution: 'Add Spanish language support with localized content and interface elements',
    bubble: 'Localization',
    keyTerms: ['Navigation', 'User Interface'],
    feasibility: 2,
    userType: 'Admins',
    date: '20/08/2024',
    customer: 'DHL LATAM',
    analysis: {
      howQuestion: 'LATAM users struggling with English interface',
      whyQuestion: 'Language barrier limits market expansion',
      whichQuestion: 'Platform needs Spanish localization'
    }
  },
  {
    navMapId: '1.5',
    title: 'Recognition mobile optimization needed, user feedback, accessibility concerns',
    problem: 'Recognition process difficult on mobile devices, reducing on-the-go engagement',
    solution: 'Optimize recognition workflow for mobile devices, improve touch interface',
    bubble: 'Mobile Experience',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Users',
    date: '22/08/2024',
    customer: 'Punch Pubs',
    analysis: {
      howQuestion: 'Users report difficulty with mobile recognition',
      whyQuestion: 'Current interface not optimized for mobile',
      whichQuestion: 'Recognition system needs mobile optimization'
    }
  },
  {
    navMapId: '1.3',
    title: 'Points currency confusion, admin feedback, prospect concern, user experience',
    problem: 'Multiple point currencies causing confusion, impacting user experience, affecting platform adoption, prospect feedback highlighting complexity',
    solution: 'Implement single unified currency system across platform, simplify point management, improve user experience',
    bubble: 'Points Management',
    keyTerms: ['Points Management', 'User Experience'],
    feasibility: 3,
    userType: 'Admins',
    date: '30/07/24',
    customer: 'Accident Exchange',
    analysis: {
      howQuestion: 'Admin reports user confusion with multiple currencies',
      whyQuestion: 'Dual currency system creates complexity',
      whichQuestion: 'Points system needs simplification'
    }
  },
  {
    navMapId: '3.1',
    title: 'Birthday automation timing, admin feedback, same-day setup issue',
    problem: 'Birthday automations created on same day not triggering, causing confusion, impacting user experience, missing celebrations',
    solution: 'Add clear explanation about automation timing, implement warning system for same-day birthday exclusions',
    bubble: 'User Guide System',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '16/08/2024',
    customer: 'Pilgrim\'s Friend Society',
    analysis: {
      howQuestion: 'Admin expected immediate triggers for same-day setups',
      whyQuestion: 'System behavior not clearly communicated',
      whichQuestion: 'Automation system needs clearer timing explanations'
    }
  },
  {
    navMapId: '1.5',
    title: 'Custom rewards post-recognition, admin feedback, hotel business needs',
    problem: 'Cannot add custom rewards to posted celebrations, limiting recognition flexibility, impacting hotel business needs',
    solution: 'Enable custom reward addition to existing recognitions, enhance post-recognition reward capabilities',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition Hub', 'Platform Integration'],
    feasibility: 3,
    userType: 'Admins',
    date: '11/09/2024',
    customer: 'IHG Group',
    analysis: {
      howQuestion: 'Admin needs post-recognition reward capability',
      whyQuestion: 'Current system limits reward timing options',
      whichQuestion: 'Recognition system needs enhanced reward flexibility'
    }
  },
  {
    navMapId: '1.5',
    title: 'Virtual greeting card format needed, admin feedback, engagement impact',
    problem: 'Current greeting card format appears as posts with comments, reducing engagement, not meeting user expectations for virtual card experience',
    solution: 'Implement virtual card format with integrated signing capability, enhance visual presentation, improve user interaction',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition Hub', 'User Experience'],
    feasibility: 2,
    userType: 'Admins',
    date: '12/08/2024',
    customer: 'Victory Services Club',
    analysis: {
      howQuestion: 'Admin reports user dissatisfaction with format',
      whyQuestion: 'Current format lacks visual appeal',
      whichQuestion: 'Greeting system needs virtual card implementation'
    }
  },
  {
    navMapId: '3.1',
    title: 'Manager notification system needed, admin feedback, celebration tracking',
    problem: 'Managers lack visibility of team member celebrations, missing engagement opportunities, no automated birthday and anniversary notifications',
    solution: 'Implement manager notification system for team celebrations, automate birthday and anniversary alerts, enhance team engagement',
    bubble: 'Manager Tools',
    keyTerms: ['Recognition', 'Automation'],
    feasibility: 3,
    userType: 'Admins',
    date: '13/08/2024',
    customer: 'RGF Staffing',
    analysis: {
      howQuestion: 'Admin requests improved manager visibility',
      whyQuestion: 'No automated celebration notifications',
      whichQuestion: 'System needs manager notification features'
    }
  },
  {
    navMapId: '1.2',
    title: 'Double-save tag feature needed, admin feedback, visibility enhancement',
    problem: 'Lack of visibility for perks available in multiple formats, users missing savings opportunities, reduced engagement with available options',
    solution: 'Implement double-save tags for perks available as both digital codes and gift vouchers, improve visibility of savings options',
    bubble: 'Feature Enhancement',
    keyTerms: ['Perks Management', 'User Experience'],
    feasibility: 4,
    userType: 'Admins',
    date: '20/09/2024',
    customer: 'Beyond Bank',
    analysis: {
      howQuestion: 'Admin suggests improved perk format visibility',
      whyQuestion: 'Multiple format options not clearly indicated',
      whichQuestion: 'Perks system needs format identification'
    }
  },
  {
    navMapId: '4.2',
    title: 'Global EAP solution needed, admin feedback, accessibility expansion',
    problem: 'EAP services limited to UK/Ireland, reducing global accessibility, impacting employee support capabilities worldwide',
    solution: 'Expand EAP services globally, implement international support system, enhance worldwide employee assistance accessibility',
    bubble: 'Global Expansion',
    keyTerms: ['Employee Support', 'Global Access'],
    feasibility: 2,
    userType: 'Admins',
    date: '28/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Multiple clients request global access',
      whyQuestion: 'Current EAP limited geographically',
      whichQuestion: 'Platform needs global EAP solution'
    }
  },
  {
    navMapId: '1.3',
    title: 'Budget sharing tool enhancement, admin feedback, flexibility needed',
    problem: 'Limited budget tool flexibility, inefficient sharing capabilities, increased workload for admins managing shared budgets',
    solution: 'Implement flexible budget sharing system, enable joint admin access, streamline budget management workflow',
    bubble: 'Budget Management',
    keyTerms: ['Financial Tools', 'Admin Access'],
    feasibility: 3,
    userType: 'Admins',
    date: '05/09/2024',
    customer: 'Punch Pubs',
    analysis: {
      howQuestion: 'Admin reports inefficient budget sharing',
      whyQuestion: 'Current system lacks sharing flexibility',
      whichQuestion: 'Budget system needs collaborative features'
    }
  },
  {
    navMapId: '4.2',
    title: 'Credit card fee warning needed, admin feedback, user protection',
    problem: 'Users unaware of potential credit card fees before transactions',
    solution: 'Add clear fee warnings and educational content before transactions',
    bubble: 'Payment Warning Education',
    keyTerms: ['User Education', 'Payment Process'],
    feasibility: 5,
    userType: 'Users',
    date: '16/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Users surprised by transaction fees',
      whyQuestion: 'Lack of clear fee warnings',
      whichQuestion: 'Payment system needs warning system'
    }
  },
  {
    navMapId: '2.1',
    title: 'Platform customization options needed, user feedback, engagement impact',
    problem: 'Limited platform customization, inability to opt out of hubs, reduced engagement, inefficient user experience',
    solution: 'Enable hub opt-out functionality, personalize user experience, improve navigation efficiency',
    bubble: 'User Customization',
    keyTerms: ['Platform Configuration', 'User Experience'],
    feasibility: 5,
    userType: 'Users',
    date: '26/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'User feedback indicates customization needs',
      whyQuestion: 'Fixed platform structure reduces engagement',
      whichQuestion: 'Platform needs personalization options'
    }
  },
  {
    navMapId: '3.1',
    title: 'Manager recognition roundup needed, admin feedback, visibility enhancement',
    problem: 'Managers lack consolidated view of team recognition activity, missing engagement insights, inefficient activity tracking',
    solution: 'Implement weekly recognition summaries for managers, automate activity reporting, enhance engagement tracking',
    bubble: 'Manager Tools',
    keyTerms: ['Recognition', 'Reporting'],
    feasibility: 3,
    userType: 'Admins',
    date: '29/08/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Managers request consolidated recognition view',
      whyQuestion: 'No automated activity summary available',
      whichQuestion: 'System needs manager reporting features'
    }
  },
  {
    navMapId: '4.2',
    title: 'Automated deactivation scheduling needed, admin feedback, efficiency improvement',
    problem: 'Manual deactivation of users creates administrative overhead',
    solution: 'Implement scheduled user deactivation functionality',
    bubble: 'Automate User Deactivation',
    keyTerms: ['User Management', 'Automation'],
    feasibility: 4,
    userType: 'Admins',
    date: '15/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Manual user deactivation process',
      whyQuestion: 'No scheduling capability for deactivations',
      whichQuestion: 'System needs deactivation automation'
    }
  },
  {
    navMapId: '4.2',
    title: 'MFA context needed for SSO, admin feedback, login process',
    problem: 'SSO authentication process lacks clear MFA context and guidance',
    solution: 'Enhance SSO flow with clear MFA context and user guidance',
    bubble: 'SSO Authentication Flow',
    keyTerms: ['Authentication', 'User Experience'],
    feasibility: 4,
    userType: 'Users',
    date: '17/07/2024',
    customer: 'Internal',
    analysis: {
      howQuestion: 'Users confused by MFA during SSO',
      whyQuestion: 'Lack of clear authentication context',
      whichQuestion: 'SSO system needs better UX'
    }
  },
  {
    navMapId: '3.1',
    title: 'Bulk greeting card sharing needed, admin feedback, efficiency request',
    problem: 'Manual process for sharing greeting cards with multiple recipients, time-consuming individual additions, reducing engagement',
    solution: 'Enable bulk sharing options for greeting cards, allow team and company-wide distribution',
    bubble: 'Recognition Enhancement',
    keyTerms: ['Recognition', 'User Experience'],
    feasibility: 3,
    userType: 'Admins',
    date: '07/08/2024',
    customer: 'Spirit Healthcare Ltd',
    analysis: {
      howQuestion: 'Admin reports inefficient sharing process',
      whyQuestion: 'Individual sharing creates unnecessary steps',
      whichQuestion: 'Greeting card system needs bulk operations'
    }
  },
  {
    navMapId: '3.1',
    title: 'Recognition visibility control needed, admin feedback, automation privacy',
    problem: 'Automated recognitions visible company-wide, privacy concerns for specific celebrations, impacting automation adoption',
    solution: 'Add visibility controls for automated recognitions, enable private celebration options',
    bubble: 'Recognition Control',
    keyTerms: ['Recognition', 'Privacy'],
    feasibility: 2,
    userType: 'Admins',
    date: '12/08/2024',
    customer: 'Anwyl Construction Company Limited',
    analysis: {
      howQuestion: 'Admin requests private recognition options',
      whyQuestion: 'Company-wide visibility not always appropriate',
      whichQuestion: 'Recognition system needs privacy controls'
    }
  },
  {
    navMapId: '1.2',
    title: 'UAE reward catalog expansion needed, admin feedback, engagement impact',
    problem: 'Limited reward options in UAE market affecting engagement, impacting renewal decisions, reduced value perception',
    solution: 'Expand reward catalog with UAE retailers and service providers, enhance regional offering',
    bubble: 'Market Expansion',
    keyTerms: ['Rewards', 'Market Expansion'],
    feasibility: 3,
    userType: 'Admins',
    date: '21/08/2024',
    customer: 'Ebury',
    analysis: {
      howQuestion: 'Users report limited regional options',
      whyQuestion: 'Current catalog lacks UAE market coverage',
      whichQuestion: 'Rewards system needs regional expansion'
    }
  },
  {
    navMapId: '4.2',
    title: 'Marketing email control needed, admin feedback, communication management',
    problem: 'Admins cannot control marketing email distribution, weekly celebration summaries sent without opt-out option',
    solution: 'Implement admin controls for marketing email management, enable customizable communication preferences',
    bubble: 'Communication Control',
    keyTerms: ['Communication', 'Admin Tools'],
    feasibility: 3,
    userType: 'Admins',
    date: '10/09/2024',
    customer: 'JB Corrie and Co Ltd',
    analysis: {
      howQuestion: 'Admin requests email control options',
      whyQuestion: 'No control over marketing communications',
      whichQuestion: 'Platform needs email management features'
    }
  },
  {
    navMapId: '2.1',
    title: 'Survey functionality needed, admin feedback, employee engagement',
    problem: 'Limited poll functionality, cannot ask general questions, reducing employee feedback capabilities',
    solution: 'Implement comprehensive survey system, enable general question functionality, enhance feedback collection',
    bubble: 'Feedback Tools',
    keyTerms: ['Engagement', 'Feedback'],
    feasibility: 2,
    userType: 'Admins',
    date: '09/09/2024',
    customer: '2468',
    analysis: {
      howQuestion: 'Admin needs broader feedback options',
      whyQuestion: 'Current polls too restrictive',
      whichQuestion: 'Platform needs survey capabilities'
    }
  },
  {
    navMapId: '3.1',
    title: 'Recognition approval flow needed, prospect feedback, management oversight',
    problem: 'No approval process for reward point distribution, managers need oversight of team recognition',
    solution: 'Implement manager approval workflow for reward point distribution with justification requirement',
    bubble: 'Recognition Control',
    keyTerms: ['Recognition', 'Management'],
    feasibility: 3,
    userType: 'Users',
    date: '30/09/2024',
    customer: 'Lufthansa Technik',
    analysis: {
      howQuestion: 'Prospect requires management oversight',
      whyQuestion: 'No approval process for rewards',
      whichQuestion: 'Recognition system needs approval workflow'
    }
  }
]; 