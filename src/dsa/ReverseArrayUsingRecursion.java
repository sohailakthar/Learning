package dsa;

import java.util.Arrays;

public class ReverseArrayUsingRecursion {
	public static void main(String[] args) {
		int[] arr = {1, 2, 3, 4, 5, 6};
		System.out.println("Before Reverse: " + Arrays.toString(arr));
		
		
		revArray(arr, 0, 5);
		
		System.out.println("After Reverse: " + Arrays.toString(arr));		
	}
	
	private static void revArray(int[] arr, int left, int right) {
		if(left >= right) return;
		
		int temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		
		revArray(arr, left+1, right-1);
	}
}
