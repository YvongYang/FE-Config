module.exports = {
  presets: [
    ["@babel/preset-env", {
      // loose: true,
      modules: false,
      useBuiltIns: "usage",
      corejs: 3,
      exclude: [
        "@babel/plugin-transform-regenerator"
      ]
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"],
  ],
  plugins: [
    // a ?? b
    ["@babel/plugin-proposal-nullish-coalescing-operator"],
    // a?.b
    ["@babel/plugin-proposal-optional-chaining"],
    // decorators
    ["@babel/plugin-proposal-decorators"],
    // class {#a () {}}
    ["@babel/plugin-proposal-private-methods"],
    // class {a; #a; static a; static #a;}
    ["@babel/plugin-proposal-class-properties"],
    // import()
    ["@babel/plugin-syntax-dynamic-import"],
    // re-use helpers
    ["@babel/plugin-transform-runtime"],
  ]
};
