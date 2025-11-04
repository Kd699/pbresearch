import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import { FeasibilitySlider } from "./FeasibilitySlider";

const navItems = [
  { id: '4.1', title: 'Savings Dashboard' },
  { id: '4.2', title: 'Account Settings' },
  { id: '4.3', title: 'Nav' }
];

export function SubNav() {
  const { selectedFeature, setSelectedFeature } = useStore();

  return (
    <div className="container py-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedFeature(selectedFeature === item.id ? null : item.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedFeature === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Feasibility Slider */}
        <div className="w-[200px]">
          <FeasibilitySlider />
        </div>
      </div>
    </div>
  );
} 