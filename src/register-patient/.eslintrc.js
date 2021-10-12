module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    parser: 'babel-eslint',
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        'prettier/prettier': 'error',
  'react/jsx-filename-extension': [
    'warn',
    {extensions: ['.js', '.jsx']}
  ],
  'import/prefer-default-export': 'off',
  'jsx-quotes': ['error', 'prefer-single']
    }
};
