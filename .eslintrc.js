// install the following packages:
// npm install --save-dev eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y@^5.1.1


module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2016,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": 1,
      "react/no-find-dom-node": 1,
      "react/no-array-index-key": 1,
      "linebreak-style": 0,
      "jsx-a11y/anchor-is-valid": 1,
      "jsx-a11y/label-has-for": 1,
      "jsx-a11y/click-events-have-key-events": 1,
      "jsx-a11y/no-static-element-interactions": 1,
      "import/prefer-default-export": 1,
      "prefer-const": 1,
      "no-underscore-dangle": 1,
      "prefer-template": 1
    }
};
