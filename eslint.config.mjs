import withNuxt from './.nuxt/eslint.config.mjs';
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt(
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  ...vue.configs['flat/recommended'],
  ...vue.configs['flat/strongly-recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'vue/html-indent': [
        'warn',
        2,
      ],
      '@stylistic/array-bracket-newline': [
        'warn',
        { 'multiline': true, 'minItems': 1 },
      ],
      '@stylistic/array-bracket-spacing': [
        'warn',
        'always',
        { 'arraysInArrays': false, 'objectsInArrays': false },
      ],
      '@stylistic/array-element-newline': [
        'warn',
        { 'multiline': true, 'minItems': 1 },
      ],
      '@stylistic/arrow-parens': [
        'warn',
        'always',
      ],
      '@stylistic/arrow-spacing': [
        'warn',
        { 'before': true, 'after': true },
      ],
      '@stylistic/block-spacing': [
        'warn',
        'always',
      ],
      '@stylistic/brace-style': [
        'warn',
        'stroustrup',
      ],
      '@stylistic/comma-dangle': [
        'warn',
        'always-multiline',
      ],
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/comma-style': 'warn',
      '@stylistic/dot-location': [
        'warn',
        'property',
      ],
      '@stylistic/eol-last': 'warn',
      '@stylistic/function-call-argument-newline': [
        'error',
        'consistent',
      ],
      '@stylistic/function-call-spacing': 'warn',
      '@stylistic/function-paren-newline': 'warn',
      '@stylistic/implicit-arrow-linebreak': 'warn',
      '@stylistic/indent': [
        'warn',
        2,
      ],
      '@stylistic/key-spacing': 'warn',
      '@stylistic/keyword-spacing': 'warn',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/object-curly-spacing': [
        'warn',
        'always',
        { 'arraysInObjects': false, 'objectsInObjects': false },
      ],
      '@stylistic/quotes': [
        'warn',
        'single',
      ],
      '@stylistic/semi': 'warn',
      '@stylistic/semi-spacing': 'warn',
      '@stylistic/semi-style': 'warn',
    },
  },
);
