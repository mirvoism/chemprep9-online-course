import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Add custom jest-dom matchers to vitest
expect.extend(matchers)

// Clean up after each test case
afterEach(() => {
  cleanup()
})
