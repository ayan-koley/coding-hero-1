import java.util.*;

public class DuplicateLLOrNot {
    
    static class ListNode {
        int value;
        ListNode next;

        ListNode(int x) {
            this.value = x;
            this.next = null;
        }
    }

    public static boolean detectCycle(ListNode head) {
        if(head == null) {
            return false;
        }
        List<ListNode> ds = new ArrayList<>();
        ListNode t = head;

        while (t != null) {
            if(ds.contains(t)) {
                return true;
            }
            ds.add(t);
            t = t.next;
        }
        return false;
    }
    public static void main(String[] args) {
        
    }
}