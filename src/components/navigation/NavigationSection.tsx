import { NavigationItem } from "./NavigationItem";
import type { TreeNode } from "@/types/tree";

interface NavigationSectionProps {
  section: TreeNode;
}

export function NavigationSection({ section }: NavigationSectionProps) {
  return (
    <div className="p-4">
      {/* Parent Title */}
      <div className="relative mb-8">
        <div className="rounded-lg border-2 border-border px-6 py-4">
          <h2 className="text-2xl font-medium">{section.title}</h2>
        </div>
        
        {/* Vertical line from parent to children */}
        {section.children && section.children.length > 0 && (
          <div className="absolute left-6 top-full w-[2px] h-8 bg-border" />
        )}
      </div>
      
      {/* Children */}
      {section.children && (
        <div className="relative">
          {section.children.map((item, index) => (
            <NavigationItem
              key={item.navMapId}
              item={item}
              isLast={index === section.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}