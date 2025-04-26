function sum(x) {
    // break condition
    if(x === null) {
        return sum.total;
    }
    // i can store as '.' operator because function are object in js
    if(typeof sum.total === 'undefined') {
        sum.total = 0;
    }
    // calculate total
    sum.total += x;
    return sum;
}
console.log([1, 2, 3, null].map((val) => {
    return sum(val);
}))