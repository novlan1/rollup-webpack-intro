const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default;

const a = "const a = 1;";
const b = "var b = 2;";
const astA = parse(a);
const astB = parse(b, { sourceFilename: "b.js" });
const ast = {
  type: "Program",
  body: [].concat(astA.program.body, astB.program.body),
};

console.log('generate',generate)
// const { code, map } = generate(
//   ast,
//   { sourceMaps: true }
//   // {
//   //   "a.js": a,
//   //   "b.js": b,
//   // }
// );

// console.log('code', code)
// console.log('map', map)
// console.log('ast', ast)

const codeA = generate(astA)
console.log('codeA', codeA)
// Sourcemap will point to both a.js and b.js where appropriate.