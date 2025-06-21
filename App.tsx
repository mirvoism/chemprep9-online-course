import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './src/components/ui/Card';
import { Button } from './src/components/ui/Button';
import { ProgressBar } from './src/components/ui/ProgressBar';
import ThemeToggle from './src/components/ui/ThemeToggle';
import './src/styles/global.css';

// Lazy load components to avoid loading everything at once
const EnhancedLessonViewer = lazy(() => import('./src/components/demo/EnhancedLessonViewer'));
const UIShowcase = lazy(() => import('./src/components/demo/UIShowcase'));

// Lazy load lesson data to avoid memory issues
const loadLessonData = async (lessonId: string) => {
  switch (lessonId) {
    case 'c1l1':
      return (await import('./src/data/lessonContent/enhanced/c1l1Enhanced')).c1l1Enhanced;
    case 'c2l1':
      return (await import('./src/data/lessonContent/enhanced/c2l1Enhanced')).c2l1Enhanced;
    case 'c3l1':
      return (await import('./src/data/lessonContent/enhanced/c3l1Enhanced')).c3l1Enhanced;
    case 'c4l1':
      return (await import('./src/data/lessonContent/enhanced/c4l1Enhanced')).c4l1Enhanced;
    case 'c5l1':
      return (await import('./src/data/lessonContent/enhanced/c5l1Enhanced')).c5l1Enhanced;
    case 'c6l1':
      return (await import('./src/data/lessonContent/enhanced/c6l1Enhanced')).c6l1Enhanced;
    case 'c7l1':
      return (await import('./src/data/lessonContent/enhanced/c7l1Enhanced')).c7l1Enhanced;
    case 'c8l1':
      return (await import('./src/data/lessonContent/enhanced/c8l1Enhanced')).c8l1Enhanced;
    case 'c9l1':
      return (await import('./src/data/lessonContent/enhanced/c9l1Enhanced')).c9l1Enhanced;
    case 'c10l1':
      return (await import('./src/data/lessonContent/enhanced/c10l1Enhanced')).c10l1Enhanced;
    case 'c11l1':
      return (await import('./src/data/lessonContent/enhanced/c11l1Enhanced')).c11l1Enhanced;
    case 'c12l1':
      return (await import('./src/data/lessonContent/enhanced/c12l1Enhanced')).c12l1Enhanced;
    default:
      throw new Error(`Unknown lesson: ${lessonId}`);
  }
};

