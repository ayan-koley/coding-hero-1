function solve(input) {
    let n = input.length;
    let i = 0;
    while(i < n) {
        let j = i+1;
        while(j < n && input.charAt(i) === input.charAt(j)) {
            j++;
        }
        if(i === (j-1)) {
            return input.charAt(i);
        }
        i = j;
    }
    return null;
}

console.log(solve("lleettccooddee"));