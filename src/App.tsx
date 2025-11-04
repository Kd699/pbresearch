import { ResearchTable } from './components/research/ResearchTable';
import { Button } from './components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { useState, useRef } from 'react';
import { BubbleView } from './components/bubble/BubbleView';

export default function App() {
  const [view, setView] = useState<'navigation' | 'bubble'>('bubble');
  const [tableHeight, setTableHeight] = useState(300);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startHeight = useRef(0);

  const toggleView = () => {
    setView(current => current === 'navigation' ? 'bubble' : 'navigation');
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    startHeight.current = tableHeight;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const delta = startY.current - e.clientY;
    const newHeight = Math.min(Math.max(startHeight.current + delta, 100), window.innerHeight - 100);
    setTableHeight(newHeight);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container pb-72">
        <BubbleView />
      </div>

      {/* Sticky Research Table */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-background border-t"
        style={{ height: `${tableHeight}px` }}
      >
        <div 
          className="w-full h-2 cursor-ns-resize bg-gray-200 hover:bg-gray-300 transition-colors"
          onMouseDown={handleMouseDown}
        />
        <div className="container">
          <ResearchTable />
        </div>
      </div>
    </div>
  );
}