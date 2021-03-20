# babel-plugin-transform-walrus-operator

> Compile the walrus operator to an IIFE

## Example

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

- invoking a function once, producing a list of multiple values
- saves compute time by only calling func once

```js
[y := func(x), y ** 2, y ** 4, y ** 6]
```

## Babel Setup

tokenization of `:=` in babel required

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
