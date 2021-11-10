
      (function(modules) {
        function require(filename) {
          const fn = modules[filename];
          const module = { exports: {} };
          fn(require, module, module.exports);
          return module.exports;
        }
        require('/Users/mike/Documents/ygw/rollup-intro/webpack/demo/index.js')
      })({'/Users/mike/Documents/ygw/rollup-intro/webpack/demo/index.js': function(require, module, exports) {"use strict";

var _mul = require("./mul.js");

// console.log(mul(2, 3))
console.log(_mul.mul + 1);},'./mul.js': function(require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = undefined;

var _add = require("./add.js");

// export function mul(a, b) {
//   let result = 0;
//   for (let i = 0; i < a; i++) {
//     result = add(result, b);
//   }
//   return result;
// }
var mul = exports.mul = _add.add + 1;},'./add.js': function(require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// export function add(a, b) {
//   return a + b
// }
var add = exports.add = 1;},})
    