const { parse } = require('@babel/parser')

const a = parse('const a = 1', {

})
console.log('a', a)