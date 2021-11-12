const { SyncBailHook } = require('tapable')

const hook = new SyncBailHook(['name', 'sex', 'age'])

hook.tap('printName', (name) => {
  console.log(`My name is ${name}`)
  // return name;
})

hook.tap('printSex', sex => {
  console.log(`My sex is ${sex}`)
  return sex;
})

hook.tap('printAge', age => {
  console.log(`My age is ${age}`)
})

hook.call('yang', 'man', 10)