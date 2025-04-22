function solve(input) {
    const result = [];
    for(const val of input) {
        if(val % 2 === 0) {
            result.push(val*val);
        }
    }
    return result;
  }