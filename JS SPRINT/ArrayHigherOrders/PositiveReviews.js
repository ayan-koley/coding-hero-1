function solve(input) {
    const filtered = input.filter(r => r >= 3);
    if(filtered.length ==  0) return 0;
    const total =  filtered.reduce((a, b) => a + b, 0);
    return +(total / filtered.length).toFixed(2);
}

function solve2(input) {
    let result = 0;
    let count = 0;
    for(const rate of input) {
        if(rate >= 3) {
            result += rate;
            count += 1;
        }
    }
    return result > 0 ? (result / count).toFixed(2) : 0;
}