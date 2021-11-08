/*!
 * rollup-intro v1.0.0
 * (c) 2021 Mike
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('test-module-2'))
    : typeof define === 'function' && define.amd ? define(['test-module-2'], factory)
      : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mybundle = factory());
}(this, (() => {
  // This is intro.

  // import axios from 'axios'

  const arrowFn = function arrowFn() {
  };
  console.warn('警告信息');
  const index = {
    version: '1.0.0',
    arrowFn,
  };

  return index;

  // This is outro.
})));
/*!
 * This is footer!
 */
