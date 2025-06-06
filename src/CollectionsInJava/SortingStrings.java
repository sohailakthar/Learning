package CollectionsInJava;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import java.util.Comparator;

class Student {
    private int rollNo;
    private String name;

    public Student(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String toString() {
        return rollNo + " " + name;
    }
}
public class SortingStrings {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(new Student(1, "Sohail"));
        students.add(new Student(2, "Ali"));
        students.add(new Student(3, "Ahmed"));
        students.add(new Student(4, "Zain"));

        Comparator<Student> nameComparator = (s1, s2) -> {
            if(s1.getName().length() > s2.getName().length()) {
                return 1;
            } else {
                return -1;
            }
        };

        System.out.println("Before sorting: " + students.toString());
        Collections.sort(students, nameComparator);
        System.out.println("After sorting: " + students.toString());

        
    }
}
