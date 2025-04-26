function solve(x, powers) {
    // const [x, powers] = input;
    const memo = {};
  
    function power(n) {
        if(n === 0) {
            memo[n] = 1;
            return 1;
        }
        if(n === 1) {
            memo[n] = x;
            return x;
        }
        let total_power;

        if(memo[n] !== undefined) {
            return memo[n];
        }
        let half = power(Math.floor(n/2));

        if(n % 2 !== 0) {
            total_power = half * half * x;
        }   else {
            total_power = half * half;
        }
        memo[n] = total_power;
        return total_power;
    }
  
    return powers.map(power);
  }

  console.log(solve(2, [2, 3, 4]));