
import React from 'react';
import { Badge as BadgeType } from '../data/quizData';
import { Lock } from 'lucide-react';

interface BadgeCardProps {
  badge: BadgeType;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  return (
    <div className={`badge-container relative rounded-lg overflow-hidden border ${
      badge.unlocked ? 'border-sport-gold bg-yellow-50' : 'border-gray-200 bg-gray-50'
    } p-4 flex flex-col items-center justify-center transition-all duration-300 h-full`}>
      {badge.unlocked && <div className="badge-shine rounded-full"></div>}
      
      <div className="relative w-16 h-16 mb-3">
        <img 
          src={badge.imageUrl} 
          alt={badge.name} 
          className={`w-full h-full object-contain ${!badge.unlocked && 'opacity-50 grayscale'}`}
        />
        {!badge.unlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-6 h-6 text-gray-400" />
          </div>
        )}
      </div>
      
      <h3 className={`text-sm font-semibold ${badge.unlocked ? 'text-sport-blue' : 'text-gray-500'}`}>
        {badge.name}
      </h3>
      
      <p className="text-xs text-gray-600 text-center mt-1">
        {badge.unlocked ? badge.description : badge.condition}
      </p>
    </div>
  );
};

export default BadgeCard;
