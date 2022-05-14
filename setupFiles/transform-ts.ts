import esbuild from 'esbuild'
import { EsbuildPhoenix } from '@xn-sakina/phoenix'

new EsbuildPhoenix({
  target: 'es2019',
  implementor: esbuild,
})
