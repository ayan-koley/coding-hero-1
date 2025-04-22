function solve(input = []) {
    let n = input.length;
    if(n < 1) return [];
    const result = [];
    const two_d = [];
    // sort the array
    const reference = input.sort();
    // store freq
    for(let i=0; i < n; i++) {
        let cnt = 0;
        while(i < n-1 && reference[i] === reference[i+1]) {
            cnt++;
            i++;
        }
        const temp = [cnt, reference[i]];
        two_d.push(temp);
    }
    // sort two d array based on freq(descendig order) || if equal so sort 
    // on ascending based on value
    const sortedFreq = two_d.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1] - b[1];
        }   else {
            return b[0] - a[0];
        }
    })

    for(let i=0; i < sortedFreq.length; i++) {
        let j = 0;
        let cnt = sortedFreq[i][0];
        let element = sortedFreq[i][1];
        while(j <= cnt) {
            result.push(element);
            j++;
        }
    }
    return result;
}

console.log(solve([4, 4, 1, 2, 2, 2, 3]));