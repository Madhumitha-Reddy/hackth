
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentPoints: number;
  targetPoints: number;
  level: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentPoints, 
  targetPoints,
  level
}) => {
  const percentage = Math.min((currentPoints / targetPoints) * 100, 100);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-sport-blue">Level {level}</span>
        <span className="text-sm text-gray-600">{currentPoints}/{targetPoints} points</span>
      </div>
      <Progress value={percentage} className="h-3" />
      <div className="mt-2 text-xs text-gray-500 italic">
        {targetPoints - currentPoints} points until next level
      </div>
    </div>
  );
};

export default ProgressBar;
