
public class MergeTwoSortedLL {
    static class ListNode {
        int value;
        ListNode next;
        ListNode(int x) {
            this.value = x;
            this.next = null;
        }
    }

    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode l = list1;
        ListNode r = list2;
        ListNode result = new ListNode(0);
        ListNode travel = result;

        while (l != null && r != null) {
            if(l.value > r.value) {
                travel.next = r;
                travel = travel.next;
                r = r.next;
            }   else {
                travel.next = l;
                travel = travel.next;
                l = l.next;
            }
        }
        if(l != null) {
            travel.next = l;
            travel = travel.next;
        }
        if(r != null) {
            travel.next = r;
            travel = travel.next;
        }
        return result.next;
    }
    public static void main(String[] args) {
        ListNode list1 = new ListNode(5);
        list1.next = new ListNode(10);
        list1.next.next = new ListNode(15);
        ListNode list2 = new ListNode(1);
        list2.next = new ListNode(2);
        list2.next.next = new ListNode(3);
        ListNode list3 = mergeTwoLists(list1, list2);
        while (list3 != null) {
            System.out.println(list3.value);
            list3 = list3.next;
        }
    }
}
