
import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Question } from '../data/quizData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean, points: number) => void;
  onNext: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const handleOptionSelect = (optionId: string) => {
    if (showResult) return;
    setSelectedOption(optionId);
  };
  
  const handleSubmit = () => {
    if (!selectedOption || showResult) return;
    
    const selectedAnswerObj = question.options.find(opt => opt.id === selectedOption);
    const isCorrect = selectedAnswerObj?.isCorrect || false;
    
    setShowResult(true);
    onAnswer(isCorrect, isCorrect ? question.points : 0);
  };
  
  const getOptionClass = (optionId: string) => {
    if (!showResult) {
      return selectedOption === optionId ? 'border-sport-blue bg-blue-50' : 'border-gray-200';
    }
    
    const option = question.options.find(opt => opt.id === optionId);
    
    if (option?.isCorrect) {
      return 'border-green-500 bg-green-50 correct';
    }
    
    if (optionId === selectedOption && !option?.isCorrect) {
      return 'border-red-500 bg-red-50 incorrect';
    }
    
    return 'border-gray-200 opacity-70';
  };

  return (
    <>
      <Card className="animate-scale-in">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex justify-between">
            <span>{question.text}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowExplanation(true)}
              className="ml-2 h-6 w-6 text-gray-400 hover:text-sport-blue"
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {question.options.map(option => (
              <div
                key={option.id}
                className={`quiz-option p-3 border rounded-md cursor-pointer transition-all ${getOptionClass(option.id)}`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <div className="flex items-center">
                  {showResult && option.isCorrect && (
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  )}
                  {showResult && selectedOption === option.id && !option.isCorrect && (
                    <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  )}
                  <span className="text-sm">{option.text}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-gray-500">
            {question.points} points
          </div>
          {showResult ? (
            <Button onClick={onNext} className="bg-sport-green hover:bg-sport-green-light">
              Next Question
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              disabled={!selectedOption}
              className="bg-sport-blue hover:bg-sport-blue-light"
            >
              Submit Answer
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={showExplanation} onOpenChange={setShowExplanation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Explanation</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {question.explanation}
          </DialogDescription>
          <Button 
            onClick={() => setShowExplanation(false)}
            className="w-full mt-2"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizQuestion;
