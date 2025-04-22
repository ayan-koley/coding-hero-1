function solve(input) {
    const map = new Map();
    for(const vote of input) {
        if(map.has(vote)) {
            map.set(vote, map.get(vote) + 1);
        }   else {
            map.set(vote, 1);
        }
    }
    return Object.fromEntries(map);
  }
