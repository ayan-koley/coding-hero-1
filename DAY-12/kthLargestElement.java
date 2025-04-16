import java.util.Collections;
import java.util.PriorityQueue;

public class kthLargestElement {
    public static int kthElement(int[] nums, int k) {
        int n = nums.length;
        if(n < k) {
            return -1;
        }
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for(int val : nums) {
            pq.add(val);
        }
        int i=1;
        while (i < k) {
            pq.poll();
            i++;
        }
        return pq.peek();
    }
    public static int kthElementOptimized(int[] nums, int k) {
        int n = nums.length;
        if(n < k) {
            return -1;
        }
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int val : nums) {
            pq.add(val);
            if(pq.size() > k) {
                pq.poll();
            }
        }
        return pq.peek();
    }
    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 5, 6, 4};
        System.out.println(kthElement(nums, 2));
        System.out.println(kthElementOptimized(nums, 2));
    }
}