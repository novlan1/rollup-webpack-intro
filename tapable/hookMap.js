const { HookMap, AsyncSeriesWaterfallHook } = require('tapable')

const hookMap = new HookMap(key => new AsyncSeriesWaterfallHook(['name', 'sex', 'age']));

hookMap.tapPromise('myPlugin', 'printName', (name, sex, age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const nameStr = 'my name is ' + name;
      console.log(nameStr);
      resolve('printName');
    }, 1000)
  })
});
const hook = hookMap.get('myPlugin');
hook.promise('张三', 'man', 29).then(res => {
  console.log(res);
});
