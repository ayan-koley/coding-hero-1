import java.util.*;
public class searchInBst {
    static class Node {
        int ID; // Cell ID
        String name; // Prisoner Name
        Node left, right;

        Node(int id, String name) {
            this.ID = id;
            this.name = name;
            this.left = null;
            this.right = null;
        }

        Node() {
            this.ID = -1;
            this.name = "";
            this.left = null;
            this.right = null;
        }

        Node(int id, String name, Node left, Node right) {
            this.ID = id;
            this.name = name;
            this.left = left;
            this.right = right;
        }
    }

    // Function to check if Akash is in his cell
    public static String check(Node root, int cellId) {
        // If the tree is empty, Akash is not in his cell
        if (root == null) {
            return "Wrong Jail";  // No such cell found in the tree
        }

        // If we find the cellId in the tree
        if (root.ID == cellId) {
            if (root.name.equals("Akash")) {
                return "Help!!!";  // Akash is in his cell
            } else {
                return "Hurrah!!!";  // Cell found, but Akash is not there
            }
        }

        // If the current node's ID is greater than the cellId, search in the left subtree
        if (root.ID > cellId) {
            return check(root.left, cellId);
        }

        // If the current node's ID is smaller than the cellId, search in the right subtree
        return check(root.right, cellId);
    }

    // Function to build the binary tree from the input list of pairs (ID, Name)
    public static Node getBinaryTree(List<Pair<Integer, String>> arr) {
        if (arr.isEmpty()) return null;

        Queue<Node> queue = new LinkedList<>();
        Node root = new Node(arr.get(0).getKey(), arr.get(0).getValue());
        queue.add(root);

        int idx = 1;

        while (idx < arr.size()) {
            Node curr = queue.poll();

            // Check left child
            if (arr.get(idx).getKey() == -1) {
                curr.left = null;
            } else {
                curr.left = new Node(arr.get(idx).getKey(), arr.get(idx).getValue());
                queue.add(curr.left);
            }
            idx++;

            // Check right child
            if (idx < arr.size() && arr.get(idx).getKey() == -1) {
                curr.right = null;
            } else if (idx < arr.size()) {
                curr.right = new Node(arr.get(idx).getKey(), arr.get(idx).getValue());
                queue.add(curr.right);
            }
            idx++;
        }

        return root;
    }


    // Helper class to store pairs
class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }
}

}

