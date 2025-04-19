function solve(input) {
    const arr =[];
    for(val of input) {
        if(!arr.includes(val.item)) {
            arr.push(val.item);
        }
    }
    arr.sort();
    return arr;
  }

  console.log(solve([{name: 'avi', item: 'phone'}, 
    {name: 'ram', item: 'iphone'},
    {name: 'avi', item: 'abc'},]))