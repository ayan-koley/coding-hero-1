function isDeepEqualArray(arr1, arr2) {
    return deepEqualArray(arr1, arr2);
}

function deepEqualArray(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        const val1 = arr1[i];
        const val2 = arr2[i];

        if(Array.isArray(val1) && Array.isArray(val2)) {
            if(!deepEqualArray(val1, val2)) return false;
        }   else if (typeof val1 === 'object' && typeof val2 === 'object'){
            if(!deepEqualObj(val1, val2)) return false;
        }   else {
            if(val1 !== val2) return false;
        }
    }
    return true;
}
function deepEqualObj(obj1, obj2) {
    if(obj1 === null || obj2 === null) return obj1 === obj2;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length ) return false;

    for(let key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        if(Array.isArray(val1) && Array.isArray(val2)) {
            if(!deepEqualArray(val1, val2)) return false;
        }   else if (typeof val1 === 'object' && typeof val2 === 'object'){
            if(!deepEqualObj(val1, val2)) return false;
        }   else {
            if(val1 !== val2) return false;
        }
    }

    return true;
}