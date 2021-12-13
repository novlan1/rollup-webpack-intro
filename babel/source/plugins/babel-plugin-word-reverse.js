// plugins/babel-plugin-word-reverse.js
module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        console.log("word-reverse plugin come in!!!");
        const name = path.node.name;
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}
