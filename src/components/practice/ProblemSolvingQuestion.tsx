import React, { useState } from 'react';
import { ProblemSolvingQuestion } from '../../types/practiceQuestions';
import { Button } from '../ui/Button';

interface Props {
  question: ProblemSolvingQuestion;
  onAnswer?: (answer: string) => void;
}

export const ProblemSolvingQuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    
    setHasAnswered(true);
    onAnswer?.(userAnswer);
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  const handleShowSteps = () => {
    setShowSteps(true);
  };

  const handleReset = () => {
    setUserAnswer('');
    setShowSolution(false);
    setShowSteps(false);
    setHasAnswered(false);
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-500">
        <div className="flex items-start gap-3 mb-4">
          <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium">
            Problem Solving
          </span>
          {question.formula && (
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-mono">
              {question.formula}
            </span>
          )}
        </div>
        
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {question.question}
        </h4>

        {/* Answer Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Your Solution:
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={hasAnswered && showSolution}
              placeholder="Show your work and calculations here..."
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 disabled:opacity-50 font-mono"
              rows={6}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap">
            {!hasAnswered ? (
              <Button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50"
              >
                Submit Solution
              </Button>
            ) : (
              <>
                {!showSteps && question.steps && (
                  <Button
                    onClick={handleShowSteps}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Show Steps
                  </Button>
                )}
                {!showSolution && (
                  <Button
                    onClick={handleShowSolution}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Show Solution
                  </Button>
                )}
                <Button
                  onClick={handleReset}
                  className="bg-slate-600 hover:bg-slate-700 text-white"
                >
                  Try Again
                </Button>
              </>
            )}
          </div>

          {/* Feedback */}
          {hasAnswered && (
            <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                Solution Submitted ✓
              </h5>
              <p className="text-slate-700 dark:text-slate-300">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Step-by-Step Solution */}
          {showSteps && question.steps && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                Step-by-Step Solution:
              </h5>
              <ol className="space-y-2">
                {question.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Complete Solution */}
          {showSolution && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Complete Solution:
              </h5>
              <div className="text-slate-700 dark:text-slate-300 font-mono whitespace-pre-line">
                {question.sampleAnswer}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
