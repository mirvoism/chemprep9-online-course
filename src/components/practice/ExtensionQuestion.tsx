import React, { useState } from 'react';
import { ExtensionQuestion } from '../../types/practiceQuestions';
import { Button } from '../ui/Button';

interface Props {
  question: ExtensionQuestion;
  onAnswer?: (answer: string) => void;
}

export const ExtensionQuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
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

  const challengeColor = question.challengeLevel === 'expert' ? 'red' : 'indigo';

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-500">
        <div className="flex items-start gap-3 mb-4">
          <span className={`bg-${challengeColor}-100 dark:bg-${challengeColor}-900/50 text-${challengeColor}-800 dark:text-${challengeColor}-200 px-3 py-1 rounded-full text-sm font-medium`}>
            Extension Challenge
          </span>
          {question.challengeLevel && (
            <span className={`bg-${challengeColor}-600 text-white px-2 py-1 rounded text-xs font-bold uppercase`}>
              {question.challengeLevel}
            </span>
          )}
        </div>
        
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {question.question}
        </h4>

        {/* Challenge hint */}
        <div className={`mb-4 p-3 bg-${challengeColor}-50 dark:bg-${challengeColor}-900/20 rounded-lg border-l-4 border-${challengeColor}-400`}>
          <p className={`text-sm text-${challengeColor}-700 dark:text-${challengeColor}-300`}>
            🎯 <strong>Challenge Level:</strong> This problem requires deeper analysis and critical thinking beyond basic concepts.
          </p>
        </div>

        {/* Answer Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Your Analysis & Justification:
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={hasAnswered && showSample}
              placeholder="Provide a detailed analysis with calculations, reasoning, and justification for your conclusions..."
              className={`w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-${challengeColor}-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 disabled:opacity-50`}
              rows={6}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!hasAnswered ? (
              <Button
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
                className={`bg-${challengeColor}-600 hover:bg-${challengeColor}-700 text-white disabled:opacity-50`}
              >
                Submit Analysis
              </Button>
            ) : (
              <>
                {!showSample && (
                  <Button
                    onClick={handleShowSample}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Show Expert Analysis
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
            <div className={`mt-6 p-4 bg-${challengeColor}-50 dark:bg-${challengeColor}-900/20 rounded-lg border border-${challengeColor}-200 dark:border-${challengeColor}-800`}>
              <h5 className={`font-semibold text-${challengeColor}-800 dark:text-${challengeColor}-200 mb-2`}>
                Analysis Submitted ✓
              </h5>
              <p className="text-slate-700 dark:text-slate-300">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Expert Analysis */}
          {showSample && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Expert Analysis:
              </h5>
              <div className="text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {question.sampleAnswer}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
