import java.util.Arrays;

public class MinimumTimeToCompletetask {
    public static int minTimeToComplete(int[] tasks, int maxInstances) {
        int left = 1;
        int right = Arrays.stream(tasks).max().getAsInt();
        int ans = -1;

        while (left <= right) {
            int mid = (left + right) >> 1;
            int instance = calInstance(tasks, mid);

            if(instance <= maxInstances) {
                ans = mid;
                right = mid-1;
            }   else {
                left = mid+1;
            }
        }
        return ans;
    }
    public static int calInstance(int[] tasks, int instance) {
        int sum = 0;
        for(int val : tasks) {
            sum += (val / instance);
            if(val % instance != 0) {
                sum += 1;
            }
        }
        return sum; 
    }
    public static void main(String[] args) {
        int[] tasks = {1000};
        System.out.println(minTimeToComplete(tasks, 1000));
    }
}
