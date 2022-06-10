import typescript from 'rollup-plugin-typescript2'

const input = 'src/index.ts'

const plugins = [
  typescript({
    tsconfig: 'tsconfig-build.json',
  }),
]

export default {
  input,
  output: [
    {
      format: 'cjs',
      file: input.replace('src/', 'dist/').replace('.ts', '.js'),
    },
    {
      format: 'es',
      file: input.replace('src/', 'dist/').replace('.ts', '.es.js'),
    },
  ],
  plugins,
}
