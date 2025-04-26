import java.util.PriorityQueue;

public class kthSmallestInMatrix {
    public static int kthSmallest(int[][] matrix, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for(int[] arr : matrix) {
            for(int val : arr) {
                pq.add(val);
                if(pq.size() > k) {
                    pq.poll();
                }
            }
        }
        return pq.peek();
    }
    public static void main(String[] args) {
        int[][] arr = {{1, 2}, {1, 3}};
        System.out.println(kthSmallest(arr, 2));
    }
}
