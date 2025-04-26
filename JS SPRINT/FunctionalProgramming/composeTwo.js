function compose(f, g) {
  
    function engine(x) {
        return f(g(x));
    }
    return engine;
}


console.log(compose(
    (x) =>  x*x,
    (x) =>  x - 5
)(7));

// function fn1(x){
//     return x * x;
// }
// function fn2(x) {
//     return x -5;
// }