const path = require('path');
const fs = require('fs')
const { getAST, getDependencies, transform } = require('./parser')

class Compiler {
  constructor(options) {
    const { entry, output } = options
    this.entry = entry;
    this.output = output
    this.modules = [];
  } 

  run () {
    const entryModule = this.buildModule(this.entry, true);
    this.modules.push(entryModule);
    this.walk(entryModule);
    // console.log('modules', this.modules)
    this.emitFiles();
  }

  walk(module) {
    const moduleNameMap = this.modules.map(item => item.filename)
    module.dependencies.map(dep => {
      if (!moduleNameMap.includes(dep)) {
        const newModule = this.buildModule(dep)
        this.modules.push(newModule);
        this.walk(newModule)
      }
    })
  }

  buildModule(filename, isEntry) {
    let ast;
    if (isEntry) {
      ast = getAST(filename)
    } else {
      const absolutePath = path.resolve(process.cwd(), './webpack/demo', filename)
      ast = getAST(absolutePath)
    }
    return {
      filename,
      dependencies: getDependencies(ast),
      transformCode: transform(ast)
    }
  }

  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename)
    let modules = ''
    this.modules.map(_module => {
      modules += `'${_module.filename}': function(require, module, exports) {${_module.transformCode}},`
    })

    const bundle = `
      (function(modules) {
        function require(filename) {
          const fn = modules[filename];
          const module = { exports: {} };
          fn(require, module, module.exports);
          return module.exports;
        }
        require('${this.entry}')
      })({${modules}})
    `

    fs.writeFileSync(outputPath, bundle, 'utf-8')
  }
}

module.exports = Compiler