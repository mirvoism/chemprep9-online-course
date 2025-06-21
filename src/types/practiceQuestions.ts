// Extended question types for the enhanced practice system

export type QuestionType = 'multiple-choice' | 'short-answer' | 'problem-solving' | 'application' | 'extension';

export interface BaseQuestion {
  id: string;
  unit: number;
  type: QuestionType;
  question: string;
  explanation: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  choices: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
  sampleAnswer: string;
  keyPoints?: string[];
}

export interface ProblemSolvingQuestion extends BaseQuestion {
  type: 'problem-solving';
  sampleAnswer: string;
  steps?: string[];
  formula?: string;
}

export interface ApplicationQuestion extends BaseQuestion {
  type: 'application';
  sampleAnswer: string;
  scenario?: string;
}

export interface ExtensionQuestion extends BaseQuestion {
  type: 'extension';
  sampleAnswer: string;
  challengeLevel?: 'advanced' | 'expert';
}

export type PracticeQuestion = 
  | MultipleChoiceQuestion 
  | ShortAnswerQuestion 
  | ProblemSolvingQuestion 
  | ApplicationQuestion 
  | ExtensionQuestion;

export interface UnitPracticeBank {
  unit: number;
  title: string;
  questions: PracticeQuestion[];
}
