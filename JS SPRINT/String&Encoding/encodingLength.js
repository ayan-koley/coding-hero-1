function solve(input) {
	const map = new Map();
    for(const val of input) {
        if(map.has(val)) {
            map.set(val, map.get(val) + 1);
        }   else {
            map.set(val, 1);
        }
    }
    let result = "";
    for(const [key, value] of map.entries()) {
        result += key;
        result += value;
    }
  return result;
}

console.log(solve("aacbbccc"));