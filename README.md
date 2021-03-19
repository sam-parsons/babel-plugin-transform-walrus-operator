# babel-plugin-transform-walrus-operator

> Compile the walrus operator to an IIFE

## Installation

```sh
$ npm install --save-dev babel-plugin-transform-walrus-operator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-walrus-operator"]
}
```

### Via CLI

```sh
$ babel --plugins transform-walrus-operator script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['transform-walrus-operator'],
});
```

# License

MIT

```

```
