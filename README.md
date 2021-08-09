# webpack-configs

webpack configs for build, start and library.

### Use

#### Step 0 install

    npm install @viskit/webpack-configs -D

#### Step 1 package.json scripts

```json
"scripts": {
  "start": "webpack serve --config node_modules/@viskit/webpack-configs/start.config.js",
  "build": "webpack --config node_modules/@viskit/webpack-configs/build.config.js",
  "build:lib": "webpack --config node_modules/@viskit/webpack-configs/lib.config.js"
}
```

#### Step 2 create src|start dir `tsconfig.json`

```json
{
  "extends": "@viskit/webpack-configs/tsconfig.base.json"
}
```

#### Step 3 create src|start dir `types.d.ts`

```ts
declare module "*.css";
```

# LICENSE

MIT