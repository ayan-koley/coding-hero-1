import java.util.*;
public class StackUsingQueue {
    static class StackUsingQueues {
        Queue<Integer> q1;
        Queue<Integer> q2;
        public StackUsingQueues() {
            q1 = new LinkedList<>();
            q2 = new LinkedList<>();
        }

        public void push(int x) {
            q2.add(x);
            while (!q1.isEmpty()) {
                q2.add(q1.poll());
            }
            Queue<Integer> temp = q1;
            q1 = q2;
            q2 = temp;
        }

        public int pop() {
            return this.isEmpty() ? -1 : q1.poll();
        }

        public int top() {
            return this.isEmpty() ? -1 : q1.peek();
        }

        public boolean isEmpty() {
            return q1.size() == 0;
        }

        public int size() {
            return q1.size();
        }
    }
}
