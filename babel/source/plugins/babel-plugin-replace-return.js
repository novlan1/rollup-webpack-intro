// plugins/babel-plugin-replace-return.js
module.exports = function({ types: t }) {
  return {
    visitor: {
      ReturnStatement(path) {
        console.log("replace-return plugin come in!!!");
        path.replaceWithMultiple([
         t.expressionStatement(t.stringLiteral('Is this the real life?')),
         t.expressionStatement(t.stringLiteral('Is this just fantasy?')),
         t.expressionStatement(t.stringLiteral('(Enjoy singing the rest of the song in your head)')),
       ]);
      },
    },
  };
}