import { cn } from "@/lib/utils";
import type { UserType } from "@/types/research";
import { useStore } from "@/lib/store";

const tabs: Array<{id: 'research' | 'feedback', label: string}> = [
  { id: 'research', label: 'Research' },
  { id: 'feedback', label: 'Feedback' }
];

const userTypes: UserType[] = ['Users', 'Managers', 'Admins'];

export function ResearchTabs() {
  const { selectedUserType, setSelectedUserType, selectedTab, setSelectedTab } = useStore();

  return (
    <div className="space-y-4 mb-4">
      {/* Main Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              selectedTab === tab.id
                ? "bg-white text-foreground shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* User Type Filter */}
      <div className="flex gap-2">
        {userTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedUserType(type)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
              selectedUserType === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}