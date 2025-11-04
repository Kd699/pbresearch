import { navigationData } from "@/data/navigationData";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

export function MainNav() {
  const { selectedSection, setSelectedSection } = useStore();

  return (
    <div className="container py-4">
      <div className="flex gap-2">
        {navigationData.map((section) => (
          <button
            key={section.navMapId}
            onClick={() => setSelectedSection(selectedSection === section.navMapId ? null : section.navMapId)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedSection === section.navMapId
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
} 