function solve(input) {
	
  return deeplySearch(input[0], input[1]);
}
function deeplySearch(a, b) {
    // point same refrence or not
    if(a === b ) {
        return true;
    }
    // check does any one null or another type of ds or not
    if(typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }
    // store all keys 
    const keysA  = Object.keys(a);
    const keysB = Object.keys(b);
    // check keys length are equal or not
    if(keysA.length !== keysB.length) {
        return false;
    }
    // check all keys are same or not
    for(const key of keysA) {
        if(!keysB.includes(key)) {
            return false;
        }
        // recursive call for value of this key
        if(!deeplySearch(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

console.log(solve([{"a": 1}, {"a": 2}]));