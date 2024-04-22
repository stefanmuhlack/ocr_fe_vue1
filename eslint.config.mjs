import { defineConfig } from 'eslint';

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    // Define custom rules here
  }
});
  ...pluginVue.configs['flat/essential']
]
