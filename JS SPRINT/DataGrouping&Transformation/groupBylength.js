function solve(input) { 
    const result = {};
    
    for(const name of input) {
        let length = name.length;
        if(result[length]) {

            const names = result[length];
            names.push(name);
            result[length] = names;

        }   else {
            
            result[length] = [name];
        }
    }
    return result;
}


console.log(solve(["banana", "apple", "readyhojana", "banaan"]));
