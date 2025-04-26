public class kthmissingPositiveNum {
    public static int findKthMissing(int[] arr, int k) {
        if(arr[0] > k) {
            return k;
        }
        int left = 0, right = arr.length;
        while (left < right)  {
            int mid = (left + right) >> 1; // devide by 2
            if(arr[mid] - mid - 1 >= k) {
                right = mid;
            }   else {
                left = mid+1;
            }
        }
        // how many number missing from this range (arr[left-1] - (left-1) - 1)
        return arr[left-1] + k - (arr[left-1] - (left-1) - 1);
    }
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 7, 11};
        System.out.println(findKthMissing(arr, 5));
    }
    // article link : - (https://algo.monster/liteproblems/1539)
}