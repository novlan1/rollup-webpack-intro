const { MultiHook } = require('tapable')

const hookA = new SyncHook(['age']);
const hookB = new SyncBailHook(['age']);
const allHooks = new MultiHook([hookA, hookB]);

