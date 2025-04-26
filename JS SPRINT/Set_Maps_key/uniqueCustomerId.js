function solve(input) {
    const set = new Set();
    for(const val of input) {
        set.add(val, 0);
    }
    const array = [];
    for(const [key, value] of set.entries()) {
        array.push(key);
    }
    return array.sort((a, b) => a - b);
}

// important part that sort() method convert array value into string 
// check based on UTF-16 code

console.log(solve([100, 99, 101, 100, 101, 99]));