function solve(input) {
    if(input < 0) return 0;
    if(input <= 5) return input * 1;
    else if(input > 5 && input <= 10) return input * 1.5;
    return input * 2;
  }
  console.log(solve(-1));