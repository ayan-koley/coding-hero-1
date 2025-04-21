String.prototype.myEndsWith = function(substr) {
    const str_length = this.length;
    const sub_length = substr.length;
    for (let i = 0; i < sub_length; i++) {
        if(this[str_length - sub_length + i] !== substr[i]) {
            return false;
        }
    }
    return true;
};