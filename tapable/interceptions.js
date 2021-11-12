const { AsyncSeriesHook } = require('tapable')
const hook = new AsyncSeriesHook(['name', 'sex', 'age'])

hook.intercept({
  call: (name, sex, age) => {
    console.log('执行拦截器');
  },
  register: (name) => {
    console.log('定义钩子函数时的拦截器');
  },
  tap: () => {
    console.log('执行钩子函数时的拦截器');
  },
  loop:()=>{
    console.log('循环事件函数执行时的拦截器');
  },
  result: () => {
    console.log('result拦截器')
  }
})

// 打印我的名字
let num = 0;
console.time('time')
hook.tapPromise('printName', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nameStr = 'my name is ' + name;
      console.log(nameStr);
      resolve('printName');
    }, 1000)
  })
})

hook.tapPromise('printSex', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sexStr = 'I’m a ' + sex;
      console.log(sexStr);
      resolve('printSex')
    }, 2000)
  })
})

hook.tapPromise('printAge', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ageStr = 'I’m ' + age + ' years old';
      console.log(ageStr);
      resolve('printAge')
    }, 3000)
  })
})

hook.promise('张三', 'man', 29).then(res => {
  console.log(res);
  console.timeEnd('time');
});
