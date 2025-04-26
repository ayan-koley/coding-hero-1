import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class SortStack {
    public static List<Integer> sortStack(List<Integer> stack) {
        Stack<Integer> sortedStack = new Stack<>();

        // Process each element in the original stack
        while (!stack.isEmpty()) {
            int current = stack.remove(stack.size() - 1); 
            
            while (!sortedStack.isEmpty() && sortedStack.peek() > current) {
                stack.add(sortedStack.pop());
            }
            sortedStack.push(current); 
        }

        List<Integer> result = new ArrayList<>();
        while (!sortedStack.isEmpty()) {
            result.add(sortedStack.pop());
        }

        return result;
    }
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(5);
        list.add(2);
        list.add(9);
        list.add(1);
        list.add(5);
        System.out.println(sortStack(list));
    }
}
