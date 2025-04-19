function solve(input) {
    return recursion(input, 1);
}
function recursion(input, depth) {
    if(!Array.isArray(input)) {
        return input * depth;
    }

    let sum = 0;
    for(const val of input) {
        if(Array.isArray(val)) {
            sum += recursion(val, depth+1);
        }   else {
            sum += recursion(val, depth);
        }
    }
    return sum;
}

console.log(solve([1, [2, [3, 4, [5]]]]));