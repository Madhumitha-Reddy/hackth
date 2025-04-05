
import React, { useState } from 'react';
import { 
  Header, 
  Navigation, 
  ProgressBar, 
  BadgeCard, 
  QuizCard, 
  ArticleCard,
  QuizQuestion,
  QuizResult,
  CalorieTracker,
  NutritionTracker
} from '@/components';
import { Trophy, Award, Book, Users, Zap, Apple, Flame } from 'lucide-react';
import { badges, questions, articles, levels } from '@/data/quizData';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentPoints, setCurrentPoints] = useState(70);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  
  // New state for fitness and nutrition tracking
  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(320);
  const [streak, setStreak] = useState(3);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['badge1', 'badge2']);

  const nextLevel = levels.find(level => level.level > currentLevel) || levels[levels.length - 1];
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };
  
  const handleAnswer = (isCorrect: boolean, points: number) => {
    if (isCorrect) {
      toast({
        title: "Correct Answer!",
        description: `You earned ${points} points`,
        variant: "default",
      });
      setQuizScore(prev => prev + points);
    } else {
      toast({
        title: "Not quite right",
        description: "Try again on the next question",
        variant: "destructive",
      });
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
      setCurrentPoints(prev => prev + quizScore);
    }
  };
  
  const handleQuizRestart = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };
  
  const handleQuizExit = () => {
    setQuizStarted(false);
    setQuizFinished(false);
  };
  
  const handleAddCalories = (calories: number) => {
    setTotalCaloriesBurned(prev => prev + calories);
    setCurrentPoints(prev => prev + Math.floor(calories / 10));
    
    // Check for badge unlocks
    if (calories >= 500 && !unlockedBadges.includes('badge6')) {
      setUnlockedBadges(prev => [...prev, 'badge6']);
    }
  };
  
  const handleEarnBadge = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges(prev => [...prev, badgeId]);
      setCurrentPoints(prev => prev + 50); // Bonus points for earning a badge
    }
  };
  
  const handleStreakUpdate = (newStreak: number) => {
    setStreak(newStreak);
    setCurrentPoints(prev => prev + 5); // Points for continuing streak
    
    // Check streak badge
    if (newStreak >= 10 && !unlockedBadges.includes('badge8')) {
      setUnlockedBadges(prev => [...prev, 'badge8']);
    }
  };

  const earnedBadges = badges.filter(badge => unlockedBadges.includes(badge.id)).map(badge => ({...badge, unlocked: true}));

  if (quizStarted && !quizFinished) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-6 text-center">Anti-Doping Basics Quiz</h2>
          <QuizQuestion 
            question={questions[currentQuestionIndex]} 
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
          />
          <div className="mt-4 text-center text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <QuizResult 
            score={quizScore}
            totalPossible={questions.reduce((acc, q) => acc + q.points, 0)}
            timeSpent="3m 42s"
            earnedBadges={earnedBadges}
            onRestart={handleQuizRestart}
            onHome={handleQuizExit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <ProgressBar 
            currentPoints={currentPoints} 
            targetPoints={nextLevel.pointsRequired} 
            level={currentLevel}
          />
        </section>
        
        {/* Fitness and Nutrition Tracking Section */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <CalorieTracker 
            onAddCalories={handleAddCalories}
            totalCaloriesBurned={totalCaloriesBurned}
          />
          <NutritionTracker 
            onEarnBadge={handleEarnBadge}
            streak={streak}
            onStreakUpdate={handleStreakUpdate}
          />
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Zap className="mr-2 h-5 w-5 text-sport-blue" />
            Quizzes & Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <QuizCard 
              title="Nutrition Basics"
              description="Test your knowledge about healthy eating habits and nutritional values."
              questionsCount={3}
              estimatedTime="3 mins"
              difficulty="beginner"
              onClick={handleStartQuiz}
            />
            <QuizCard 
              title="Fitness Fundamentals"
              description="Learn about different workout types and their benefits for your health."
              questionsCount={3}
              estimatedTime="3 mins"
              difficulty="beginner"
              onClick={handleStartQuiz}
            />
            <QuizCard 
              title="Anti-Doping Basics"
              description="Learn the foundational concepts of anti-doping and why it matters in sports."
              questionsCount={5}
              estimatedTime="5 mins"
              difficulty="beginner"
              onClick={handleStartQuiz}
            />
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Book className="mr-2 h-5 w-5 text-sport-blue" />
            Educational Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.slice(0, 3).map(article => (
              <ArticleCard 
                key={article.id}
                title={article.title}
                summary={article.summary}
                readTime={article.readTime}
                category={article.category}
                onClick={() => {
                  toast({
                    title: "Article opened",
                    description: `You opened "${article.title}"`,
                  });
                }}
              />
            ))}
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-sport-blue" />
              Your Badges
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {badges.map(badge => (
                  <BadgeCard 
                    key={badge.id} 
                    badge={{...badge, unlocked: unlockedBadges.includes(badge.id)}} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-sport-blue" />
              Leaderboard
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <div className="space-y-4">
                {[
                  { rank: 1, name: 'Alex Thompson', points: 1250 },
                  { rank: 2, name: 'Morgan Lee', points: 980 },
                  { rank: 3, name: 'Jordan Smith', points: 845 },
                  { rank: 4, name: 'Casey Jones', points: 720 },
                  { rank: 5, name: 'You', points: currentPoints, isCurrentUser: true }
                ].map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-3 rounded-md ${
                      user.isCurrentUser ? 'bg-blue-50 border border-sport-blue' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                        user.rank === 1 ? 'bg-sport-gold text-white' :
                        user.rank === 2 ? 'bg-sport-silver text-white' :
                        user.rank === 3 ? 'bg-sport-bronze text-white' :
                        'bg-gray-200'
                      }`}>
                        {user.rank}
                      </span>
                      <div className="flex items-center">
                        {user.isCurrentUser && (
                          <Users className="h-4 w-4 mr-1 text-sport-blue" />
                        )}
                        <span className={user.isCurrentUser ? 'font-bold' : ''}>
                          {user.name}
                        </span>
                      </div>
                    </div>
                    <span className="font-bold">{user.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
