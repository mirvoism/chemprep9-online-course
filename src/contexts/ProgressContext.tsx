import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  ReactNode,
} from 'react';
import { lessons as allCourseLessons } from '../../data/lessonsData'; // To get total lessons

interface ProgressContextType {
  completedLessons: Set<string>;
  toggleLessonComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  totalLessons: number;
  completedLessonCount: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    try {
      const storedProgress = localStorage.getItem('chemprep9-progress');
      return storedProgress ? new Set(JSON.parse(storedProgress)) : new Set();
    } catch (error) {
      console.error('Error parsing stored progress:', error);
      return new Set(); // Fallback to empty set on error
    }
  });

  useEffect(() => {
    localStorage.setItem('chemprep9-progress', JSON.stringify(Array.from(completedLessons)));
  }, [completedLessons]);

  const toggleLessonComplete = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId: string) => {
      return completedLessons.has(lessonId);
    },
    [completedLessons]
  );

  const totalLessons = allCourseLessons.length;
  const completedLessonCount = completedLessons.size;

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        toggleLessonComplete,
        isLessonCompleted,
        totalLessons,
        completedLessonCount,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
