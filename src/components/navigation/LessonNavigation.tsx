import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'

export interface LessonNavigationProps {
  currentLesson: {
    id: string
    title: string
    unitId: number
    lessonNumber: number
  }
  previousLesson?: {
    id: string
    title: string
  }
  nextLesson?: {
    id: string
    title: string
  }
  completedLessons: string[]
  totalLessons: number
  unitProgress?: {
    completed: number
    total: number
  }
  estimatedTime?: number
  onLessonComplete?: () => void
  className?: string
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({
  currentLesson,
  previousLesson,
  nextLesson,
  completedLessons,
  totalLessons,
  unitProgress,
  estimatedTime,
  onLessonComplete,
  className
}) => {
  const isCompleted = completedLessons.includes(currentLesson.id)
  const overallProgress = (completedLessons.length / totalLessons) * 100
  
  return (
    <div className={cn('bg-white border-b border-gray-200', className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Progress indicators */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-600">
              Unit {currentLesson.unitId} • Lesson {currentLesson.lessonNumber}
            </div>
            {estimatedTime && (
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="w-4 h-4 mr-1" />
                {estimatedTime} min
              </div>
            )}
          </div>
          
          <h1 className="text-xl font-semibold text-gray-900 mb-3">
            {currentLesson.title}
          </h1>
          
          {/* Overall progress */}
          <div className="space-y-2">
            <ProgressBar
              value={overallProgress}
              label="Overall Progress"
              showLabel
              size="sm"
            />
            
            {/* Unit progress */}
            {unitProgress && (
              <ProgressBar
                value={(unitProgress.completed / unitProgress.total) * 100}
                label={`Unit ${currentLesson.unitId} Progress`}
                showLabel
                size="sm"
                variant="success"
              />
            )}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {previousLesson ? (
              <Button
                variant="outline"
                size="sm"
                leftIcon={<ChevronLeftIcon className="w-4 h-4" />}
                asChild
              >
                <Link to={`/lesson/${previousLesson.id}`}>
                  Previous
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                leftIcon={<ChevronLeftIcon className="w-4 h-4" />}
              >
                Previous
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link to="/lessons">
                All Lessons
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Completion status */}
            {isCompleted && (
              <div className="flex items-center text-green-600 text-sm">
                <CheckCircleIcon className="w-4 h-4 mr-1" />
                Completed
              </div>
            )}

            {/* Mark complete button */}
            {!isCompleted && onLessonComplete && (
              <Button
                variant="secondary"
                size="sm"
                onClick={onLessonComplete}
              >
                Mark Complete
              </Button>
            )}

            {/* Next lesson button */}
            {nextLesson ? (
              <Button
                variant="primary"
                size="sm"
                rightIcon={<ChevronRightIcon className="w-4 h-4" />}
                asChild
              >
                <Link to={`/lesson/${nextLesson.id}`}>
                  Next
                </Link>
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                disabled
                rightIcon={<ChevronRightIcon className="w-4 h-4" />}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { LessonNavigation }
