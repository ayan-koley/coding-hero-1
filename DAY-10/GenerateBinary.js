function generateBinaryNumbers(n) {
    const result = [];
    if(n == 0) return result;
    const q = ["1"];
    while(n-- > 0) {
        const shift = q.shift();
        result.push(shift);
        q.push(shift + "0");
        q.push(shift + "1");
    }
    return result;
}
console.log(generateBinaryNumbers(5));