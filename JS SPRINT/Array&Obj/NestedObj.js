function solve(input) {
    
    return flatternObj(input);
}
function flatternObj(obj, parent='', result = {}) {
    for(const [key, value] of Object.entries(obj)) {
        const newKey = parent ? `${parent}.${key}` : key;

        if(value && typeof value === 'object' && !Array.isArray(value)) {
            flatternObj(value, newKey, result);
        }   else {
            result[newKey] = value;
        }
    }
    return result;
}

const data = { a: { b: { c: 1 } } }
console.log((solve(data)));