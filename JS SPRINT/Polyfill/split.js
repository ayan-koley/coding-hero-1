String.prototype.mySplit = function(separator) {
    let result = [];
    let temp = '';
    let i = 0;
   while(i < this.length) {
        if(this.slice(i, i + separator.length) === separator) {
            result.push(temp);
            temp = '';
            i += separator.length;
        }   else {
            temp += this[i];
            i++;
        }
    }
    result.push(temp);
    return result;
};

console.log("1--2--3".mySplit("--"));