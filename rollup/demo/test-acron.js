const { parse } = require('acorn');

const code = `
import { a } from './a.js'
`
const code2 = `
import * as a from './a.js'
`

function realParse(code) {
  return parse(code, {
    ecmaVersion: 7,
    sourceType: 'module',
  })
}

console.log('res', realParse(code), JSON.stringify(realParse(code)))
console.log('res', realParse(code2).body[0].specifiers)


const code5 = `import { a } from './a.js'`

console.log(JSON.stringify(parse(code5, {
  ecmaVersion: 7,
  sourceType: 'module',
})))