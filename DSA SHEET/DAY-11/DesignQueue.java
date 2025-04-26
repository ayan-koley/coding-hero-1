import java.util.*;
public class DesignQueue {
    static class MinQueue {
        ArrayList<Integer> q;
        ArrayList<Integer> min_q;
        public MinQueue() {
            q = new ArrayList<>();
            min_q = new ArrayList<>();
        }

        public void enqueue(int val) {
            q.add(val);
            if(min_q.isEmpty() || val <= min_q.getLast()) {
                min_q.add(val);
            }
        }

        public int dequeue() {
            return q.isEmpty() ? -1 : q.remove(0);
        }

        public int peek() {
            return q.isEmpty() ? -1 : q.getFirst();
        }

        public int getMin() {
            return min_q.isEmpty() ? -1 : min_q.getLast();
        }

        public boolean isEmpty() {
            return q.isEmpty();
        }
    }
    public static void main(String[] args) {
        MinQueue min = new MinQueue();
        min.enqueue(2);
        min.enqueue(3);
        System.out.println(min.getMin());
    }
}
