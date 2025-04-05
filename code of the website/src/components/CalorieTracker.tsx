
import React, { useState } from 'react';
import { Flame, Award, Plus, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { calorieActivities } from '@/data/quizData';
import { toast } from '@/hooks/use-toast';

interface CalorieTrackerProps {
  onAddCalories: (calories: number) => void;
  totalCaloriesBurned: number;
}

const CalorieTracker: React.FC<CalorieTrackerProps> = ({ onAddCalories, totalCaloriesBurned }) => {
  const [showAddActivity, setShowAddActivity] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("");
  const [duration, setDuration] = useState<number>(30);
  
  const handleAddActivity = () => {
    if (!selectedActivity) return;
    
    const activity = calorieActivities.find(act => act.id === selectedActivity);
    if (!activity) return;
    
    const caloriesBurned = Math.round(activity.caloriesPerMinute * duration);
    onAddCalories(caloriesBurned);
    
    toast({
      title: "Activity Logged!",
      description: `You burned ${caloriesBurned} calories with ${activity.name}`,
    });
    
    setShowAddActivity(false);
    
    // Check for badge achievement
    if (caloriesBurned >= 500) {
      toast({
        title: "Badge Unlocked!",
        description: "You earned the Calorie Crusher badge!",
        variant: "default",
      });
    }
  };
  
  return (
    <>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-bold flex items-center">
            <Flame className="mr-2 h-5 w-5 text-red-500" />
            Calorie Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-red-500 mb-1">{totalCaloriesBurned}</div>
            <div className="text-sm text-gray-500">Total Calories Burned</div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="text-sm font-medium">Recent Activities</div>
            <div className="flex flex-wrap gap-2">
              {calorieActivities.slice(0, 3).map(activity => (
                <Badge key={activity.id} variant="outline" className="bg-red-50 text-red-500 border-red-200">
                  {activity.name}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mb-2">
            Track your workouts to earn fitness badges and points
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={() => setShowAddActivity(true)} 
            className="w-full bg-red-500 hover:bg-red-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Log Activity
          </Button>
        </CardFooter>
      </Card>
      
      <Dialog open={showAddActivity} onOpenChange={setShowAddActivity}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Your Activity</DialogTitle>
            <DialogDescription>
              Track your workout to calculate calories burned
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Activity Type</label>
              <Select value={selectedActivity} onValueChange={setSelectedActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an activity" />
                </SelectTrigger>
                <SelectContent>
                  {calorieActivities.map(activity => (
                    <SelectItem key={activity.id} value={activity.id}>
                      {activity.name} ({activity.caloriesPerMinute} cal/min)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Duration (minutes)
              </label>
              <Input 
                type="number" 
                value={duration.toString()}
                onChange={(e) => setDuration(Number(e.target.value))}
                min="1"
                max="300"
              />
            </div>
            
            {selectedActivity && (
              <div className="bg-gray-50 p-3 rounded-md text-sm">
                <div className="flex justify-between mb-1">
                  <span>Estimated calories:</span>
                  <span className="font-semibold text-red-500">
                    {Math.round((calorieActivities.find(a => a.id === selectedActivity)?.caloriesPerMinute || 0) * duration)}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {calorieActivities.find(a => a.id === selectedActivity)?.description}
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddActivity(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddActivity} 
              disabled={!selectedActivity || duration <= 0}
              className="bg-red-500 hover:bg-red-600"
            >
              Log Activity
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CalorieTracker;
