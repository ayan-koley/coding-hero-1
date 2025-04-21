String.prototype.myTrim = function() {
    let start = 0;
    let end = this.length-1;
    while(start <= end && this[start] === ' ') {
        start++;
    }
    while(end >= start && this[end] === ' ') {
        end--;
    }
    return this.slice(start, end+1);
};