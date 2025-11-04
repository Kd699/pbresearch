import { navigationData } from "@/data/navigationData";
import { NavigationSection } from "./NavigationSection";
import { FeasibilitySlider } from "./FeasibilitySlider";

export function NavigationGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-medium">Navigation</h2>
        <div className="w-[200px] bg-background p-2 rounded-lg border shadow-sm">
          <FeasibilitySlider />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {navigationData.map((section) => (
          <NavigationSection key={section.navMapId} section={section} />
        ))}
      </div>
    </div>
  );
}