const Compiler = require('./compiler')

function webpack(options) {
  new Compiler(options).run();
}

module.exports = webpack;