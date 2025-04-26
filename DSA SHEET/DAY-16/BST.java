import java.util.*;
public class BST {
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

    // Helper function to check if the tree is a BST
    public static boolean isBstHelper(Node root, int min, int max) {
        if (root == null) {
            return true; // An empty node is a valid BST
        }
        
        if (root.val <= min || root.val >= max) {
            return false; // Node's value is out of the allowed range
        }

        // Recursively check the left and right subtrees with updated ranges
        return isBstHelper(root.left, min, root.val) && isBstHelper(root.right, root.val, max);
    }

    // Main function to check if the tree is a BST
    public static boolean isBst(Node root) {
        // Call the helper function with the initial range as (-infinity, +infinity)
        return isBstHelper(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    // Function to build the binary tree
    public static Node getBinaryTree(List<Integer> arr) {
        if (arr.size() == 0) return null;

        Queue<Node> queue = new LinkedList<>();
        Node root = new Node(arr.get(0));
        queue.add(root);
        int idx = 1;

        while (idx < arr.size()) {
            Node curr = queue.poll();

            if (arr.get(idx) == -1) {
                curr.left = null;
            } else {
                curr.left = new Node(arr.get(idx));
                queue.add(curr.left);
            }
            idx++;

            if (idx < arr.size() && arr.get(idx) == -1) {
                curr.right = null;
            } else if (idx < arr.size()) {
                curr.right = new Node(arr.get(idx));
                queue.add(curr.right);
            }
            idx++;
        }

        return root;
    }
}
