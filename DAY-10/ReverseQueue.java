import java.util.*;
public class ReverseQueue {
    public static List<Integer> reverseQueue(Queue<Integer> q) {
        Stack<Integer> stc = new Stack<>();
        List<Integer> ans = new ArrayList<>();
        while (!q.isEmpty()) {
            stc.add(q.poll());
        }
        while (!stc.isEmpty()) {
            ans.add(stc.pop());
        }
        return ans;
    }
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(1);
        q.add(2);
        q.add(3);
        System.out.println(reverseQueue(q));
    }
}
