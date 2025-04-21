String.prototype.myIncludes = function(substr) {
    let sub_length = substr.length;
    
    if(this.length === 0 && sub_length === 0) return true;
    if(sub_length === 0) return false;

    for (let i = 0; i < this.length; i++) {
        if(this.slice(i, i+sub_length) === substr) {
            return true;
        }
    }
    return false;
};