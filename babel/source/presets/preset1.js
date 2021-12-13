// presets/my-preset-1.js
module.exports = () => {
  console.log('preset 1 is executed!!!');
  return {
    plugins: ['./plugins/babel-plugin-word-reverse.js']
  };
};