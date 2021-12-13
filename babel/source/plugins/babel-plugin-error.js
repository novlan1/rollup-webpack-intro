module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        console.error('babel-plugin-error')
      },
    },
  };
}
