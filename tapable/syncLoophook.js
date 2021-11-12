const { SyncLoopHook }  = require('tapable')

const hook = new SyncLoopHook(['name', 'sex', 'age'])

let num = 0;

hook.tap('printAge', (name, sex, age) => {
  const ageStr = 'I’m ' + age + ' years old';
  console.log(ageStr);
})

hook.tap('printSex', (name, sex) => {
  const sexStr = 'I’m a ' + sex;
  console.log(sexStr);
  return;
})

hook.tap('printName', (name) => {
  const nameStr = 'my name is ' + name;
  console.log(nameStr);
  num++;
  return num === 3 ? undefined : false;
})

hook.call('张三', 'man', 29);