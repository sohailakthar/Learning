package CollectionsInJava;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class UsingForEach {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

        // Using forEach with a lambda expression
        numbers.forEach(num -> System.out.println(num));

        Consumer<Integer> consumer = new Consumer<Integer>() {
            @Override
            public void accept(Integer t) {
                System.out.println(t);
            }
        };

        // Using forEach with a Consumer implementation
        numbers.forEach(consumer);
    }
}
