module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:@next/next/core-web-vitals'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX,
    },
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    projectFolderIgnoreList: ['node_modules', 'dist', 'build', '.yarn', 'docs', './src/generated/*', 'generated/*'],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
