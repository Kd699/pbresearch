import { useStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import type { ResearchItem } from '@/types/research';
import type { FeedbackItem } from '@/types/feedback';

interface ResearchTableRowProps {
  item: ResearchItem | FeedbackItem;
}

export function ResearchTableRow({ item }: ResearchTableRowProps) {
  const { 
    highlightedRowId,
    setHighlightedRowId,
    showDetail,
    setShowDetail
  } = useStore();
  
  const isHighlighted = highlightedRowId === item.navMapId;

  const handleClick = () => {
    if (isHighlighted) {
      setHighlightedRowId(null);
      setShowDetail(false);
    } else {
      setHighlightedRowId(item.navMapId);
      setShowDetail(true);
    }
  };

  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-4 px-4 py-3 rounded-lg transition-colors cursor-pointer",
        isHighlighted 
          ? "bg-primary/10 hover:bg-primary/15" 
          : "hover:bg-muted"
      )}
      onClick={handleClick}
    >
      <div className="text-sm text-muted-foreground">
        {item.date}
      </div>
      <div className="text-sm font-medium">
        {item.title}
      </div>
      <div className="text-sm text-muted-foreground">
        {item.problem}
      </div>
      <div className="text-sm text-muted-foreground">
        {item.solution}
      </div>
    </div>
  );
}