import java.util.*;
public class TurnPicture {
    public static void rotate(List<List<Integer>> matrix) {
        int n = matrix.size();
        int[][] temp = new int[n][n];
        for(int i=0; i < n; i++) {
         for(int j=n-1; j >= 0; j--) {
             temp[i][j] = matrix.get(n-j-1).get(i);
         }
        }
        for(int i=0; i < n; i++) {
         for(int j=0; j < n; j++) {
             matrix.get(i).set(j, temp[i][j]);
         }
        }
         return;
     }
}
