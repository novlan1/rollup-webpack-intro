const { SyncWaterfallHook } = require('tapable');

const hook = new SyncWaterfallHook(['name', 'sex', 'age'])

hook.tap('printName', (name, sex, age) => {
  const nameStr = 'my name is ' + name;
  console.log(nameStr);
  return { sex, age };
})
hook.tap('printSex', (data) => {
  const sexStr = 'I’m a ' + data.sex;
  console.log(sexStr);
  return data.age;
})
hook.tap('printAge', (age) => {
  const ageStr = 'I’m ' + age + ' years old';
  console.log(ageStr);
})

hook.call('张三', 'man', 29);
