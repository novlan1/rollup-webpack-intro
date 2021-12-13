const { transformSync } = require('@babel/core')

const originCode = `const a = 1`
const originCode2 = 'export { b, c}'
const originCode3 = 'export default a'
const originCode5 = 'export const d = 1'
const originCode6 = `import a from 'a.js'`
const originCode7 = `import * as a from 'a.js'`
const originCode8 = `import { a } from 'a.js'`



function realTransfrom(originCode) {
  const res = transformSync(originCode, {
    presets: ["@babel/preset-env"]
  })
 
  console.log('code' ,res.code)
  // console.log('==========')
}

realTransfrom(originCode)
// realTransfrom(originCode2)
// realTransfrom(originCode3)
// realTransfrom(originCode5)
// realTransfrom(originCode6)
// realTransfrom(originCode7)
// realTransfrom(originCode8)