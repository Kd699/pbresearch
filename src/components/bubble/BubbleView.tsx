import { useEffect, useRef } from 'react';
import { researchData } from '@/data/researchData';
import { BreadcrumbNav } from './BreadcrumbNav';
import { useStore } from '@/lib/store';
import { feedbackData } from '@/data/feedback';
import { navigationData } from '@/data/navigationData';
import type { ResearchItem } from '@/types/research';
import type { FeedbackItem } from '@/types/feedback';

interface Solution {
  text: string;
  position: { row: number; col: number };
  source: 'research' | 'feedback';
  navMapId: string;
  title: string;
}

type DataItemWithSource = (ResearchItem | FeedbackItem) & {
  source: 'research' | 'feedback';
};

const GRID_SIZE = 4;
const BUBBLE_DIMENSIONS = 'w-72 h-20';

export const BubbleView = () => {
  const { selectedSection, selectedFeature, selectedKeyTerm, setHighlightedRowId, setSelectedTab, setShowDetail, feasibilityRange } = useStore();

  // Add cleanup effect
  useEffect(() => {
    // Cleanup function to run on unmount
    return () => {
      // Clear any stored state
      localStorage.removeItem('lastClickedBubble');
      localStorage.removeItem('selectedItem');
      
      // Reset store state
      setHighlightedRowId(null);
      setShowDetail(false);
    };
  }, []); // Empty dependency array means this runs on mount/unmount only

  // Cleanup effect for navigation changes
  useEffect(() => {
    // Clear stored state when navigation changes
    localStorage.removeItem('lastClickedBubble');
    localStorage.removeItem('selectedItem');
  }, [selectedSection, selectedFeature, selectedKeyTerm]);

  // Get the selected feature's key terms from navigation data
  const getFeatureKeyTerms = (featureId: string | null) => {
    if (!featureId) return [];
    for (const section of navigationData) {
      const feature = section.children?.find(f => f.id === featureId);
      if (feature) {
        return feature.keyTerms || [];
      }
    }
    return [];
  };

  // Combine research and feedback data
  const allData: DataItemWithSource[] = [
    ...researchData.map(item => ({ ...item, source: 'research' as const })),
    ...feedbackData.map(item => ({ ...item, source: 'feedback' as const }))
  ];

  // Filter the combined data
  const filteredData = allData.filter(item => {
    // Filter by feasibility if it's a feedback item
    if ('feasibility' in item) {
      const feasibility = typeof item.feasibility === 'number' ? item.feasibility : 5;
      if (feasibility < feasibilityRange[0] || feasibility > feasibilityRange[1]) return false;
    }

    // Filter by section if selected
    if (selectedSection) {
      const sectionNumber = selectedSection === 'home' ? '1' : 
                        selectedSection === 'wellbeing' ? '2' :
                        selectedSection === 'rewards' ? '3' : '4';
      if (!item.navMapId.startsWith(sectionNumber)) return false;
    }

    // Filter by feature ID if selected
    if (selectedFeature) {
      if (item.navMapId !== selectedFeature) return false;
    }

    // Filter by key term if selected
    if (selectedKeyTerm) {
      // Check both keyTerms array and bubble text for the selected term
      const itemKeyTerms = Array.isArray(item.keyTerms) ? item.keyTerms : [];
      const bubbleText = Array.isArray(item.bubble) ? item.bubble : [item.bubble];
      
      // Check if the term appears in either keyTerms or bubble text
      const termInKeyTerms = itemKeyTerms.some(term => term.includes(selectedKeyTerm));
      const termInBubble = bubbleText.some(text => text.includes(selectedKeyTerm));
      
      if (!termInKeyTerms && !termInBubble) return false;
    }

    return true;
  });

  // Log filtering results for debugging
  console.log('Bubble View Filtering:', {
    selectedSection,
    selectedFeature,
    selectedKeyTerm,
    totalItems: allData.length,
    filteredItems: filteredData.length,
    filters: {
      section: selectedSection,
      feature: selectedFeature,
      keyTerm: selectedKeyTerm
    }
  });

  const handleBubbleClick = (solution: Solution) => {
    console.log('Bubble Click:', {
      navMapId: solution.navMapId,
      source: solution.source,
      text: solution.text,
      title: solution.title
    });
    
    // Store more context about the clicked bubble
    localStorage.setItem('lastClickedBubble', JSON.stringify({
      text: solution.text,
      navMapId: solution.navMapId,
      source: solution.source,
      title: solution.title
    }));
    
    // Set the highlighted row and research tab to show details
    setHighlightedRowId(solution.navMapId);
    setSelectedTab(solution.source);
    setShowDetail(true);
  };

  // Map filtered data to bubbles
  const solutions: Solution[] = filteredData.map((item, index) => {
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;

    // Get bubble text based on data type
    const text = Array.isArray(item.bubble)
      ? item.bubble[0] // Research item
      : item.bubble;   // Feedback item

    return {
      text,
      position: { row, col },
      source: item.source,
      navMapId: item.navMapId,
      title: item.title
    };
  });

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <BreadcrumbNav />

      {/* Bubbles Grid */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-6 max-w-[1280px] mx-auto p-6">
        {solutions.map((solution, index) => (
          <div
            key={`${solution.source}-${solution.navMapId}-${index}`}
            className={`${BUBBLE_DIMENSIONS} rounded-full 
                      ${solution.source === 'research' ? 'bg-blue-100/80' : 'bg-green-100/80'}
                      flex items-center justify-center px-6
                      transition-all duration-300 hover:scale-105 
                      cursor-pointer shadow-sm hover:shadow-md`}
            onClick={() => handleBubbleClick(solution)}
          >
            <span className="text-gray-600 text-sm font-normal
                           line-clamp-2 text-center w-full leading-snug">
              {solution.text}
            </span>
          </div>
        ))}

        {/* Fill remaining grid spaces with empty bubbles */}
        {[...Array(Math.max(0, GRID_SIZE * GRID_SIZE - solutions.length))].map((_, index) => (
          <div
            key={`empty-${index}`}
            className={`${BUBBLE_DIMENSIONS} rounded-full bg-gray-100/20
                      flex items-center justify-center`}
          />
        ))}
      </div>
    </div>
  );
}; 