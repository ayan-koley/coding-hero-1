function solve(input) {
    const map = new Map();
    for(const val of input) {
        for(const data of val.tags) {
            if(map.has(data)) {
                map.set(data, map.get(data) + 1);
            }   else {
                map.set(data, 1);
            }
        }
    }
    return Object.fromEntries(map);
}

console.log(solve([
    {
        title: "Post a",
        tags: [
            "js", "node"
        ]
    },
    {
        title: "Post b",
        tags: [
            "js", "node"
        ]
    },

]))