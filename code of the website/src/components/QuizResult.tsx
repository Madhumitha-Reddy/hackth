
import React from 'react';
import { Trophy, Award, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BadgeCard } from '@/components';
import { Badge } from '@/data/quizData';

interface QuizResultProps {
  score: number;
  totalPossible: number;
  timeSpent: string;
  earnedBadges: Badge[];
  onRestart: () => void;
  onHome: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalPossible,
  timeSpent,
  earnedBadges,
  onRestart,
  onHome
}) => {
  const percentage = Math.round((score / totalPossible) * 100);
  
  let message = "Great effort!";
  let color = "text-sport-blue";
  
  if (percentage >= 90) {
    message = "Excellent job!";
    color = "text-sport-green";
  } else if (percentage >= 70) {
    message = "Well done!";
    color = "text-sport-blue";
  } else if (percentage < 50) {
    message = "Keep practicing!";
    color = "text-amber-500";
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto animate-scale-in">
      <div className="text-center">
        <Trophy className="h-16 w-16 mx-auto text-sport-gold mb-4" />
        <h2 className="text-xl font-bold mb-2">Quiz Completed!</h2>
        <p className={`text-2xl font-bold ${color} mb-6`}>{message}</p>
        
        <div className="flex justify-center items-center mb-6">
          <div className="relative h-32 w-32">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="10" 
              />
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke={percentage >= 70 ? "#15803d" : percentage >= 50 ? "#0e7490" : "#f59e0b"} 
                strokeWidth="10" 
                strokeDasharray={`${percentage * 2.83}, 283`} 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{percentage}%</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Score</p>
            <p className="font-bold text-sport-blue">{score}/{totalPossible}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Time</p>
            <p className="font-bold text-sport-blue">{timeSpent}</p>
          </div>
        </div>
        
        {earnedBadges.length > 0 && (
          <div className="mb-6">
            <h3 className="flex items-center justify-center text-sm font-semibold mb-3">
              <Award className="h-5 w-5 mr-1 text-sport-gold" />
              Badges Earned
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {earnedBadges.map(badge => (
                <BadgeCard key={badge.id} badge={{...badge, unlocked: true}} />
              ))}
            </div>
          </div>
        )}
        
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            onClick={onRestart} 
            className="flex-1"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Button 
            onClick={onHome} 
            className="flex-1 bg-sport-blue hover:bg-sport-blue-light"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
