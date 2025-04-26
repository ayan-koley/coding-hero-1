import java.util.*;

public class SquizeGame {
    public static List<Integer> processQueries(int n, int[] marbles, int[][] queries) {
        if(n > marbles.length) return new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        for(int[] arr : queries) {
            int sum = 0;
            for(int i=arr[0]-1; i < arr[1]; i++) {
                sum += marbles[i];
            }
            list.add(sum);
        }

        return list;
    }
}
