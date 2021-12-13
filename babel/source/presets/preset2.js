// presets/my-preset-2.js
module.exports = () => {
  console.log('preset 2 is executed!!!');
  return {
    // presets: ["@babel/preset-react"],
    // plugins: ['./plugins/babel-plugin-word-replace', ],
    plugins: ['./plugins/babel-plugin-error', ],
  };
};