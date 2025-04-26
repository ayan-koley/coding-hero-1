
public class WindowCash {
    public static int maxCashInWindow(int[] cash, int k) {
    int n = cash.length;
    if(n < k) return -1;
    int window_cash = 0;
  
    for(int i=0; i < k; i++) {
      window_cash += cash[i];
    }
    int maxCash = window_cash;
  
    for(int i=1; i <= n - k; i++) {
      window_cash -= cash[i-1];
      window_cash += cash[i+k-1];
      maxCash = Math.max(maxCash, window_cash);
    }
    return maxCash;
}
    public static void main(String[] args) {
        int[] arra = {10, 20, 30, 40, 50, 60};
        System.out.println(maxCashInWindow(arra, 3));
    }
}
