function maxCashInWindow(cash, k) {
    let n = cash.length;
    if(n < k) return -1;
    let window_cash = 0;
  
    for(let i=0; i < k; i++) {
      window_cash += cash[i];
    }
    let maxCash = window_cash;
  
    for(let i=1; i <= n - k; i++) {
      window_cash -= cash[i-1];
      window_cash += cash[i+k-1];
      maxCash = Math.max(maxCash, window_cash);
    }
    return maxCash;
}
