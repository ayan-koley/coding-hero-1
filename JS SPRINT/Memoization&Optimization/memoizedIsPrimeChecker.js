
function solve(input) {
    const memo = {};
  
    function isPrime(n) {
        if(n in memo) return memo[n];
        if(n < 2) return (memo[n] = false);
        if(n === 2) return (memo[n] = true);
        if(n % 2 === 0) return (memo[n] = false);

        for(let i=3; i < Math.sqrt(n); i+= 2) {
            if(n % i === 0) return (memo[n] = false);
        }

        return (memo[n] = true);
    }
  
    return input.map(isPrime);
  }