import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ProgressProvider } from '../contexts/ProgressContext';

// Test wrapper that provides all necessary contexts
export const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <ProgressProvider>{children}</ProgressProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

// Custom render function that includes all providers
export const renderWithProviders = (ui: React.ReactElement, options = {}) => {
  return render(ui, { wrapper: TestWrapper, ...options });
};

// Re-export everything from testing-library
export * from '@testing-library/react';
