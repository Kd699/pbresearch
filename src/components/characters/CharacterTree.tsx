import { ScrollArea } from "@/components/ui/scroll-area";
import { TreeNode } from "./TreeNode";
import { navigationData } from "@/data/navigationData";

export function CharacterTree() {
  return (
    <div className="space-y-6">
      <ScrollArea className="h-[calc(100vh-2rem)] rounded-md border p-4">
        <div className="space-y-8">
          {navigationData.map((node, index) => (
            <TreeNode
              key={node.id}
              node={node}
              isLast={index === navigationData.length - 1}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}