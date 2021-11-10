const path = require('path')
const rollup = require('../dist/rollup');

rollup(`${__dirname}/main.js`).then((res) => {
  res.wirte(path.resolve(__dirname, 'bundle.js'))
});
