import React, { useState } from 'react';
import { PracticeQuestion, QuestionType } from '../../types/practiceQuestions';
import { MultipleChoiceQuestionComponent } from './MultipleChoiceQuestion';
import { ShortAnswerQuestionComponent } from './ShortAnswerQuestion';
import { ProblemSolvingQuestionComponent } from './ProblemSolvingQuestion';
import { ApplicationQuestionComponent } from './ApplicationQuestion';
import { ExtensionQuestionComponent } from './ExtensionQuestion';

interface PracticeSectionProps {
  questions: PracticeQuestion[];
  unitTitle: string;
  onComplete?: (stats: PracticeStats) => void;
}

interface PracticeStats {
  totalQuestions: number;
  attempted: number;
  correct: number;
  questionTypes: Record<QuestionType, { attempted: number; correct: number }>;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ 
  questions, 
  unitTitle, 
  onComplete 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestionType, setSelectedQuestionType] = useState<QuestionType | 'all'>('all');
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, { answer: string; isCorrect: boolean }>>({});

  // Filter questions by type
  const filteredQuestions = selectedQuestionType === 'all' 
    ? questions 
    : questions.filter(q => q.type === selectedQuestionType);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Get question type counts
  const questionTypeCounts = questions.reduce((acc, q) => {
    acc[q.type] = (acc[q.type] || 0) + 1;
    return acc;
  }, {} as Record<QuestionType, number>);

  // Calculate stats
  const stats: PracticeStats = {
    totalQuestions: questions.length,
    attempted: Object.keys(answeredQuestions).length,
    correct: Object.values(answeredQuestions).filter(a => a.isCorrect).length,
    questionTypes: {
      'multiple-choice': { attempted: 0, correct: 0 },
      'short-answer': { attempted: 0, correct: 0 },
      'problem-solving': { attempted: 0, correct: 0 },
      'application': { attempted: 0, correct: 0 },
      'extension': { attempted: 0, correct: 0 }
    }
  };

  // Update question type stats
  Object.entries(answeredQuestions).forEach(([questionId, result]) => {
    const question = questions.find(q => q.id === questionId);
    if (question) {
      stats.questionTypes[question.type].attempted++;
      if (result.isCorrect) {
        stats.questionTypes[question.type].correct++;
      }
    }
  });

  const handleMultipleChoiceAnswer = (answer: string, isCorrect: boolean) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: { answer, isCorrect }
    }));
  };

  const handleOtherAnswer = (answer: string) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: { answer, isCorrect: true } // For non-MC questions, we assume answered = attempted
    }));
  };

  const handleNext = () => {
    console.log('Next clicked:', { currentQuestionIndex, filteredQuestionsLength: filteredQuestions.length });
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    console.log('Previous clicked:', { currentQuestionIndex });
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTypeFilter = (type: QuestionType | 'all') => {
    setSelectedQuestionType(type);
    setCurrentQuestionIndex(0); // Reset to first question of filtered type
  };

  const renderQuestion = (question: PracticeQuestion) => {
    switch (question.type) {
      case 'multiple-choice':
        return <MultipleChoiceQuestionComponent question={question} onAnswer={handleMultipleChoiceAnswer} />;
      case 'short-answer':
        return <ShortAnswerQuestionComponent question={question} onAnswer={handleOtherAnswer} />;
      case 'problem-solving':
        return <ProblemSolvingQuestionComponent question={question} onAnswer={handleOtherAnswer} />;
      case 'application':
        return <ApplicationQuestionComponent question={question} onAnswer={handleOtherAnswer} />;
      case 'extension':
        return <ExtensionQuestionComponent question={question} onAnswer={handleOtherAnswer} />;
      default:
        return <div>Unknown question type</div>;
    }
  };

  const getTypeIcon = (type: QuestionType) => {
    const icons = {
      'multiple-choice': '📝',
      'short-answer': '✍️',
      'problem-solving': '🧮',
      'application': '🔬',
      'extension': '🚀'
    };
    return icons[type];
  };

  const getTypeBadgeIcon = (type: QuestionType) => {
    const icons = {
      'multiple-choice': '📝',
      'short-answer': '✏️',
      'problem-solving': '📊',
      'application': '⚗️',
      'extension': '⭐'
    };
    return icons[type];
  };

  const getTypeTitle = (type: QuestionType) => {
    const titles = {
      'multiple-choice': 'Multiple Choice',
      'short-answer': 'Short Answer',
      'problem-solving': 'Problem Solving',
      'application': 'Application',
      'extension': 'Extension'
    };
    return titles[type];
  };

  const getTypeColor = (type: QuestionType) => {
    const colors = {
      'multiple-choice': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
      'short-answer': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
      'problem-solving': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
      'application': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
      'extension': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
    };
    return colors[type];
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎯</div>
        <p className="text-slate-700 dark:text-slate-300 text-lg">No questions available for this filter.</p>
        <button
          onClick={() => handleTypeFilter('all')}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
        >
          Show All Questions
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
          <span className="text-orange-500">✏️</span>
          Practice Questions - {unitTitle}
        </h3>

        {/* Question Type Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => handleTypeFilter('all')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedQuestionType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-500'
            }`}
          >
            All ({questions.length})
          </button>
          {Object.entries(questionTypeCounts).map(([type, count]) => (
            <button
              key={type}
              onClick={() => handleTypeFilter(type as QuestionType)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                selectedQuestionType === type
                  ? 'bg-blue-600 text-white'
                  : `${getTypeColor(type as QuestionType)} hover:opacity-80`
              }`}
            >
              <span>{getTypeIcon(type as QuestionType)}</span>
              {type.replace('-', ' ')} ({count})
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            {selectedQuestionType !== 'all' && ` (${selectedQuestionType.replace('-', ' ')})`}
          </span>
          <span>
            Answered: {stats.attempted}/{stats.totalQuestions} ({Math.round((stats.attempted/stats.totalQuestions) * 100)}%)
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(stats.attempted / stats.totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
        <div className="mb-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(currentQuestion.type)}`}>
            {getTypeBadgeIcon(currentQuestion.type)}
            {getTypeTitle(currentQuestion.type)}
          </span>
        </div>
        
        {renderQuestion(currentQuestion)}
      </div>

      {/* Navigation */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 font-medium"
          >
            ← Previous
          </button>

          <div className="text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              Question {currentQuestionIndex + 1} of {filteredQuestions.length}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {answeredQuestions[currentQuestion.id] ? (
                answeredQuestions[currentQuestion.id].isCorrect ? (
                  <span className="text-green-600 dark:text-green-400">✓ Answered Correctly</span>
                ) : (
                  <span className="text-orange-600 dark:text-orange-400">⚠ Answered Incorrectly</span>
                )
              ) : (
                'Not answered yet'
              )}
            </p>
          </div>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex >= filteredQuestions.length - 1}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 font-medium"
          >
            Next →
          </button>
        </div>
        
        {/* Debug info - remove in production */}
        <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center">
          Debug: Current: {currentQuestionIndex}, Total: {filteredQuestions.length}, Filter: {selectedQuestionType}
        </div>
      </div>

      {/* Completion Status */}
      {stats.attempted === stats.totalQuestions && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
          <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
            🎉 All Questions Completed!
          </h4>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Score: {stats.correct}/{stats.totalQuestions} ({Math.round((stats.correct/stats.totalQuestions) * 100)}%)
          </p>
          
          {/* Type breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            {Object.entries(stats.questionTypes).map(([type, typeStats]) => (
              <div key={type} className="text-center">
                <div className="text-lg">{getTypeIcon(type as QuestionType)}</div>
                <div className="font-medium">{type.replace('-', ' ')}</div>
                <div className="text-green-600 dark:text-green-400">
                  {typeStats.correct}/{typeStats.attempted}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 