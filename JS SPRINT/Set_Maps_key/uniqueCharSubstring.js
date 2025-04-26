function solve(input) {
    const set = new Set();
    let maxLen = 0;
    let left = 0;
    let right = 0;
    for(; right < input.length; right++) {
        while(set.size > 0 && set.has(input[right])) {
            set.delete(input[left]);
            left++;
        }
        set.add(input[right]);

        if(right - left + 1 > maxLen) {
            maxLen = right - left + 1;
        }
    }
    return maxLen
}

console.log(solve("abcabcbb"));