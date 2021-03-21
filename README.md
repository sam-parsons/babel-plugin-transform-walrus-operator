# babel-plugin-transform-walrus-operator

> compile the walrus operator to an IIFE

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
y = func(x);
const arr = [y, y ** 2, y ** 4, y ** 6];
``` 
can become
```js
const arr = [y := func(x), y ** 2, y ** 4, y ** 6]
``` 

## Babel Setup

<!-- 1. fork <a src="https://github.com/babel/babel">babel</a> to your github account
2. clone your forked copy to your machine
```bash
git clone https://github.com/sam-parsons/babel.git
```
```bash
$ cd babel
$ make bootstrap
$ make build
``` -->

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
