function kthSmallest(matrix, k) {
    const maxHeap = [];
    
    for (const row of matrix) {
        for (const val of row) {
            maxHeap.push(val);
            maxHeap.sort((a, b) => a - b);
            
            if (maxHeap.length > k) {
                maxHeap.pop();
            }
        }
    }
    
    return maxHeap[maxHeap.length-1]; 
}
let result = [[1, 5, 9], [10, 11, 13], [12, 13, 15]];
kthSmallest(result, 8);