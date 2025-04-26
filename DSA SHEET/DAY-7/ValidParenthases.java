import java.util.Stack;

public class ValidParenthases {
    public static boolean isValidParentheses(String s) {
        int n = s.length();
        if(n < 2) {
            return false;
        }
        Stack<Character> st = new Stack<>();
        for(int i=0; i < n; i++) {
            char ch = s.charAt(i);
            if(ch == '(' || ch == '{' || ch == '[') {
                st.push(ch);
            }   else {
                if(st.isEmpty()) return false;
                char pop = st.pop();
                if(
                    (ch == ')' && pop != '(') ||
                    (ch == '}' && pop != '{') ||
                    (ch == ']' && pop != '[')
                ) {
                    return false;
                }
            }
        }
        return st.isEmpty();
    }
}
