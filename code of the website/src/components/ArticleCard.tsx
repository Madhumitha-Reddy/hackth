
import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  summary: string;
  readTime: string;
  category: string;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  summary,
  readTime,
  category,
  onClick
}) => {
  const categoryColors = {
    basic: 'bg-blue-100 text-blue-800',
    substances: 'bg-purple-100 text-purple-800',
    testing: 'bg-green-100 text-green-800',
    ethics: 'bg-orange-100 text-orange-800'
  };
  
  const categoryColor = categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800';

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${categoryColor}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{summary}</p>
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          onClick={onClick} 
          className="w-full text-sport-blue border-sport-blue hover:bg-sport-blue hover:text-white"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Read Article
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
