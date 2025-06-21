import React, { useState } from 'react';
import { ShortAnswerQuestion } from '../../types/practiceQuestions';
import { Button } from '../ui/Button';

interface Props {
  question: ShortAnswerQuestion;
  onAnswer?: (answer: string) => void;
}

export const ShortAnswerQuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
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
          <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
            Short Answer
          </span>
        </div>
        
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {question.question}
        </h4>

        {/* Answer Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Your Answer:
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={hasAnswered && showSample}
              placeholder="Type your answer here..."
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 disabled:opacity-50"
              rows={4}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!hasAnswered ? (
              <Button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className="bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
              >
                Submit Answer
              </Button>
            ) : (
              <>
                {!showSample && (
                  <Button
                    onClick={handleShowSample}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Show Sample Answer
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
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Answer Submitted ✓
              </h5>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                {question.explanation}
              </p>
              
              {question.keyPoints && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                    Key points to consider:
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1">
                    {question.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Sample Answer */}
          {showSample && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Sample Answer:
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
