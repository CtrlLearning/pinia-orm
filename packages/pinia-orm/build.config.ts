// build.config.ts
// import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // bundling
    'src/index',
    'src/decorators',
    'src/casts',
    'src/helpers',
    { input: 'src/packages/nanoid/index', name: 'nanoid/index' },
    { input: 'src/packages/nanoid/async', name: 'nanoid/async' },
    { input: 'src/packages/nanoid/non-secure', name: 'nanoid/non-secure' },
    { input: 'src/packages/uuid/v1', name: 'uuid/v1' },
    { input: 'src/packages/uuid/v4', name: 'uuid/v4' },
  ],
  declaration: true,
  failOnWarn: true,
  clean: true,
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  externals: [
    'nanoid',
    'uuid',
    'nanoid/async',
    'nanoid/non-secure',
    'pinia',
    'vue',
  ],
  rollup: {
    emitCJS: true,
    alias: {},
  },
  // hooks: {
  //   'build:done': (ctx) => {
  //     ctx.buildEntries.filter(entry => entry.path.includes('.cjs') && !entry.path.includes('shared')).forEach((entry) => {
  //       fs.rename(`${ctx.options.outDir}/${entry.path}`, `${ctx.options.outDir}/${entry.path}`.replace('cjs', 'js'), (err) => {
  //         if (err) { console.error(`ERROR: ${err}`) }
  //       })
  //     })
  //   }
  // }
})
