import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Link2Icon, UsersIcon } from "lucide-react";
import type { ResearchItem } from "@/types/research";
import type { FeedbackItem } from "@/types/feedback";

interface ResearchDetailCardProps {
  item: ResearchItem | FeedbackItem;
  onClose: () => void;
}

export function ResearchDetailCard({ item, onClose }: ResearchDetailCardProps) {
  // Check if item is a ResearchItem by checking for research-specific properties
  const isResearchItem = (item: ResearchItem | FeedbackItem): item is ResearchItem => {
    return 'authors' in item && 'abstract' in item && 'methods' in item;
  };

  // Split results into separate sentences if it's a research item
  const resultItems = isResearchItem(item)
    ? item.results.split('.').map(item => item.trim()).filter(item => item.length > 0)
    : [];

  return (
    <div className="h-full overflow-auto bg-background">
      <div className="container py-4">
        <button 
          onClick={onClose}
          className="mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to table
        </button>
        
        {/* Meta Section */}
        <div className="grid gap-4 mb-4">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {item.date}
                    </div>
                    {isResearchItem(item) && (
                      <>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="w-4 h-4" />
                          {item.authors.map(author => author.name).join(' & ')}
                        </div>
                        {item.url && (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-foreground transition-colors"
                          >
                            <Link2Icon className="w-4 h-4" />
                            View Source
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column: Abstract/Problem and Methods/Solution */}
          <div className="space-y-4">
            {/* Abstract/Problem */}
            <Card className="bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-600">
                  {isResearchItem(item) ? 'Abstract' : 'Problem'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {isResearchItem(item) ? item.abstract : item.problem}
                </p>
                {!isResearchItem(item) && item.customer && (
                  <div className="mt-4">
                    <div className="inline-flex px-2 py-1 bg-blue-100 rounded-full text-xs text-blue-600">
                      {item.customer}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Methods/Solution */}
            <Card className="bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-green-600">
                  {isResearchItem(item) ? 'Methods' : 'Solution'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {isResearchItem(item) ? item.methods : item.solution}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Results/Additional Info */}
          <Card className="bg-purple-50/50">
            <CardHeader>
              <CardTitle className="text-purple-600">
                {isResearchItem(item) ? 'Results & Observations' : 'Additional Information'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isResearchItem(item) ? (
                <div className="space-y-4">
                  {resultItems.map((result, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-sm text-purple-600 font-medium">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground pt-1.5">{result}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Feasibility Score */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Feasibility Score</span>
                    <span className="font-medium">{item.feasibility}/5</span>
                  </div>

                  {/* Analysis Questions */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-purple-600">But how does this happen?</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.analysis.howQuestion}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-purple-600">But why does this occur?</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.analysis.whyQuestion}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-purple-600">But which element is involved?</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.analysis.whichQuestion}
                      </p>
                    </div>
                  </div>

                  {/* Key Terms */}
                  <div className="flex flex-wrap gap-2">
                    {item.keyTerms.map((term) => (
                      <div key={term} className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-600">
                        {term}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 