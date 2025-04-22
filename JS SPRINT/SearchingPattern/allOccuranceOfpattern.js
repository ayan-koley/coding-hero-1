function solve(text, pattern) {
    // const { text, pattern } = input;
    const occurance = [];
    let n = text.length;
    let m = pattern.length;
    for(let i=0; i <= n - m; i++) {
        if(text.slice(i, i+m) === pattern) {
            occurance.push(i);
        }
    }
    return occurance;
}

console.log(solve("aaaa", "aa"));