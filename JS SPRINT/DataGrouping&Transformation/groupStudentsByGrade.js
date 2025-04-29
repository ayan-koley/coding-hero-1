function solve(input) { 
    let result = {};
    
    for(const {name, grade} of input) {
        if(result[grade] !== undefined) {
            let name_arr = result[grade];
            name_arr.push(name);
            result[grade] = name_arr;
        }   else {
            result[grade] = [name];
        }
    }
    return result;
}

solve([{"name":"John","grade":5},{"name":"Eve","grade":4},{"name":"Alice","grade":4},{"name":"Bob","grade":5},]);