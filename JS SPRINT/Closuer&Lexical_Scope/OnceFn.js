// Your task is to implement this function
function once(fn) {
    let status = false;
    let result;
    return function(...args) {
        if(!status) {
            status = true;
            result = fn.apply(this, args);
        }
        return result;
    }
}
