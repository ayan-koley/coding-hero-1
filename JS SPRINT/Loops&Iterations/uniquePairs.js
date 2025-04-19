function solve(input) {
    // remove last index for input
    let lists = input.splice(0,input.length-1);;
    const sum = input[input.length-1];
    const set = new Set();
    lists = lists[0];
    // sort the array
    for(let i=0; i < lists.length; i++) {
        let temp_sum = sum - lists[i];
        for(let j=i+1; j < lists.length; j++) {
            if(temp_sum === lists[j]) {
                let pair = [lists[i], lists[j]];
                let key = pair.join(',');
                if(!set.has(key)) {
                    set.add(key, true);
                }
            }
        }
    }
    let result = [];
    for(const[key, value] of set.entries()) {
        result.push(key.split(',').map(Number));
    }
    return result;
  }

  solve([[3, 3, 3], 6]);