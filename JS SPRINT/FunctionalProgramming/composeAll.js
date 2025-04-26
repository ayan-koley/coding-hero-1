
function composeAll(funcs) {
   function getX(x) {
        for(let i=funcs.length - 1; i >= 0; i--) {
            x = funcs[i](x);
        }
        return x;
   }
   return getX;
}
  console.log(composeAll([
    (x) => x * 2,
    (x) => x + 10
  ])(5));