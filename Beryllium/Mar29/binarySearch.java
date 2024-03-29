public class BinarySearch {
 
    public static int binarySearchA(int[] arr, int key) {

        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int midVal = arr[mid];

            if (midVal < key)
                low = mid + 1;
            else if (midVal > key)
                high = mid - 1;
            else
                return mid; // key found
        }

        return -1; // key not found
    }

    public int binarySearchB(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
 
    public static void main(String a[]) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int key = 6;
        int indexA = binarySearchA(arr, key);
        int indexB = binarySearchB(arr, key);
        if (indexA != -1)
            System.out.println("Element " + key + " found at index " + indexA);
        else
            System.out.println("Element " + key + " not found");
        if (indexB != -1)
            System.out.println("Element " + key + " found at index " + indexB);
        else
            System.out.println("Element " + key + " not found");
    }
}
