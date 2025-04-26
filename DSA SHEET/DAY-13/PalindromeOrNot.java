public class PalindromeOrNot {
    static class ListNode {
        int value;
        ListNode next;
        ListNode(int x) {
            this.value = x;
            this.next = null;
        }
    }
  
    public static boolean isPalindrome(ListNode head) {
        // find mid
        ListNode s = head;
        ListNode f = head;
        while (f != null && f.next != null) {
            s = s.next;
            f = f.next.next;
        }
        // reverse right part form mid
        ListNode p = null;
        ListNode c = s;
        while (c != null) {
            ListNode n = c.next;
            c.next = p;
            p = c;
            c = n;
        }
        // checking palindrome or not
        ListNode l = head;
        ListNode r = p;
        while (l != null && r != null) {
            if(l.value != r.value) {
                return false;
            }
            l = l.next;
            r = r.next;
        }
        return true;
    }
    public static void main(String[] args) {
        
    }
}