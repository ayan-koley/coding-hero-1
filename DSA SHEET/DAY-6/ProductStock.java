import java.util.*;

public class ProductStock {
    public static List<Integer> sol(int n, List<Integer> items) {
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < items.size(); i++) {
            if (items.get(i) % 2 == 0) {
                result.add(items.get(i));
            }
        }
        for (int i = 0; i < items.size(); i++) {
            if (items.get(i) % 2 != 0) {
                result.add(items.get(i));
            }
        }
        return result;
    }   
    public static void main(String[] args) {
        List<Integer>list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        
        sol(5, list);
    }
}
