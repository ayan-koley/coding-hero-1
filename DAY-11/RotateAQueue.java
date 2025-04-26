import java.util.*;
public class RotateAQueue {
    public static List<Integer> rotateQueue(Queue<Integer> q, int k) {
        while (k-- > 0) {
            q.add(q.poll());
        }
        List<Integer> ans = new ArrayList<>();
        ans.addAll(new ArrayList<>(q));
        return ans;
    }
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(10);
        q.add(20);
        q.add(30);
        q.add(40);
        q.add(50);
        System.out.println(rotateQueue(q, 2));
    }
}
