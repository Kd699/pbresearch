import { researchData } from '@/data/researchData';
import { feedbackData } from '@/data/feedback';
import { useStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { ResearchTableRow } from './ResearchTableRow';
import { ResearchDetailCard } from './ResearchDetailCard';

export function ResearchTable() {
  const { 
    selectedTab,
    setSelectedTab,
    selectedUserType,
    setSelectedUserType,
    selectedSection,
    selectedFeature,
    highlightedRowId,
    setHighlightedRowId,
    showDetail,
    setShowDetail
  } = useStore();

  // Get the source data based on selected tab
  const sourceData = selectedTab === 'research' ? researchData : feedbackData;

  console.log('Data Sources:', {
    researchDataLength: researchData.length,
    feedbackDataLength: feedbackData.length,
    currentSourceData: sourceData.length,
    researchIds: researchData.map(item => item.navMapId),
    feedbackIds: feedbackData.map(item => item.navMapId)
  });

  // Find the highlighted item based on bubble text or row ID
  const highlightedItem = (() => {
    // Get the bubble info that was clicked
    const clickedBubbleInfo = localStorage.getItem('lastClickedBubble');

    if (clickedBubbleInfo) {
      try {
        const { text: clickedBubbleText, navMapId: clickedNavMapId, source: clickedSource, title: clickedTitle } = JSON.parse(clickedBubbleInfo);
        
        // First try to find in the source data
        const sourceToSearch = clickedSource === 'research' ? researchData : feedbackData;
        
        // Look for exact match with title (must exist since title is unique)
        const exactMatch = sourceToSearch.find(item => item.title === clickedTitle);

        if (!exactMatch) {
          console.error('Failed to find item with title:', {
            title: clickedTitle,
            source: clickedSource,
            availableTitles: sourceToSearch.map(item => item.title)
          });
          throw new Error(`Item not found with title: ${clickedTitle}`);
        }

        // Store the found item in localStorage to prevent second lookup
        localStorage.setItem('selectedItem', JSON.stringify(exactMatch));

        // Get navigation section
        const section = exactMatch.navMapId.charAt(0) === '1' ? 'home' :
                       exactMatch.navMapId.charAt(0) === '2' ? 'wellbeing' :
                       exactMatch.navMapId.charAt(0) === '3' ? 'rewards' : 'nav';
        
        console.log('Item Found:', {
          bubble: clickedBubbleText,
          title: exactMatch.title,
          navigation: {
            section,
            subsection: exactMatch.navMapId
          }
        });
        
        localStorage.removeItem('lastClickedBubble');
        return exactMatch;
      } catch (e) {
        console.error('Error processing bubble click:', e);
        localStorage.removeItem('lastClickedBubble');
        throw e;
      }
    }

    // Check if we have a stored selected item
    const storedItem = localStorage.getItem('selectedItem');
    if (storedItem) {
      try {
        return JSON.parse(storedItem);
      } catch (e) {
        console.error('Error parsing stored item:', e);
        localStorage.removeItem('selectedItem');
      }
    }

    // If no stored item and this is a row click
    if (highlightedRowId) {
      const currentSource = selectedTab === 'research' ? researchData : feedbackData;
      const match = currentSource.find(item => item.navMapId === highlightedRowId);
      
      if (!match) {
        console.error('Failed to find item with navMapId:', {
          navMapId: highlightedRowId,
          source: selectedTab,
          availableIds: currentSource.map(item => item.navMapId)
        });
        throw new Error(`Item not found with navMapId: ${highlightedRowId}`);
      }

      // Store the found item
      localStorage.setItem('selectedItem', JSON.stringify(match));

      const section = match.navMapId.charAt(0) === '1' ? 'home' :
                     match.navMapId.charAt(0) === '2' ? 'wellbeing' :
                     match.navMapId.charAt(0) === '3' ? 'rewards' : 'nav';
      
      console.log('Item Found by Row:', {
        title: match.title,
        navigation: {
          section,
          subsection: match.navMapId
        }
      });
      return match;
    }

    return null;
  })();

  // Filter data based on selected tab and user type
  const filteredData = sourceData.filter(item => {
    // If we have a highlighted item, only show that item
    if (highlightedItem && item.title === highlightedItem.title) return true;
    
    // Otherwise apply filters
    if (selectedUserType && item.userType !== selectedUserType) return false;
    if (selectedFeature && item.navMapId !== selectedFeature) return false;
    
    if (selectedSection) {
      const sectionNumber = selectedSection === 'home' ? '1' : 
                        selectedSection === 'wellbeing' ? '2' :
                        selectedSection === 'rewards' ? '3' :
                        selectedSection === 'nav' ? '4' : null;
      if (!sectionNumber || !item.navMapId.startsWith(sectionNumber + '.')) return false;
    }

    return true;
  });

  // Clear stored item when detail view is closed
  const handleDetailClose = () => {
    setShowDetail(false);
    setHighlightedRowId(null);
    localStorage.removeItem('selectedItem');
  };

  console.log('ResearchTable Debug:', {
    selectedTab,
    showDetail,
    sourceDataLength: sourceData.length,
    filteredDataLength: filteredData.length,
    highlightedItem: highlightedItem ? {
      title: highlightedItem.title,
      userType: highlightedItem.userType,
      bubble: Array.isArray(highlightedItem.bubble) ? highlightedItem.bubble[0] : highlightedItem.bubble
    } : null,
    allIds: filteredData.map(item => item.navMapId)
  });

  if (showDetail && highlightedItem) {
    return (
      <ResearchDetailCard 
        item={highlightedItem} 
        onClose={handleDetailClose}
      />
    );
  }

  return (
    <div className="space-y-4 p-4">
      {/* Tabs */}
      <div className="flex gap-2 border-b">
        <button
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            selectedTab === 'research' 
              ? "border-b-2 border-primary text-foreground" 
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setSelectedTab('research')}
        >
          Research
        </button>
        <button
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            selectedTab === 'feedback' 
              ? "border-b-2 border-primary text-foreground" 
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => setSelectedTab('feedback')}
        >
          Feedback
        </button>
      </div>

      {/* User Type Filter */}
      <div className="flex gap-2">
        {['Users', 'Managers', 'Admins'].map((type) => (
          <button
            key={type}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-colors",
              selectedUserType === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
            onClick={() => setSelectedUserType(selectedUserType === type ? null : type as any)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="space-y-2">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-muted/50 rounded-lg">
          <div className="text-sm font-medium">Date</div>
          <div className="text-sm font-medium">Title</div>
          <div className="text-sm font-medium">Problem</div>
          <div className="text-sm font-medium">Solution</div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {filteredData.map((item, index) => (
            <ResearchTableRow 
              key={`${selectedTab}-${item.navMapId}-${index}`} 
              item={item} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}