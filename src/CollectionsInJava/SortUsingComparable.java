package CollectionsInJava;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// For this, we'll need our user defined type class to implement Comparable interface
// And override the compareTo method
class Student implements Comparable<Student> {
    private int age;
    private String name;

    public Student(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public int compareTo(Student other) {
       // Compare by age
       if(this.age > other.age) {
            return 1;
       } else {
            return -1;
       }
    }

    @Override
    public String toString() {
        return "Student{" +
                "age=" + age +
                ", name='" + name + '\'' +
                '}';
    }
}

public class SortUsingComparable {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        students.add(new Student(20, "Alice"));
        students.add(new Student(22, "Bob"));
        students.add(new Student(21, "Charlie"));
        students.add(new Student(19, "David"));

        // Now, we don't need to pass a comparator to the sort method
        // because our Student class implements Comparable, and has method compareTo defined
        Collections.sort(students);

        for (Student s : students) {
            System.out.println(s.toString());
        }
    }
}
