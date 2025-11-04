export function ResearchTableHeader() {
  return (
    <div className="grid grid-cols-4 gap-6 px-6 py-4 border-b">
      <div className="text-sm font-medium text-muted-foreground">
        Date
      </div>
      <div className="text-sm font-medium text-muted-foreground">
        Title
      </div>
      <div className="text-sm font-medium text-muted-foreground">
        Problem
      </div>
      <div className="text-sm font-medium text-muted-foreground">
        Solution
      </div>
    </div>
  );
}