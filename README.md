# babel-preset-pack

> Babel preset for Pack

## Install

```js
$ npm install --save-dev babel-preset-pack
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["pack"]
}
```

### Via CLI

```sh
$ babel script.js --presets pack
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["pack"]
});
```
