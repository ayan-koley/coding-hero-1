function solve(input) {
    if(isNaN(input) || input < 0 || input > 100) {
        return "Invalid";
    }
    if(input >= 90) return "A";
    else if(input >= 80 && input <= 89) return "B";
    else if(input >= 70 && input <= 79) return "C";
    else if(input >= 60 && input <= 69) return "D";
    return "F";
  }