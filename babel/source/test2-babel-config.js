// 该文件作用与test-babel-config.js相同
const { transformFile } = require('@babel/core')


transformFile('./test.js', {

}, (err, res) => {
  console.log('res', res)
})