type ViewType = 'home' | 'ui-demo' | 'lesson';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [lessonData, setLessonData] = useState<any>(null);
  const [isLoadingLesson, setIsLoadingLesson] = useState(false);

  // Working units with metadata - 2025 design system
  const workingUnits = [
    { 
      id: 'c1l1', 
      number: 1, 
      title: 'Introduction to Chemistry', 
      description: 'Master the fundamentals of matter, measurement, and the scientific method',
      duration: '45 min',
      difficulty: 'Beginner',
      topics: ['Scientific Method', 'Laboratory Safety', 'Matter Classification'],
      colorClasses: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700',
      icon: '⚗️'
    },
    { 
      id: 'c2l1', 
      number: 2, 
      title: 'Atomic Structure', 
      description: 'Explore the building blocks of matter: electrons, protons, and neutrons',
      duration: '50 min',
      difficulty: 'Beginner',
      topics: ['Atomic Theory', 'Subatomic Particles', 'Electron Configuration'],
      colorClasses: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700',
      icon: '⚛️'
    },
    { 
      id: 'c3l1', 
      number: 3, 
      title: 'Periodic Table', 
      description: 'Understand periodic trends and element classification patterns',
      duration: '55 min',
      difficulty: 'Intermediate',
      topics: ['Periodic Trends', 'Element Groups', 'Chemical Properties'],
      colorClasses: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700',
      icon: '🧪'
    },
    { 
      id: 'c4l1', 
      number: 4, 
      title: 'Chemical Bonding', 
      description: 'Discover how atoms bond to form compounds through ionic and covalent bonds',
      duration: '60 min',
      difficulty: 'Intermediate',
      topics: ['Ionic Bonds', 'Covalent Bonds', 'Molecular Geometry'],
      colorClasses: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700',
      icon: '🔗'
    },
    {
      id: 'c5l1', 
      number: 5, 
      title: 'Chemical Reactions & Stoichiometry',
      description: 'Master chemical equations, balancing reactions, and quantitative analysis',
      duration: '50 min', 
      difficulty: 'Intermediate',
      topics: ['Balancing Equations', 'Mole Concept', 'Stoichiometry'],
      colorClasses: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700',
      icon: '⚖️'
    },
    {
      id: 'c6l1',
      number: 6,
      title: 'Physical Behavior of Matter',
      description: 'Master kinetic molecular theory, phase changes, and gas laws',
      duration: '50 min',
      difficulty: 'Intermediate',
      topics: ['Kinetic Theory', 'Phase Changes', 'Gas Laws'],
      colorClasses: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700',
      icon: '🌡️'
    },
    {
      id: 'c7l1',
      number: 7,
      title: 'Solutions & Energy',
      description: 'Explore solution chemistry, thermochemistry, and energy changes',
      duration: '50 min',
      difficulty: 'Intermediate',
      topics: ['Solutions', 'Solubility', 'Thermochemistry'],
      colorClasses: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:border-cyan-300 dark:hover:border-cyan-700',
      icon: '🧪'
    },
    {
      id: 'c8l1',
      number: 8,
      title: 'Kinetics & Equilibrium',
      description: 'Understand reaction rates, collision theory, and chemical equilibrium',
      duration: '50 min',
      difficulty: 'Advanced',
      topics: ['Reaction Rates', 'Collision Theory', 'Equilibrium'],
      colorClasses: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:border-teal-300 dark:hover:border-teal-700',
      icon: '⚡'
    },
    {
      id: 'c9l1',
      number: 9,
      title: 'Acids, Bases & Salts',
      description: 'Master acid-base theory, pH calculations, and quantitative analysis',
      duration: '55 min',
      difficulty: 'Advanced',
      topics: ['Acid-Base Theory', 'pH Scale', 'Titrations'],
      colorClasses: 'bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800 hover:border-lime-300 dark:hover:border-lime-700',
      icon: '🔬'
    },
    {
      id: 'c10l1', 
      number: 10, 
      title: 'Redox & Electrochemistry',
      description: 'Master electron transfer reactions, redox balancing, and electrochemical cells',
      duration: '65 min', 
      difficulty: 'Advanced',
      topics: ['Redox Reactions', 'Electrochemistry', 'Cell Potentials'],
      colorClasses: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-700',
      icon: '🧬'
    },
    {
      id: 'c11l1',
      number: 11,
      title: 'Organic Chemistry',
      description: 'Explore carbon compounds, functional groups, and organic reactions',
      duration: '65 min',
      difficulty: 'Advanced',
      topics: ['Hydrocarbons', 'Functional Groups', 'Organic Reactions'],
      colorClasses: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700',
      icon: '⚗️'
    },
    {
      id: 'c12l1',
      number: 12,
      title: 'Nuclear Chemistry',
      description: 'Discover radioactivity, nuclear reactions, and atomic applications',
      duration: '70 min',
      difficulty: 'Advanced',
      topics: ['Radioactivity', 'Nuclear Reactions', 'Applications'],
      colorClasses: 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:border-violet-300 dark:hover:border-violet-700',
      icon: '☢️'
    },
  ];

  const handleLessonSelect = async (lessonId: string) => {
    setIsLoadingLesson(true);
    setSelectedLessonId(lessonId);
    
    try {
      const lesson = await loadLessonData(lessonId);
      setLessonData(lesson);
      setCurrentView('lesson');
    } catch (error) {
      console.error('Failed to load lesson:', error);
      alert('Failed to load lesson. Please try again.');
    } finally {
      setIsLoadingLesson(false);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedLessonId(null);
    setLessonData(null);
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-500"></div>
      <span className="ml-3 text-slate-700 dark:text-slate-300">Loading...</span>
    </div>
  );

  // Lesson view
  if (currentView === 'lesson' && lessonData) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 py-8">
            <Button 
              onClick={handleBackToHome}
              className="mb-6"
              variant="outline"
            >
              ← Back to Course Overview
            </Button>
            <EnhancedLessonViewer lesson={lessonData} onBack={handleBackToHome} />
          </div>
        </div>
      </Suspense>
    );
  }

  // UI Demo view
  if (currentView === 'ui-demo') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 py-8">
            <Button 
              onClick={handleBackToHome}
              className="mb-6"
              variant="outline"
            >
              ← Back to Home
            </Button>
            <UIShowcase />
          </div>
        </div>
      </Suspense>
    );
  }

  // Home view
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
        {/* Modern Header */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl font-heading">C</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-heading">ChemPrep9</h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Advanced Chemistry Learning Platform</p>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-4">
                <button 
                  onClick={() => setCurrentView('ui-demo')}
                  className="text-slate-700 dark:text-slate-300 hover:text-accent-500 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent-500/20 rounded px-3 py-1"
                >
                  Components
                </button>
                <ThemeToggle />
                <Button variant="secondary" size="sm">
                  Login
                </Button>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 font-heading">
              Master Chemistry with Interactive Learning
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Explore comprehensive chemistry lessons with enhanced visualizations, 
              interactive exercises, and detailed explanations designed for comfortable extended reading.
            </p>
            <ProgressBar value={35} showLabel label="Course Progress" />
          </div>

          {/* Course Units Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center font-heading">
              Choose Your Learning Path
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workingUnits.map((unit) => (
                <Card 
                  key={unit.id} 
                  className={`transform hover:-translate-y-1 transition-all duration-150 cursor-pointer border-2 ${unit.colorClasses} shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500/20`}
                  onClick={() => handleLessonSelect(unit.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLessonSelect(unit.id);
                    }
                  }}
                  role="button"
                  aria-label={`Start Unit ${unit.number}: ${unit.title}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 px-2 py-1 rounded-full">
                        UNIT {unit.number}
                      </span>
                      <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-xl" aria-hidden="true">{unit.icon}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      {unit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      {unit.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-3">
                      <span>⏱️ {unit.duration}</span>
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">{unit.difficulty}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {unit.topics.slice(0, 2).map((topic, index) => (
                        <span key={index} className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-700 dark:text-slate-300">
                          {topic}
                        </span>
                      ))}
                      {unit.topics.length > 2 && (
                        <span className="text-xs text-slate-500 dark:text-slate-400">+{unit.topics.length - 2} more</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Loading indicator */}
          {isLoadingLesson && (
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-500"></div>
                <span className="text-slate-700 dark:text-slate-300">Loading lesson content...</span>
              </div>
            </div>
          )}

          {/* Success Message */}
          <Card className="max-w-2xl mx-auto border-success-200 bg-success-50 dark:bg-success-900/20 dark:border-success-700">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-success-800 dark:text-success-200 mb-3 font-heading">
                  🎉 ChemPrep9 2025 Edition Ready!
                </h3>
                <p className="text-success-700 dark:text-success-300 mb-4 leading-relaxed">
                  Modernized with 2025 design standards: navy/teal/coral palette, enhanced accessibility, 
                  dark mode support, and optimized performance architecture.
                </p>
                <div className="text-sm text-success-600 dark:text-success-400">
                  ✓ WCAG AA compliant • ✓ Dark mode • ✓ 8pt grid • ✓ Modern typography
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </Router>
  );
};

export default App;