public class PeakInternetTraffic {
    // Bitonic Array
    public static int findPeakTraffic(int[] arr) {
        int left = 0;
        int right = arr.length-1;

        while (left <= right) {
            int mid = (left + right) >> 1;
            if(mid < arr.length-1 && arr[mid] > arr[mid+1]) {
                right = mid-1;
            }   else {
                left = mid + 1;
            }
        }
        return  left == arr.length ? left - 1 : left;
    }
    public static void main(String[] args) {
        int[] arr = {50, 40, 30, 20, 10};
        System.out.println(findPeakTraffic(arr));
    }
}
