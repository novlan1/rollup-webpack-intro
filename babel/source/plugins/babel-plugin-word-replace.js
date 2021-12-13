// presets/babel-plugin-word-replace.js
// 这个插件主要的功能是给每个节点类型为Identifier的名称拼接一个_replace的后缀
module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        console.log("word-replace plugin come in!!!");
        let name = path.node.name;
        path.node.name = name += '_replace';
      },
    },
  };
}
