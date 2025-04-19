function solve(input) {
    let sum = 0;
    for(const val of input) {
        sum += val % 2 == 0 && val;
    }
  return sum;
}