function solve(input) {
    const result = {};
    for(val of input) {
        if(!result[val]) {
            result[val] = 1;
        }   else {
            result[val] = result[val] + 1;
        }
    }
    return result;
}
console.log(solve(["apple", "banana", "apple"]));