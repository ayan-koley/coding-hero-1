function processQueries(n, marbles, queries) {
    if(n !== marbles.length) {
      return [];
    }
    const result = [];
    for(arr of queries) {
      let sum = 0;
      for(let i=arr[0]-1; i < arr[1]; i++) {
        sum += marbles[i];
      }
      result.push(sum);
    }
    return result;
  }