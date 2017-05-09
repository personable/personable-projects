module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "max-len": [2, 150, 2],
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-no-bind": [2, {
      "ignoreRefs": true
    }],
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true,
      "mode": "minimum"
    }],
    "no-var": 2,
    "prefer-const": 2,
    "no-param-reassign": ["error", { "props": true }],
    "no-console": 2,
    "no-useless-escape": 0,

    "no-unused-expressions": 0,
    "react/no-unused-prop-types": 0
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "extends": ["standard", "standard-react"]
};
