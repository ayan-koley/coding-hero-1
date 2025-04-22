// Your task is to implement this function
function makeCounter(start) {
    this.start = start;
    return () => {
        return this.start++;
    }
}

function makeCounter2(start) {
    const self = this;
    self.start = start;
    return function() {;
        return self.start++;
    }
}
