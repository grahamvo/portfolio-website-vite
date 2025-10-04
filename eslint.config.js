import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'import/no-unresolved': 'error',
      'import/extensions': 0,
    },
    settings: {
        'import/resolver': {
            alias: {
                extensions: ['.jsx', '.js', '.ts', '.tsx', '.scss'],
                map: [
                    ['components', './src/components/'],
                    ['styles', './src/styles/'],
                    ['assets', './src/assets']
                ],
            },
        },
        'import/ignore': ['vite', '@vitejs/plugin-react'],
    },
  },
])
