const { SyncHook } = require('tapable')

const hook = new SyncHook(['name', 'sex'])

hook.tap('printName', (name) => {
  console.log('my name is ' + name);
})
hook.tap('printSex', (name, sex) => {
  console.log('I’m a ' + sex);
})

hook.call('张三', 'man');
