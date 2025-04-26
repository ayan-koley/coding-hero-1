function solve(input) {
    const memo = {};
  
    function factorial(n) {
        if(n == 1 || n === 0) {
            memo[1] = 1;
            return 1;
        }
        if(memo[n] !== undefined ) {
            return memo[n];
        }   
        let value = n * factorial(n-1);
        memo[n] = value;
        return value;

    }
  
    return input.map(factorial);
  }

  console.log(solve([5, 3, 5]));