function rotateQueue(queue, k) {
    if(queue.length == 0) return [];
    let res = [];
    while(k-- > 0) {
        queue.push(queue.shift());
    }
    res = queue;
    return res;
}
rotateQueue([10, 20, 30, ], 2);