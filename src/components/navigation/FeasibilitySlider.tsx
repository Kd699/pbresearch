import * as React from 'react';
import { Slider } from '@/components/ui/slider';
import { useStore } from '@/lib/store';

export function FeasibilitySlider() {
  const { feasibilityRange, setFeasibilityRange } = useStore();

  return (
    <div className="flex flex-col gap-2 w-full max-w-[200px] px-4">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Feasibility</span>
        <div className="flex gap-1">
          <span>{feasibilityRange[0]}</span>
          <span>-</span>
          <span>{feasibilityRange[1]}</span>
        </div>
      </div>
      <Slider
        value={feasibilityRange}
        onValueChange={setFeasibilityRange}
        min={0}
        max={5}
        step={1}
        minStepsBetweenThumbs={1}
        className="w-full"
      />
    </div>
  );
} 