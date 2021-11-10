const fs = require('fs');
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('babel-core')


module.exports = {
  getAST: path => {
    const source = fs.readFileSync(path, 'utf-8')
    return parser.parse(source, {
      sourceType: 'module'
    })
  },
  getDependencies: ast => {
    const depencies = []
    traverse(ast, {
      ImportDeclaration: ({node}) => {
        depencies.push(node.source.value)
      }
    })
    return depencies;
  },
  transform: ast => {
    const { code } = transformFromAst(ast, null, {
      presets: ['env']
    })
    return code;
  }
}

