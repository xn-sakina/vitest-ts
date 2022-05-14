# vitest-ts

Support vitest transform typescript to commonjs

### Motivation

`vitest` is ESM first, cannot handle scene where output is `commonjs` format, we need to manually convert `esm` to `cjs` in the test time.

### Install

```bash
  pnpm add -D vitest-ts
```

### Usage

#### commonjs scene

```ts
// vitest.config.ts

import { createVitestConfig } from 'vitest-ts'

export default createVitestConfig()({
  // ↓ your vitest config
  test: {
    include: ['./src/**/*.test.ts'],
  },
})
```

#### react scene

```ts
// vitest.config.ts

import { createVitestConfig } from 'vitest-ts'

export default createVitestConfig({
  target: 'browser',
})({
  // ↓ your vitest config
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
  },
})
```

### License

MIT
