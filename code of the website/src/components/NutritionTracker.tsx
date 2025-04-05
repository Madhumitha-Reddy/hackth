
import React, { useState } from 'react';
import { Apple, Check, Award, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from '@/hooks/use-toast';

interface MealPlan {
  id: number;
  day: string;
  completed: boolean;
}

interface NutritionTrackerProps {
  onEarnBadge: (badgeId: string) => void;
  streak: number;
  onStreakUpdate: (newStreak: number) => void;
}

const NutritionTracker: React.FC<NutritionTrackerProps> = ({ 
  onEarnBadge, 
  streak,
  onStreakUpdate
}) => {
  const [mealPlan, setMealPlan] = useState<MealPlan[]>([
    { id: 1, day: "Monday", completed: false },
    { id: 2, day: "Tuesday", completed: false },
    { id: 3, day: "Wednesday", completed: false },
    { id: 4, day: "Thursday", completed: false },
    { id: 5, day: "Friday", completed: false },
    { id: 6, day: "Saturday", completed: false },
    { id: 7, day: "Sunday", completed: false },
  ]);
  
  const completedDays = mealPlan.filter(day => day.completed).length;
  const percentage = Math.round((completedDays / mealPlan.length) * 100);
  
  const handleToggleDay = (id: number) => {
    const updatedPlan = mealPlan.map(day => 
      day.id === id ? { ...day, completed: !day.completed } : day
    );
    
    setMealPlan(updatedPlan);
    
    // Count new completed days
    const newCompletedDays = updatedPlan.filter(day => day.completed).length;
    
    // Check if all days are completed to award badge
    if (newCompletedDays === 7 && completedDays !== 7) {
      onEarnBadge("badge7"); // Meal Master badge
      toast({
        title: "Badge Unlocked!",
        description: "You earned the Meal Master badge!",
        variant: "default",
      });
    }
    
    // Update streak
    if (newCompletedDays > completedDays) {
      onStreakUpdate(streak + 1);
      
      // Check for streak badge
      if (streak + 1 === 10) {
        onEarnBadge("badge8"); // Healthy Streaker badge
        toast({
          title: "Badge Unlocked!",
          description: "You earned the Healthy Streaker badge!",
          variant: "default",
        });
      }
    }
  };
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-bold flex items-center">
          <Apple className="mr-2 h-5 w-5 text-green-500" />
          Nutrition Plan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Weekly Progress</span>
            <span className="text-sm text-gray-500">{completedDays}/{mealPlan.length} days</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">Daily Meal Tracking</div>
            <div className="flex items-center text-xs text-green-600">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Current streak: {streak} days</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {mealPlan.map(day => (
              <li key={day.id} className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full justify-start ${
                    day.completed 
                      ? "bg-green-50 text-green-600 border-green-200" 
                      : "text-gray-500"
                  }`}
                  onClick={() => handleToggleDay(day.id)}
                >
                  <div className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
                    day.completed 
                      ? "border-green-500 bg-green-500" 
                      : "border-gray-300"
                  }`}>
                    {day.completed && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span>{day.day}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-gray-500">
          Follow your plan to earn badges
        </div>
        <Award className={`h-5 w-5 ${
          percentage === 100 ? "text-green-500" : "text-gray-300"
        }`} />
      </CardFooter>
    </Card>
  );
};

export default NutritionTracker;
