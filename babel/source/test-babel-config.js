// 测试babel配置

import "core-js";
import 'regenerator-runtime/runtime'
import "@babel/polyfill";

const fn = () => {}
new Promise(() => {})
class Test {
  say() {
    console.log('say')
  }
}

const set = new Set()
const c = [1, 2, 3].includes(1)
//测试插件1
var a=10;

function* testGenerator() {
  yield '1';
  yield '2';
  return '3';
}
