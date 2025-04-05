
import React from 'react';
import { Book, Home, Award, Trophy, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const Navigation: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', icon: <Home className="h-5 w-5" />, active: true },
    { label: 'Learn', icon: <Book className="h-5 w-5" /> },
    { label: 'Quizzes', icon: <Zap className="h-5 w-5" /> },
    { label: 'Achievements', icon: <Award className="h-5 w-5" /> },
    { label: 'Leaderboard', icon: <Trophy className="h-5 w-5" /> },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between overflow-x-auto">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`rounded-none px-4 py-3 flex-1 ${
                item.active ? 'bg-sport-blue text-white' : 'text-gray-600'
              }`}
            >
              <div className="flex flex-col items-center space-y-1">
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
