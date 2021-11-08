module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  rules: {
  },
  globals: {
    app: true,
    Swiper: true,
    need: true,
    $: true,
  },
  env: {
    jest: true,
  },
};
