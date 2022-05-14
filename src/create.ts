import defu from 'defu'
import { type UserConfig } from 'vitest/config'

export interface IVitestOpts {
  /**
   * @default node
   */
  target?: 'node' | 'browser'
}

const configDefaults: UserConfig = {
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
}

const timeout = (process.env.CI ? 50 : 20) * 1e3

export function createVitestConfig(opts?: IVitestOpts) {
  const baseConfig: UserConfig = {
    test: {
      globals: true,
      root: process.cwd(),
      testTimeout: timeout,
      hookTimeout: timeout,
      setupFiles: [require.resolve('../setupFiles/compatible-jest')],
    },
  }

  return (userConfig: UserConfig = {}) => {
    // browser
    if (opts?.target === 'browser') {
      const browserConfig: UserConfig = {
        test: {
          environment: 'jsdom',
        },
      }
      return defu(userConfig, baseConfig, browserConfig, configDefaults)
    }
    // node
    const nodeConfig: UserConfig = {
      test: {
        exclude: ['./packages/*/compiled/**', './packages/*/fixtures/**'],
        setupFiles: [require.resolve('../setupFiles/transform-ts')],
      },
      esbuild: {
        target: 'node14',
        format: 'cjs',
      },
    }
    return defu(userConfig, baseConfig, nodeConfig, configDefaults)
  }
}
