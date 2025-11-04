import { create } from 'zustand';
import type { UserType } from '@/types/research';

interface Store {
  // Table view state
  selectedTab: 'research' | 'feedback';
  setSelectedTab: (tab: 'research' | 'feedback') => void;
  selectedUserType: UserType;
  setSelectedUserType: (type: UserType) => void;
  
  // Selected item state
  highlightedRowId: string | null;
  setHighlightedRowId: (id: string | null) => void;
  showDetail: boolean;
  setShowDetail: (show: boolean) => void;

  // Feasibility filter
  feasibilityRange: [number, number];
  setFeasibilityRange: (range: [number, number]) => void;

  // Navigation state (for BreadcrumbNav)
  selectedSection: string | null;
  setSelectedSection: (section: string | null) => void;
  selectedFeature: string | null;
  setSelectedFeature: (feature: string | null) => void;
  selectedKeyTerm: string | null;
  setSelectedKeyTerm: (term: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  // Table view state
  selectedTab: 'research',
  setSelectedTab: (tab) => set({ selectedTab: tab }),
  selectedUserType: 'Users',
  setSelectedUserType: (type) => set({ selectedUserType: type }),
  
  // Selected item state
  highlightedRowId: null,
  setHighlightedRowId: (id) => set((state) => {
    console.log('Setting highlightedRowId:', { id, currentState: state });
    return { 
      highlightedRowId: id,
      showDetail: id !== null
    };
  }),
  showDetail: false,
  setShowDetail: (show) => set((state) => {
    console.log('Setting showDetail:', { show, currentState: state });
    return { 
      showDetail: show,
      highlightedRowId: show ? state.highlightedRowId : null
    };
  }),

  // Feasibility filter
  feasibilityRange: [1, 4],
  setFeasibilityRange: (range) => set({ feasibilityRange: range }),

  // Navigation state (for BreadcrumbNav)
  selectedSection: null,
  setSelectedSection: (section) => set({ 
    selectedSection: section,
    // Clear child selections when parent changes
    selectedFeature: null,
    selectedKeyTerm: null,
    // Reset table filters when navigation changes
    highlightedRowId: null,
    showDetail: false
  }),
  selectedFeature: null,
  setSelectedFeature: (feature) => set({ 
    selectedFeature: feature,
    // Clear key term when feature changes
    selectedKeyTerm: null,
    // Reset table filters when navigation changes
    highlightedRowId: null,
    showDetail: false
  }),
  selectedKeyTerm: null,
  setSelectedKeyTerm: (term) => set({ 
    selectedKeyTerm: term,
    // Reset table filters when navigation changes
    highlightedRowId: null,
    showDetail: false
  }),
}));