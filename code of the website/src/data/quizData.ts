export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  points: number;
  category: 'basic' | 'substances' | 'testing' | 'ethics' | 'nutrition' | 'fitness';
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  condition: string;
  unlocked: boolean;
}

export interface Level {
  level: number;
  name: string;
  pointsRequired: number;
  benefits: string[];
}

export const questions: Question[] = [
  {
    id: "q1",
    text: "What is the main purpose of anti-doping regulations?",
    options: [
      {
        id: "q1o1",
        text: "To prevent athletes from getting better results",
        isCorrect: false
      },
      {
        id: "q1o2",
        text: "To protect the health of athletes and the integrity of sport",
        isCorrect: true
      },
      {
        id: "q1o3",
        text: "To make competitions more expensive to organize",
        isCorrect: false
      },
      {
        id: "q1o4",
        text: "To create more rules in sporting events",
        isCorrect: false
      }
    ],
    explanation: "Anti-doping regulations exist to protect the health of athletes and to ensure fair competition by maintaining the integrity of sport.",
    points: 10,
    category: 'basic'
  },
  {
    id: "q2",
    text: "What does WADA stand for?",
    options: [
      {
        id: "q2o1",
        text: "World Athletics Doping Agency",
        isCorrect: false
      },
      {
        id: "q2o2",
        text: "World Anti-Doping Administration",
        isCorrect: false
      },
      {
        id: "q2o3",
        text: "World Anti-Doping Agency",
        isCorrect: true
      },
      {
        id: "q2o4",
        text: "World Athletics Development Association",
        isCorrect: false
      }
    ],
    explanation: "WADA stands for World Anti-Doping Agency. It was established in 1999 to coordinate anti-doping efforts across sports and countries.",
    points: 10,
    category: 'basic'
  },
  {
    id: "q3",
    text: "Which of the following is NOT a prohibited substance category?",
    options: [
      {
        id: "q3o1",
        text: "Anabolic Agents",
        isCorrect: false
      },
      {
        id: "q3o2",
        text: "Vitamins and Minerals",
        isCorrect: true
      },
      {
        id: "q3o3",
        text: "Hormone and Metabolic Modulators",
        isCorrect: false
      },
      {
        id: "q3o4",
        text: "Beta-Blockers",
        isCorrect: false
      }
    ],
    explanation: "Vitamins and minerals are not prohibited substances. They are essential nutrients that the body needs and are generally allowed in sports.",
    points: 15,
    category: 'substances'
  },
  {
    id: "q4",
    text: "What is a 'whereabouts failure' in anti-doping?",
    options: [
      {
        id: "q4o1",
        text: "When an athlete gets lost on the way to competition",
        isCorrect: false
      },
      {
        id: "q4o2",
        text: "When an athlete fails to provide accurate information about their location for testing",
        isCorrect: true
      },
      {
        id: "q4o3",
        text: "When a drug test is performed at the wrong location",
        isCorrect: false
      },
      {
        id: "q4o4",
        text: "When an athlete travels without permission",
        isCorrect: false
      }
    ],
    explanation: "A whereabouts failure occurs when an athlete in a registered testing pool fails to provide accurate information about their location, making it difficult for anti-doping authorities to conduct out-of-competition testing.",
    points: 15,
    category: 'testing'
  },
  {
    id: "q5",
    text: "What is the principle of 'strict liability' in anti-doping?",
    options: [
      {
        id: "q5o1",
        text: "Athletes are only responsible if they intentionally dope",
        isCorrect: false
      },
      {
        id: "q5o2",
        text: "Athletes are responsible for what is found in their body regardless of intent",
        isCorrect: true
      },
      {
        id: "q5o3",
        text: "Coaches are strictly liable for their athletes' actions",
        isCorrect: false
      },
      {
        id: "q5o4",
        text: "Sport federations are liable for all doping cases",
        isCorrect: false
      }
    ],
    explanation: "Strict liability means that athletes are responsible for any prohibited substance found in their samples, regardless of how it got there or whether there was any intention to cheat.",
    points: 20,
    category: 'ethics'
  },
  
  // Adding nutrition and fitness quiz questions
  {
    id: "q6",
    text: "How many calories does an average banana contain?",
    options: [
      {
        id: "q6o1",
        text: "50-60 calories",
        isCorrect: false
      },
      {
        id: "q6o2",
        text: "90-110 calories",
        isCorrect: true
      },
      {
        id: "q6o3",
        text: "150-200 calories",
        isCorrect: false
      },
      {
        id: "q6o4",
        text: "250-300 calories",
        isCorrect: false
      }
    ],
    explanation: "A medium-sized banana typically contains between 90-110 calories, making it a nutritious and convenient snack option.",
    points: 10,
    category: 'nutrition'
  },
  {
    id: "q7",
    text: "Which of the following activities would burn the most calories for the same duration?",
    options: [
      {
        id: "q7o1",
        text: "Walking at a moderate pace",
        isCorrect: false
      },
      {
        id: "q7o2",
        text: "Cycling at a moderate pace",
        isCorrect: false
      },
      {
        id: "q7o3",
        text: "Swimming laps",
        isCorrect: true
      },
      {
        id: "q7o4",
        text: "Yoga",
        isCorrect: false
      }
    ],
    explanation: "Swimming is a full-body workout that typically burns more calories than walking, cycling, or yoga for the same duration because it engages multiple muscle groups simultaneously and requires energy to maintain body temperature in water.",
    points: 15,
    category: 'fitness'
  },
  {
    id: "q8",
    text: "What is a balanced meal plate composition according to nutrition guidelines?",
    options: [
      {
        id: "q8o1",
        text: "50% protein, 25% carbs, 25% fats",
        isCorrect: false
      },
      {
        id: "q8o2",
        text: "50% fruits and vegetables, 25% proteins, 25% grains",
        isCorrect: true
      },
      {
        id: "q8o3",
        text: "75% carbs, 25% protein",
        isCorrect: false
      },
      {
        id: "q8o4",
        text: "Equal portions of fruits, vegetables, proteins, and grains",
        isCorrect: false
      }
    ],
    explanation: "According to many nutrition guidelines like MyPlate, a balanced meal should consist of approximately 50% fruits and vegetables, 25% proteins, and 25% grains/carbohydrates, with a small amount of healthy fats.",
    points: 15,
    category: 'nutrition'
  }
];

