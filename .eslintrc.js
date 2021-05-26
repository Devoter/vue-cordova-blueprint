module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {},
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:vue/base'
  ],
  plugins: ['prettier', 'vuetify'],
  rules: {
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    semi: [2, 'always'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'newline-after-var': 2,
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: ['return', 'throw'] }],
    // disable the rule for all files
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error'
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.vue'],
      rules: {
        '@typescript-eslint/no-use-before-define': ['error']
      }
    }
  ],
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 2020
  }
};
