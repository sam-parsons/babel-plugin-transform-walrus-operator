[npm]: https://img.shields.io/npm/v/babel-plugin-transform-walrus-operator
[npm-url]: https://www.npmjs.com/package/babel-plugin-transform-walrus-operator
[size]: https://packagephobia.now.sh/badge?p=babel-plugin-transform-walrus-operator
[size-url]: https://packagephobia.now.sh/result?p=babel-plugin-transform-walrus-operator

[![npm][npm]][npm-url]
[![size][size]][size-url]
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)


# babel-plugin-transform-walrus-operator

> compile the walrus operator ```:=``` to an IIFE

## About

<i>assignment statement</i>

- assigns 42 to x
- returns undefined

```js
x = 42;
```

<i>assignment expression</i>

- assigns 42 to x
- returns 42

```js
(x := 42)
```

<hr>

#### <i>Example use case</i>

```js
y = func(x);
const arr = [y, y ** 2, y ** 4, y ** 6];
``` 
can become
```js
const arr = [y := func(x), y ** 2, y ** 4, y ** 6]
``` 

<hr>

#### <i>Transformation</i>

```js
if (x := 2) alert();
```
generally becomes
```js
if ((function (x) {
  if (typeof x === 'undefined') throw new Error();
  x = 2;
  return x;
})(x)) alert();
```

## Babel Setup

this plugin relies upon the ```:=``` token, it will have to be manually added to babel's parser

follow <a href="https://lihautan.com/creating-custom-javascript-syntax-with-babel/#fork-the-babel">Tan Li Hau's guide,</a> you will fork babel and add a token to the parser.  see my <a href="https://github.com/sam-parsons/babel/commit/b28c29c7d9d1bd1d518ff53b68c7697ceb86cd1b">babel fork commit</a>

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
