public class ReverseALinkedList {
    static class ListNode {
        int value;
        ListNode next;
        ListNode(int x) { value = x; }
    }

    public static ListNode reverseLinkedList(ListNode head) {
        ListNode p = null;
        ListNode c = head;
        while (c != null) {
            ListNode n = c.next;
            c.next = p;
            p = c;
            c = n;
        }
        return p;
    }
}
