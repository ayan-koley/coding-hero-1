function solve(input) {
    const map = new Map();
    for(const str of input) {
        const ch = str.charAt(0);
        if(map.has(ch)) {
            const existingElement = map.get(ch);
            existingElement.push(str);
            map.set(ch, existingElement);
        }   else {
            map.set(ch, [str]);
        }
    }
    
    const result = {};
    for(const [key, value] of map) {
        result[key] = value;
    }

    return result;
}

solve(["apple", "banana", "apple"]);