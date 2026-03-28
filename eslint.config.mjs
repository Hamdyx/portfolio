import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      // Enforce `import type` for type-only imports
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'separate-type-imports' }],
      // Enforce import ordering: types → packages → aliases → relative
      'import/order': [
        'error',
        {
          groups: ['type', ['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      // Ensure components are Fast Refresh–compatible
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  // Must be last — disables ESLint rules that conflict with Prettier
  prettier,
]);

export default eslintConfig;
