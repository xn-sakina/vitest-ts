import { createVitestConfig } from 'vitest-ts'

export default createVitestConfig()({
  test: {
    include: ['./src/**/*.test.ts'],
  },
})
