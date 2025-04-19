function solve(input) {
    let x = 0;
    let y = 0;
    for(const val of input) {
        if(val === "N") {
            y += 1;
        }   else if(val === "S") {
            y -= 1;
        }   else if(val === "E") {
            x += 1;
        }   else {
            x -= 1;
        }
    }
    return x == 0 && y == 0 ? true : false;
}

console.log(solve(["N", "S", "W", "E"]))