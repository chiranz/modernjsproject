import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
const dist = "dist";
const bundle = "bundle";
export default {
  input: "src/index.js",
  external: ["react"],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: "cjs"
      // format: 'cjs' known as common javascript syntax impossible for treeshaking
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: "esm"
      // format esm known as ES module syntax useful for bundlers to
      //  enable treeshaking meaning the end user is only imports the
      //  files they need not the entire project
    },
    {
      name: "ReactCssSpinners",
      file: `${dist}/${bundle}.umd.js`,
      format: "umd",
      globals: {
        react: "React"
      }
      //   versatile format
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    production && terser()
  ]
};
