const { AsyncParallelHook } = require('tapable')
const hook = new AsyncParallelHook(['name', 'sex', 'age'])

let num = 0;
console.time('time')

hook.tapAsync('printAge', (name, sex, age, next) => {
  setTimeout(() => {
    const ageStr = 'I’m ' + age + ' years old';
    console.log(ageStr);
    next(3);
  }, 3000)
})

hook.tapAsync('printName', (name, sex, age, next) => {
  setTimeout(() => {
    const nameStr = 'my name is ' + name;
    console.log(nameStr);
    next(1);
  }, 1000)
})

hook.tapAsync('printSex', (name, sex, age, next) => {
  setTimeout(() => {
    const sexStr = 'I’m a ' + sex;
    console.log(sexStr);
    next(2);
  }, 2000)
})


hook.callAsync('张三', 'man', 29,(res)=>{
  console.log('res', res)
  console.log('执行完成！');
  console.timeEnd('time');
});

// 以下为错误代码
// hook.promise('张三', 'man', 29).then(res => {
//   console.log('res', res)
//   console.log('执行完成！');
//   console.timeEnd('time');
// })