import java.util.*;
public class letThemlose {
    static class Node {
        int val;
        Node left, right;

        Node(int x) {
            this.val = x;
            this.left = null;
            this.right = null;
        }

        Node() {
            this.val = 0;
            this.left = null;
            this.right = null;
        }

        Node(int x, Node left, Node right) {
            this.val = x;
            this.left = left;
            this.right = right;
        }
    }

    public void convertBstToGst(Node root) {
        int[] sum = {0};
        f(root, sum);
    }

    public void f(Node root, int[] sum) {
        if (root == null) return;
        f(root.right, sum);
        root.val += sum[0];
        sum[0] = root.val;
        f(root.left, sum);
    }

    public boolean isSame(Node root1, Node root2) {
        if (root1 == null && root2 == null) return true;
        if (root1 == null || root2 == null) return false;
        if (root1.val != root2.val) return false;
        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    }

    public Pair<Node, Node> getBinaryTree(List<Integer> arr) {
        if (arr.size() == 0) return new Pair<>(null, null);

        Pair<Node, Node> ans;
        Queue<Node> qu = new LinkedList<>();

        Node root = new Node(arr.get(0));
        qu.add(root);

        ans = new Pair<>(root, null);

        int idx = 1;
        while (idx < arr.size()) {
            Node curr = qu.poll();

            if (arr.get(idx) == -1) {
                curr.left = null;
            } else {
                curr.left = new Node(arr.get(idx));
                qu.add(curr.left);
            }
            idx++;

            if (idx < arr.size()) {
                if (arr.get(idx) == -1) {
                    curr.right = null;
                } else {
                    curr.right = new Node(arr.get(idx));
                    qu.add(curr.right);
                }
                idx++;
            }
        }

        while (!qu.isEmpty()) qu.poll();

        root = new Node(arr.get(0));
        qu.add(root);
        idx = 1;

        ans = new Pair<>(ans.getKey(), root);

        while (idx < arr.size()) {
            Node curr = qu.poll();

            if (arr.get(idx) == -1) {
                curr.left = null;
            } else {
                curr.left = new Node(arr.get(idx));
                qu.add(curr.left);
            }
            idx++;

            if (idx < arr.size()) {
                if (arr.get(idx) == -1) {
                    curr.right = null;
                } else {
                    curr.right = new Node(arr.get(idx));
                    qu.add(curr.right);
                }
                idx++;
            }
        }

        return ans;
    }
}
