/*!
 * rollup-intro v1.0.0
 * (c) 2021 Mike
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('test-module-2')) :
  typeof define === 'function' && define.amd ? define(['test-module-2'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mybundle = factory(global.ddd));
})(this, (function (ddd) { 'use strict';

  // This is intro.

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var ddd__default = /*#__PURE__*/_interopDefaultLegacy(ddd);

  var VirtualModule = "This is virtual!";

  var arrowFn = function arrowFn() {
    console.log('1');
  };

  console.log('ddd', ddd__default["default"]);
  console.log('VirtualModule', VirtualModule);
  arrowFn();
  var index = {
    version: "1.0.0",
    arrowFn: arrowFn
  };

  return index;

  // This is outro.

}));
/*!
 * This is footer!
 */
