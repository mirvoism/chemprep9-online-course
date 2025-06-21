import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    disabled,
    leftIcon,
    rightIcon,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-heading'
    
    const variants = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md active:scale-95',
      secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800 border border-secondary-200 hover:border-secondary-300',
      outline: 'border border-primary-400 text-primary-600 hover:bg-primary-50 dark:text-primary-300 dark:border-primary-600 dark:hover:bg-primary-900',
      ghost: 'text-primary-600 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800',
      danger: 'bg-error-500 hover:bg-error-600 text-white shadow-sm hover:shadow-md active:scale-95'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="w-4 h-4 mr-2 animate-spin" 
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
