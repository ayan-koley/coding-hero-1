import java.util.*;

public class StackByQueue {
    static class StackUsingQueues {
        Queue<Integer> q1;
        Queue<Integer> q2;

        public StackUsingQueues() {
            q1 = new LinkedList<>();
            q2 = new LinkedList<>();
            
        }
        // that take 0(n) time to push
        public void push(int x) {
            q2.add(x);
            while (!q1.isEmpty()) {
                q2.add(q1.poll());
            }
            Queue<Integer> temp = q1;
            q1 = q2;
            q2 = temp;
        }
        // that take 0(1) tc
        public void push2(int x) {
            q1.add(x);
        }
        // that take 0(n) tc
        public int pop2() {
            if(q1.isEmpty()) return -1;
            while (q1.size() > 1) {
                q2.add(q1.poll());
            }
            int top = q1.poll();
            Queue<Integer> temp = q1;
            q1 = q2;
            q2 = temp;
            return top;
        }

        public int pop() {
            return q1.isEmpty() ? -1 : q1.poll();
        }

        public int top() {
            return q1.isEmpty() ? -1 : q1.peek();
        }

        public boolean isEmpty() {
            return q1.size() == 0;
        }

        public int size() {
            return q1.size();
        }
    }
    public static void main(String[] args) {
        
    }
}