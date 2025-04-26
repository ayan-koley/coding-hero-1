import java.util.*;
public class IntervalsQueue {
    public static List<Integer> interleaveQueue(Queue<Integer> q) {
        List<Integer> res = new ArrayList<>();
        if(q.size() % 2 != 0) return res; 
        Queue<Integer> q2 = new LinkedList<>();
        int i =0;
        while (i < q.size()) {
            q2.add(q.poll());
            i++;
        }
        while (!q.isEmpty() && !q2.isEmpty()) {
            res.add(q2.poll());
            res.add(q.poll());
        }
        return res;
    }
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(11);
        q.add(12);
        q.add(13);
        q.add(14);
        System.out.println(interleaveQueue(q));
    }
}
