import java.util.*;

public class NextSmallrToLeft {
    public static List<Integer> previousSmallerElement(List<Integer> arr) {
        List<Integer> ans = new ArrayList<>();
        Stack<Integer> st = new Stack<>();
        st.push(-1);
        for(Integer val : arr) {
            while (!st.isEmpty() && st.peek() > val) {
                st.pop();
            }
            ans.add(st.peek());
            st.add(val);
        }
        return ans;
    }
}
