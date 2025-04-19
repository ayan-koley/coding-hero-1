function solve(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(const val of input.toString().toLowerCase()) {
        if(vowels.includes(val)) {
            count++;
        }
    }
    return count;
}

console.log(solve('ae'));