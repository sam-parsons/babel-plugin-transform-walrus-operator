# babel-plugin-transform-walrus-operator

> compile the walrus operator ```:=``` to an IIFE

## About

<i>assignment statement</i>

- assigns 42 to x

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
becomes
```js
if (function (x) {
  if (typeof x === 'undefined') throw new Error();
  x = 2;
  return x;
}(x)) alert();
```

## Babel Setup

this plugin relies upon the ```:=``` token, it will have to be manually added to babel's parser

follow <a href="https://lihautan.com/creating-custom-javascript-syntax-with-babel/#fork-the-babel">Tan Li Hau's guide,</a> you will fork babel and add a token to the parser

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
