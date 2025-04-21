// Array.map((val, i, arr) => {})
Array.prototype.myMap = function(callback) {
    const temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this))
    }
    return temp;
};
