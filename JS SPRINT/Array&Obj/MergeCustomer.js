function solve(input) {
    const map = new Map();
    for(val of input) {
        if(val.length > 0) {
          map.set(val[0].id, val[0].name);
        }
    }
    const result = [];
    for(val of map.entries()) {
        const obj = {
            id: val[0],
            name: val[1]
        }
        result.push(obj);
    }
    return result;
  }
  console.log(solve([[], [], [{id: 3, name: "cara"}]]));