module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        createDefaultProgram: true,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['/*.*'],
    rules: {
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'no-console': 'off',
        'react/jsx-props-no-spreading': 'off',
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                trailingComma: 'all',
                semi: true,
                jsxSingleQuote: true,
                singleQuote: true,
                indent: [2, 'tab'],
            },
        ],
    },
};
