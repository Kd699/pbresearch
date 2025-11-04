import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import { navigationData } from "@/data/navigationData";
import { FeasibilitySlider } from "@/components/navigation/FeasibilitySlider";
import { UserProfileIcon } from "../ui/UserProfileIcon";

// Level 1: Main sections
const sections = navigationData;

// Level 2: Features (populated based on selected section)
const getFeatures = (sectionId: string | null) => {
  if (!sectionId) return [];
  const section = sections.find(s => s.navMapId === sectionId);
  return section?.children || [];
};

// Level 3: Key terms (from selected feature)
const getKeyTerms = (featureId: string | null) => {
  if (!featureId) return [];
  
  // Find the exact feature in the navigation data
  const selectedFeature = sections
    .flatMap(section => section.children || [])
    .find(feature => feature.navMapId === featureId);

  if (!selectedFeature) {
    console.warn('No feature found with NavMapID:', featureId);
    return [];
  }

  // Return only the key terms for this specific feature
  return selectedFeature.keyTerms || [];
};

interface PillProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function Pill({ label, isSelected, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
        isSelected 
          ? "bg-primary text-primary-foreground" 
          : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      {label}
    </button>
  );
}

export function BreadcrumbNav() {
  const {
    selectedSection,
    setSelectedSection,
    selectedFeature,
    setSelectedFeature,
    selectedKeyTerm,
    setSelectedKeyTerm
  } = useStore();

  // Clear dependent selections when parent selection changes
  const handleSectionChange = (sectionId: string) => {
    const newSection = selectedSection === sectionId ? null : sectionId;
    console.log('Section change:', { from: selectedSection, to: newSection });
    setSelectedSection(newSection);
  };

  const handleFeatureChange = (featureId: string) => {
    const newFeature = selectedFeature === featureId ? null : featureId;
    console.log('Feature change:', { from: selectedFeature, to: newFeature });
    
    // Find the feature's key terms
    const feature = sections
      .flatMap(section => section.children || [])
      .find(f => f.navMapId === featureId);
    
    console.log('Selected feature:', feature);
    console.log('Feature key terms:', feature?.keyTerms);
    
    setSelectedFeature(newFeature);
  };

  const handleKeyTermChange = (term: string) => {
    const newTerm = selectedKeyTerm === term ? null : term;
    console.log('Key term change:', { from: selectedKeyTerm, to: newTerm });
    setSelectedKeyTerm(newTerm);
  };

  const features = getFeatures(selectedSection);
  const keyTerms = getKeyTerms(selectedFeature);

  return (
    <div className="space-y-4">
      {/* Level 1: Main Sections */}
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <div className="flex gap-2 items-center">
          {sections.map((section) => (
            <Pill
              key={section.navMapId}
              label={section.title}
              isSelected={selectedSection === section.navMapId}
              onClick={() => handleSectionChange(section.navMapId)}
            />
          ))}
          <div className="h-9 w-px bg-border mx-2" /> {/* Divider */}
          <div className="min-w-[200px]">
            <FeasibilitySlider />
          </div>
        </div>
        <UserProfileIcon />
      </div>

      {/* Level 2: Features */}
      {selectedSection && features.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {features.map((feature) => (
            <Pill
              key={feature.navMapId}
              label={feature.title}
              isSelected={selectedFeature === feature.navMapId}
              onClick={() => handleFeatureChange(feature.navMapId)}
            />
          ))}
        </div>
      )}

      {/* Level 3: Key Terms */}
      {selectedFeature && keyTerms.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {keyTerms.map((term) => (
            <Pill
              key={term}
              label={term}
              isSelected={selectedKeyTerm === term}
              onClick={() => handleKeyTermChange(term)}
            />
          ))}
        </div>
      )}
    </div>
  );
} 