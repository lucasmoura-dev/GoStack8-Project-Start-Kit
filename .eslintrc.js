module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "class-methods-use-this": "off", // métodos dentro de classes não precisam usar o this
    "no-param-reassign": "off", // permitir alterar o valor de parâmetros
    "camelcase": "off", // não precisa ser camelCase, pode ser assim nossa_variavel
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], // vou poder declarar a variável next mesmo sem usar ela
    
  },
};
