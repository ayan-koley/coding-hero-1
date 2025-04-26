function solve(input) {
  const memo = {};

  function formatter(user) {
    const json_str = JSON.stringify(user);
    if(memo[json_str]) {
        return memo[json_str];
    }   
    return (memo[json_str] = `${user.name}, ${user.age} from ${user.city}`);
  }

  return input.map(formatter);
}

console.log(solve([{"name": "ayan", "age": 22, "city": "kolkata"}]))