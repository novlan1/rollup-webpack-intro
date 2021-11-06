// import axios from 'axios'
// import json from "../package.json";
// console.log(json.author)
// console.log('ttt')
// console.log('2313')
// console.log('version', json.version)
// const a = 1;
// console.log('axios', axios,a)

// axios({
//   url: 'http://baidu.com'
// }).then((res) => {
//   console.log('res', res)
// })

import ddd from 'test-module-2'
import VirtualModule from 'virtual-module';

const arrowFn = () => {
  console.log('1')
}

console.log('ddd', ddd)
console.log('VirtualModule', VirtualModule)

arrowFn()

export default {
  version: __VERSION__,
  arrowFn,
}