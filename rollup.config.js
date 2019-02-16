const dist = 'dist'
export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs'
      // format: 'cjs' known as common javascript syntax impossible for treeshaking
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm'
      // format esm known as ES module syntax useful for bundlers to
      //  enable treeshaking meaning the end user is only imports the
      //  files they need not the entire project
    },
    {
      name: 'ReactCssSpinners',
      file: `${dist}/bundle.umd.js`,
      format: 'umd'
      //   versatile format
    }
  ]
}
