const { AsyncSeriesBailHook } = require('tapable');

const hook = new AsyncSeriesBailHook(['name', 'sex', 'age'])

let num = 0;
console.time('time')

hook.tapPromise('printAge', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ageStr = 'I’m ' + age + ' years old';
      console.log(ageStr);
      resolve(undefined)
      // resolve('printAge')
    }, 3000)
  })
})


hook.tapPromise('printName', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nameStr = 'my name is ' + name;
      console.log(nameStr);
      // resolve(undefined)
      resolve('printName');
    }, 1000)
  })
})

hook.tapPromise('printSex', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sexStr = 'I’m a ' + sex;
      console.log(sexStr);
      resolve(undefined)
      // resolve('printSex')
    }, 2000)
  })
})



hook.promise('张三', 'man', 29).then(res => {
  console.log(res);
  console.timeEnd('time');
});
