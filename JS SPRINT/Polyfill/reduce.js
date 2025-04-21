Array.prototype.myReduce = function(callback, initialValue) {
    let hasInitValue = initialValue !== undefined;
    let accumlator = hasInitValue ? initialValue : this[0];
    let startIndex = hasInitValue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumlator = callback(accumlator, this[i], i, this);
    }
    return accumlator;
};

const arr = [1, 2, 3];
console.log(arr.myReduce((acc, curr, i, array) => {
    console.log("accumlator is ", acc);
    console.log("current value is ", acc);
    return acc + curr;
}))