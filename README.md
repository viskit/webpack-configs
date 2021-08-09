# webpack-configs

webpack configs for build, start and library.

### Install

    npm install -g @viskit/webpack-configs

### Output library

Create `tsconfig.json` and create `src/index.ts`

```json
{
  "extends": "@viskit/webpack-configs/tsconfig.base.json"
}
```

package.json

```json
"scripts": {
    "build" : "webpack"
}
```

webpack.config.js

```js
module.exports = require("@viskit/webpack-configs").configs.lib
```


### Output build

Create `tsconfig.json` and create `src/index.ts`

```json
{
  "extends": "@viskit/webpack-configs/tsconfig.base.json"
}
```

package.json

```json
"scripts": {
    "build" : "webpack"
}
```

webpack.config.js

```js
module.exports = require("@viskit/webpack-configs").configs.build
```


### webpack serve 

Create `tsconfig.json` and create `src/index.ts`

```json
{
  "extends": "@viskit/webpack-configs/tsconfig.base.json"
}
```

package.json

```json
"scripts": {
    "build" : "webpack"
}
```

webpack.config.js

```js
module.exports = require("@viskit/webpack-configs").configs.start
```