export const badges: Badge[] = [
  {
    id: "badge1",
    name: "Clean Start",
    description: "Complete your first quiz",
    imageUrl: "/badge-starter.svg",
    condition: "Complete 1 quiz",
    unlocked: false
  },
  {
    id: "badge2",
    name: "Knowledge Seeker",
    description: "Read 5 educational articles",
    imageUrl: "/badge-reader.svg",
    condition: "Read 5 articles",
    unlocked: false
  },
  {
    id: "badge3",
    name: "Quiz Master",
    description: "Score 100% on any quiz",
    imageUrl: "/badge-master.svg",
    condition: "Perfect quiz score",
    unlocked: false
  },
  {
    id: "badge4",
    name: "Substance Expert",
    description: "Correctly answer 10 questions about prohibited substances",
    imageUrl: "/badge-substance.svg",
    condition: "10 correct substance questions",
    unlocked: false
  },
  {
    id: "badge5",
    name: "Testing Pro",
    description: "Correctly answer 10 questions about testing procedures",
    imageUrl: "/badge-testing.svg",
    condition: "10 correct testing questions",
    unlocked: false
  },
  
  // Adding fitness and nutrition badges
  {
    id: "badge6",
    name: "Calorie Crusher",
    description: "Burned 500+ calories in a single workout",
    imageUrl: "/badge-fitness.svg",
    condition: "Burn 500+ calories in a workout",
    unlocked: false
  },
  {
    id: "badge7",
    name: "Meal Master",
    description: "Created and followed a balanced meal plan for a week",
    imageUrl: "/badge-nutrition.svg",
    condition: "Follow a meal plan for 7 days",
    unlocked: false
  },
  {
    id: "badge8",
    name: "Healthy Streaker",
    description: "Maintained fitness goals for 10 consecutive days",
    imageUrl: "/badge-streak.svg", 
    condition: "10-day fitness streak",
    unlocked: false
  }
];

export const levels: Level[] = [
  {
    level: 1,
    name: "Rookie",
    pointsRequired: 0,
    benefits: ["Access to basic quizzes", "Learning materials"]
  },
  {
    level: 2,
    name: "Contender",
    pointsRequired: 100,
    benefits: ["Access to intermediate quizzes", "Badge showcase"]
  },
  {
    level: 3,
    name: "Champion",
    pointsRequired: 300,
    benefits: ["Access to advanced quizzes", "Leaderboard eligibility"]
  },
  {
    level: 4,
    name: "Clean Sport Ambassador",
    pointsRequired: 600,
    benefits: ["Access to all content", "Special recognition"]
  },
  {
    level: 5,
    name: "Anti-Doping Legend",
    pointsRequired: 1000,
    benefits: ["Certificate of completion", "Full mastery status"]
  }
];

export const articles = [
  {
    id: "article1",
    title: "Understanding the WADA Prohibited List",
    summary: "Learn about the substances and methods that are banned in sports",
    readTime: "5 min read",
    category: "substances"
  },
  {
    id: "article2",
    title: "The Doping Control Process Explained",
    summary: "A step-by-step guide to the testing procedure athletes undergo",
    readTime: "7 min read",
    category: "testing"
  },
  {
    id: "article3",
    title: "Therapeutic Use Exemptions (TUEs)",
    summary: "When and how athletes can use otherwise prohibited medications",
    readTime: "4 min read",
    category: "basic"
  },
  {
    id: "article4",
    title: "The Ethics of Clean Sport",
    summary: "Why fair play matters and the values behind anti-doping",
    readTime: "6 min read",
    category: "ethics"
  },
  {
    id: "article5",
    title: "Nutritional Supplements: Risks and Precautions",
    summary: "Understanding the dangers of contaminated supplements",
    readTime: "8 min read",
    category: "substances"
  },
  {
    id: "article6",
    title: "Understanding Calorie Balance for Weight Management",
    summary: "Learn how calorie intake and expenditure affect your weight goals",
    readTime: "6 min read",
    category: "fitness"
  },
  {
    id: "article7",
    title: "Building a Balanced Nutrition Plan for Athletes",
    summary: "How to create a personalized diet that supports your training needs",
    readTime: "8 min read",
    category: "nutrition"
  }
];

// New section for tracking calories and activities
export interface CalorieActivity {
  id: string;
  name: string;
  caloriesPerMinute: number;
  description: string;
}

export const calorieActivities: CalorieActivity[] = [
  {
    id: "act1",
    name: "Running",
    caloriesPerMinute: 10,
    description: "Jogging or running at a moderate pace"
  },
  {
    id: "act2",
    name: "Swimming",
    caloriesPerMinute: 8,
    description: "Swimming laps at a moderate pace"
  },
  {
    id: "act3",
    name: "Cycling",
    caloriesPerMinute: 7,
    description: "Biking at a moderate pace"
  },
  {
    id: "act4",
    name: "Walking",
    caloriesPerMinute: 4,
    description: "Brisk walking"
  },
  {
    id: "act5",
    name: "Strength Training",
    caloriesPerMinute: 6,
    description: "Weightlifting or bodyweight exercises"
  }
];
