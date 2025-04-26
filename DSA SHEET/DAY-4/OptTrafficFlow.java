
public class OptTrafficFlow {
    public static int maxTrafficFlow(int[] trafficFlow, int k) {
        int n = trafficFlow.length;
        if(k > n) return 0;
        int sum = 0;
        for(int i=0; i < k; i++) {
            sum += trafficFlow[i];
        }
        int maxSum = sum;
        for(int i=1; i <= n-k; i++) {
            sum -= trafficFlow[i-1];
            sum += trafficFlow[i+k-1];
            maxSum = Math.max(sum, maxSum);
        }
        return maxSum;
    }

}
