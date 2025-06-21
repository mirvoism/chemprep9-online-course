import React, { useState } from 'react';
import { MultipleChoiceQuestion } from '../../types/practiceQuestions';
import { Button } from '../ui/Button';

interface Props {
  question: MultipleChoiceQuestion;
  onAnswer?: (answer: string, isCorrect: boolean) => void;
}

export const MultipleChoiceQuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    const isCorrect = selectedAnswer === question.correctAnswer;
    setShowFeedback(true);
    setHasAnswered(true);
    onAnswer?.(selectedAnswer, isCorrect);
  };

  const handleReset = () => {
    setSelectedAnswer('');
    setShowFeedback(false);
    setHasAnswered(false);
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-500">
        <div className="flex items-start gap-3 mb-4">
          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            Multiple Choice
          </span>
        </div>
        
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {question.question}
        </h4>

        {/* Answer Choices */}
        <div className="space-y-3">
          {Object.entries(question.choices).map(([key, choice]) => (
            <label
              key={key}
              className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedAnswer === key
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
              } ${
                showFeedback && key === question.correctAnswer
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : showFeedback && selectedAnswer === key && key !== question.correctAnswer
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : ''
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={key}
                checked={selectedAnswer === key}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                disabled={hasAnswered}
                className="mt-1 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {key}.
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  {choice}
                </span>
                {showFeedback && key === question.correctAnswer && (
                  <span className="text-green-600 dark:text-green-400 ml-2">✓</span>
                )}
                {showFeedback && selectedAnswer === key && key !== question.correctAnswer && (
                  <span className="text-red-600 dark:text-red-400 ml-2">✗</span>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          {!hasAnswered ? (
            <Button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              className="bg-slate-600 hover:bg-slate-700 text-white"
            >
              Try Again
            </Button>
          )}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`mt-6 p-4 rounded-lg border ${
            selectedAnswer === question.correctAnswer
              ? 'border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800'
              : 'border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800'
          }`}>
            <div className="flex items-start gap-3">
              <span className={`text-lg ${
                selectedAnswer === question.correctAnswer
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {selectedAnswer === question.correctAnswer ? '✓' : '✗'}
              </span>
              <div>
                <h5 className={`font-semibold mb-2 ${
                  selectedAnswer === question.correctAnswer
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h5>
                <p className="text-slate-700 dark:text-slate-300">
                  {question.explanation}
                </p>
                {selectedAnswer !== question.correctAnswer && (
                  <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                    The correct answer is <strong>{question.correctAnswer}</strong>.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
