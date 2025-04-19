function solve(str) {
    let result = "";
    const vowles = ['a', 'e', 'i', 'o', 'u'];
    for(const [key, value] of Object.entries(str)) {
        for(const val of value) {
            if(!vowles.includes(val.toLowerCase())) {
                result += val;
            }
        }
    }
  return result;
}

console.log(solve({"str": "new value"}));