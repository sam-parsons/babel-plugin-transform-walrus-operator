let x = 0;
if (function (x) {
  if (typeof x === 'undefined') throw new Error();
  x = 2;
  return x;
}(x)) alert();
