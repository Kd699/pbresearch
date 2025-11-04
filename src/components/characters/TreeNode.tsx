import { cn } from "@/lib/utils";
import type { TreeNode } from "@/types/tree";

interface TreeNodeProps {
  node: TreeNode;
  isLast: boolean;
  level?: number;
}

export function TreeNode({ node, isLast, level = 0 }: TreeNodeProps) {
  return (
    <div className="relative">
      {/* Vertical line from parent */}
      {level > 0 && (
        <div 
          className={cn(
            "absolute left-4 w-px bg-border",
            isLast ? "h-6" : "h-full"
          )}
          style={{ top: "-12px" }}
        />
      )}
      
      {/* Horizontal line to node */}
      {level > 0 && (
        <div 
          className="absolute w-6 h-px bg-border top-6 left-4"
        />
      )}

      <div className={cn("relative ml-10 mb-6")}>
        <div className="absolute left-[-22px] top-4 w-4 h-4 rounded-full bg-background border-2 border-border z-10" />
        
        <div className="bg-card p-4 rounded-lg border hover:border-primary/50 transition-colors">
          <h3 className="font-medium">{node.title}</h3>
        </div>

        {node.children && (
          <div className="mt-6">
            {node.children.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                isLast={index === node.children!.length - 1}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}