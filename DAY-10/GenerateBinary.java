import java.util.*;
public class GenerateBinary {
    public static List<String> generateBinaryNumbers(int n) {
        List<String> result = new ArrayList<>();
        if(n == 0) return result;
        Queue<String> q = new LinkedList<>();
        q.add("1");
        while (n-- > 0) {
            String data = q.poll();
            result.add(data);
            q.add(data + "0");
            q.add(data + "1");
        }
        return result;
    }
    public static void main(String[] args) {
        System.out.println(generateBinaryNumbers(5));
    }
}