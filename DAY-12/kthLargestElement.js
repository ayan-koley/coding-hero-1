function findKthLargest(nums, k) {
    // Main algorithm: maintain a min-heap of size k
    let minHeap = [];
    // nums.sort((a, b) => b - a);
    for (const num of nums) {
      if (minHeap.length < k) {
        push(num);
      } else if (num > minHeap[0]) {
        pop(); // Remove smallest
        push(num); // Add new element
      }
    }
    
    // The root of the min-heap will be the kth largest element
    return minHeap[0];
  }

  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))