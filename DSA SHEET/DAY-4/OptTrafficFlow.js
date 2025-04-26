function maxTrafficFlow(trafficFlow, k) {
    let n = trafficFlow.length;
    if(k > n) {
      return -1;
    }
    let sum = 0;
    for(let i=0; i < k; i++) {
      sum += trafficFlow[i];
    }
    let maxSum = sum;
    for(let i=1; i <= n-k; i++) {
      sum -= trafficFlow[i-1];
      sum += trafficFlow[i+k-1];
      maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}