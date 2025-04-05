
import React from 'react';
import { Zap, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface QuizCardProps {
  title: string;
  description: string;
  questionsCount: number;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  onClick: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  questionsCount,
  estimatedTime,
  difficulty,
  onClick
}) => {
  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800'
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1 text-sport-blue" />
            <span>{questionsCount} questions</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-sport-blue" />
            <span>{estimatedTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onClick} 
          className="w-full bg-sport-blue hover:bg-sport-blue-light"
        >
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
