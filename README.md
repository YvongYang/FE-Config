# Front-End Engineering Configuration
![FE Config](https://repository-images.githubusercontent.com/206890549/9aa3e580-d1bc-11e9-9711-e5a4ef0f2c88)

## ToDo
* [ ] prettier
* [ ] stylelint
* [ ] pm2

## Authoring Configuration
> __Preparation__

__[Git](Git)__
+	[x] [.gitattributes](.gitattributes)
+	[x] [.gitignore](.gitignore)
+	[x] [Husky](.huskyrc.js)

__[VSCode](VSCode)__
+	[x] [VSCode:extensions](.vscode/extensions.json)
+	[x] [VSCode:settings](.vscode/settings.json)

__[EditorConfig](EditorConfigEditorConfig)__
+	[x] [.editorconfig](.editorconfig)

__[nvm](nvm)__
+	[x] [nvm](.nvmrc)

__[npm](npm)__
+	[x] [npm](.npmrc)

## Building Configuration
> __build__

__[Babel](Babel)__
+	[x] [Babel](.babel.config.js)
+	[x] [Browserslist](.browserslistrc)

__[TypeScript](TypeScript)__
+	[x] [TypeScript](tsconfig.json)

__[webpack](webpack)__
+	[x] [webpack](webpack.config.js)

```sh
# Babel
npm i -D @babel/core
npm i -S core-js@3 @babel/runtime
npm i -D @babel/preset-env @babel/plugin-transform-runtime
npm i -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-decorators @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-nullish-coalescing-operator
# Typescript
npm i -D typescript @babel/preset-typescript
# webpack
npm i -D webpack webpack-cli webpack-dev-server webpack-merge
npm i -D babel-loader css-loader file-loader
npm i -D clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin
```

## Coding Configuration
> code

__[ESlint](ESlint)__
+	[x] [ESlint](.eslintrc.js)

__[stylelint](stylelint)__
+	[ ] [stylelint](.stylelintrc.js)

```sh
npm i -D husky
npm i -D eslint babel-eslint eslint-loader
npm i -D eslint-plugin-react @typescript-eslint/eslint-plugin
npm i -D stylelint postcss-loader
```

## Deploying Configuration
> CI && CD

+	[ ] __[PM2](server/ecosystem.config.js)__
+	[ ] __nginx__
+	[ ] __docker__
+	[x] __[travis](./travis.yml)__

## License
[MIT License](/LICENSE)

[Git]: https://github.com/git/git
[VSCode]: https://github.com/microsoft/vscode
[EditorConfig]: https://github.com/editorconfig/editorconfig-vscode
[nvm]: https://github.com/nvm-sh/nvm
[npm]: https://github.com/npm/cli

[Babel]: https://github.com/babel/babel
[TypeScript]: https://github.com/microsoft/TypeScript
[webpack]: https://github.com/webpack/webpack
