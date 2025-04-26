import java.util.PriorityQueue;

public class kthClosestDistance {
    static class Pair {
        int[] arr = new int[2];
        int distance;
        public Pair(int[] arr, int distance) {
            this.arr = arr;
            this.distance = distance;
        }
    }
    public static int[][] kClosest(int[][] points, int k) {
        PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> a.distance - b.distance);
        for(int[] val : points) {
            int distance = (int)( Math.pow(val[0], 2) + Math.pow(val[1], 2));
            pq.add(new Pair(val, distance));
        }
        int[][] result = new int[k][2];
        for(int i=0; i < k; i++) {
            Pair key_value = pq.poll();
            result[i][0] = key_value.arr[0];
            result[i][1] = key_value.arr[1];
        }
        return result;
    }

    // =========================== Optimized Version =============================
    public static int[][] kClosest2(int[][] points, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> 
        Integer.compare(distance(b), distance(a)));

        for(int[] point : points) {
            pq.offer(point);
            if(pq.size() > k) {
                pq.poll();
            }
        }

        int[][] result = new int[k][2];
        for(int i=0; i < k; i++) {
            int[] temp = pq.poll();
            result[i][0] = temp[0];
            result[i][1] = temp[1];
        }
        return result;

    }
    public static int distance(int[] point) {
        return point[0]*point[0] + point[1] * point[1];
    }
    public static void main(String[] args) {
        int[][] arr = {{1, 3}, {-2, 2}};
        int[][] result = kClosest2(arr, 2);
        for(int[] res : result) {
            System.out.println(res[0] + " " + res[1]);
        }
    }
}