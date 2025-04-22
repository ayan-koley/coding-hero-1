function solve(input) {
    const result = input.filter(data => data.length >= 5);
    return result;
  }
  
console.log(solve(["name", "myname"]));