import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ProgressBar } from '@/components/ui/ProgressBar'

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-chemistry-500')
  })

  it('handles different variants', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-gray-200')
  })

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with icons', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>
    render(<Button leftIcon={<TestIcon />}>With Icon</Button>)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })
})

describe('Card Component', () => {
  it('renders card with content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
    )
    
    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies different variants', () => {
    const { container } = render(<Card variant="elevated">Content</Card>)
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('shadow-md')
  })

  it('applies different padding sizes', () => {
    const { container } = render(<Card padding="lg">Content</Card>)
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('p-8')
  })
})

describe('LoadingSpinner Component', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />)
    const spinner = screen.getByRole('status')
    expect(spinner).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(<LoadingSpinner label="Processing..." />)
    expect(screen.getByText('Processing...')).toBeInTheDocument()
  })

  it('applies different sizes', () => {
    const { container } = render(<LoadingSpinner size="lg" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-8', 'h-8')
  })

  it('applies different colors', () => {
    const { container } = render(<LoadingSpinner color="secondary" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('text-gray-500')
  })
})

describe('ProgressBar Component', () => {
  it('renders with correct percentage', () => {
    render(<ProgressBar value={50} showLabel />)
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(<ProgressBar value={75} label="Custom Progress" showLabel />)
    expect(screen.getByText('Custom Progress')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('handles different variants', () => {
    const { container } = render(<ProgressBar value={50} variant="success" />)
    const progressBar = container.querySelector('[role="progressbar"]')
    expect(progressBar).toHaveClass('bg-green-500')
  })

  it('clamps values between 0 and 100', () => {
    const { container: container1 } = render(<ProgressBar value={-10} />)
    const { container: container2 } = render(<ProgressBar value={150} />)
    
    const progressBar1 = container1.querySelector('[role="progressbar"]') as HTMLElement
    const progressBar2 = container2.querySelector('[role="progressbar"]') as HTMLElement
    
    expect(progressBar1.style.width).toBe('0%')
    expect(progressBar2.style.width).toBe('100%')
  })

  it('has proper accessibility attributes', () => {
    render(<ProgressBar value={60} max={100} label="Test Progress" />)
    const progressBar = screen.getByRole('progressbar')
    
    expect(progressBar).toHaveAttribute('aria-valuenow', '60')
    expect(progressBar).toHaveAttribute('aria-valuemin', '0')
    expect(progressBar).toHaveAttribute('aria-valuemax', '100')
    expect(progressBar).toHaveAttribute('aria-label', 'Test Progress')
  })
})
