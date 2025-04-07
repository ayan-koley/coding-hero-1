
public class TrainSeating {
    public static int findUniqueNumber(int[] nums) {
        int res = 0;
        for(int val : nums) {
            res ^= val;
        }
        return res;
    }
}
