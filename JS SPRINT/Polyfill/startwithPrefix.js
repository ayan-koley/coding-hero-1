String.prototype.myStartsWith = function(substr) {
    for (let i = 0; i < substr.length; i++) {
        if(this[i] !== substr[i]) {
            return false;
        }
    }
    return true;    
};
  