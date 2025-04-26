class Pair {
    constructor(key, count) {
        this.key = key;
        this.count = count;
    }
}
function topKFrequent(nums, k) {
    let freq = new Map();
    for(val of nums) {
        freq.set(val, (freq.get(val) || 0) + 1);
    }
    let pairs = [];
    for(const[key, count] of freq) {
        console.log(" key is ", key, " count is ", count);
        pairs.push({key, count});
    }
    pairs.sort((a, b) => b.count - a.count);
    let result = [];
    for(let i=0; i < k; i++) {
        result.push(pairs[i].key);
    }
    return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));