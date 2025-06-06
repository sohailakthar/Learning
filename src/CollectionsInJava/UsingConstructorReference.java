package CollectionsInJava;

import java.util.Arrays;
import java.util.List;

class Student {
    int age;
    String name;

    public Student() {
    }

    public Student(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + '}';
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
}
public class UsingConstructorReference {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Sohail Akthar", "Shoaib Akthar", "Faizan Ahmed", "Zaid Vazir");

        List<Student> students = names.stream()
        .map(name -> new Student(name))
        .toList();

        System.out.println("Students: " + students);
    }
}
