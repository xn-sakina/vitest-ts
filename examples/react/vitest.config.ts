/// <reference types="vitest/globals" />

import { createVitestConfig } from 'vitest-ts'

export default createVitestConfig({
  target: 'browser',
})({
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
  },
})
