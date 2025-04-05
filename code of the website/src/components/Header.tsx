
import React from 'react';
import { Award, Medal, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Medal className="h-8 w-8 text-sport-blue" />
          <h1 className="text-xl font-bold text-sport-blue">Clean Sport Quest</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="items-center space-x-1 hidden md:flex">
            <Award className="h-5 w-5 text-sport-gold" />
            <span className="text-sm font-medium">120 Points</span>
          </div>
          <Button variant="ghost" size="sm" className="text-sport-blue">
            <User className="h-5 w-5 mr-1" />
            <span className="hidden md:inline">Profile</span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-sport-blue-light text-white">
              AT
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
