import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@ctrllearning/pinia-orm': path.resolve(
        __dirname,
        '../pinia-orm/src/index.ts',
      ),
      '@ctrllearning/pinia-orm-normalizr': path.resolve(
        __dirname,
        '../normalizr/src/index.js',
      ),
    },
  },
  test: {
    setupFiles: ['./test/setup.ts'],
    externals: ['@ctrllearning/pinia-orm'],
    coverage: {
      enabled: true,
      reporter: ['lcov', 'text', 'html'],
    },
  },
})
