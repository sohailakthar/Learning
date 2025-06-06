package CollectionsInJava;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class SortUsingComparator {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(2623, 6465, 1332, 7645, 8128, 2621, 7533, 2374);

        // Sort the list in ascending order of the last digit
        Collections.sort(numbers, (a, b) -> {
            if(a%10 > b%10)
                return 1;
            else
                return -1;
        });

        // Print the sorted list
        System.out.println(numbers);
    }
}