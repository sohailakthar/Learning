package CollectionsInJava;

import java.util.Arrays;
import java.util.List;

public class UsingMethodReference {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Sohail Akthar", "Shoaib Akthar", "Faizan Ahmed", "Zaid Vazir");

        // Print each name using method reference
        names.forEach(System.out::println);

        // Capitalize each name using method reference
        List<String> capitalNames = names.stream()
                                        .map(String::toUpperCase)
                                        .toList();

        System.out.println("Capitalized Names: " + capitalNames);    
    }
}
