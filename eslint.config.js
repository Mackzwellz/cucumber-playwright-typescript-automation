import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint, { rules } from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import cucumber from 'eslint-plugin-cucumber';
import deprecate from 'eslint-plugin-deprecate';
import { plugin as ex } from 'eslint-plugin-exception-handling';
import jsonFormat from 'eslint-plugin-json-format';
import noSecrets from 'eslint-plugin-no-secrets';
import optimizeRegex from 'eslint-plugin-optimize-regex';
import prettier from 'eslint-plugin-prettier';
import promise from 'eslint-plugin-promise';
import regexp from 'eslint-plugin-regexp';
//import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import writeGoodComments from 'eslint-plugin-write-good-comments';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

export default [
  {
    ignores: ['**/build', '**/dist', '**/node_modules']
  },
  sonarjs.configs.recommended,
  ...compat.extends(
    'eslint:recommended',
    'plugin:depend/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:jsonc/prettier',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:import-x/recommended',
    'plugin:import-x/typescript',
    'plugin:perfectionist/recommended-natural-legacy',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        afterAll: true,
        afterEach: true,
        beforeAll: true,
        beforeEach: true,
        describe: true,
        expect: true,
        fdescribe: true,
        fit: true,
        it: true,
        jest: true,
        test: true,
        xdescribe: true,
        xit: true,
        xtest: true
      },
      parser: tsParser,
      sourceType: 'module'
    },

    plugins: {
      promise,
      cucumber,
      deprecate,
      ex,
      '@typescript-eslint': typescriptEslint,
      // sonarjs: sonarjs,
      'json-format': jsonFormat,
      'no-secrets': noSecrets,
      regexp,
      'optimize-regex': optimizeRegex,
      
      
      // 'simple-import-sort': simpleImportSort,
      'write-good-comments': writeGoodComments
      prettier
    },

    rules: {
      'arrow-body-style': 'off',
      'comma-dangle': [0, 'always-multiline'],
      'cucumber/async-then': 2,
      'cucumber/expression-type': 2,
      // 'cucumber/no-restricted-tags': [2, 'wip', 'broken', 'foo'],
      'cucumber/no-arrow-functions': 2,
      curly: [2, 'all'],
      'depend/ban-dependencies': 1,
      'deprecate/function': 1,
      'deprecate/import': 1,
      'deprecate/member-expression': 1,
      'ex/no-unhandled': 2,
      'guard-for-in': 2,
      'import-x/first': 2,
      'import-x/newline-after-import': 2,
      'import-x/no-duplicates': 2,
      'max-len': [0, 140, 4],
      'no-console': 1,
      'no-continue': 1,
      'no-eval': 2,
      'no-fallthrough': 0,
      'no-import-assign': 1,
      'no-loss-of-precision': 1,
      'no-prototype-builtins': 0,
      'no-secrets/no-secrets': 2,
      'no-undef': 2,
      'no-undefined': 0,
      'no-unreachable': 1,
      'no-unused-expressions': 1,
      'no-unused-vars': [
        2,
        {
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'no-var': 2,
      'prefer-arrow-callback': 'off',
      'prefer-const': 2,

      'prettier/prettier': 2,

      quotes: [2, 'single'],
      // 'simple-import-sort/exports': 2,
      // 'simple-import-sort/imports': 2,
      'spaced-comment': [2, 'always'],
      strict: [2, 'safe'],
      'valid-typeof': 2,
      'write-good-comments/write-good-comments': 1
    },

    settings: {
      'import-x/resolver': {
        node: true,
        typescript: true
      }
    }
  },
  {
    files: ["**/*.json"],
    rules: {
      quotes: [1, 'double'],
    }
},
  ...compat.extends('plugin:playwright/recommended').map((config) => ({
    ...config,
    files: ['src*/**', 'test*/**']
  }))

];
