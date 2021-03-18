let x = 0;
if (
  (() => {
    x = 2;
    return x;
  })()
)
  alert();
