module.exports = {
    /**
    * @root
    * @parser
    * @parsetOptions
    */
    "root": true,
    // "parser": "@typescript-eslint/parser",
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2019,
      "sourceType": "module"
    },

    /**
    * @env environment defines global variables that are predefined
    * @globals global variables
    */
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
    },
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "App": true,
    },

    /**
    * @plugins third-party plugins
    * @processor Plugins may provide processors
    * @overrides
    */
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "processor": "",
    "overrides": [
      // Disabling Rules Only for a Group of Files
      {
        "files": ["*.config.js"],
        "rules": {
          "quotes": ["off"]
        }
      },
      // for .md files
      {
        "files": ["**/*.md"],
        "rules": {
          "no-undef": "off",
          "no-unused-vars": "off",
          "no-console": "off",
          "padded-blocks": "off"
        }
      }
    ],

    /**
    * @settings Adding Shared Settings
    * @extends Extending Configuration
    * @rules
    */
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended"
    ],
    "rules": {
      /**
       * Possible Errors
       */
      // add: disallow the use of console
      // "no-console": ["warn", { "allow": ["warn", "error", "log", "info"] }],
      // "debugger": "warn",
      // add: disallow unnecessary parentheses
      "no-extra-parens": ["warn"],
      // calling `Object.prototype` method directly on objects
      "no-prototype-builtins": ["off"],
      // add: disallow template literal placeholder syntax in regular strings
      "no-template-curly-in-string": ["warn"],

      /**
       * Best Practices
       */
      // add: require default cases in switch statements
      "default-case": ["warn"],
      // add: enforce consistent newlines before and after dots
      "dot-location": ["warn"],
      // add: enforce dot notation whenever possible
      "dot-notation": ["warn"],
      // add: require the use of === and !==
      "eqeqeq": ["warn", "always", {"null": "ignore"}],
      // add: disallow the use of alert, confirm, and prompt
      "no-alert": ["warn"],
      // add: disallow the use of arguments.caller or arguments.callee
      "no-caller": ["warn"],
      // require or disallow strict mode directives
      // "strict"

      /**
       * Variables
       */
      // disallow initializing variables to undefined
      "no-undef-init": ["warn"],
      // disallow unused variables
      "no-unused-vars": ["warn", {
          "args": "none",
          "caughtErrors": "none",
      }],

      /**
       * CommonJS
       */
      // add: disallow string concatenation with __dirname and __filename
      "no-path-concat": ["warn"],

      /**
       * Stylistic
       */
      // require or disallow semicolons instead of ASI
      "semi": ["warn", "always"],
      // add: enforce consistent spacing between keys and values in object literal properties
      "key-spacing": ["warn"],
      // add: enforce consistent spacing before function definition opening parenthesis
      "space-before-function-paren": ["warn", "never"],
      // add: enforce consistent spacing after the // or /* in a comment
      "spaced-comment": ["warn"],


        /**
        * ES6
        */
        // add: enforce consistent spacing before and after the arrow in arrow functions
        "arrow-spacing": ["warn"],
        // add: enforce consistent spacing around * operators in generator functions
        "generator-star-spacing": ["warn"],
        // add: require template literals instead of string concatenation
        "prefer-template": ["warn"],

      /**
       * React hook
       */
      // Checks rules of Hooks
      // "react-hooks/rules-of-hooks": "error",
      // Checks effect dependencies
      // "react-hooks/exhaustive-deps": "warn"
    },
};
