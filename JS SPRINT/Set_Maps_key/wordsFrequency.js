function solve(input) {
    const map = new Map();
    for(const str of input) {
        if(map.has(str)) {
            map.set(str, map.get(str) + 1);
        }   else {
            map.set(str, 1);
        }
    }    
    const obj = {};
    for(const [key, value] of map.entries()) {
        obj[key] = value;
    }
    return obj;
}

console.log(solve(["apple", "banana", "apple", "orange", "banana"]));