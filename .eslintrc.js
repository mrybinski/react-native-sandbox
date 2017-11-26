module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true
  },
  "plugins": [
      "react"
  ],
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"]
    }
};