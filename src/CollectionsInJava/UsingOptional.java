package CollectionsInJava;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class UsingOptional {
    public static void main(String[] args) {
        
        List<String> names = Arrays.asList("Sohail Akthar", "Shoaib Akthar", "Faizan Ahmed", "Zaid Vazir");

        // Using Optional to find the first name that contains "Akthar"
        Optional<String> firstAktharName = names.stream()
            .filter(name -> name.contains("Akthar"))
            .findFirst();

        System.out.println("First name containing 'Akthar': " + 
            firstAktharName.orElse("No name found"));


        Optional<String> firstReddyName = names.stream()
        .filter(name -> name.contains("Reddy"))
        .findFirst();

        System.out.println("First name containing 'Reddy': " + 
            firstReddyName.orElse("No name found"));
    }
}
