import type { ChapterNode } from '@/types/tree';

export const sampleTreeData: ChapterNode[] = [
  {
    id: 1,
    title: "Fundamentals",
    progress: 100,
    status: 'completed',
    description: "Master the basics of character development",
    children: [
      {
        id: 2,
        title: "Advanced Techniques",
        progress: 65,
        status: 'in-progress',
        description: "Learn advanced character abilities",
        children: [
          {
            id: 3,
            title: "Specialization",
            progress: 0,
            status: 'locked',
            description: "Unlock your unique path"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Expert Skills",
    progress: 0,
    status: 'locked',
    description: "Master advanced abilities",
    children: [
      {
        id: 5,
        title: "Legendary Techniques",
        progress: 0,
        status: 'locked',
        description: "Achieve legendary status"
      }
    ]
  }
];