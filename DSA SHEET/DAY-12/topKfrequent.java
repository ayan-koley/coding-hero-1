import java.util.*;
public class topKfrequent {
    static class Pair {
        int key;
        int count;
        public Pair(int key, int count) {
            this.key = key;
            this.count = count;
        }
    }
    public static List<Integer> topKfrequentNumber(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int val : nums) {
            map.put(val, map.getOrDefault(val, 0) + 1);
        }
        PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> b.count - a.count);
        for(Integer key : map.keySet()) {
            pq.add(new Pair(key, map.get(key)));
        }
        List<Integer> list = new ArrayList<>();
        for(int i=0; i < k; i++) {
            list.add(pq.poll().key);
        }
        return list;
    }
    public static void main(String[] args) {
        System.out.println(topKfrequentNumber(new int[]{1, 1, 1, 2, 2, 3}, 2));
    }
}
