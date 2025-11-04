import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import type { TreeNode } from "@/types/tree";

interface NavigationItemProps {
  item: TreeNode;
  isLast: boolean;
}

export function NavigationItem({ item, isLast }: NavigationItemProps) {
  const { selectedItemId, setSelectedItemId } = useStore();
  const isSelected = selectedItemId === item.navMapId;

  return (
    <div className="relative">
      {/* Continuous vertical line */}
      <div 
        className={cn(
          "absolute left-6 top-0 w-[2px] bg-border",
          isLast ? "h-6" : "h-full"
        )}
      />
      
      {/* Horizontal branch */}
      <div className="absolute left-6 top-6 w-8 h-[2px] bg-border" />

      {/* Connection dot */}
      <div className="absolute left-6 top-5">
        <div className={cn(
          "w-3 h-3 rounded-full border-2 transition-colors",
          isSelected 
            ? "bg-primary border-primary" 
            : "bg-background border-border"
        )} />
      </div>

      {/* Content */}
      <div className="relative ml-16 pb-8">
        <button
          onClick={() => setSelectedItemId(isSelected ? null : item.navMapId)}
          className={cn(
            "min-w-[200px] h-14 text-left rounded-lg border-2 border-border px-6 transition-all",
            "flex items-center",
            isSelected && "ring-2 ring-primary/20"
          )}
        >
          <span className={cn(
            "text-lg transition-colors",
            isSelected ? "text-foreground font-medium" : "text-muted-foreground"
          )}>
            {item.title}
          </span>
        </button>
      </div>
    </div>
  );
}