const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);


traverse(ast, {
  FunctionDeclaration: function(path) {
    path.node.id.name = "x";
  },
});

console.log('ast', ast)

const resCode = generate(ast)
console.log('code', resCode)