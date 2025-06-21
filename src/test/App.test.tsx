import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';

// Simple test component to verify our setup works
const TestComponent = () => {
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a test</p>
    </div>
  );
};

describe('Development Infrastructure Setup', () => {
  it('renders test components correctly', () => {
    renderWithProviders(<TestComponent />);

    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(screen.getByText('This is a test')).toBeInTheDocument();
  });

  it('has working test environment', () => {
    expect(1 + 1).toBe(2);
    expect('hello').toBeTruthy();
  });
});
