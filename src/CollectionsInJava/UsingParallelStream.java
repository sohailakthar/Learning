package CollectionsInJava;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.function.Function;

public class UsingParallelStream {
    public static void main(String[] args) {
        final int SIZE = 10000;

        List<Integer> numbers = new ArrayList<>(SIZE);

        Random rand = new Random();
        for(int i=0; i < SIZE; i++) {
            numbers.add(rand.nextInt(100));
        }

        // Function to multiply a number by 2. Passing it to the stream map function
        Function<Integer, Integer> multiplyByTwo = n -> {
            try {
                Thread.sleep(1); // Simulating a time-consuming operation
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return n * 2;
        };


        // Sequential stream to calculate the sum of numbers multiplied by 2
        long startSeq = System.currentTimeMillis();
        int sumSeq = numbers.stream()
                            .map(multiplyByTwo)
                            .reduce(0, Integer::sum);
                    long endSeq = System.currentTimeMillis();

        System.out.println("Sequential Stream Sum: " + sumSeq);
        System.out.println("Time taken by Sequential Stream: " + (endSeq - startSeq) + " ms");

        
        System.out.println("--------------------------------------------------");


        // Parallel stream to calculate the sum of numbers multiplied by 2
        long startPar = System.currentTimeMillis();
        int sumPar = numbers.parallelStream()
                            .map(multiplyByTwo)
                            .reduce(0, Integer::sum);
                            long endPar = System.currentTimeMillis();

        System.out.println("Parallel Stream Sum: " + sumPar);
        System.out.println("Time taken by Parallel Stream: " + (endPar - startPar) + " ms");

    }
}
