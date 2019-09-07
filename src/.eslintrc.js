/**
 * @ESLint
 */
module.exports = {
  "rules": {
    // add: disallow the use of console
    "no-console": ["warn", {
      "allow": ["warn", "error", "log", "info"]
    }],
  },
};
