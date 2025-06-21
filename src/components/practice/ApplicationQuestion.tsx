import React, { useState } from 'react';
import { ApplicationQuestion } from '../../types/practiceQuestions';
import { Button } from '../ui/Button';

interface Props {
  question: ApplicationQuestion;
  onAnswer?: (answer: string) => void;
}

export const ApplicationQuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showSample, setShowSample] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    
    setHasAnswered(true);
    onAnswer?.(userAnswer);
  };

  const handleShowSample = () => {
    setShowSample(true);
  };

  const handleReset = () => {
    setUserAnswer('');
    setShowSample(false);
    setHasAnswered(false);
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-500">
        <div className="flex items-start gap-3 mb-4">
          <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm font-medium">
            Application
          </span>
          {question.scenario && (
            <span className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-1 rounded text-xs">
              {question.scenario}
            </span>
          )}
        </div>
        
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {question.question}
        </h4>

        {/* Real-world context hint */}
        <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-400">
          <p className="text-sm text-teal-700 dark:text-teal-300">
            💡 <strong>Real-World Application:</strong> Think about how you would apply chemistry concepts to solve this practical problem.
          </p>
        </div>

        {/* Answer Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Your Approach & Solution:
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={hasAnswered && showSample}
              placeholder="Describe your step-by-step approach to solving this real-world problem..."
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 disabled:opacity-50"
              rows={5}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!hasAnswered ? (
              <Button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50"
              >
                Submit Solution
              </Button>
            ) : (
              <>
                {!showSample && (
                  <Button
                    onClick={handleShowSample}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Show Sample Approach
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
            <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
              <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">
                Solution Submitted ✓
              </h5>
              <p className="text-slate-700 dark:text-slate-300">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Sample Solution */}
          {showSample && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Sample Approach:
              </h5>
              <p className="text-slate-700 dark:text-slate-300">
                {question.sampleAnswer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
