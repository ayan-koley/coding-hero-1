function interleaveQueue(queue) {
    const result = [];
    let mid = queue.length / 2;
    for(let i=0; i < mid; i++) {
        result.push(queue[i]);
        result.push(queue[i+mid]);
    }
    return result;
}