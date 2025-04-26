function solve(a, b) {
	// const [a, b] = input;
    const set1 = new Set();
    const set2 = new Set();
    
    for(const val of a) {
        set1.add(val, 0);
    }
    for(const val of b) {
        set2.add(val, 0);
    }
    const result = [];
    for(const [key, _] of set1.entries()) {
        if(set2.has(key)) {
            result.push(key);
        }
    }
    return result;
}

console.log(solve([1, 2, 3], [2, 1, 0]));