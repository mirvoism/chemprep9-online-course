import React, { useState, useMemo } from 'react';
import { getInteractiveComponent, hasInteractiveComponent } from "../interactive/InteractiveRegistry";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';
import { c1l1Enhanced } from '../../data/lessonContent/enhanced/c1l1Enhanced';
import { Lesson } from '../../../types';
import { processLessonContent, processPracticeText } from '../../utils/contentProcessor';
import { unit01Questions } from '../../data/practiceQuestions/unit01Questions';
interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
}

export const EnhancedLessonViewer: React.FC<LessonViewerProps> = ({ lesson, onBack }) => {
  const [currentSection, setCurrentSection] = useState<'overview' | 'content' | 'interactive' | 'practice'>('overview');
  const [currentPractice, setCurrentPractice] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  
  // Process lesson content once and memoize result
  const processedContent = useMemo(() => {
    if (!lesson.narrative) return null;
    
    try {
      const result = processLessonContent(lesson.narrative);
      
      // Log processing results for debugging
      if (result.hasProcessingErrors) {
        console.warn('Content processing errors:', result.errors);
      }
      
      if (result.citationIds.length > 0) {
        console.log('Found citations:', result.citationIds);
      }
      
      if (result.svgComponents.length > 0) {
        console.log('Found SVG components:', result.svgComponents.length);
      }
      
      return result;
    } catch (error) {
      console.error('Failed to process lesson content:', error);
      return null;
    }
  }, [lesson.narrative]);

  const sectionProgress = {
    overview: 25,
    content: 50,
    interactive: 75,
    practice: 100
  };

  const sections = [
    { key: 'overview', label: 'Overview', icon: '📋' },
    { key: 'content', label: 'Learn', icon: '📖' },
    { key: 'interactive', label: 'Explore', icon: '🧪' },
    { key: 'practice', label: 'Practice', icon: '✏️' }
  ] as const;

  const renderContent = () => {
    switch (currentSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Learning Objectives */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="text-blue-500">🎯</span>
                Learning Objectives
              </h3>
              <div className="space-y-4">
                {lesson.objectives.map((objective: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <span className="text-purple-500">⏱️</span>
                  Duration
                </h4>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{lesson.labMinutes} minutes</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Estimated completion time</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <span className="text-green-500">📚</span>
                  Content Type
                </h4>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">Interactive</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Hands-on learning experience</p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-2xl p-6 border border-accent-200 dark:border-accent-700">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">Ready to Begin?</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                This lesson will guide you through fundamental chemistry concepts with interactive elements and practice problems. 
                Click "Learn" above to start your journey!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentSection('content')}
                  className="px-6 py-3 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: '#1e4d7a', 
                    color: '#ffffff',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#183858'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1e4d7a'}
                >
                  Start Learning →
                </button>
              </div>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-8">
            {/* Main Content */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
              {/* Content Processing Status */}
              {processedContent?.hasProcessingErrors && (
                <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="text-yellow-700 dark:text-yellow-300 font-semibold mb-2">Content Processing Notices:</h4>
                  <ul className="text-sm text-yellow-600 dark:text-yellow-400 list-disc list-inside">
                    {processedContent.errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Citations Summary */}
              {processedContent?.citationIds && processedContent.citationIds.length > 0 && (
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="text-blue-700 dark:text-blue-300 font-semibold mb-2">
                    📚 References in this lesson: {processedContent.citationIds.length}
                  </h4>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    Hover over citation numbers in the text to see source details.
                  </div>
                </div>
              )}

              {/* Processed Content */}
              <div className="prose dark:prose-invert max-w-none">
                <div 
                  className="lesson-content text-slate-800 dark:text-slate-200 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: processedContent?.html || lesson.narrative || 'Content loading...' 
                  }}
                />
              </div>

              {/* Debug Info (only in development) */}
              {process.env.NODE_ENV === 'development' && processedContent && (
                <details className="mt-8 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <summary className="cursor-pointer text-sm font-medium text-slate-600 dark:text-slate-400">
                    🔧 Debug Info (Development Only)
                  </summary>
                  <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 space-y-2">
                    <div>Citations found: {processedContent.citationIds.length}</div>
                    <div>SVG components: {processedContent.svgComponents.length}</div>
                    <div>Processing errors: {processedContent.errors.length}</div>
                    {processedContent.citationIds.length > 0 && (
                      <div>Citation IDs: {processedContent.citationIds.join(', ')}</div>
                    )}
                  </div>
                </details>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentSection('overview')}
                className="px-6 py-3 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 text-slate-900 dark:text-slate-100 rounded-xl transition-all duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentSection('interactive')}
                className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Next: Explore →
              </button>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-8">
            {/* Interactive Elements */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="text-green-500">🧪</span>
                Interactive Elements
              </h3>

              {lesson.interactive && lesson.interactive.length > 0 ? (
                <div className="grid gap-6">
                  {lesson.interactive.map((element: any, index: number) => (
                    <div key={index} className="bg-white dark:bg-slate-600 rounded-xl p-6 border border-slate-200 dark:border-slate-500">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{element.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">{element.description}</p>
                      {element.url && (
                        <a
                          href={element.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Open Simulation
                          <span>🔗</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔬</div>
                  <p className="text-slate-700 dark:text-slate-300 text-lg">Interactive elements coming soon!</p>
                  <p className="text-slate-600 dark:text-slate-400">Molecular visualizations and simulations will be available here.</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentSection('content')}
                className="px-6 py-3 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 text-slate-900 dark:text-slate-100 rounded-xl transition-all duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentSection('practice')}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Next: Practice →
              </button>
            </div>
          </div>
        );

      case 'practice':
        return (
          <div className="space-y-8">
            {/* Practice Problems */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="text-orange-500">✏️</span>
                Practice Problems
              </h3>

              {lesson.practiceProblems && lesson.practiceProblems.length > 0 ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">
                      Problem {currentPractice + 1} of {lesson.practiceProblems?.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPractice(Math.max(0, currentPractice - 1))}
                        disabled={currentPractice === 0}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 dark:text-slate-100 rounded-lg transition-all duration-300"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentPractice(Math.min((lesson.practiceProblems?.length ?? 0) - 1, currentPractice + 1))}
                        disabled={currentPractice === (lesson.practiceProblems?.length ?? 0) - 1}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 dark:text-slate-100 rounded-lg transition-all duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-500">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Question</h4>
                      <div 
                        className="text-slate-700 dark:text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: processPracticeText(lesson.practiceProblems?.[currentPractice]?.question || 'Loading question...')
                        }}
                      />
                    </div>

                    {showAnswers && lesson.practiceProblems?.[currentPractice]?.answer && (
                      <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h5 className="text-green-700 dark:text-green-300 font-semibold mb-2">Answer:</h5>
                        <div 
                          className="text-slate-700 dark:text-slate-300"
                          dangerouslySetInnerHTML={{
                            __html: processPracticeText(lesson.practiceProblems?.[currentPractice].answer || '')
                          }}
                        />
                      </div>
                    )}

                    <div className="mt-6">
                      <button
                        onClick={() => setShowAnswers(!showAnswers)}
                        className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        {showAnswers ? 'Hide Answer' : 'Show Answer'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-slate-700 dark:text-slate-300 text-lg">Practice problems coming soon!</p>
                  <p className="text-slate-600 dark:text-slate-400">Interactive quizzes and exercises will be available here.</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentSection('interactive')}
                className="px-6 py-3 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 text-slate-900 dark:text-slate-100 rounded-xl transition-all duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={() => alert('Lesson completed! 🎉')}
                className="px-6 py-3 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: '#1e4d7a', 
                  color: '#ffffff',
                  border: 'none'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#183858'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1e4d7a'}
              >
                Complete Lesson ✨
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const progressValue = sectionProgress[currentSection];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Dashboard
            </button>
            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full">
              Unit {lesson.unit}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
            {lesson.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">{lesson.objectives[0]}</p>
        </header>

        {/* Navigation Tabs */}
        <div className="mb-8 p-2 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-between border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex gap-2">
            {sections.map(section => (
              <button
                key={section.key}
                onClick={() => setCurrentSection(section.key)}
                className={`w-full sm:w-auto text-center sm:text-left px-4 py-3 font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-3
                  ${currentSection === section.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
              >
                <span>{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Section Progress</span>
            <span className="text-sm font-bold text-accent-600 dark:text-accent-400">{progressValue}% Complete</span>
          </div>
          <ProgressBar value={progressValue} />
        </div>
        
        {/* Main Content Area */}
        <main className="bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 dark:text-slate-400">
          <p>&copy; 2024 ChemPrep9. All rights reserved.</p>
          <p className="text-sm">Unit: {lesson.title}</p>
        </footer>
      </div>
    </div>
  );
};

export default EnhancedLessonViewer;