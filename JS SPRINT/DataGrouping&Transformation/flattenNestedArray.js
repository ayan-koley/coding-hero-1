function solve(input) { 
    let result = [];
    solving(input, result);
    return result;  
}

function solving(arr, result) {
    if(!Array.isArray(arr)) {
        result.push(arr);
    }
    for(const val of arr) {
        if(Array.isArray(val)) {
            solving(val, result);
        }
        else result.push(val);
    }
}

console.log(solve([[1, 2], [3, 4], [5, [6, 7]]]));