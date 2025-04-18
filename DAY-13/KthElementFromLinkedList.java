import java.util.*;
public class KthElementFromLinkedList {
    static class ListNode {
        int value;
        ListNode next;
        ListNode(int x) { value = x; }
    }

    public static int findKthFromEnd(ListNode head, int k) {
        List<Integer> ds = new LinkedList<>();
        ListNode t = head;
        while (t != null) {
            ds.add(t.value);
            if(ds.size() > k) {
                ds.remove(0);
            }
            t = t.next;
        }
        return ds.size() == k ? ds.get(0) :  -1;
    }
    public static void main(String[] args) {
        
    }
}
