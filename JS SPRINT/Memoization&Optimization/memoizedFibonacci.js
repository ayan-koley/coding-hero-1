function solve(input) {
    const memo = {};
  
    function fib(n) {
        if(n === 0 || n === 1) {
            memo[n] = n;
            return n;
        }
        if(memo[n] !== undefined) {
            return memo[n];
        }
        let result = fib(n-1) + fib(n-2);
        memo[n] = result;
        return result;
    }
  
    return fib(input);
  }

  console.log(solve(10));