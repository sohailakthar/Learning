package CollectionsInJava;

import java.util.Arrays;
import java.util.List;

public class UsingStreamsAPI {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        int evenSum = 0;

        // Using streams to print each number
        evenSum = numbers.stream()
        .filter(n -> n % 2 == 0) // Filter even numbers
        .map(num -> num * 2) // Double each number
        .reduce(0, Integer::sum);

        System.out.println(evenSum);
    }
}
