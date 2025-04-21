Array.prototype.myFilter = function(callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
};

const arr = [1, 2, 3];
const result = arr.myFilter((val, i, array) => val > 2);
console.log(result);